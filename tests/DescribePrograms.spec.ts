/*
test.only => can run that test/group only
test.skip => that test/group will be skipped while running
test.fixme => it will skip the suite/test
test.fail => test level - test should fail
test.slow => triples the timeout - generally 30 seconds is timeout then it will be 90 seconds
*/

import{test,expect} from '@playwright/test'

test.describe('login test cases',()=>{

    test.skip(({browserName})=>browserName!=='firefox','I am skipping if it is not firefox')   //test will skip firefox run

    test.describe.configure({mode:'serial'})

    test.skip('login test1',()=>{
        console.log('login test1')
    })
    test.fixme('login test2',()=>{
        console.log('login test2')
    })
    test.fail('login test3',()=>{
        console.log('login test3')
    })
    test('login test4',()=>{
        console.log('login test4')
    })
    
})

test.describe('Payment test cases',()=>{

    test.describe.configure({retries:1});    

    test('Payment test1',()=>{
        console.log('Payment test1')
    })
    test('Payment test2',()=>{
        console.log('Payment test2')
    })
})