/*
//defual fixtrues 
1.page 
2.context
3.browser
4.browsername
5.request

*/

//customfixtures
//============

// fixture will provide a setup before actual test starts 
// and teardown after the test is completed

// Order of exectio of fixture 

//step1 : setup 
//step2 :test execution
//step3 : teardown


/*

Custom fixture creation
======================
Fixture creation 
pass this fixture to the test function as parameter and use it in the test function

*/

import {test,expect} from '../fixtures/myCustomFixture'

test('Custom fixture test', async ({myCustomFixture})=>{
    console.log('Value of myCustomFixture : '+myCustomFixture);
})