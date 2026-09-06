// Lossless delivery encoding only. All creative work and alpha edits use imagegen.
const fs = require('node:fs/promises');
const path = require('node:path');
const {pathToFileURL} = require('node:url');

async function main() {
  const [manifestPath, sharpPath] = process.argv.slice(2);
  if (!manifestPath || !sharpPath) throw new Error('Usage: node encode-relic-art.cjs MANIFEST SHARP_MODULE');
  const sharp = require(path.resolve(sharpPath));
  const root = path.resolve(__dirname, '..');
  const {RELICS} = await import(pathToFileURL(path.join(root, 'lib/game-data.ts')).href);
  const entries = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  if (!Array.isArray(entries)) throw new Error('Expected an array of relic art entries');
  const destination = path.join(root, 'public/assets/relics');
  await fs.mkdir(destination, {recursive:true});
  for (const entry of entries) {
    if (!Object.hasOwn(RELICS, entry.id) || typeof entry.path !== 'string') throw new Error('Invalid relic or path');
    const meta = await sharp(entry.path).metadata();
    const ratio = meta.width / meta.height;
    if (ratio < .8 || ratio > 1.2 || meta.width < 512 || meta.height < 512 || !meta.hasAlpha) throw new Error(entry.id + ': near-square transparent image required');
    const {data, info} = await sharp(entry.path).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const pixels = info.width * info.height;
    let clear = 0, visible = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] === 0) clear++;
      if (data[i] > 240) visible++;
    }
    const corners = [3, (info.width-1)*4+3, (pixels-info.width)*4+3, (pixels-1)*4+3].map(i=>data[i]);
    if (corners.some(a=>a>1) || clear/pixels<.1 || visible/pixels<.08) throw new Error(entry.id + ': alpha or object silhouette is invalid');
    const output = path.join(destination, entry.id+'.webp');
    await sharp(entry.path).webp({lossless:true,effort:6}).toFile(output);
    const result = await sharp(output).metadata();
    if (result.width !== meta.width || result.height !== meta.height || !result.hasAlpha) throw new Error(entry.id + ': encoding changed geometry or alpha');
    console.log(JSON.stringify({id:entry.id,width:meta.width,height:meta.height,transparentPercent:Math.round(clear/pixels*100),bytes:(await fs.stat(output)).size,output}));
  }
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
