const { test, expect } = require('@playwright/test');

const loginCases = [
  { email: 'kavyavishnu@gmail.com', password: 'Kavya@123', expectLogin: true },
  { email: 'kavyavishnu@gmail.com', password: 'wrongpassword', expectLogin: false },
  { email: 'another@example.com', password: 'Kavya@123', expectLogin: false },
];

test.describe('Login matrix test', () => {
  for (const [index, data] of loginCases.entries()) {
    test(`case ${index}: ${data.email} / ${data.password}`, async ({ page }) => {
      await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
      await page.locator('#userEmail').fill(data.email);
      await page.locator('#userPassword').fill(data.password);
      await page.locator('#login').click();

      await page.waitForLoadState('networkidle');

      if (data.expectLogin) {
        await expect(page.locator('#toast-container')).toContainText('Login Successfully');
      } else {
        await expect(page.getByRole('alert', { name: 'Incorrect email or password.' })).toBeVisible({ timeout: 5000 });
      }
    });
  }
});
