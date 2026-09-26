import {expect,test} from '@playwright/test'

test('getByPlaceholder Program', async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

let logoimage = page.getByAltText('logo image');

console.log(await logoimage.isVisible());

console.log(await logoimage.getAttribute('src'));
//<img alt="logo image" src="https://playwright.dev/img/playwright-logo.svg">




});