// Delivery encoding only; no resizing or creative edits. Artwork is produced by imagegen.
const fs = require('node:fs/promises');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function main() {
  const [manifestPath, sharpModule] = process.argv.slice(2);
  if (!manifestPath || !sharpModule) throw new Error('Usage: node encode-card-art.cjs MANIFEST SHARP_MODULE_PATH');
  const sharp = require(path.resolve(sharpModule));
  const root = path.resolve(__dirname, '..');
  const { CARDS } = await import(pathToFileURL(path.join(root, 'lib/game-data.ts')).href);
  const entries = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  if (!Array.isArray(entries)) throw new Error('Expected an array of card art entries');
  const destination = path.join(root, 'public/assets/cards');
  await fs.mkdir(destination, {recursive:true});
  for (const entry of entries) {
    if (!Object.hasOwn(CARDS, entry.id) || typeof entry.path !== 'string') throw new Error('Invalid card ID or asset path');
    const meta = await sharp(entry.path).metadata();
    const ratio = meta.width / meta.height;
    if (ratio < 1.2 || ratio > 1.9 || meta.width < 900 || meta.height < 600) throw new Error(entry.id + ': card artwork must be a high-resolution landscape');
    if (meta.hasAlpha) {
      const stats = await sharp(entry.path).stats();
      if (stats.channels[3].min < 250) throw new Error(entry.id + ': full-bleed card artwork must be opaque');
    }
    const output = path.join(destination, entry.id + '.webp');
    await sharp(entry.path).webp({quality:92,smartSubsample:true,effort:6}).toFile(output);
    const encoded = await sharp(output).metadata();
    if (encoded.width !== meta.width || encoded.height !== meta.height) throw new Error(entry.id + ': encoding changed geometry');
    console.log(JSON.stringify({id:entry.id,width:meta.width,height:meta.height,bytes:(await fs.stat(output)).size,output}));
  }
}
main().catch(error=>{console.error(error.message);process.exitCode=1;});
