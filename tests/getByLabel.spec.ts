import {expect,test} from '@playwright/test'

test("getByRole Program",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    //getByLabel
    //<input type="email" id="email" name="email">
    await page.getByLabel("Email Address:").fill('test@gmail.com');

    await page.getByLabel("Password:").fill("abc@123");

    await page.getByLabel("Your Age:").fill("25");



})