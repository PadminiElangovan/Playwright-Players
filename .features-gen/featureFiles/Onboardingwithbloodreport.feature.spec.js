// Generated from: featureFiles\Onboardingwithbloodreport.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Onboarding scenarios with blood report', () => {

  test.beforeEach('Background: User successfully completed profile setup', async ({ Given, When, excelHelpers, pages, testData }, testInfo) => { if (testInfo.error) return;
    await Given('User is on complete profile form page', null, { pages, testData }); 
    await When('User clicks create account button after filling all values to set up background', null, { excelHelpers, pages }); 
  });
  
  test('Verify navigation of blood report modal', { tag: ['@sweet', '@withreport', '@skiplogin', '@navbloodreportmodal', '@WithReport_01'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on Upload Blood Report button', null, { pages }); 
    await Then('User should navigate to blood report modal', null, { pages }); 
  });

  test('Verify upload box supports drag & drop', { tag: ['@sweet', '@withreport', '@skiplogin', '@uploadbox', '@WithReport_02'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is on blood report modal', null, { pages }); 
    await When('User hovers over the upload box', null, { pages }); 
    await Then('Upload box should show drag & drop interaction', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\Onboardingwithbloodreport.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":12,"tags":["@sweet","@withreport","@skiplogin","@navbloodreportmodal","@WithReport_01"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all values to set up background","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on Upload Blood Report button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should navigate to blood report modal","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":21,"tags":["@sweet","@withreport","@skiplogin","@uploadbox","@WithReport_02"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all values to set up background","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Context","textWithKeyword":"Given User is on blood report modal","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User hovers over the upload box","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Upload box should show drag & drop interaction","stepMatchArguments":[]}]},
]; // bdd-data-end