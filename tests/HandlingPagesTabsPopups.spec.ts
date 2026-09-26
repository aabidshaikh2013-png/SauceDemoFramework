// we have 3 binaries - chromium, firefox, webkit
// chromium has 2 browsers -chrome, edge

//context.clearCookies() is used to clear cookies on launching browser -- interveiw question

import { expect, test, chromium, firefox } from '@playwright/test'

test('Hadnling tabs/pages', async () => {

    let browser = await chromium.launch({
        headless: false,
        //channel:'chrome'  //will launch real browser if commented will launch binary
    })

    let context1 = await browser.newContext();

    let context2 = await browser.newContext();
    let page3 = await context2.newPage();
    await page3.goto('https://testautomationpractice.blogspot.com/');

    let page1 = await context1.newPage();
    let page2 = await context1.newPage();
    await page1.goto('https://www.amazon.in/');
    await page2.goto('https://www.flipkart.com');

    //using context1 two pages created, using context2 one page is created

    console.log(browser.contexts().length);
    console.log(browser.version());
    console.log(browser.isConnected());

    await browser.close();
});

test('Handling browserContext', async () => {

    let browser = await chromium.launch({
        headless: false,
        //channel:'chrome'
    });

    let context1 = await browser.newContext({
        viewport: {
            width: 390,
            height: 844
        },
        locale: 'en-US',
        isMobile: true
    })
    let page1 = await context1.newPage();




    //context methods 
    /*
    cookies 
    local storage
    session storage
    cache 
    login session 
    permissions
    geo location 
    authenticatin state
    
    handling dimension 
    */

});


test('Handling Authentication', async () => {


 let browser = await firefox.launch();

 let context = await browser.newContext({
    httpCredentials:{
        username:'admin',
        password:'admin'
    }
});

let page = await context.newPage();

await page.goto('https://the-internet.herokuapp.com/basic_auth');






})





