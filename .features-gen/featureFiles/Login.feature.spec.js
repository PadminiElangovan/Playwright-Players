// Generated from: featureFiles\Login.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Login Page Verification', () => {

  test.describe('Verify <Scenario> for registered email', () => {

    test('Verify email input accepts valid existing email for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "email input accepts valid existing email" with "password field" for login', null, { pages, testData }); 
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
  {"pwTestLine":8,"pickleLine":52,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":9,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input accepts valid existing email\" with \"password field\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"email input accepts valid existing email\"","children":[{"start":17,"value":"email input accepts valid existing email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"password field\"","children":[{"start":65,"value":"password field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end