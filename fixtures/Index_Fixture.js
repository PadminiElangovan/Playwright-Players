import { test as base } from 'playwright-bdd';
import { Pages_Fixture } from './Pages_Fixture.js';
import { TestData_Fixture } from './TestData_Fixture.js';

export const test = base.extend({
  ...Pages_Fixture,
  ...TestData_Fixture,

  // helper to fetch any row by name
  excelHelpers: async ({}, use) => {
   
    const getByName = async (scenarioName) => {
      let row;
      await TestData_Fixture.testData({}, async (r) => { row = r; }, { title: scenarioName });
      return row;
    };

    await use({ getByName });
  },
});

export const expect = test.expect;


// ------------------------------------------------------------------------------------------------------------
// import { test as base } from 'playwright-bdd';
// import { Pages_Fixture } from './Pages_Fixture.js';
// import { TestData_Fixture } from './TestData_Fixture.js';

// export const test = base.extend({
//   ...Pages_Fixture, //spread operator
//   ...TestData_Fixture,

  

// });

// export const expect = test.expect;





















