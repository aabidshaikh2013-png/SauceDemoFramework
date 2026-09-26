import {expect,test} from '@playwright/test'

test ("Xpath Programs",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.$('//input[@id="sunday"]')

});

/*
earleier used page.$ it was
1) slow 
2) no autowait

so page.locator is used, it has
1) autowait
2) auto retrying
3) dynamic element handling






*/