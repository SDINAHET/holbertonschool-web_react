import { test, expect } from '@playwright/test';

test('layout on GH Pages', async ({ page }) => {
  await page.goto('https://sdinahet.github.io/holbertonschool-web_react/');

  // Notifications : 3 items
  const listItems = page.locator('.Notifications li');
  await expect(listItems).toHaveCount(3);

  // Couleurs attendues : 1 bleu, 2 rouges
  const c0 = await listItems.nth(0).evaluate((el) => getComputedStyle(el).color);
  const c1 = await listItems.nth(1).evaluate((el) => getComputedStyle(el).color);
  const c2 = await listItems.nth(2).evaluate((el) => getComputedStyle(el).color);
  expect(c0).toBe('rgb(0, 0, 255)');          // blue
  expect([c1, c2]).toEqual(['rgb(255, 0, 0)', 'rgb(255, 0, 0)']); // red

  // Formulaire présent
  await expect(page.getByLabel(/email/i)).toBeVisible();
  await expect(page.getByLabel(/password/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /^ok$/i })).toBeVisible();

  // Images visibles
  await expect(page.getByRole('img', { name: /holberton logo/i })).toBeVisible();
  await expect(page.getByRole('img', { name: /close/i })).toBeVisible();

  // Footer exact
  await expect(page.locator('.App-footer')).toContainText(/Copyright \d{4} - Holberton School/);
});
