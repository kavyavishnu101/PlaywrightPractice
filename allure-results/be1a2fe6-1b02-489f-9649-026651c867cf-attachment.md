# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> login as wrongemail@gmail.com
- Location: tests\ClientAppPO.spec.js:6:3

# Error details

```
TypeError: LoginPage.goTo is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { users } = require('./credentials');
  3  | const { LoginPage } = require('../pageobjects/LoginPage');
  4  | 
  5  | for (const user of users) {
  6  |   test(`login as ${user.email}`, async ({ page }) => {
  7  | 
  8  | const loginPage = new LoginPage(page);
  9  | 
> 10 | await LoginPage.goTo();
     |                 ^ TypeError: LoginPage.goTo is not a function
  11 | await LoginPage.validLogin(user.email, user.password);
  12 | 
  13 | 
  14 |     //await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  15 |     console.log("Title: " + await page.title());
  16 |     await expect(page).toHaveTitle("Let's Shop");
  17 | 
  18 |     await page.locator('#userEmail').fill(user.email);
  19 |     await page.locator('#userPassword').fill(user.password);
  20 |     await page.locator('#login').click();
  21 | 
  22 | 
  23 |     await page.waitForLoadState('networkidle');
  24 | 
  25 |     await page.locator('.card-body b').first().textContent();
  26 |     await page.locator('.card-body').filter({hasText: 'iphone 13 pro'}).getByRole('button', { name: ' Add To Cart' }).click();
  27 |     await page.locator('[routerlink="/dashboard/cart"]').click();
  28 |     await expect(page.locator('h3:has-text("iphone 13 pro")')).toHaveText('iphone 13 pro');
  29 |     await page.getByRole('button', { name: 'Checkout❯' }).click();
  30 |     await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially("IND");
  31 |     await page.getByRole('button', { name: 'India' }).nth(1).click();
  32 |     await page.locator(".actions a").click();
  33 |     const thankyou = await page.locator('h1.hero-primary').getByText(' Thankyou for the order. ').textContent();
  34 |     console.log("Thank you message: " + thankyou);
  35 | 
  36 |     await page.pause();
  37 | 
  38 | })};
  39 | 
```