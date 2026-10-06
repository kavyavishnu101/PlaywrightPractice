# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart1.spec.js >> login using API
- Location: tests\WebAPIPart1.spec.js:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - generic: Ecom
      - generic [ref=e9]:
        - link " dummywebsite@rahulshettyacademy.com" [ref=e11] [cursor=pointer]:
          - /url: emailto:dummywebsite@rahulshettyacademy.com
          - generic [ref=e12]: 
          - text: dummywebsite@rahulshettyacademy.com
        - generic [ref=e13]:
          - link "" [ref=e14] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e16] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e18] [cursor=pointer]:
            - /url: "#"
          - link "" [ref=e20] [cursor=pointer]:
            - /url: "#"
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "We Make Your Shopping Simple" [level=3]
      - heading [level=1] [ref=e24]:
        - text: Practice Website for
        - emphasis [ref=e25]: Rahul Shetty Academy
        - text: Students
      - link "Register" [ref=e26] [cursor=pointer]:
        - /url: "#/auth/register"
    - generic [ref=e28]:
      - paragraph [ref=e29]:
        - generic [ref=e30]: Register to sign in with your personal account
      - generic [ref=e31]:
        - heading "Log in" [level=1] [ref=e32]
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Email
            - textbox "email@example.com" [ref=e36]: kavyavishnu@gmail.com
          - generic [ref=e37]:
            - generic [ref=e38]: Password
            - textbox "enter your passsword" [ref=e39]: Kavya@123
          - button "Login" [active] [ref=e40] [cursor=pointer]
        - link "Forgot password?" [ref=e41] [cursor=pointer]:
          - /url: "#/auth/password-new"
        - paragraph [ref=e42] [cursor=pointer]: Don't have an account? Register here
  - generic [ref=e43]:
    - heading "Why People Choose Us?" [level=1] [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]: 
        - generic [ref=e51]:
          - heading "3546540" [level=1]
          - paragraph [ref=e52]: Successfull Orders
      - generic [ref=e53]:
        - generic [ref=e54]: 
        - generic [ref=e56]:
          - heading "37653" [level=1]
          - paragraph [ref=e57]: Customers
      - generic [ref=e58]:
        - generic [ref=e59]: 
        - generic [ref=e61]:
          - heading "3243" [level=1]
          - paragraph [ref=e62]: Sellers
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: 
        - generic [ref=e67]:
          - heading "4500+" [level=1]
          - paragraph [ref=e68]: Daily Orders
      - generic [ref=e69]:
        - generic [ref=e70]: 
        - generic [ref=e72]:
          - heading "500+" [level=1]
          - paragraph [ref=e73]: Daily New Customer Joining
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | //const { users } = require('./credentials');
  4  | 
  5  |   test('login using API', async ({ page }) => {
  6  |     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  7  |     console.log("Title: " + await page.title());
  8  |     await expect(page).toHaveTitle("Let's Shop");
  9  | 
  10 |     await page.locator('#userEmail').fill("kavyavishnu@gmail.com");
  11 |     await page.locator('#userPassword').fill("Kavya@123");
  12 |     await page.locator('#login').click();
  13 | 
  14 | 
> 15 |     await page.waitForLoadState('networkidle');
     |                ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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