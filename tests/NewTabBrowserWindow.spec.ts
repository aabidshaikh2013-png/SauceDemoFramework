import {test,chromium,expect} from '@playwright/test'

test('Handling a new tab', async ()=>{

let browser = await chromium.launch();

let context = await browser.newContext();

let page    = await context.newPage();

await page.goto('https://testautomationpractice.blogspot.com/');

let newPage = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()
])

//handling events on old page
console.log(await page.title());

//handling events on new page
console.log(newPage[0].title());
await expect(newPage[0].getByRole('heading',{name:'SDET-QA Blog'})).toBeVisible();

//old page
await page.bringToFront();
await page.getByPlaceholder('Enter Name').fill('Ravi');
})


test('Handling new tab with context pages', async ()=>{

let browser = await chromium.launch();

let context = await browser.newContext();

let page    = await context.newPage();

await page.goto('https://testautomationpractice.blogspot.com/');

await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()
])

let pages = context.pages();
console.log(pages.length);

await pages[0].goto('https://amazon.in');

await pages[1].goto('https://www.flipkart.com');

for (let tab of pages){

    console.log(await tab.title());
    console.log('===============')
}
});


test('Using default fixture', async ({context,page})=>{

// let browser = await chromium.launch();

// let context = await browser.newContext();

// let page    = await context.newPage();

await page.goto('https://testautomationpractice.blogspot.com/');

let newPage = await Promise.all([
    context.waitForEvent('page'),
    await page.getByRole('button',{name:'New Tab'}).click()
])

//handling events on old page
console.log(await page.title());

//handling events on new page
console.log(newPage[0].title());
await expect(newPage[0].getByRole('heading',{name:'SDET-QA Blog'})).toBeVisible();

//old page
await page.bringToFront();
await page.getByPlaceholder('Enter Name').fill('Ravi');
});


test('Second program using default fixture', async ({context,page})=>{

// let browser = await chromium.launch();

// let context = await browser.newContext();

// let page    = await context.newPage();

await page.goto('https://testautomationpractice.blogspot.com/');

await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('button',{name:'New Tab'}).click()
])

let pages = context.pages();
console.log(pages.length);

await pages[0].goto('https://amazon.in');

await pages[1].goto('https://www.flipkart.com');

//print all pages title
for (let tab of pages){

    console.log(await tab.title());
    console.log('===============')
}
});


test('Handling new browser window popup', async ({context,page})=>{

//tab will arise from context

//window popup will arise from page

await page.goto('https://testautomationpractice.blogspot.com/');

let allpages = await Promise.all([
    page.waitForEvent('popup'),                               //change is here, instead of context it is page
    page.getByRole('button',{name:'Popup Windows'}).click()
])

await allpages[0].waitForLoadState();

let pages = context.pages();
console.log(pages.length);

//print all pages title
for (let tab of pages){

    console.log(await tab.title());
    console.log('===============')
}


});



