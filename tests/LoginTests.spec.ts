import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'

test.describe('Saunce Demo Login Tests', ()=> {
    test('Login with valid credentails', async ({page,browserName})=>{
    const loginPage = new LoginPage(page);  // its going call constructor of LoginPage class and pass page object to it
    const inventoryPage = new InventoryPage(page);

    console.log('Test is running in the browser: '+browserName);

    await loginPage.navigateToLoginPage();

    await loginPage.login('standard_user','secret_sauce');

    await inventoryPage.verifyInventoryPageIsDisplayed();
        
    })

test('Login with invalid credentials', async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login('invalid_user','invalid_password');

    await loginPage.verifyLoginError('Epic sadface: Username and password do not match any user in this service')


})

test('Login without entering username',async ({page})=>{
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage()

    await loginPage.enterPassword('secret_sauce')
    await loginPage.clickLoginButton();

    await loginPage.verifyLoginError('Username is required')

})

test('Login without entering password', async ({page})=>{

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.enterUserName('standard_user')
    await loginPage.clickLoginButton();

    await loginPage.verifyLoginError('Password is required')
})

test('Logout from SauceDemo', async ({page})=>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user','secret_sauce');

    await inventoryPage.logout();

    await expect(page).toHaveURL('https://www.saucedemo.com/');

    await loginPage.verifyLoginPageIsDisplayed();


});

});