# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart1.spec.js >> login using API
- Location: tests\WebAPIPart1.spec.js:5:3

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://rahulshettyacademy.com/client/#/auth/login", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | const { users } = require('./credentials');
  4  | 
  5  |   test(`login using API`, async ({ page }) => {
> 6  |     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
     |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  7  |     console.log("Title: " + await page.title());
  8  |     await expect(page).toHaveTitle("Let's Shop");
  9  | 
  10 |     await page.locator('#userEmail').fill("kavyavishnu@gmail.com");
  11 |     await page.locator('#userPassword').fill("Kavya@123");
  12 |     await page.locator('#login').click();
  13 | 
  14 | 
  15 |     await page.waitForLoadState('networkidle');
  16 | 
  17 |     await page.locator('.card-body b').first().textContent();
  18 |     await page.locator('.card-body').filter({hasText: 'iphone 13 pro'}).getByRole('button', { name: ' Add To Cart' }).click();
  19 |     await page.locator('[routerlink="/dashboard/cart"]').click();
  20 |     await expect(page.locator('h3:has-text("iphone 13 pro")')).toHaveText('iphone 13 pro');
  21 |     await page.getByRole('button', { name: 'Checkout❯' }).click();
  22 |     await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially("IND");
  23 |     await page.getByRole('button', { name: 'India' }).nth(1).click();
  24 |     await page.locator(".actions a").click();
  25 |     const thankyou = await page.locator('h1.hero-primary').getByText(' Thankyou for the order. ').textContent();
  26 |     console.log("Thank you message: " + thankyou);
  27 | 
  28 |     await page.pause();
  29 | 
  30 | });
  31 | 
```