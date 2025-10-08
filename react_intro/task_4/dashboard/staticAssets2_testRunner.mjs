// task_4/dashboard/staticAssets2_testRunner.mjs
// ESM-compatible test runner: imprime "OK" si tous les assets sont corrects, sinon "NOK"

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = __dirname;
const SRC = path.join(ROOT, 'src');
const ASSETS = path.join(SRC, 'assets');

// 👉 adapte ce nom si la consigne attend close-icon.png au lieu de close-button.png
const expectedClosePng = 'close-button.png'; // ou 'close-icon.png'

const files = {
  indexHtml: path.join(ROOT, 'index.html'),
  appJsx: ['App.jsx', 'App.js'].map(f => path.join(SRC, f)).find(f => fs.existsSync(f)),
  notifJsx: ['Notifications.jsx', 'Notifications.js'].map(f => path.join(SRC, f)).find(f => fs.existsSync(f)),
  favicon: path.join(ASSETS, 'favicon.ico'),
  logo: path.join(ASSETS, 'holberton-logo.jpg'),
  closePng: path.join(ASSETS, expectedClosePng),
};

function fail(msg) {
  console.log('NOK');
  // messages détaillés sur stderr (pratique en local)
  console.error(msg);
  process.exit(0); // le checker lit stdout uniquement; code 0 pour ne pas casser la CI
}

function pass() {
  console.log('OK');
  process.exit(0);
}

// 1) Présence des fichiers clés
if (!fs.existsSync(files.indexHtml)) fail('index.html introuvable');
if (!files.appJsx || !fs.existsSync(files.appJsx)) fail('App.jsx/App.js introuvable');
if (!files.notifJsx || !fs.existsSync(files.notifJsx)) fail('Notifications.jsx/Notifications.js introuvable');
if (!fs.existsSync(files.favicon)) fail('src/assets/favicon.ico introuvable');
if (!fs.existsSync(files.logo)) fail('src/assets/holberton-logo.jpg introuvable');
if (!fs.existsSync(files.closePng)) fail(`src/assets/${expectedClosePng} introuvable`);

// 2) Favicon dans index.html
const indexHtml = fs.readFileSync(files.indexHtml, 'utf8');
// Autorise: ./src/assets/favicon.ico, src/assets/favicon.ico, ./favicon.ico, /favicon.ico, %PUBLIC_URL%/favicon.ico
const faviconHrefRe = /<link\s+rel=["']icon["'][^>]*href=["'](?:\.?\/src\/assets\/favicon\.ico|\.?\/favicon\.ico|%PUBLIC_URL%\/favicon\.ico)["'][^>]*>/i;
if (!faviconHrefRe.test(indexHtml)) {
  fail('Balise <link rel="icon" href="..."> manquante ou chemin inattendu dans index.html');
}

// 3) App.(js|jsx) — import du logo + alt exact
const appSrc = fs.readFileSync(files.appJsx, 'utf8');
const appImportLogo = /import\s+\w+\s+from\s+['"]\.\/assets\/holberton-logo\.jpg['"]\s*;?/;
if (!appImportLogo.test(appSrc)) fail('App.jsx doit importer "./assets/holberton-logo.jpg"');
const appImgAlt = /<img[^>]*alt=["']Holberton logo["'][^>]*>/i;
if (!appImgAlt.test(appSrc)) fail('App.jsx doit rendre <img ... alt="Holberton logo">');

// 4) Notifications.(js|jsx) — import du close png + alt="close"
const notifSrc = fs.readFileSync(files.notifJsx, 'utf8');
const notifImportClose = new RegExp(
  `import\\s+\\w+\\s+from\\s+['"]\\.\\/assets\\/${expectedClosePng.replace('.', '\\.')}['"]\\s*;?`
);
if (!notifImportClose.test(notifSrc)) {
  fail(`Notifications.jsx doit importer "./assets/${expectedClosePng}"`);
}
const notifImgAlt = /<img[^>]*alt=["']close["'][^>]*>/i;
if (!notifImgAlt.test(notifSrc)) fail('Notifications.jsx doit rendre <img ... alt="close">');

pass();
