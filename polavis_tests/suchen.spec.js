import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polavis.de/');
  await page.getByRole('button', { name: 'Alle zulassen' }).click();
  await page.getByRole('button', { name: 'Suche' }).click();
  await page.getByRole('searchbox', { name: 'Suchen...' }).click();
  await page.getByRole('searchbox', { name: 'Suchen...' }).fill('termin');
  await page.getByRole('link', { name: 'Online-Terminbuchung Seite' }).click();
});