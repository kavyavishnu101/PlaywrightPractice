const { test, expect } = require('@playwright/test');
const { users } = require('./credentials');

for (const user of users) {
  test(`login as ${user.email}`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    console.log("Title: " + await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    await page.locator('#userEmail').fill(user.email);
    await page.locator('#userPassword').fill(user.password);
    await page.locator('#login').click();


    await page.waitForLoadState('networkidle');

    await page.locator('.card-body b').first().textContent();
    await page.locator('.card-body').filter({hasText: 'iphone 13 pro'}).getByRole('button', { name: ' Add To Cart' }).click();
    await page.locator('[routerlink="/dashboard/cart"]').click();
    await expect(page.locator('h3:has-text("iphone 13 pro")')).toHaveText('iphone 13 pro');
    await page.getByRole('button', { name: 'Checkout❯' }).click();
    await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially("IND");
    await page.getByRole('button', { name: 'India' }).nth(1).click();
    await page.locator(".actions a").click();
    const thankyou = await page.locator('h1.hero-primary').getByText(' Thankyou for the order. ').textContent();
    console.log("Thank you message: " + thankyou);

    await page.pause();

})};
