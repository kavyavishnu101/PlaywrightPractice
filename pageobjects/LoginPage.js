class LoginPage {

constructor(page){

this.page = page; //To use page everywhere inside class
this.signInButton = page.locator('#login');
this.userName = page.locator('#userEmail');
this.password = page.locator('#userPassword');


}

//Method

async goTo(){


    await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
}
async validLogin(email, password){

    await this.userName.fill(email);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');

}

}

module.exports = { LoginPage };



