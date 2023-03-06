// @ts-check
import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link', async ({page}) => {
  await page.goto('https://playwright.dev');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // Create a locator
  const getStarted = page.locator('aside >> text=Writing Tests');

  // Expect an attribute "to be strictly equal to the value."
  await expect(getStarted).toHaveAttribute('href', '/docs/intr');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
}); 

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});
