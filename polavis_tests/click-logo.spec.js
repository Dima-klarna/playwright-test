const { test, expect } = require('@playwright/test');

test('ClickLogo', async ({ page }) =>
{
        await page.goto('https://polavis.de/');

                // Закрыть cookie-баннер, если он есть
  const acceptAllButton = page.locator('button:has-text("Alle zulassen")');
 	 if (await acceptAllButton.isVisible()) {
   	 await acceptAllButton.click();
  }

         // нажимаем "Referenzen"
  	await page.click('text=Referenzen');
 	 await expect(page).toHaveURL(/.*referenzen/);

  // проверяем, что логотип виден
  const logo = page.locator('img.fusion-standard-logo');
 	 await expect(logo).toBeVisible();

  // кликаем по логотипу
 	 await logo.click();
  	await expect(page).toHaveURL(/^https:\/\/polavis\.de\/$/);
});



