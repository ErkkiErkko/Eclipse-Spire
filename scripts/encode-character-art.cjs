// Lossless format conversion only. All illustration and transparency edits use imagegen.
const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');
const roster = ['hero-cute', 'sentinel', 'wraith', 'raven', 'duelist', 'oracle',
  'reaper', 'seraph', 'witch', 'elite', 'boss0', 'boss1', 'boss2'];

async function main() {
  const [manifestPath, sharpPath, revision = ''] = process.argv.slice(2);
  if (!manifestPath || !sharpPath) throw new Error('Usage: node encode-character-art.cjs MANIFEST SHARP_MODULE_PATH [REVISION]');
  if (revision && !/^[a-z0-9-]+$/.test(revision)) throw new Error('Invalid asset revision');
  const sharp = createRequire(__filename)(path.resolve(sharpPath));
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  const entries = Array.isArray(manifest) ? manifest : manifest.assets;
  if (!Array.isArray(entries)) throw new Error('Expected an asset array');
  const destination = path.resolve(__dirname, '../public/assets/characters');
  await fs.mkdir(destination, { recursive: true });
  for (const entry of entries) {
    if (!roster.includes(entry.id) || typeof entry.path !== 'string') throw new Error('Unknown asset ID or path');
    const meta = await sharp(entry.path).metadata();
    if (!meta.hasAlpha) throw new Error(entry.id + ': no alpha channel');
    const {data, info} = await sharp(entry.path).ensureAlpha().raw().toBuffer({resolveWithObject: true});
    let transparent = 0, visible = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) transparent++;
      if (data[i] > 240) visible++;
    }
    const pixels = info.width * info.height;
    const cornerAlpha = [3, (info.width - 1) * 4 + 3,
      (pixels - info.width) * 4 + 3, (pixels - 1) * 4 + 3].map(i => data[i]);
    // A single alpha quantization step at a canvas corner is visually transparent.
    if (cornerAlpha.some(a => a > 1) || transparent / pixels < .1 || visible / pixels < .15)
      throw new Error(entry.id + ': transparency or silhouette is invalid: ' + JSON.stringify({cornerAlpha,
        transparentPercent:100 * transparent / pixels, visiblePercent:100 * visible / pixels}));
    const output = path.join(destination, entry.id + (revision ? '-' + revision : '') + '.webp');
    await sharp(entry.path).webp({lossless: true, effort: 6}).toFile(output);
    const outputInfo = await sharp(output).metadata();
    if (outputInfo.width !== info.width || outputInfo.height !== info.height || !outputInfo.hasAlpha)
      throw new Error(entry.id + ': lossless encoding changed geometry or alpha');
    const result = await fs.stat(output);
    console.log(JSON.stringify({id:entry.id, width:info.width, height:info.height,
      transparentPercent:Math.round(100 * transparent / pixels), bytes:result.size, output}));
  }
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
