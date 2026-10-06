# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart1.spec.js >> login using API
- Location: tests\WebAPIPart1.spec.js:25:3

# Error details

```
Error: apiRequestContext.post: connect ETIMEDOUT 13.201.9.53:443
Call log:
  - → POST https://rahulshettyacademy.com/api/ecom/auth/login
    - user-agent: Playwright/1.63.0 (x64; windows 10.0) node/24.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 64

```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | 
  3  | //const { users } = require('./credentials');
  4  | //create javascript object to store variable
  5  | const payLoad = {userEmail: 'kavyavishnu@gmail.com',
  6  |       userPassword: 'Kavya@123'}
  7  | 
  8  | test.beforeAll(async () => {
  9  |   const apiContext = await request.newContext();
> 10 |   const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
     |                                          ^ Error: apiRequestContext.post: connect ETIMEDOUT 13.201.9.53:443
  11 |     {
  12 |         data: payLoad
  13 |     })
  14 | 
  15 |   expect(loginResponse.ok()).toBeTruthy();
  16 |   const loginResponseJSON = await loginResponse.json();
  17 |   const token = loginResponseJSON.token;
  18 |   console.log(token);
  19 |   
  20 | 
  21 | });
  22 | 
  23 | 
  24 | 
  25 |   test('login using API', async ({ page }) => {
  26 |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  27 |     console.log("Title: " + await page.title());
  28 |     await expect(page).toHaveTitle("Let's Shop");
  29 | 
  30 |     await page.locator('#userEmail').fill("kavyavishnu@gmail.com");
  31 |     await page.locator('#userPassword').fill("Kavya@123");
  32 |     await page.locator('#login').click();
  33 | 
  34 | 
  35 |     await page.waitForLoadState('networkidle');
  36 | 
  37 |     await page.locator('.card-body b').first().textContent();
  38 |     await page.locator('.card-body').filter({hasText: 'iphone 13 pro'}).getByRole('button', { name: ' Add To Cart' }).click();
  39 |     await page.locator('[routerlink="/dashboard/cart"]').click();
  40 |     await expect(page.locator('h3:has-text("iphone 13 pro")')).toHaveText('iphone 13 pro');
  41 |     await page.getByRole('button', { name: 'Checkout❯' }).click();
  42 |     await page.getByRole('textbox', { name: 'Select Country' }).pressSequentially("IND");
  43 |     await page.getByRole('button', { name: 'India' }).nth(1).click();
  44 |     await page.locator(".actions a").click();
  45 |     const thankyou = await page.locator('h1.hero-primary').getByText(' Thankyou for the order. ').textContent();
  46 |     console.log("Thank you message: " + thankyou);
  47 | 
  48 |     await page.pause();
  49 | 
  50 | });
  51 | 
```