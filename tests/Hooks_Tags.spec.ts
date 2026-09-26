/*
test.beforeAll() -- only once before all test cases
launch browser
connecting database
initialise your report

test.beforeEach() -- before each test case

test.afterEach()  -- after each test case

test.afterAll() -- only once after all test cases
teardown part
close browser

npx playwright test tests/HooksProgram.spec.ts --grep '4'   =>it is going to run only test with '4'

npx playwright test tests/HooksProgram.spec.ts --grep 'script' => it is going to run all tests with 'script' word

npx playwright test tests/HooksProgram.spec.ts --grep 'P1'

*/

import {test,expect} from '@playwright/test'


test.beforeAll(()=>{
      console.log('lauch applicaton and navigate to url')
})

test.beforeEach(()=>{
    console.log('login')
})

test.afterEach(()=>{
    console.log('logout')
})

test.afterAll(()=>{
      console.log('close your browser')
})



test(' @Payments @P1  @regression @smoke Payment test script 1',()=>{
    console.log('Payment test scirpt1') // logic
})

test('@P2 Payment test script 2',()=>{
    console.log('Payment test scirpt2')
})

test(' @P1 Payment test script 3', {
  tag: '@sanity',
},()=>{
    console.log('Payment test scirpt3')
})


test('Payment test script 4', {
  tag: ['@sanity','@regression','@P1'],
  annotation:{
    type:'issue',
    description:'This is a known issue'
  }
},()=>{
    console.log('Payment test scirpt4')
})