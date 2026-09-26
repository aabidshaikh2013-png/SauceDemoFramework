import {expect,test} from '@playwright/test'

test("Second",async ({page})=>{

    await page.goto("https://playwright.dev/");

    console.log(await page.title());
})