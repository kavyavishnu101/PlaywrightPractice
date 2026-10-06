# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> login as wrongemail@gmail.com
- Location: tests\ClientAppPO.spec.js:6:3

# Error details

```
TypeError: this.page.goTo is not a function
```

# Test source

```ts
  1  | class LoginPage {
  2  | 
  3  | constructor(page){
  4  | 
  5  | this.page = page; //To use page everywhere inside class
  6  | this.signInButton = page.locator('#login');
  7  | this.userName = page.locator('#userEmail');
  8  | this.password = page.locator('#userPassword');
  9  | 
  10 | }
  11 | 
  12 | //Method
  13 | 
  14 | async goTo(){
  15 | 
  16 | 
> 17 |     await this.page.goTo('https://rahulshettyacademy.com/client/#/auth/login');
     |                     ^ TypeError: this.page.goTo is not a function
  18 | }
  19 | async validLogin(email, password){
  20 | 
  21 |     
  22 |     await this.userName.fill(email);
  23 |     await this.password.fill(password);
  24 |     await this.signInButton.click();
  25 | 
  26 | }
  27 | 
  28 | }
  29 | 
  30 | module.exports = { LoginPage };
  31 | 
  32 | 
  33 | 
  34 | 
```