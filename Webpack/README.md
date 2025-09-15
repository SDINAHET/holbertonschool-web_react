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

