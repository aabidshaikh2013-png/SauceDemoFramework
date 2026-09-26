// 1) mouse actions using locators
// 2) mouse actions using low level APIs  page.mouse.....

import {test,expect} from '@playwright/test'

test('Mouse hover and click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //locators
    let menu = page.getByRole('button',{name:'Point Me'});
    let mobileOption = page.getByText('Mobiles',{exact:true});

    //actions
    await menu.hover();
    await expect(mobileOption).toBeVisible();
    await mobileOption.click();

})

test('Mouse double click', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //locators
    let copyfield = page.locator('#field1');
    let pastefield = page.locator('#field2');
    let copybutton = page.getByRole('button',{name:'Copy Text'});

    //actions
    await copyfield.fill('playwright automation');
    await copybutton.dblclick();

    //validation part
    await expect(pastefield).toHaveValue('playwright automation')
    

})


test('Mouse right click', async ({page})=>{

    await page.goto('https://demoqa.com/buttons');

    //locators
    let rightclickbutton = page.getByRole('button',{name:'Right Click Me'});
    let msglocator = page.locator('#rightClickMessage');

    //actions
    await rightclickbutton.click({button:'right'});
    let msg = await msglocator.innerText();

    //validation part
    await expect(msg).toBe('You have done a right click');
    

})

test('Mouse middle click', async ({page})=>{

    await page.goto('https://playwright.dev/');

    //locators
    let GetStartedlink = page.getByRole('link',{name:'Get started'});

    //action
    await GetStartedlink.click({button:'middle'});

})


test('drag and drop', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //locators
    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    //action
    await source.dragTo(target);

    //validation
    await expect(target).toContainText('Dropped!');

})


test('drag and drop by mouse low level actions', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //locators
    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    //action
    await source.hover();
    await page.mouse.down();
    //moving to target
    await target.hover();
    //release the mouse
    await page.mouse.up();


    //validation
    await expect(target).toContainText('Dropped!');

})
