import {test,expect} from '@playwright/test'

test('testing github commit branch',async ({page})=>{
    await page.goto('saucedemo.com')
})