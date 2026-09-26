
//1)alert = information + OK button
//2)confirm = information + OK + Cancel
//3)prompt = info + OK, canncel
//4)beforeunload = warns user about leaving page = leave or cancel  
//5)authentication popups = username and password


import {expect,test} from '@playwright/test'

test("Simple Popup dialog",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{

        //validations
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toBe('I am an alert box!');

        //handling popup
        await dialog.accept();
    });

    await page.locator('#alertBtn').first().click();

})

test("Confirm Popup dialog",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{

        //validations
        console.log(dialog.message());
        console.log(dialog.type());
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toBe('Press a button!');

        //handling popup
        await dialog.dismiss();
    });

    await page.locator('#confirmBtn').first().click();

})


test("Prompt Popup dialog",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog',async dialog=>{

        //validations
        console.log(dialog.message());
        console.log(dialog.type());
        console.log(dialog.defaultValue());
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        expect(dialog.defaultValue()).toBe('Harry Potter');
        await page.waitForTimeout(5000);

        //handling popup
        await dialog.accept('Handling prompt dialog');
    });

    await page.locator('#promptBtn').first().click();

})