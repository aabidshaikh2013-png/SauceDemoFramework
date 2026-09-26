import {expect,test} from '@playwright/test'

test("Dropdown",{tag:'@smoke'},async({page})=>{

    test.setTimeout(2*60*1000);

    await page.goto('https://testautomationpractice.blogspot.com/');

    let countrydrodown = page.locator('#country');

    //visible text
    
    await countrydrodown.selectOption('Japan');

    
    //by options --label
    
    await countrydrodown.selectOption({label:'Germany'});

    
    // by option --value present on DOM in element
    
    await countrydrodown.selectOption({value:'uk'});

    
    //by index option
    
    await countrydrodown.selectOption({index:1});

    
    // Validation of selected value
    
    await expect(countrydrodown).toHaveValue(/Canada/i); // 'i' will ignore the case sensitive

    
    // validation if dropdown have 10 options
    
    await expect.soft(page.locator('#country>option')).toHaveCount(10);

    
    // validate if japan option is present or not
    
    await expect(countrydrodown).toContainText('Japan');

    
    // take all text from dropdown
    
    console.log(await countrydrodown.textContent());


    // validate japan is present in the dropdown

    let alloptionstext = await countrydrodown.textContent();

    await expect(alloptionstext?.includes('Japan')).toBeTruthy();


    //want to take all elments of dropdown --xpath=> //select[@id='country']/option

    let alloptionelement = await page.locator('#country>option').all();

    for(let option of alloptionelement){
        let optionText = await option.textContent();
        if(optionText==='Japan'){
            console.log('Option is Present')
            break;
        }
    }


    let alloptionText = await page.locator('#country>option').allTextContents();
    console.log(alloptionText);


    await expect(page.locator('#country>option')).toContainText(['United States','Canada','Japan']); //toHave text will validate whole text










})