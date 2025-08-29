const { test, expect } = require('@playwright/test');

test('click "Get Started" opens docs page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text=Get Started');
  await expect(page).toHaveURL(/.*docs/);
});
