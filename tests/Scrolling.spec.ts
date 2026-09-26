import {test,expect} from '@playwright/test'

test('Scroll to an element', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
//locators
    let footerHeading = page.getByRole('heading',{name:'Footer Links'});
//actions
    await footerHeading.scrollIntoViewIfNeeded();
//validation
    await expect(footerHeading).toBeVisible();
})

test('Scroll page using mouse wheel', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.mouse.wheel(0,1000); //page scroll down

    await page.waitForTimeout(3000);

    await page.mouse.wheel(0,1000);

    await page.waitForTimeout(3000);

})

test('Scroll directly to the bottom and top using javascript', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })

    await page.waitForTimeout(2000);

    await page.evaluate(()=>{
        window.scrollTo(0,0)
    })

    await page.waitForTimeout(1000);
})

test('Scroll a normal HTML dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let countrydropdown = page.locator('#country');

    await countrydropdown.selectOption({label:'India'});

    await expect(countrydropdown).toHaveValue('india');
})

test('Custom dropdown scrolling', async ({page})=>{

    /*
    <ul>
        <li>
        <li>
    </ul>
    */

    await page.goto('https://testautomationpractice.blogspot.com/');

    let dropdown = page.locator('#comboBox')
    let item100 = page.getByText("Item 100",{exact:true})

    await dropdown.click();
    await item100.scrollIntoViewIfNeeded();
    await item100.click();
})


test('Custom dropdown scrolling by using evaluate', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let dropdown = page.locator('#comboBox')
    let dropdownlistView = page.locator('#dropdown')
    let item100 = page.getByText("Item 100",{exact:true})

    await dropdown.click();
    await dropdownlistView.evaluate((element)=>{         //for locator also, we can use evaluate with element passing
                                                         //previously we used evaluate to scroll the page, page.evaluate
        element.scrollTop = element.scrollHeight
    })

    await item100.click();

    
})


test('infinite scroll upto entire page is loaded by validating last book', async ({page})=>{

    await page.goto('https://www.booksbykilo.in/new-books');

    // Reader's Digest Condensed Books

    while(true){

        await page.evaluate(()=>{
            window.scrollTo(0,document.body.scrollHeight)
        })

        let lastbookname = page.getByText("Best Of Akbar & Birbal",{exact:true});
        if(await lastbookname.isVisible()){
            break;
        }
    }
})


test('infinite scrolling until entire page is loaded by using current height and previous height', async ({ page }) => {


await page.goto('https://www.booksbykilo.in/new-books', { waitUntil: 'load' })

let heighOfPagePreviously = await page.evaluate(()=>{
        return document.body.scrollHeight
    }) 


while(true){
    await page.evaluate(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    })
  
    await page.waitForTimeout(3000)

    let newHiehtOfPage = await page.evaluate(()=>{
        return document.body.scrollHeight
    }) 

    if(heighOfPagePreviously==newHiehtOfPage){
        break;
    }

heighOfPagePreviously = newHiehtOfPage



}

})




