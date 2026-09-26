import {expect,test} from '@playwright/test'

test ("iframe Programs",async ({page})=>{

await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');

console.log(await page.frames().length);

//by using frame locator

let outerframe = page.frameLocator('iframe[id="iframeResult"]');   //outerframe

let innerframe = outerframe.frameLocator('[src="demo_iframe.htm"]');  //innnerframe

console.log(await innerframe.locator('//h1').innerText());


//By using frame object

let frameObj = page.frame({name:"iframeResult"});

console.log(frameObj?.frameLocator('[src="demo_iframe.htm"]').locator('//h1').innerText());


//iframe[id="mce_0_ifr"]
//body[id="tinymce"]

});

test ("iframe Programs1",async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/iframe');

let framelocator1 = page.frameLocator('iframe[id="mce_0_ifr"]');

framelocator1.locator('body[id="tinymce"]').clear();

framelocator1.locator('body[id="tinymce"]').fill('Playwright is the future');





});