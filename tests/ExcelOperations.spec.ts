/*
1) install xlsx

Step 1) Read the workbook
step 2) Read the worksheet
step 3) Read the Column and Data

[
{TestCaseID:TC_LOGIN_001,Username:standard_user,Password:secret_sauce,ExpectedResult:Success,ExpectedMessage:Products,Execute:Yes}
{}
{}
{}
{}
]

*/

import {test,expect} from 'playwright/test'
import * as XLSX from 'xlsx'
import * as path from 'path'
import * as fs from 'fs'

interface LoginTestData{
    TestCaseID:string,
    Username:string,
    Password:string,
    ExpectedResult:string,
    ExpectedMessage:string,
    Execute:string

}

// create excel path
    let excelPath = path.join(__dirname,'.','testdata','SauceDemoTestData.xlsx')
    //let excelPath = path.resolve(process.cwd(),'testdata','SauceDemoTestData.xlsx')   //testdata\SauceDemoTestData.xlsx

// check if file exists or not
if(!fs.existsSync(excelPath)){
    throw new Error(`Excel file not found at path: ${excelPath}`)
}
//Step1: read the workbook
let workbook = XLSX.readFile(excelPath)

//Step2: read the worksheet
let worksheet = workbook.Sheets['LoginData']

if(!worksheet){
    throw new Error(`Worksheet 'LoginData' not found in the Excel file.`)
}

let loginData = XLSX.utils.sheet_to_json<LoginTestData>(worksheet,{defval:'',raw:false})


//  232424     => '232424'
console.log('Login Data from Excel:', loginData)

test('reading data from excel', async ()=>{

    


})


test('perform login',async({page}) => {
    // Implementation for performing login

//console.log('Login Data from Excel:', loginData)

// find the test data for a specific testID 

let testdata =loginData.find((data) => data.TestCaseID === 'TC_LOGIN_001')

if(!testdata){
    throw new Error(`Test data for TestCaseID 'TC_LOGIN_001' not found in the Excel file.`)
}

console.log('Test Data for TC_LOGIN_001:', testdata)
/*
let testdata={
  TestCaseID: 'TC_LOGIN_001',
  Username: 'standard_user',
  Password: 'secret_sauce',
  ExpectedResult: 'Success',
  ExpectedMessage: 'Products',
  Execute: 'Yes'
}

*/
await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill(testdata.Username)
    await page.getByPlaceholder('Password').fill(testdata.Password)
    await page.getByRole('button',{name:'Login'}).click()
    //validate landign page 
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL(/inventory\.html/)

})


//Yes 
//yes 
//yeS

let filtertheTestCases = loginData.filter((data) => data.Execute.toLowerCase() === 'yes')
console.log('Filtered Test Cases to Execute:', filtertheTestCases)

for(let testdata of filtertheTestCases){

test(`${testdata.TestCaseID} - validation`,async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill(testdata.Username)
    await page.getByPlaceholder('Password').fill(testdata.Password)
    await page.getByRole('button',{name:'Login'}).click()
    //validate landign page 
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    //await expect(page).toHaveURL(/inventory\.html/)


    if(testdata.ExpectedResult.toLowerCase() === 'success'){
        await expect(page).toHaveURL(/inventory\.html/)
    }else{
       let errorMessage = await page.locator('[data-test="error"]').first().innerText()
       await expect(errorMessage).toContain(testdata.ExpectedMessage)

       
    }

})


}



