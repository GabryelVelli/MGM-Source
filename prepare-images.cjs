const sharp = require('C:/Users/Admin/AppData/Local/npm-cache/_npx/2778af9cee32ff87/node_modules/sharp');
const fs = require('node:fs');

(async () => {
  let html = fs.readFileSync('index.html', 'utf8');
  for (const name of ['hero-v3', 'phones-v2', 'games-v2', 'laptop-v2', 'tablets-v2', 'repair-v2']) {
    const file = `assets/${name}.webp`;
    const info = await sharp(`assets/sources/${name}.png`)
      .resize({ width: name === 'hero-v3' ? 1536 : 1200, withoutEnlargement: true })
      .webp({ quality: name === 'hero-v3' ? 88 : 86 }).toFile(file);
    html = html.replace(/<img\b[^>]*>/g, tag => tag.includes(`src="${file}"`)
      ? tag.replace(/width="\d+" height="\d+"/, `width="${info.width}" height="${info.height}"`)
      : tag);
    console.log(`${file}: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB`);
  }
  fs.writeFileSync('index.html', html);
})().catch(error => { console.error(error); process.exitCode = 1; });
