// Generated from: featureFiles/Login.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Login Page Verification Total 31 scenarios', () => {

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

  test('Password input accepts valid existing user', { tag: ['@sweet', '@login', '@skiplogin', '@navtohomepg', '@Login_19'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is on the login page', null, { pages }); 
    await When('Registered user clicks sign in after entering password', null, { pages }); 
    await Then('User should be navigated to home page', null, { pages }); 
  });

  test.describe('Verify <Scenario> for new user email', () => {

    test('Verify email input accepts valid new email for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "email input accepts valid new email" with "Complete your profile form" for profile form', null, { pages, testData }); 
    });

    test('Verify Full Name field is visible for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "Full Name field is visible" with "Full Name" for profile form', null, { pages, testData }); 
    });

    test('Verify Username field is visible for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "Username field is visible" with "Username" for profile form', null, { pages, testData }); 
    });

    test('Verify Password field is visible for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "Password field is visible" with "Password" for profile form', null, { pages, testData }); 
    });

    test('Verify Terms & Conditions checkbox is visible for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "Terms & Conditions checkbox is visible" with "Terms & Conditions checkbox" for profile form', null, { pages, testData }); 
    });

    test('Verify Create Account button is disabled initially for new user email', { tag: ['@sweet', '@login', '@skiplogin', '@profileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on the login page', null, { pages }); 
      await When('User clicks continue with email button after entering new email', null, { pages }); 
      await Then('User should see "Create Account button is disabled initially" with "Create Account is disabled" for profile form', null, { pages, testData }); 
    });

  });

  test('Create Account button is enabled after valid input', { tag: ['@sweet', '@login', '@skiplogin', '@navtohomepg', '@Login_26'] }, async ({ Given, When, Then, pages, testData }) => { 
    await Given('User is on complete profile form page', null, { pages, testData }); 
    await When('User checks the Terms & conditions box after filling all fields', null, { pages }); 
    await Then('Create Account button should be enabled', null, { pages }); 
  });

  test.describe('Verify <Scenario> in complete profile form', () => {

    test('Verify Create account form with invalid Fullname in complete profile form', { tag: ['@sweet', '@login', '@skiplogin', '@completeprofileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on complete profile form page', null, { pages, testData }); 
      await When('User clicks create account button after filling all fields', null, { pages, testData }); 
      await Then('User should see "fullname error message" in complete profile form', null, { pages, testData }); 
    });

    test('Verify Create account form with invalid UserNmae in complete profile form', { tag: ['@sweet', '@login', '@skiplogin', '@completeprofileform'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on complete profile form page', null, { pages, testData }); 
      await When('User clicks create account button after filling all fields', null, { pages, testData }); 
      await Then('User should see "username error message" in complete profile form', null, { pages, testData }); 
    });

  });

  test.describe('Verify <Scenario> in complete profile form valid', () => {

    test('Verify Create account form with valid data in complete profile form valid', { tag: ['@sweet', '@login', '@skiplogin', '@completeprofileformValid'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on complete profile form page', null, { pages, testData }); 
      await When('User clicks create account button after filling all valid values', null, { pages, testData }); 
      await Then('User should see "upload blood report" in complete profile form', null, { pages, testData }); 
    });

    test('Verify presence of Upload Blood Report button in complete profile form valid', { tag: ['@sweet', '@login', '@skiplogin', '@completeprofileformValid'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on complete profile form page', null, { pages, testData }); 
      await When('User clicks create account button after filling all valid values', null, { pages, testData }); 
      await Then('User should see "upload blood report" in complete profile form', null, { pages, testData }); 
    });

    test('Verify presence of Step Through Onboarding button in complete profile form valid', { tag: ['@sweet', '@login', '@skiplogin', '@completeprofileformValid'] }, async ({ Given, When, Then, pages, testData }) => { 
      await Given('User is on complete profile form page', null, { pages, testData }); 
      await When('User clicks create account button after filling all valid values', null, { pages, testData }); 
      await Then('User should see "Step Through Onboarding button" in complete profile form', null, { pages, testData }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles/Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":16,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Welcome back\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Welcome back\"","children":[{"start":17,"value":"Welcome back","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":17,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Sign in to your account or create a new one\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Sign in to your account or create a new one\"","children":[{"start":17,"value":"Sign in to your account or create a new one","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":21,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with email\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with email\"","children":[{"start":17,"value":"Continue with email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":27,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Google\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Google\"","children":[{"start":17,"value":"Continue with Google","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":20,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":33,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"OR\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"OR\"","children":[{"start":17,"value":"OR","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":21,"tags":["@sweet","@login","@skiplaunch","@uiLoginText"],"steps":[{"pwStepLine":39,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see \"By continuing you agree to our T&Cs and Privacy\" heading in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"By continuing you agree to our T&Cs and Privacy\"","children":[{"start":17,"value":"By continuing you agree to our T&Cs and Privacy","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":31,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":49,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of close button\" with \"close button at the right corner\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of close button\"","children":[{"start":17,"value":"presence of close button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"close button at the right corner\"","children":[{"start":49,"value":"close button at the right corner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":32,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":55,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input field\" with \"input field to enter email\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"email input field\"","children":[{"start":17,"value":"email input field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"input field to enter email\"","children":[{"start":42,"value":"input field to enter email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":33,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":61,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"placeholder text in email field\" with \"Enter email\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"placeholder text in email field\"","children":[{"start":17,"value":"placeholder text in email field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Enter email\"","children":[{"start":56,"value":"Enter email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":34,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":67,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Email is visible\" with \"Continue with email button is displayed\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Email is visible\"","children":[{"start":17,"value":"Continue with Email is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Continue with email button is displayed\"","children":[{"start":55,"value":"Continue with email button is displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":35,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":73,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Email is enabled\" with \"Continue with email button to be enabled\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Email is enabled\"","children":[{"start":17,"value":"Continue with Email is enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Continue with email button to be enabled\"","children":[{"start":55,"value":"Continue with email button to be enabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":36,"tags":["@sweet","@login","@skiplaunch","@uiverification"],"steps":[{"pwStepLine":79,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks on Login link","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Continue with Google is visible\" with \"Continue with Google button is displayed\" in home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Continue with Google is visible\"","children":[{"start":17,"value":"Continue with Google is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":55,"value":"\"Continue with Google button is displayed\"","children":[{"start":56,"value":"Continue with Google button is displayed","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":51,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":89,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input accepts valid existing email\" with \"password field\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"email input accepts valid existing email\"","children":[{"start":17,"value":"email input accepts valid existing email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"password field\"","children":[{"start":65,"value":"password field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":52,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":95,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input rejects invalid email format\" with \"validation error\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"email input rejects invalid email format\"","children":[{"start":17,"value":"email input rejects invalid email format","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":64,"value":"\"validation error\"","children":[{"start":65,"value":"validation error","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":53,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":101,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of signin button\" with \"Sign in button\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of signin button\"","children":[{"start":17,"value":"presence of signin button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"Sign in button\"","children":[{"start":50,"value":"Sign in button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":106,"pickleLine":54,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":107,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"sub text in login\" with \"email id  in sub text\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"sub text in login\"","children":[{"start":17,"value":"sub text in login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"email id  in sub text\"","children":[{"start":42,"value":"email id  in sub text","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":112,"pickleLine":55,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":113,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of forgot password link\" with \"Forgot password link\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of forgot password link\"","children":[{"start":17,"value":"presence of forgot password link","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":56,"value":"\"Forgot password link\"","children":[{"start":57,"value":"Forgot password link","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":118,"pickleLine":56,"tags":["@sweet","@login","@skiplogin","@loginpg"],"steps":[{"pwStepLine":119,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering email","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see \"presence of placeholder in password field\" with \"Enter your password\" for login","stepMatchArguments":[{"group":{"start":16,"value":"\"presence of placeholder in password field\"","children":[{"start":17,"value":"presence of placeholder in password field","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"Enter your password\"","children":[{"start":66,"value":"Enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":126,"pickleLine":60,"tags":["@sweet","@login","@skiplogin","@navtohomepg","@Login_19"],"steps":[{"pwStepLine":127,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When Registered user clicks sign in after entering password","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to home page","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":76,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":135,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"email input accepts valid new email\" with \"Complete your profile form\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"email input accepts valid new email\"","children":[{"start":17,"value":"email input accepts valid new email","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":59,"value":"\"Complete your profile form\"","children":[{"start":60,"value":"Complete your profile form","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":140,"pickleLine":77,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":141,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Full Name field is visible\" with \"Full Name\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Full Name field is visible\"","children":[{"start":17,"value":"Full Name field is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"Full Name\"","children":[{"start":51,"value":"Full Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":146,"pickleLine":78,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":147,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Username field is visible\" with \"Username\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Username field is visible\"","children":[{"start":17,"value":"Username field is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"Username\"","children":[{"start":50,"value":"Username","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":152,"pickleLine":79,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":153,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Password field is visible\" with \"Password\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Password field is visible\"","children":[{"start":17,"value":"Password field is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"Password\"","children":[{"start":50,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":158,"pickleLine":80,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":159,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Terms & Conditions checkbox is visible\" with \"Terms & Conditions checkbox\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Terms & Conditions checkbox is visible\"","children":[{"start":17,"value":"Terms & Conditions checkbox is visible","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":62,"value":"\"Terms & Conditions checkbox\"","children":[{"start":63,"value":"Terms & Conditions checkbox","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":164,"pickleLine":81,"tags":["@sweet","@login","@skiplogin","@profileform"],"steps":[{"pwStepLine":165,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User is on the login page","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User clicks continue with email button after entering new email","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Create Account button is disabled initially\" with \"Create Account is disabled\" for profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Create Account button is disabled initially\"","children":[{"start":17,"value":"Create Account button is disabled initially","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":67,"value":"\"Create Account is disabled\"","children":[{"start":68,"value":"Create Account is disabled","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":172,"pickleLine":88,"tags":["@sweet","@login","@skiplogin","@navtohomepg","@Login_26"],"steps":[{"pwStepLine":173,"gherkinStepLine":89,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When User checks the Terms & conditions box after filling all fields","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then Create Account button should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":180,"pickleLine":101,"tags":["@sweet","@login","@skiplogin","@completeprofileform"],"steps":[{"pwStepLine":181,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all fields","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then User should see \"fullname error message\" in complete profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"fullname error message\"","children":[{"start":17,"value":"fullname error message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":186,"pickleLine":102,"tags":["@sweet","@login","@skiplogin","@completeprofileform"],"steps":[{"pwStepLine":187,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all fields","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then User should see \"username error message\" in complete profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"username error message\"","children":[{"start":17,"value":"username error message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":196,"pickleLine":113,"tags":["@sweet","@login","@skiplogin","@completeprofileformValid"],"steps":[{"pwStepLine":197,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all valid values","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":109,"keywordType":"Outcome","textWithKeyword":"Then User should see \"upload blood report\" in complete profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"upload blood report\"","children":[{"start":17,"value":"upload blood report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":202,"pickleLine":114,"tags":["@sweet","@login","@skiplogin","@completeprofileformValid"],"steps":[{"pwStepLine":203,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all valid values","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":109,"keywordType":"Outcome","textWithKeyword":"Then User should see \"upload blood report\" in complete profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"upload blood report\"","children":[{"start":17,"value":"upload blood report","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":208,"pickleLine":115,"tags":["@sweet","@login","@skiplogin","@completeprofileformValid"],"steps":[{"pwStepLine":209,"gherkinStepLine":107,"keywordType":"Context","textWithKeyword":"Given User is on complete profile form page","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"When User clicks create account button after filling all valid values","stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":109,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Step Through Onboarding button\" in complete profile form","stepMatchArguments":[{"group":{"start":16,"value":"\"Step Through Onboarding button\"","children":[{"start":17,"value":"Step Through Onboarding button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end