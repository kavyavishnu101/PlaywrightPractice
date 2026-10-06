//To add all the objects in one single file.
const{DashboardPage} = require('./DashboardPage');
const {LoginPage} = require('./LoginPage');


class POManager{

    constructor(page){

        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboadPage = new DashboardPage(this.page);
    }

    get LoginPage(){
        return this.loginPage;
    }

    get DashboardPage(){

        return dashboadPage;
    }
}

module.exports = {POManager};