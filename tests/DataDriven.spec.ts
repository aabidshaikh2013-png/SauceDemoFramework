import {test,expect} from '@playwright/test'

let products = ['Sauce Labs Backpack','Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)']

let loginData = [
        ['standard_user','secret_sauce'],
        ['locked_out_user','secret_sauce'],
        ['problem_user','secret_sauce'],
        ['performance_glitch_user','secret_sauce'],
        ['error_user','secret_sauce'],
        ['visual_user','secret_sauce']
    ]

 //test data
    let username = 'standard_user'
    let password = 'secret_sauce'


// test('Data driven test',async ({page})=>{

//     // //test data
//     // let username = 'standard_user'
//     // let password = 'secret_sauce'

//     //array data
//     //let products = ['Sauce Labs Backpack','Sauce Labs Bike Light','Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)']

//     //locator
//     let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginbtnLocator = page.locator('#login-button')

//     //actions
//     await page.goto('https://www.saucedemo.com/')
//     await usernameLocator.fill(username)
//     await passwordLocator.fill(password)
//     await loginbtnLocator.click()

//     //assertion
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

//     //verify products in landing page
//     for(let product of products){
//         await expect(page.getByText(product).first()).toBeVisible()
//     }


// })


// for(let product of products){

// test(`Data driven Test for ${product}`,async ({page})=>{

//     //test data
//     let username = 'standard_user'
//     let password = 'secret_sauce'

//     //locator
//     let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginbtnLocator = page.locator('#login-button')

//     //actions
//     await page.goto('https://www.saucedemo.com/')
//     await usernameLocator.fill(username)
//     await passwordLocator.fill(password)
//     await loginbtnLocator.click()

//     //assertion
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

//     //verify products in landing page
//     for(let product of products){
//         await expect(page.getByText(product).first()).toBeVisible()
//     }


// })}



// for (let data of loginData){

// test(`Data driven using array of arrays ${data[0]}`,async ({page})=>{

//    //locator
//     let usernameLocator = page.locator('#user-name')
//     let passwordLocator = page.locator('#password')
//     let loginbtnLocator = page.locator('#login-button')

//     //actions
//     await page.goto('https://www.saucedemo.com/')
    
//     await usernameLocator.fill(data[0])
//     await passwordLocator.fill(data[1])
//     await loginbtnLocator.click()
    

//     //assertion
//     if(data[0] === 'locked_out_user'){
//         await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.')
//     }else{
//         await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
//     }
    


// })}


for (let [username,password] of loginData){

test(`Data driven using array of arrays ${username} using destructring concept` ,async ({page})=>{

   //locator
    let usernameLocator = page.locator('#user-name')
    let passwordLocator = page.locator('#password')
    let loginbtnLocator = page.locator('#login-button')

    //actions
    await page.goto('https://www.saucedemo.com/')
    
    await usernameLocator.fill(username)
    await passwordLocator.fill(password)
    await loginbtnLocator.click()
    

    //assertion
    if(username === 'locked_out_user'){
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.')
    }else{
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
    


})}