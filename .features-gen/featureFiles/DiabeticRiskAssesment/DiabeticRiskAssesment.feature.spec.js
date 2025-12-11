// Generated from: featureFiles\DiabeticRiskAssesment\DiabeticRiskAssesment.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Verification of Diabetes Risk Analyzer', () => {

  test.describe('Validate <Scenario> text in Diabetes Risk Analyzer', () => {

    test('Validate Risk Analyzer dialog heading text in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskanalyzerheader'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Diabetes Risk Analyzer" displayed in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Validate Risk Analyzer dialog sub heading text in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskanalyzerheader'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Answer a few questions to assess your risk of developing diabetes" displayed in the Diabetes Risk Analyzer', null, { pages }); 
    });

  });

  test.describe('Verify presence of <Field> in Diabetes Risk Analyzer', () => {

    test('Verify presence of Cancel button in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Cancel button" in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify presence of Calculate Risk button in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Calculate Risk button" in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify presence of Family history checkbox in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Family history checkbox" in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify presence of Physical Activity dropdown in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Physical Activity dropdown" in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify presence of Blood Pressure dropdown in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Blood Pressure dropdown" in the Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify presence of Diet Quality dropdown in Diabetes Risk Analyzer', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskFieldPresent'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Diet Quality dropdown" in the Diabetes Risk Analyzer', null, { pages }); 
    });

  });

  test.describe('Verify <Field> placeholder text and default values', () => {

    test('Verify Age placeholder text and default values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskPlaceValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Enter your age (1-150)" in "Age" field of Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify Weight placeholder text and default values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskPlaceValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Enter your weight in kg (1-500)" in "Weight" field of Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify Physical Activity placeholder text and default values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskPlaceValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Select activity level" in "Physical Activity" field of Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify Blood Pressure placeholder text and default values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskPlaceValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Select blood pressure status" in "Blood Pressure" field of Diabetes Risk Analyzer', null, { pages }); 
    });

    test('Verify Diet Quality placeholder text and default values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskPlaceValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Select diet quality" in "Diet Quality" field of Diabetes Risk Analyzer', null, { pages }); 
    });

  });

  test.describe('Verify <Field> field and dropdown values', () => {

    test('Verify Physical Activity field and dropdown values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskOptionValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Physical Activity" dropdown contain "Active (Exercise 3+ times a week), Moderate (Exercise 1-2 times a week), Sedentary (Rarely exercise)"', null, { pages }); 
    });

    test('Verify Blood Pressure field and dropdown values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskOptionValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Blood Pressure" dropdown contain "Normal, Elevated, High"', null, { pages }); 
    });

    test('Verify Diet Quality field and dropdown values', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskOptionValue'] }, async ({ Given, When, Then, pages }) => { 
      await Given('User is on SweetBalance homepage', null, { pages }); 
      await When('User clicks the Check Your Risk button', null, { pages }); 
      await Then('User should see "Diet Quality" dropdown contain "Excellent (Balanced, mostly whole foods), Average (Mixed whole foods and processed foods), Poor (Mostly processed foods, high sugar)"', null, { pages }); 
    });

  });

  test('Validate Calculate Risk is disabled', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskbuttonDisabled'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is on SweetBalance homepage', null, { pages }); 
    await When('User clicks the Check Your Risk button', null, { pages }); 
    await Then('User should see Calculate Risk button disabled', null, { pages }); 
  });

  test('Validate Cancel button navigation to home page', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@cancelriskanalyzer'] }, async ({ Given, When, Then, page, pages }) => { 
    await Given('User is in diabetes risk analyzer', null, { pages }); 
    await When('User clicks the Cancel button', null, { pages }); 
    await Then('User should be returned to the home page', null, { page }); 
  });

  test('Validate Calculate Risk is enabled', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@riskbuttonEnabled'] }, async ({ Given, When, Then, pages, testData }) => { 
    await Given('User is in diabetes risk analyzer', null, { pages }); 
    await When('User enters values in all fields', null, { pages, testData }); 
    await Then('User should see Calculate Risk button enabled', null, { pages }); 
  });

  test('Validate assessment result dialog after valid form submission', { tag: ['@sweetbalance', '@diabeticRisk', '@skiplaunch', '@assessmentrisk'] }, async ({ Given, When, Then, pages, testData }) => { 
    await Given('User is in diabetes risk analyzer', null, { pages }); 
    await When('User clicks Calculate Risk button after entering valid values in all fields', null, { pages, testData }); 
    await Then('User should see "Your Diabetes Risk Assessment" dialog', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\DiabeticRiskAssesment\\DiabeticRiskAssesment.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":13,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskanalyzerheader"],"steps":[{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Diabetes Risk Analyzer\" displayed in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Diabetes Risk Analyzer\"","children":[{"start":17,"value":"Diabetes Risk Analyzer","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":14,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskanalyzerheader"],"steps":[{"pwStepLine":15,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Answer a few questions to assess your risk of developing diabetes\" displayed in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Answer a few questions to assess your risk of developing diabetes\"","children":[{"start":17,"value":"Answer a few questions to assess your risk of developing diabetes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":25,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Cancel button\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Cancel button\"","children":[{"start":17,"value":"Cancel button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":31,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Calculate Risk button\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Calculate Risk button\"","children":[{"start":17,"value":"Calculate Risk button","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":27,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":37,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Family history checkbox\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Family history checkbox\"","children":[{"start":17,"value":"Family history checkbox","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":28,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":43,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Physical Activity dropdown\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Physical Activity dropdown\"","children":[{"start":17,"value":"Physical Activity dropdown","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":29,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":49,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Blood Pressure dropdown\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Blood Pressure dropdown\"","children":[{"start":17,"value":"Blood Pressure dropdown","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":30,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskFieldPresent"],"steps":[{"pwStepLine":55,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Diet Quality dropdown\" in the Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Diet Quality dropdown\"","children":[{"start":17,"value":"Diet Quality dropdown","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":41,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskPlaceValue"],"steps":[{"pwStepLine":65,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Enter your age (1-150)\" in \"Age\" field of Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Enter your age (1-150)\"","children":[{"start":17,"value":"Enter your age (1-150)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"Age\"","children":[{"start":45,"value":"Age","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":42,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskPlaceValue"],"steps":[{"pwStepLine":71,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Enter your weight in kg (1-500)\" in \"Weight\" field of Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Enter your weight in kg (1-500)\"","children":[{"start":17,"value":"Enter your weight in kg (1-500)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Weight\"","children":[{"start":54,"value":"Weight","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":43,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskPlaceValue"],"steps":[{"pwStepLine":77,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Select activity level\" in \"Physical Activity\" field of Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Select activity level\"","children":[{"start":17,"value":"Select activity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"Physical Activity\"","children":[{"start":44,"value":"Physical Activity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":44,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskPlaceValue"],"steps":[{"pwStepLine":83,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Select blood pressure status\" in \"Blood Pressure\" field of Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Select blood pressure status\"","children":[{"start":17,"value":"Select blood pressure status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"Blood Pressure\"","children":[{"start":51,"value":"Blood Pressure","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":45,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskPlaceValue"],"steps":[{"pwStepLine":89,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Select diet quality\" in \"Diet Quality\" field of Diabetes Risk Analyzer","stepMatchArguments":[{"group":{"start":16,"value":"\"Select diet quality\"","children":[{"start":17,"value":"Select diet quality","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Diet Quality\"","children":[{"start":42,"value":"Diet Quality","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":98,"pickleLine":56,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskOptionValue"],"steps":[{"pwStepLine":99,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Physical Activity\" dropdown contain \"Active (Exercise 3+ times a week), Moderate (Exercise 1-2 times a week), Sedentary (Rarely exercise)\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Physical Activity\"","children":[{"start":17,"value":"Physical Activity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Active (Exercise 3+ times a week), Moderate (Exercise 1-2 times a week), Sedentary (Rarely exercise)\"","children":[{"start":54,"value":"Active (Exercise 3+ times a week), Moderate (Exercise 1-2 times a week), Sedentary (Rarely exercise)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":104,"pickleLine":57,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskOptionValue"],"steps":[{"pwStepLine":105,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Blood Pressure\" dropdown contain \"Normal, Elevated, High\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Blood Pressure\"","children":[{"start":17,"value":"Blood Pressure","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"Normal, Elevated, High\"","children":[{"start":51,"value":"Normal, Elevated, High","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":58,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskOptionValue"],"steps":[{"pwStepLine":111,"gherkinStepLine":51,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Diet Quality\" dropdown contain \"Excellent (Balanced, mostly whole foods), Average (Mixed whole foods and processed foods), Poor (Mostly processed foods, high sugar)\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Diet Quality\"","children":[{"start":17,"value":"Diet Quality","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"Excellent (Balanced, mostly whole foods), Average (Mixed whole foods and processed foods), Poor (Mostly processed foods, high sugar)\"","children":[{"start":49,"value":"Excellent (Balanced, mostly whole foods), Average (Mixed whole foods and processed foods), Poor (Mostly processed foods, high sugar)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":118,"pickleLine":77,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskbuttonDisabled"],"steps":[{"pwStepLine":119,"gherkinStepLine":78,"keywordType":"Context","textWithKeyword":"Given User is on SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When User clicks the Check Your Risk button","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then User should see Calculate Risk button disabled","stepMatchArguments":[]}]},
  {"pwTestLine":124,"pickleLine":84,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@cancelriskanalyzer"],"steps":[{"pwStepLine":125,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User is in diabetes risk analyzer","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should be returned to the home page","stepMatchArguments":[]}]},
  {"pwTestLine":130,"pickleLine":91,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@riskbuttonEnabled"],"steps":[{"pwStepLine":131,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given User is in diabetes risk analyzer","stepMatchArguments":[]},{"pwStepLine":132,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When User enters values in all fields","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then User should see Calculate Risk button enabled","stepMatchArguments":[]}]},
  {"pwTestLine":136,"pickleLine":98,"tags":["@sweetbalance","@diabeticRisk","@skiplaunch","@assessmentrisk"],"steps":[{"pwStepLine":137,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given User is in diabetes risk analyzer","stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When User clicks Calculate Risk button after entering valid values in all fields","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Your Diabetes Risk Assessment\" dialog","stepMatchArguments":[{"group":{"start":16,"value":"\"Your Diabetes Risk Assessment\"","children":[{"start":17,"value":"Your Diabetes Risk Assessment","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end