import {test,expect} from '@playwright/test'

test('Validate entries on a page', async ({page})=>{

    await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html',{waitUntil:'load'});

    let dropdown = page.locator('#dt-length-0');

    await dropdown.selectOption({label:'50'});

    // getting all rows and verifying count
    
    let allrows = page.locator('#example tbody tr');
    await expect(allrows).toHaveCount(50);

    //getting allrows in an array and verifying count
    
    let allrowsarray = await page.locator('#example tbody tr').all();
    //console.log(allrowsarray);
    await expect(allrowsarray.length).toBe(50);

})

test('Search person the table',async ({page})=>{

await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

await page.getByLabel('Search').fill('Fiona Green');

let arrayofRow = await page.locator('#example tbody tr').all();

await expect(arrayofRow.length).toBe(1);   //for array use toBe dont use toHaveCount

let office = await arrayofRow[0].locator('td').nth(2).innerText();  // need to mention [0] position in case of array

let startDate  = await arrayofRow[0].locator('td').nth(4).innerText();

let salary = await arrayofRow[0].locator('td').nth(5).innerText();

console.log(`Employee details are Office:${office}, Start Date:${startDate}, Salary:${salary}`);

await expect(office).toBe('San Francisco');

})


test('filtering pagination program', async ({ page }) => {

    await page.goto(
        'https://datatables.net/examples/basic_init/zero_configuration.html'
    );

    await expect(page.locator('#example')).toBeVisible();

    const personName = 'Michael Bruce';
    let personFound = false;

    const nextButton = page.locator(
        'button.dt-paging-button.next'
    );

    while (true) {

        /*
         * This locator finds rows on the current page
         * that contain the text stored in personName.
         */
        const matchingRows = page.locator(
            '#example tbody tr',
            { hasText: personName }
        );

        const matchingRowCount = await matchingRows.count();

        console.log(
            `Matching rows on current page: ${matchingRowCount}`
        );

        if (matchingRowCount > 0) {

            const matchedRow = matchingRows.first();
            const cells = matchedRow.locator('td');

            const actualName = (
                await cells.nth(0).innerText()
            ).trim();

            /*
             * hasText checks the complete row.
             * Therefore, we additionally verify that
             * the first column exactly matches the name.
             */
            if (actualName === personName) {

                personFound = true;

                const position = (
                    await cells.nth(1).innerText()
                ).trim();

                const office = (
                    await cells.nth(2).innerText()
                ).trim();

                const age = (
                    await cells.nth(3).innerText()
                ).trim();

                const startDate = (
                    await cells.nth(4).innerText()
                ).trim();

                const salary = (
                    await cells.nth(5).innerText()
                ).trim();

                console.log('Employee found');
                console.log('Name:', actualName);
                console.log('Position:', position);
                console.log('Office:', office);
                console.log('Age:', age);
                console.log('Start date:', startDate);
                console.log('Salary:', salary);

                await expect(cells.nth(0)).toHaveText(
                    'Michael Bruce'
                );

                await expect(cells.nth(1)).toHaveText(
                    'JavaScript Developer'
                );

                await expect(cells.nth(2)).toHaveText(
                    'Singapore'
                );

                await expect(cells.nth(3)).toHaveText(
                    '29'
                );

                await expect(cells.nth(4)).toHaveText(
                    '2011-06-27'
                );

                await expect(cells.nth(5)).toHaveText(
                    '$183,000'
                );

                break;
            }
        }

        const isNextDisabled = await nextButton.isDisabled();

        if (isNextDisabled) {
            break;
        }

        const firstRowBeforeClick = await page
            .locator('#example tbody tr')
            .first()
            .innerText();

        await nextButton.click();

        await expect(
            page.locator('#example tbody tr').first()
        ).not.toHaveText(firstRowBeforeClick);
    }

    expect(
        personFound,
        `Employee "${personName}" was not found`
    ).toBeTruthy();
});