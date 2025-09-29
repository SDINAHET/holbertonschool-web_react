// e2e-tests/layout.spec.js
import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const DASHBOARD_URL = (() => {
  try {
    const p = path.join(process.cwd(), 'holberton-dashboard.txt');
    return fs.readFileSync(p, 'utf8').trim();
  } catch {
    // fallback utile si le fichier n'est pas là
    return 'https://sdinahet.github.io/holbertonschool-web_react/';
  }
})();

test('layout on GH Pages', async ({ page }) => {
  await page.goto(DASHBOARD_URL, { waitUntil: 'networkidle' });

  // 3 notifications
  const listItems = page.locator('.Notifications li, .notifications li');
  await expect(listItems).toHaveCount(3);

  // couleurs: 1ère bleue, 2 & 3 rouges
  const c0 = await listItems.nth(0).evaluate(el => getComputedStyle(el).color);
  const c1 = await listItems.nth(1).evaluate(el => getComputedStyle(el).color);
  const c2 = await listItems.nth(2).evaluate(el => getComputedStyle(el).color);
  expect(c0).toBe('rgb(0, 0, 255)'); // blue
  expect([c1, c2]).toEqual(['rgb(255, 0, 0)', 'rgb(255, 0, 0)']); // red exact

  // formulaire présent
  await expect(page.getByLabel(/email/i)).toBeVisible();
  await expect(page.getByLabel(/password/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /^ok$/i })).toBeVisible();

  // footer texte exact (année courante)
  const year = new Date().getFullYear().toString();
  await expect(page.locator('.App-footer')).toContainText(`Copyright ${year} - Holberton School`);
});

test('assets load (favicon, logo, close image)', async ({ page, request }) => {
  await page.goto(DASHBOARD_URL, { waitUntil: 'networkidle' });

  // favicon: lien relatif + HTTP 200
  const icon = page.locator('link[rel="icon"]');
  await expect(icon).toHaveAttribute('href', 'favicon.ico');
  const iconUrl = new URL('favicon.ico', DASHBOARD_URL).toString();
  const iconResp = await request.get(iconUrl);
  expect(iconResp.status()).toBe(200);

  // logo visible et chargé
  const logo = page.locator('img[alt="holberton logo"]');
  await expect(logo).toBeVisible();
  await expect(
    await logo.evaluate(img => img.complete && img.naturalWidth > 0)
  ).toBeTruthy();

  // image du bouton close visible et chargée
  const closeImg = page.locator('img[alt="close"]');
  await expect(closeImg).toBeVisible();
  await expect(
    await closeImg.evaluate(img => img.complete && img.naturalWidth > 0)
  ).toBeTruthy();
});
