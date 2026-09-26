
/*
<input class="form-control" id="name" maxlength="15" placeholder="Enter Name" required="" type="text">

syntax - tagname[attribut='value']  --tagname is not mandatory

1) id syntax -- #id
await page.locator('#name')

2) class
.form-control
await page.locator('.form-control')

3)tagname
await page.locator('input')

4)tagname+class
tagname.class
await page.locator('input.form-control')

5)tagname+id
tagname#id
await page.locator('input#name')


important -- you can move from parent to child but cannot move from child to parent that's why css is faster than xpath
parent > child
.form-group>label

6) Starts with -- '^'
<input class="form-control" id="name is john cena" maxlength="15" placeholder="Enter Name" required="" type="text">

[id^='name']


7) ends with '$'
[id$='cena']

8)contains'*'
[id*='the']

9) first
page.locator('.form-control').first()

10) last
page.locator('.form-control').last()

11) nth
page.locator('.form-control').nth(2)


input[placeholder$="EMail"]     --css selector using ends with -- $

*/

import {expect,test} from '@playwright/test'

test ("css Selector",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    let WebElement = await page.locator('h1[class="title"]').textContent();

    console.log(WebElement);

    await page.locator('#name').fill('Ram');

    console.log(await page.locator('#name').inputValue());
})