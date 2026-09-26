/*
1) locator assertions
2) page assertions
3) Generic value assertions
4) API assertions

Locator Assertions
1) toBeVisible
2) toBeEnabled
3) toBeHidden
4) toBeDisabled
5) toBeChecked
6) toHaveText      --exact match mandate -- button text, heading text etc output
7) toContainText   -- exact match not mandate
8) toBeEditable
9) toBeEmpty
10) toBeFocused()
11) toHaveValue()   ---input data forms
12) toHaveClass()
13) toHaveCSS()
14) toHaveCount()
15) toHaveId()
16) toHaveRole()


*/

import {test,expect} from '@playwright/test'

test("Expect Assertions",async ({page})=>{

    await page.goto('https://practice-automation.com/form-fields/');

    await page.getByPlaceholder('Enter message here').fill('Ram is a good boy');

    

    await expect.soft(page.getByPlaceholder('Enter message here')).toHaveValue('Ram is a good boy');


    //page assertions

    await expect(page).toHaveURL('https://practice-automation.com/form-fields/');

    let pagetitle = await page.title();

    console.log(pagetitle);

    await expect(page).toHaveTitle(pagetitle);

    //generic value comaparison
    let a=50;

    expect(a).toBe(50); // comparison is '==='

    // toEqual --to check objects

    let user={
        name:'Ram',
        age:55
    }

    let user2={
        name:'Ram',
        age:55
    }

    expect(user).toEqual(user2);

    //toContain

    expect([5,7,10]).toContain(5);

    expect(["Mohan","Playwright"]).toContain("Mohan");

    expect("Rama is a good boy").toContain("Rama");   // fails becuase it looks for exact string match


    let b=100;

    expect(b).toBeGreaterThan(70);


    
    //negative case handling
    //error popups should not visible

    await expect(page.locator('.error')).not.toBeAttached();

    await expect(page.locator('.error')).toHaveCount(0);

    //not.toEqula

    expect(12).not.toBe(15);

    
    //hard assertion -- exectuion stops at that line

    // expect(actual).toBe(expected)

    
    //soft assertion  -- execution will not stop at that line and will continue

    // expect.soft(actual).toBe(expected)


})







