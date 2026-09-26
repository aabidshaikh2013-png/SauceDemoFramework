import { expect, test} from '@playwright/test'

test('File upload', async ({page}) => {

//identify element which takes file as input
await page.goto('https://the-internet.herokuapp.com/upload');

await page.locator('#file-upload').setInputFiles('tests/test-data/sample1.pdf');  //identify element with type file

await page.locator('#file-submit').click();

await expect(page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();

await expect(page.locator('#uploaded-files')).toHaveText('sample1.pdf');


})


test('Multiple File upload', async ({page}) => {

//identify element which takes file as input
await page.goto('https://blueimp.github.io/jQuery-File-Upload/');

await page.locator('input[type="file"]').setInputFiles([
    'tests/test-data/sample1.pdf',
    'tests/test-data/sample2.pdf',
    'tests/test-data/sample3.pdf'
]);




})