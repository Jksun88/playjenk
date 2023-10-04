import { test, expect } from '@playwright/test';

test('log in from workbud.com', async ({ page, browserName }) => {
  await page.goto('https://www.workbud.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/One platform/i);
  // click the log in link.
  await page.getByRole('link', { name: 'log in' }).click();
  // take a screenshot and save it 
  await page.screenshot({path: 'loginpage-'+browserName+'.png', fullPage: true});
});

