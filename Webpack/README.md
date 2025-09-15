Task0

1) task_0/package.json

```bash
{
  "name": "task_0",
  "version": "1.0.0",
  "private": true,
  "description": "Holberton Webpack task 0",
  "scripts": {
    "dev": "webpack --mode=development",
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "jquery": "^3.7.1"
  },
  "devDependencies": {
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
  }
}
```

1) task_0/src/index.js

```bash
import $ from 'jquery';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<p>Copyright - Holberton School</p>');

1) task_0/dist/index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Holberton Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <!-- Webpack will generate dist/main.js from src/index.js -->
    <script src="main.js"></script>
  </body>
</html>
```


1) Ouvrir un terminal dans Webpack/task_0

Assure-toi que tu es dans le dossier correct :
```bash
cd Webpack/task_0
```

2) Installer les dépendances

Si ce n’est pas déjà fait :

```bash
npm install
```

Cela installera :

webpack et webpack-cli → devDependencies

jquery → dependencies

3) Lancer Webpack pour générer dist/main.js

En développement :

```bash
npx webpack --mode development
```

Ou en production :
```bash
npx webpack --mode production
```

⚡ Le main.js sera créé automatiquement dans le dossier dist/.

4) Ouvrir le projet dans le navigateur

Ouvre dist/index.html directement :

```bash
xdg-open dist/index.html
```

(Sous Windows : double-clique sur le fichier dist/index.html.)

5) Vérifier le résultat

Trois paragraphes s’affichent sur la page.

La console ne doit afficher aucune erreur.

Un seul script est chargé : main.js.

Si tu veux éviter de retaper la commande à chaque fois, tu peux ajouter dans package.json :
```bash
"scripts": {
  "start": "webpack --mode development"
}
```

Puis lancer :

```bash
npm run start
```

terminal de commande
```bash
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack# ./create_empty_files.sh
✓ task_1/js/dashboard_main.js
✓ task_1/package.json
✓ task_1/webpack.config.js
✓ task_1/public/index.html
✓ task_2/package.json
✓ task_2/css/main.css
✓ task_2/webpack.config.js
✓ task_2/js/dashboard_main.js
✓ task_2/public/index.html
✓ task_3/modules/body/body.css
✓ task_3/modules/body/body.js
✓ task_3/modules/footer/footer.css
✓ task_3/modules/footer/footer.js
✓ task_3/modules/header/header.css
✓ task_3/modules/header/header.js
✓ task_3/package.json
✓ task_3/webpack.config.js
Tous les fichiers vides ont été créés.
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack# cd task_0
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_0# np
m install

added 120 packages, and audited 121 packages in 16s

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_0# npx webpack --mode development
asset main.js 319 KiB [emitted] (name: main)
runtime modules 937 bytes 4 modules
cacheable modules 279 KiB
  ./src/index.js 190 bytes [built] [code generated]
  ./node_modules/jquery/dist/jquery.js 279 KiB [built] [code generated]
webpack 5.101.3 compiled successfully in 389 ms
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_0# xdg-open dist/index.html
[11055:11055:0915/155046.555758:ERROR:zygote_host_impl_linux.cc(101)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_0#
```



Task 1:

```bash
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1# ls
js  package.json  public  webpack.config.js
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1# npm init -y
Wrote to /mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1/package.json:

{
  "name": "task_1",
  "version": "1.0.0",
  "private": true,
  "description": "Holberton Webpack task 1",
  "scripts": {
    "build": "webpack --config webpack.config.js"
  },
  "dependencies": {
    "jquery": "^3.7.1",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "webpack": "^5.94.0",
    "webpack-cli": "^5.1.4"
  },
  "main": "webpack.config.js",
  "keywords": [],
  "author": "",
  "license": "ISC"
}



root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1# npm install

added 121 packages, and audited 122 packages in 1m

18 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1# npm run build

> task_1@1.0.0 build
> webpack --config webpack.config.js

asset bundle.js 88.4 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 884 bytes 4 modules
modules by path ./node_modules/lodash/*.js 13.9 KiB
  ./node_modules/lodash/debounce.js 5.96 KiB [built] [code generated]
  ./node_modules/lodash/isObject.js 733 bytes [built] [code generated]
  ./node_modules/lodash/now.js 520 bytes [built] [code generated]
  ./node_modules/lodash/toNumber.js 1.48 KiB [built] [code generated]
  ./node_modules/lodash/_root.js 300 bytes [built] [code generated]
  ./node_modules/lodash/_baseTrim.js 444 bytes [built] [code generated]
  ./node_modules/lodash/isSymbol.js 682 bytes [built] [code generated]
  ./node_modules/lodash/_freeGlobal.js 173 bytes [built] [code generated]
  ./node_modules/lodash/_trimmedEndIndex.js 515 bytes [built] [code generated]
  ./node_modules/lodash/_baseGetTag.js 792 bytes [built] [code generated]
  + 4 modules
./js/dashboard_main.js 708 bytes [built] [code generated]
./node_modules/jquery/dist/jquery.js 279 KiB [built] [code generated]
webpack 5.101.3 compiled successfully in 5913 ms
root@UID7E:/mnt/d/Users/steph/Documents/5ème_trimestre/holbertonschool-web_react/Webpack/task_1#
```

