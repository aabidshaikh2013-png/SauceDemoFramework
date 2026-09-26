import {expect,test} from '@playwright/test'

test("Multi Select Dropdown",async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');

let multi1 = page.locator('#colors');

await multi1.selectOption(['Red','Yellow']);

});

test("Bootstrap dropdown Dropdown",async({page})=>{

    await page.goto('https://coreui.io/bootstrap/docs/forms/multi-select/');

    let dropdown = page.locator('#search-ms1');

    // select dropdown
    await dropdown.click();

    // tick on options
    await page.locator('.form-multi-select-option',{hasText:'Angular'}).first().click();

    await page.locator('.form-multi-select-option',{hasText:'Node.js'}).first().click();

    //validations
    await expect.soft(page.locator('.form-multi-select-option')).toContainText('Angular');

    await expect.soft(page.locator('.form-multi-select-option')).toContainText('Node.js');

});


test("Search Dropdown",async({page})=>{

await page.goto('https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/');

let dropdown1 = page.locator('.select2-selection');

await dropdown1.first().click();

await page.locator('.select2-search__field').last().fill('I');

await page.locator('.select2-results__option',{hasText:'India'}).click();

});


test("Auto Suggestion Dropdown",async({page})=>{

    await page.goto('https://www.google.com/');

    await page.locator('textarea[name="q"]').fill('playwright');

    await page.locator('.wM6W7d span',{hasText:"playwright automation"}).first().click();  // in css space is child

})


//Dynamic dropdowns:


test('Handle dynamic dropdown', async ({ page }) => {
  await page.goto('https://www.redbus.in/');

  await page.locator('#srcinput').fill('Hyderabad');

  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Hyderabad' }).first().click();

  await page.locator('#destinput').fill('Bangalore');

  await page.locator('[aria-label="Search suggestions list"] div[id*="suggestion"]', { hasText: 'Bengaluru' }).first().click();

  
});







