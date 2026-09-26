import {test,expect} from '@playwright/test'
import customerProduct from './/test-data/customerProducts.json'

import fs from 'fs'

let product = {
    "productName": "Sauce Labs Backpack", //in json to access values you can give product.productName
    "price": "$29.99"
}

let products =[
    {
        "productName": "Sauce Labs Backpack",
        "price": "$29.99"
    },
    {
        "productName": "Sauce Labs Bike Light",
        "price": "$9.99"
    }
]

test(`Validate Product ${product.productName}`,async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()

    //validate landing page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page).toHaveURL(/inventory\.html/)   // can validate part of url, between slashes '//' give back salsh '\' for dot '.'


    //page.locator('.inventory_container').filter({hasText:'Sauce Labs Backpack'})

    let productContainer = page.locator('.inventory_item').filter({has:page.getByText(product.productName)})

    //validate product name from json
    await expect(productContainer.locator('.inventory_item_name')).toHaveText(product.productName)

    //validate product price from json
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(product.price)

})


for(let productDetails of products){

test(`Array of Jsons Validate Product ${productDetails.productName}`,async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()

    //validate landing page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page).toHaveURL(/inventory\.html/)   // can validate part of url, between slashes '//' give back salsh '\' for dot '.'


    //page.locator('.inventory_container').filter({hasText:'Sauce Labs Backpack'})

    let productContainer = page.locator('.inventory_item').filter({has:page.getByText(productDetails.productName)})

    //validate product name from json
    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productDetails.productName)

    //validate product price from json
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(productDetails.price)

})}


//desturctruing concept

for(let {productName,price} of products){

test(`Destructuring Validate Product ${productName}`,async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()

    //validate landing page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page).toHaveURL(/inventory\.html/)   // can validate part of url, between slashes '//' give back salsh '\' for dot '.'


    //page.locator('.inventory_container').filter({hasText:'Sauce Labs Backpack'})

    let productContainer = page.locator('.inventory_item').filter({has:page.getByText(productName)})

    //validate product name from json
    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productName)

    //validate product price from json
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(price)

})}


// reading data from file
for(let {productName,price} of customerProduct){

test(`Destructuring Validate Product from file ${productName}`,async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button',{name:'Login'}).click()

    //validate landing page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await expect(page).toHaveURL(/inventory\.html/)   // can validate part of url, between slashes '//' give back salsh '\' for dot '.'


    //page.locator('.inventory_container').filter({hasText:'Sauce Labs Backpack'})

    let productContainer = page.locator('.inventory_item').filter({has:page.getByText(productName)})

    //validate product name from json
    await expect(productContainer.locator('.inventory_item_name')).toHaveText(productName)

    //validate product price from json
    await expect(productContainer.locator('.inventory_item_price')).toHaveText(price)

})}


// read filesync

test('Reading json data through fs filesync',async ()=>{
    let productData = fs.readFileSync('tests/test-data/testData.json','utf-8')
    let json = JSON.parse(productData)

    console.log(json.price)

    //tests\test-data\testData.json
})

