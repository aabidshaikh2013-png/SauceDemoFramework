import {test as base,expect} from '@playwright/test'

type MyFixtures ={
    myCustomFixture:string;
}

export let test = base.extend<MyFixtures>({

    myCustomFixture : async ({},use)=>{

        //setup code -1
        let value = 'Hello World';
        console.log('fixture setup code executed');

            await use(value);

        //teardown code - 3
        console.log('fixture teardown code executed');
    }
});

export{expect};