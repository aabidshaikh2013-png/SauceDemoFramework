
import {expect,test} from '@playwright/test'

test("Navigation",async ({page})=>{

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);

    await page.goBack();
    await page.waitForTimeout(3000);

    await page.goForward();
    await page.waitForTimeout(3000);

    await page.reload();
    await page.waitForTimeout(3000);

    console.log(page.url());
})