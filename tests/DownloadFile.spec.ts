import { expect, test} from '@playwright/test'
import path from 'path'

test('File upload', async ({page}) => {

//identify element which takes file as input
await page.goto('https://the-internet.herokuapp.com/download');


let [downloadwindow] = await Promise.all([
    page.waitForEvent('download'),
    await page.getByRole('link',{name:'sampleFile.txt'}).click()
]);

console.log('Downloaded file is', downloadwindow.suggestedFilename());

//await downloadwindow.saveAs('./tests/testdata');

 let filepath = path.join('tests/testdata',downloadwindow.suggestedFilename())
    await downloadwindow.saveAs(filepath)





})