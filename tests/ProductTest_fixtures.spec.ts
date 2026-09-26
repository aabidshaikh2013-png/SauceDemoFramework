import { test, expect } from '../fixtures/sauceDemoFixtures'


test.describe('SauceDemo Product Tests', () => {


    test('Verify product count', async ({ inventoryPage }) => {

        const productCount =
            await inventoryPage.getProductCount();

        expect(productCount).toBe(6);
    });

    test('Verify Sauce Labs Backpack price', async ({
        inventoryPage
    }) => {


        const productPrice =
            await inventoryPage.getProductPrice(
                'Sauce Labs Backpack'
            );

        expect(productPrice).toBe('$29.99');
    });

    test('Open and validate product details', async ({inventoryPage,productDetailsPage
    
    }) => {
    
       
        //step1 : execute prestep in inventoryPage,productDetailsPage fixtures


        //step 2: below code is executed

        await inventoryPage.openProduct(
            'Sauce Labs Backpack'
        );

        await productDetailsPage.verifyProductName(
            'Sauce Labs Backpack'
        );

        await productDetailsPage.verifyProductPrice(
            '$29.99'
        );

        await productDetailsPage
            .verifyProductDescriptionIsDisplayed();

     
        //step 3: teardown in inventoryPage and product details page
    });

    test('Sort products from low to high', async ({
        inventoryPage,page
    }) => {


        await inventoryPage.sortProducts('lohi');

        const prices = await page
            .locator('[data-test="inventory-item-price"]')
            .allTextContents();

        const numericPrices = prices.map(price =>
            Number(price.replace('$', ''))
        );

        const sortedPrices = [...numericPrices].sort(
            (firstPrice, secondPrice) =>
                firstPrice - secondPrice
        );

        expect(numericPrices).toEqual(sortedPrices);
    });


  
});

  test('fetching the login details',({userdetails})=>{

    console.log(userdetails.username)
     console.log(userdetails.password)

        })