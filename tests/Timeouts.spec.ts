// default timeout for actinable items like click,check is 30 seconds, u can change it .click({timout:6000}) ,like this

// default timeout for expect is 5 seconds

import {expect,test} from '@playwright/test'

// test.setTimeout(40000)  => explicit timeout

test("Timeouts",async ({page})=>{

 await page.goto('https://demoqa.com/buttons');

    //test.slow();

    await page.locator('#doubleClickBtn').dblclick();

    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});

    await page.getByText('Click Me',{exact:true}).click({timeout:6000});

    await expect(page.getByRole('radio',{name:'Red'})).toBeVisible({timeout:2000});


})

test("Timeouts manual define",async ({page})=>{

    test.setTimeout(3*60*1000); //now test timeout will be 3 minutes

 await page.goto('https://demoqa.com/buttons');

    await page.locator('#doubleClickBtn').dblclick();

    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});

    await page.getByText('Click Me',{exact:true}).click();

    await expect(page.getByRole('radio',{name:'Red'})).toBeVisible();


})

test("Hard timeouts and hooks",async ({page})=>{

    await page.goto('https://demoqa.com/buttons');

    await page.waitForTimeout(30000);   //it's hard time out

    await page.locator('#doubleClickBtn').dblclick();

    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'});

    await page.getByText('Click Me',{exact:true}).click();

    await expect(page.getByRole('radio',{name:'Red'})).toBeVisible();
})
