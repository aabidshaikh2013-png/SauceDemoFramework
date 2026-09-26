
import {expect,test} from '@playwright/test'

test("getByRole Program",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

    await expect(page.getByRole('heading',{name:'PlaywrightPractice'})).toBeVisible();

    
    //<button role="button">Primary Action</button>
    let Primarybutton = page.getByRole('button',{name:'Primary'});

    await Primarybutton.click();

    
    //<input type="text" id="username" role="textbox">
    await page.getByRole('textbox',{name:'Username:',exact:true}).fill("Ravi");

    
    //<input type="checkbox" role="checkbox">
    await page.getByRole('checkbox',{name:'Accept terms'}).click();

    await page.waitForTimeout(3000);


    //<a href="#">Home</a>
    await page.getByRole('link',{name:'Home'}).click();

    //<a href="#">Products</a>
    await page.getByRole('link',{name:'Products'}).click();

    //<a href="#">Contact</a>
    await page.getByRole('link',{name:'Contact'}).click();

    //<div role="alert" class="card">This is an important alert message!</div>
    await expect(page.getByRole('alert',{name:'This is an important alert message!'})).toBeVisible();


    //getByLabel
    //<input type="email" id="email" name="email">
    await page.getByLabel("Email Address:").fill('test@gmail.com');

    await page.getByLabel("Password:").fill("abc@123");

})