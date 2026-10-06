class APIUtils{

//constructor

constructor (apiContext, loginPayload){
this.apiContext = apiContext;
this.loginPayload = loginPayload;

}

    //Method
    async getToken()
{

    const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
    {
        data: payLoad
    })

  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJSON = await loginResponse.json();
    token = loginResponseJSON.token;
  console.log(token);
  return token;
}

async createOrder(){

    const orderResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: orderPayload,
            headers: {
                'Authorization': this.getToken(),
                'Content-Type' : 'application/json'
            }
        }
    )
    
    const orderResponseJSON = await orderResponse.json();
    orderId = orderResponseJSON.orders[0];
}

}

module.exports = {APIUtils};