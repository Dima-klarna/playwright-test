import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polavis.de/');
  await page.getByRole('button', { name: 'Alle zulassen' }).click();
  await page.getByLabel('Hauptmenü').getByRole('link', { name: 'Referenzen' }).click();
  await page.getByRole('link', { name: 'POLAVIS Logo' }).click();
});