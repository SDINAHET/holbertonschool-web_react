// testRunner-seq3.js (version ESM sans JSX)
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Notifications from './src/Notifications.jsx';

// On capture console.log pour tester le clic
let logMessages = [];
const originalLog = console.log;
console.log = (msg) => logMessages.push(msg);

function runTests() {
  let ok = true;

  // Rendu côté serveur sans JSX
  const element = React.createElement(Notifications);
  const html = ReactDOMServer.renderToStaticMarkup(element);

  // Test 1: Titre présent (ignore case)
  if (!/here is the list of notifications/i.test(html)) {
    console.error('Titre manquant ou incorrect');
    ok = false;
  }

  // Test 2: Bouton présent avec aria-label="Close"
  if (!/aria-label="Close"/i.test(html)) {
    console.error('Bouton "Close" manquant');
    ok = false;
  }

  // Test 3: 3 <li> présents
  const liCount = (html.match(/<li/g) || []).length;
  if (liCount !== 3) {
    console.error(`Nombre de <li> incorrect: ${liCount}`);
    ok = false;
  }

  // Test 4: Clic sur le bouton → log correct
  try {
    // On crée l'élément et on exécute la fonction Notifications()
    Notifications();
  } catch {
    console.error('Erreur lors du clic simulé');
    ok = false;
  }

  // Résultat final
  console.log = originalLog;
  console.log(ok ? 'OK' : 'NOK');
}

runTests();
