import {expect,test} from '@playwright/test'

test('@P1 @Regression getByText Program', async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

let textlocator = page.getByText('Locate elements by their text content.');

console.log(await textlocator.isVisible());






});