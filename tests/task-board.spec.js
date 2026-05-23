const { test, expect } = require('@playwright/test');
const testCases = require('../test-data/tasks.json');

const BASE_URL = 'https://animated-gingersnap-8cf7f2.netlify.app/';

async function login(page) {
  await page.goto(BASE_URL);

  await page.locator('input[type="text"]').fill('admin');
  await page.locator('input[type="password"]').fill('password123');

  await page.getByRole('button', { name: 'Sign in' }).click();
}
async function navigateToApp(page, appName) {
  await page.getByRole('button', { name: new RegExp(appName) }).first().click();
}

test.describe('Data-driven task board tests', () => {

  for (const testCase of testCases) {

    test(`Verify ${testCase.task}`, async ({ page }) => {

      await login(page);

      await navigateToApp(page, testCase.app);

      const taskCard = page.locator('div').filter({
        hasText: testCase.task
      }).first();

      await expect(taskCard).toContainText(testCase.task);

      await expect(taskCard).toContainText(testCase.column);

      for (const tag of testCase.tags) {
        await expect(taskCard).toContainText(tag);
      }

    });

  }

});