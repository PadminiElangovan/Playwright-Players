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

  test.describe('Verify <Scenario> in blood report upload modal', () => {

    test('Verify supported file types (PDF) in blood report upload modal', { tag: ['@sweet', '@withreport', '@skiplogin', '@pdfupload'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on blood report modal', null, { pages }); 
      await When('user uploads "Invalid file Text or Excel" file', null, { pages }); 
      await Then('User should see "Only PDF files are supported" outcome', null, { pages, testData }); 
    });

    test('Verify file size limit (10MB) in blood report upload modal', { tag: ['@sweet', '@withreport', '@skiplogin', '@pdfupload'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on blood report modal', null, { pages }); 
      await When('user uploads "Invalid pdf over 10mb" file', null, { pages }); 
      await Then('User should see "File exceeds 10MB" outcome', null, { pages, testData }); 
    });

    test('Verify valid PDF file upload in blood report upload modal', { tag: ['@sweet', '@withreport', '@skiplogin', '@pdfupload'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on blood report modal', null, { pages }); 
      await When('user uploads "Valid pdf file" file', null, { pages }); 
      await Then('User should see "processing percentage bar" outcome', null, { pages, testData }); 
    });

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
  {"pwTestLine":24,"pickleLine":34,"tags":["@sweet","@withreport","@skiplogin","@pdfupload"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all values to set up background","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on blood report modal","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user uploads \"Invalid file Text or Excel\" file","stepMatchArguments":[{"group":{"start":13,"value":"\"Invalid file Text or Excel\"","children":[{"start":14,"value":"Invalid file Text or Excel","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Only PDF files are supported\" outcome","stepMatchArguments":[{"group":{"start":16,"value":"\"Only PDF files are supported\"","children":[{"start":17,"value":"Only PDF files are supported","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":35,"tags":["@sweet","@withreport","@skiplogin","@pdfupload"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all values to set up background","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on blood report modal","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user uploads \"Invalid pdf over 10mb\" file","stepMatchArguments":[{"group":{"start":13,"value":"\"Invalid pdf over 10mb\"","children":[{"start":14,"value":"Invalid pdf over 10mb","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see \"File exceeds 10MB\" outcome","stepMatchArguments":[{"group":{"start":16,"value":"\"File exceeds 10MB\"","children":[{"start":17,"value":"File exceeds 10MB","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":36,"tags":["@sweet","@withreport","@skiplogin","@pdfupload"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all values to set up background","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given User is on blood report modal","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When user uploads \"Valid pdf file\" file","stepMatchArguments":[{"group":{"start":13,"value":"\"Valid pdf file\"","children":[{"start":14,"value":"Valid pdf file","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see \"processing percentage bar\" outcome","stepMatchArguments":[{"group":{"start":16,"value":"\"processing percentage bar\"","children":[{"start":17,"value":"processing percentage bar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end