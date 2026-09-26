import {expect,test} from '@playwright/test'

test("Scroll",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('link',{name:'Download Files'}).scrollIntoViewIfNeeded();


})