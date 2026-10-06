const { test, expect, request } = require('@playwright/test');
const { json } = require('stream/consumers');
const { APIUtils} = require('../utils/APIUtils');

//const { users } = require('./credentials');
//create javascript object to store variable
const payLoad = {userEmail: 'kavyavishnu@gmail.com',
      userPassword: 'Kavya@123'}
let token; //to access everywhere

const orderPayload = {orders: 
  [{country: "India", productOrderedId: "6960eae1c941646b7a8b3ed3"}]}

test.beforeAll(async () => {
    //Login API
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, payLoad);
  apiUtils.createOrder(orderPayload);

  //moving code to utils/APIUtils
  /*const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
    {
        data: payLoad
    })

  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJSON = await loginResponse.json();
    token = loginResponseJSON.token;
  console.log(token); */

  //Order API

const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
    {
        data: orderPayload,
        headers: {
            'Authorization': token,
            'Content-Type' : 'application/json'
        }
    }
)

const orderResponseJSON = await orderResponse.json();

});

  test('place the order', async ({ page }) => {

    const apiutils = new APIUtils(apiContext);
    const orderId = createOrder(orderPayload);
    //to add token in local storage
    await page.addInitScript(value =>{

        window.localStorage.setItem('token', value);
    }, token);
    //await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    //console.log("Title: " + await page.title());
    //await expect(page).toHaveTitle("Let's Shop");

    //await page.locator('#userEmail').fill("kavyavishnu@gmail.com");
    //await page.locator('#userPassword').fill("Kavya@123");
    //await page.locator('#login').click();


   // await page.waitForLoadState('networkidle');
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
    //order APi will work from here
   /* await page.locator('.card-body b').first().textContent();
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
    */

});
