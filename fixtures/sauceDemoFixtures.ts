import {test as base,expect} from '@playwright/test';

import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
import {ProductDetailsPage} from '../pages/ProductDetailsPage';

//give the type of fixture to the test object

type sauceDemoFixtures = {
    loginPage : LoginPage;
    inventoryPage : InventoryPage;
    productDetailsPage : ProductDetailsPage;
    userdetails : loginData;
};

type loginData = {
    username : string;
    password : string;
}

// extend the base test object with our custom fixtures

export let test =base.extend<sauceDemoFixtures>({
//loginPage fixture - it will create loginPage object and pass it to the test 
loginPage : async({page},use)=>{
let loginPage = new LoginPage(page);
await use(loginPage);
},

//inventoryPage fixture - it will use loginPage fixture to login before creating inventoryPage object
inventoryPage : async({page,loginPage},use)=>{
let inventoryPage = new InventoryPage(page);
await loginPage.navigateToLoginPage();
await loginPage.login('standard_user','secret_sauce');
await use(inventoryPage);

},

//productDetailsPage fixture - it will use inventoryPage fixture to open product details page before creating productDetailsPage object
productDetailsPage : async({page},use)=>{
    let productDetailsPage = new ProductDetailsPage(page);
    await use(productDetailsPage);
},

userdetails : async({},use)=>{
    let userdetails = {
        username : 'standard_user',
        password : 'secret_sauce'
    }
    await use(userdetails);

}

})

export {expect};


