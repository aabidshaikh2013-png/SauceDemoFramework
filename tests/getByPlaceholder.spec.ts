
import {expect,test} from '@playwright/test'

test('getByPlaceholder Program', async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

//<input type="text" placeholder="Enter your full name" class="full-width">
await page.getByPlaceholder('Enter your full name').fill('Aabid');


});