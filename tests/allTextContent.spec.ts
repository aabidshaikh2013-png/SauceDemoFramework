import {expect,test} from '@playwright/test'

test("TextContent",{tag:['@P1','@login']}, async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let alltab = await page.locator('//*[@id="crosscol"]//a').allTextContents();

    console.log(alltab.includes('Home'));



})