// Generated from: featureFiles\Login.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Login Page Verification', () => {

  test.describe('Verify <Scenario> is displayed for login', () => {

    test('Verify login form header is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Welcome back" heading in home page', null, { pages }); 
    });

    test('Verify sub text of the header is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Sign in to your account or create a new one" heading in home page', null, { pages }); 
    });

    test('Verify Continue with Email button is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Continue with email" heading in home page', null, { pages }); 
    });

    test('Verify Continue with Google button is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Continue with Google" heading in home page', null, { pages }); 
    });

    test('Verify OR separator is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "OR" heading in home page', null, { pages }); 
    });

    test('Verify Terms and Privacy message is displayed for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiLoginText'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "By continuing you agree to our T&Cs and Privacy" heading in home page', null, { pages }); 
    });

  });

  test.describe('Verify <Scenario> for login', () => {

    test('Verify presence of close button for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "presence of close button" with "close button at the right corner" in home page', null, { pages }); 
    });

    test('Verify email input field for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "email input field" with "input field to enter email" in home page', null, { pages }); 
    });

    test('Verify placeholder text in email field for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "placeholder text in email field" with "Enter email" in home page', null, { pages }); 
    });

    test('Verify Continue with Email is visible for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Continue with Email is visible" with "Continue with email button is displayed" in home page', null, { pages }); 
    });

    test('Verify Continue with Email is enabled for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Continue with Email is enabled" with "Continue with email button to be enabled" in home page', null, { pages }); 
    });

    test('Verify Continue with Google is visible for login', { tag: ['@sweet', '@login', '@skiplaunch', '@uiverification'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks on Login link', null, { pages }); 
      await Then('User should see "Continue with Google is visible" with "Continue with Google button is displayed" in home page', null, { pages }); 
    });

  });

  test.describe('Verify <Scenario> for registered email', () => {

    test('Verify email input accepts valid existing email for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "email input accepts valid existing email" with "password field" for login', null, { pages, testData }); 
    });

    test('Verify email input rejects invalid email format for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "email input rejects invalid email format" with "validation error" for login', null, { pages, testData }); 
    });

    test('Verify presence of signin button for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "presence of signin button" with "Sign in button" for login', null, { pages, testData }); 
    });

    test('Verify sub text in login for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "sub text in login" with "email id  in sub text" for login', null, { pages, testData }); 
    });

    test('Verify presence of forgot password link for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "presence of forgot password link" with "Forgot password link" for login', null, { pages, testData }); 
    });

    test('Verify presence of placeholder in password field for registered email', { tag: ['@sweet', '@login', '@skiplogin', '@loginpg'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering email', null, { pages, testData }); 
      await Then('User should see "presence of placeholder in password field" with "Enter your password" for login', null, { pages, testData }); 
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
  {"pwTestLine":8,"pickleLine":17,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Welcome back\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Welcome back\"","children":[{"start":17,"value":"Welcome back","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":18,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Sign in to your account or create a new one\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Sign in to your account or create a new one\"","children":[{"start":17,"value":"Sign in to your account or create a new one","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with email\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with email\"","children":[{"start":17,"value":"Continue with email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":20,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":27,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Google\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Google\"","children":[{"start":17,"value":"Continue with Google","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":21,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":33,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"OR\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"OR\"","children":[{"start":17,"value":"OR","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":22,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":39,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see \"By continuing you agree to our T&Cs and Privacy\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"By continuing you agree to our T&Cs and Privacy\"","children":[{"start":17,"value":"By continuing you agree to our T&Cs and Privacy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":32,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":49,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of close button\" with \"close button at the right corner\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of close button\"","children":[{"start":17,"value":"presence of close button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"close button at the right corner\"","children":[{"start":49,"value":"close button at the right corner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":33,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":55,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input field\" with \"input field to enter email\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"email input field\"","children":[{"start":17,"value":"email input field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"input field to enter email\"","children":[{"start":42,"value":"input field to enter email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":34,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":61,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"placeholder text in email field\" with \"Enter email\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"placeholder text in email field\"","children":[{"start":17,"value":"placeholder text in email field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Enter email\"","children":[{"start":56,"value":"Enter email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":35,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":67,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Email is visible\" with \"Continue with email button is displayed\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Email is visible\"","children":[{"start":17,"value":"Continue with Email is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Continue with email button is displayed\"","children":[{"start":55,"value":"Continue with email button is displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":36,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":73,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Email is enabled\" with \"Continue with email button to be enabled\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Email is enabled\"","children":[{"start":17,"value":"Continue with Email is enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Continue with email button to be enabled\"","children":[{"start":55,"value":"Continue with email button to be enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":37,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":79,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Google is visible\" with \"Continue with Google button is displayed\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Google is visible\"","children":[{"start":17,"value":"Continue with Google is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Continue with Google button is displayed\"","children":[{"start":56,"value":"Continue with Google button is displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":52,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":89,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input accepts valid existing email\" with \"password field\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"email input accepts valid existing email\"","children":[{"start":17,"value":"email input accepts valid existing email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"password field\"","children":[{"start":65,"value":"password field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":53,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":95,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input rejects invalid email format\" with \"validation error\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"email input rejects invalid email format\"","children":[{"start":17,"value":"email input rejects invalid email format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"validation error\"","children":[{"start":65,"value":"validation error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":54,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":101,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of signin button\" with \"Sign in button\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of signin button\"","children":[{"start":17,"value":"presence of signin button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"Sign in button\"","children":[{"start":50,"value":"Sign in button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":106,"pickleLine":55,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":107,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"sub text in login\" with \"email id  in sub text\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"sub text in login\"","children":[{"start":17,"value":"sub text in login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"email id  in sub text\"","children":[{"start":42,"value":"email id  in sub text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":112,"pickleLine":56,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":113,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of forgot password link\" with \"Forgot password link\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of forgot password link\"","children":[{"start":17,"value":"presence of forgot password link","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"Forgot password link\"","children":[{"start":57,"value":"Forgot password link","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":118,"pickleLine":57,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":119,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of placeholder in password field\" with \"Enter your password\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of placeholder in password field\"","children":[{"start":17,"value":"presence of placeholder in password field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"Enter your password\"","children":[{"start":66,"value":"Enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end