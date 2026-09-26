import { expect, test} from '@playwright/test'

test('File upload by file chooser', async ({page}) => {

//identify element which takes file as input
await page.goto('https://the-internet.herokuapp.com/upload');

let [browseFileWindow] = await Promise.all(  //[filechooser,void]
    [page.waitForEvent('filechooser'),
await page.locator('#file-upload').click()]
      )

//choose file
await browseFileWindow.setFiles('tests/test-data/sample1.pdf')

await page.locator('#file-submit').click();

await expect(page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();

await expect(page.locator('#uploaded-files')).toHaveText('sample1.pdf');


})

test('Multiple File upload by filechooser', async ({page}) => {

//identify element which takes file as input
await page.goto('https://blueimp.github.io/jQuery-File-Upload/');


let [filechoosewindow] = await Promise.all([
    page.waitForEvent('filechooser'),
 await page.locator('input[type="file"]').click()
]);

await filechoosewindow.setFiles([
    'tests/test-data/sample1.pdf',
    'tests/test-data/sample2.pdf',
    'tests/test-data/sample3.pdf'

])

})





