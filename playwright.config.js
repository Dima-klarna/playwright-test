module.exports = {
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
};
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,   // показываем браузер
    launchOptions: {
      slowMo: 2000      // задержка 0.5 секунды между действиями
    },
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]], // отчёт будет сохраняться, но не открываться автоматически
});
