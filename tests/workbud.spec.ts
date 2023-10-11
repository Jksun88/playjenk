import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { execPath } from 'process';

test('log in from workbud.io', async ({ page, browserName }) => {
  await page.goto('https://heinsenberg-inc.workbud.io/auth/login');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Workbud/i);
  // click the log in link.
  await page.getByRole('link', { name: 'log in' }).click();
  // take a screenshot and save it 
  // await expect(page).toHaveTitle(/login/i);
  await page.screenshot({path: 'loginpage-'+browserName+'.png', fullPage: true});
});

test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
    await page.goto('https://www.workbud.com/');
  
    const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a'])
        .analyze();
  
    expect(accessibilityScanResults.violations).toEqual([]);
  });

