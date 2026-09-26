/*
syntax - //tagname[@attirbute = 'value']

<input type="text" id="username" role="textbox">

//input[@id='username']


syntax - //tagname[text()='element text']

<button aria-pressed="false">Toggle Button</button>

//button[text()='Toggle Button']


indexing  -- (//button)[1] --(//tagname)[index]

interview question -- for an xpath it is showing 5 occurence 4 hidden one is visible --you will use last
(//button)[last()]

*/

import {expect,test} from '@playwright/test'

test ("Xpath Programs",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="sunday"]').click();






});
