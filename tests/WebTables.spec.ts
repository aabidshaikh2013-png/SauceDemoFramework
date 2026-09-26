/*
locator chaining
identify webtable
identify webtable.getrows
identify webtable.getrows.celldata

difference between innerText() and textContent() --innerText will remove spaces
*/

import {test,expect} from '@playwright/test'

test("Web Tables",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let table = page.locator('table[name="BookTable"]');

    console.log(await table.locator('tbody tr',{hasText:'Learn Java'}).locator('td').nth(1).innerText());

    let arrayoflocator = await table.locator('tbody tr',{hasText:'Javascript'}).all();

    console.log(await arrayoflocator[0].innerText());

    // author name
    //console.log(await table.locator('tbody tr',{hasText:'Amit'}).allInnerTexts());  //showing /t in array

    let authorRows = await table.locator('tbody tr',{hasText:'Mukesh'}).all();

    for(let Row of authorRows){
        let bookname = await Row.locator('td').nth(0).innerText();
        let bookprice = await Row.locator('td').nth(3).innerText();
        console.log(`${bookname} price is ${bookprice}`);
    }


    console.log(await page.locator('#taskTable thead tr th').allInnerTexts());

    console.log(await page.locator('#taskTable').locator('thead th').allInnerTexts());

    
    //printing first column cells -- not heading

    let allrows = await page.locator('#taskTable tbody').locator('tr').all();

    for(let firstname of allrows){
        console.log(await firstname.locator('td').nth(0).innerText())
    }

    
    // click on checkbox of particular name
    await page.locator('#productTable').locator('tbody tr',{hasText:'Smartphone'}).getByRole('checkbox').click();


    //printing price of every product -- iterate through for (of)

    let allrows1 = await page.locator('#productTable').locator('tbody tr').all();

    for (let price of allrows1){
        console.log(await price.locator('td').nth(2).innerText())
    }

    // different css style using '>'
    console.log(await page.locator('#productTable>tbody tr',{hasText:'Smartwatch'}).locator('td').nth(2).innerText());



})