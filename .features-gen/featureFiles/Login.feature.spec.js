// Generated from: featureFiles\Login.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Login Page Verification', () => {

  test.describe('Verify <Scenario> is displayed for login', () => {

    test('Verify login form header is displayed for login', { tag: ['@sweet', '@login', '@ela1', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Welcome back" heading in home page', null, { pages }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":14,"tags":["@sweet","@login","@ela1","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Welcome back\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Welcome back\"","children":[{"start":17,"value":"Welcome back","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end