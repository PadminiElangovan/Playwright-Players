import { test as base } from 'playwright-bdd';
import { Pages_Fixture } from './Pages_Fixture.js';
import { TestData_Fixture } from './TestData_Fixture.js';

export const test = base.extend({
  ...Pages_Fixture, //spread operator
  ...TestData_Fixture,

});

export const expect = test.expect;






















//--------------------------------------------------------------------------------------------------
// import { test as baseTest } from 'playwright-bdd';
// import { Pages_Fixture } from './Pages_Fixture.js';
// import { TestData_Fixture } from './TestData_Fixture.js';
// import path from 'path';
// import { getScenarioTagsMap } from '../utils/FeatureParser.js';

// const featuresDir = path.join(process.cwd(), 'featureFiles');
// const scenarioTagsMap = getScenarioTagsMap(featuresDir);

// function isMatchingScenario(outlineTitle, actualTitle) {
//   const pattern = outlineTitle.replace(/<[^>]+>/g, '(.+?)');
//   const regex = new RegExp(`^${pattern}$`, 'i');
//   return regex.test(actualTitle.trim());
// }

// export const test = baseTest.extend({
//   ...Pages_Fixture,
//   ...TestData_Fixture,




//   login: async ({ pages, testData }, use, testInfo) => {

//     let scenarioTags = [];

//     // Find which Scenario Outline matches the expanded test title
//     for (const outlineTitle of Object.keys(scenarioTagsMap)) {
//       if (isMatchingScenario(outlineTitle, testInfo.title)) {
//         scenarioTags = scenarioTagsMap[outlineTitle] || [];
//         break;
//       }
//     }

//     // Normalize
//     scenarioTags = scenarioTags.map(t => t.toLowerCase().replace(/^@/, ''));

//     const skiplaunch = scenarioTags.includes('skiplaunch');
//     const skiplogin = scenarioTags.includes('skiplogin');

//     console.log(`Scenario: ${testInfo.title}`);
//     console.log(`Tags: ${scenarioTags.join(', ') || 'none'}`);

//     if (skiplaunch) {
//       console.log(`Skipping URL launch and login due to @skiplaunch`);
//       await use(pages.login);
//       return;
//     }
//     console.log(`Launching application...`);
//     await pages.login.launchApp();

//     if (skiplogin) {
//       console.log(`Skipping login due to @skiplogin`);
//       await use(pages.login);
//       return;
//     }

//     if (testData.Username && testData.Password) {
//       console.log(`Performing login...`);
//       await pages.login.loginFunction(testData.Username, testData.Password);
//     } else {
//       console.log(`No data provided → skipping login`);
//     }

//     await use(pages.login);
//   },
// });
