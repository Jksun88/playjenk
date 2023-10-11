import { test, expect } from '@playwright/test';

test('test - login page', async ({ page }) => {
  await page.goto('http://heinsenberg-inc.workbud.local/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('walterwhite@mailnatorcom');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').fill('walterwhite@mailnator.com');
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('2018@2019');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').press('ArrowLeft');
  await page.getByPlaceholder('Username').fill('walterwhite@mailinator.com');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('http://heinsenberg-inc.workbud.local/me/timeline');
});