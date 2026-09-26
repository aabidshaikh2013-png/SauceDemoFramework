import {expect,test} from '@playwright/test'

test("Handling Elements",async ({page})=>{

    await page.goto('https://practice-automation.com/form-fields/');

    await page.getByLabel('Name').first().fill('Ram');
    await page.getByLabel('Name',{exact:true}).press('Tab');

    await page.getByLabel('Password',{exact:true}).fill('Mohan');
    await page.getByLabel('Password',{exact:true}).clear();

    await page.getByLabel('Password',{exact:true}).fill('Laxman');

    console.log(await page.getByLabel('Password').inputValue());


    // Checkbox

    await page.getByRole('checkbox',{name:'Milk'}).check();

    await expect(page.getByRole('checkbox',{name:'Milk'})).toBeChecked();

    await page.locator('//input[@id="drink3"]').check();

    await page.locator('//input[@id="drink3"]').uncheck();

    await expect(page.locator('//input[@id="drink3"]')).not.toBeChecked();

    await page.getByRole('checkbox',{name:'Milk'}).check();

    let allcheckbox = page.getByRole('checkbox');

    let checkboxcount = await allcheckbox.count();

    console.log(checkboxcount);

    await allcheckbox.first().check();
    await allcheckbox.last().check();
    await allcheckbox.nth(3).check();
    
    await allcheckbox.first().uncheck();
    await allcheckbox.last().uncheck();
    await allcheckbox.nth(3).uncheck();

    for(let i=0; i<checkboxcount; i++){

        await allcheckbox.nth(i).check();
    }


    // Radio button

    await expect(page.getByRole('radio',{name:'Red'})).toBeVisible();

    await page.getByRole('radio',{name:'Red'}).check();  //--- prefer check over click


    
    // double click, right click, left click (normal click)
    
    await page.goto('https://demoqa.com/buttons');

    await page.locator('#doubleClickBtn').dblclick();

    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});

    await page.getByText('Click Me',{exact:true}).click();


    // if an element is not visible, it will be visible after some seconds then put '.waitFor({state:'visible',timeout:3000})'







    



});