// Generated from: featureFiles/PremiumUserRecordData/PhysicalActivityPremiumUser.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Validating physical activity functionality in the premium user record data', () => {

  test.beforeEach('Background: User is in Home Page after logged in', async ({ Given, When, pages }, testInfo) => { if (testInfo.error) return;
    await Given('User is in Home Page', null, { pages }); 
    await When('User clicks physical activity', null, { pages }); 
  });
  
  test.describe('Verify <Scenario> in physical activity form', () => {

    test('Verify title in physical activity form', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_01', '@UIValidation'] }, async ({ Then, pages }) => { 
      await Then('User should see "Physical Activity" "title" in physical activity form', null, { pages }); 
    });

    test('Verify subtext in physical activity form', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_01', '@UIValidation'] }, async ({ Then, pages }) => { 
      await Then('User should see "Track your fitness journey" "subtext" in physical activity form', null, { pages }); 
    });

  });

  test('Verify fields in the Physical Activity form', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_02', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see the following fields in Physical Activity', {"dataTable":{"rows":[{"cells":[{"value":"Field"}]},{"cells":[{"value":"Activity Type"}]},{"cells":[{"value":"Duration"}]},{"cells":[{"value":"Date"}]},{"cells":[{"value":"Intensity"}]}]}}, { pages }); 
  });

  test('Verify the presence of dropdown for Activity Type', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_03', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see  dropdown for activity type', null, { pages }); 
  });

  test('Verify dropdown options for Activity Type', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_04', '@UIValidation'] }, async ({ When, Then, pages }) => { 
    await When('User clicks activity type dropdown', null, { pages }); 
    await Then('User should see the following options in Activity Type dropdown', {"dataTable":{"rows":[{"cells":[{"value":"Walking"}]},{"cells":[{"value":"Running"}]},{"cells":[{"value":"Cycling"}]},{"cells":[{"value":"Weight Training"}]},{"cells":[{"value":"Yoga"}]},{"cells":[{"value":"HIIT"}]},{"cells":[{"value":"Other"}]}]}}, { pages }); 
  });

  test('Verify the presence input for Duration', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_05', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see input field for duration', null, { pages }); 
  });

  test('Verify the placeholder text for Duration', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_06', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see "30" in placeholder field', null, { pages }); 
  });

  test('Verify dropdown for duration options', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_07', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see drop down duration', null, { pages }); 
  });

  test('Verify dropdown options for Duration unit', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_08', '@UIValidation'] }, async ({ When, Then, pages }) => { 
    await When('user clicks the duration dropdown', null, { pages }); 
    await Then('User should see the following duration units', {"dataTable":{"rows":[{"cells":[{"value":"minutes"}]},{"cells":[{"value":"hours"}]}]}}, { pages }); 
  });

  test('Verify the date picker option', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_09', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see date picker in physical activity', null, { pages }); 
  });

  test('Verify intensity buttons', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_10', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see the following intensity options', {"dataTable":{"rows":[{"cells":[{"value":"Intensity"}]},{"cells":[{"value":"light"}]},{"cells":[{"value":"moderate"}]},{"cells":[{"value":"vigorous"}]}]}}, { pages }); 
  });

  test('Verify the save activity button', { tag: ['@sweetBalance', '@PhysicalActivity', '@premiumUserRecordData', '@PhysicalActivity_11', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see save activity button in physical activity', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles/PremiumUserRecordData/PhysicalActivityPremiumUser.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":14,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_01","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Physical Activity\" \"title\" in physical activity form","stepMatchArguments":[{"group":{"start":16,"value":"\"Physical Activity\"","children":[{"start":17,"value":"Physical Activity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":36,"value":"\"title\"","children":[{"start":37,"value":"title","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":15,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_01","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Track your fitness journey\" \"subtext\" in physical activity form","stepMatchArguments":[{"group":{"start":16,"value":"\"Track your fitness journey\"","children":[{"start":17,"value":"Track your fitness journey","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"subtext\"","children":[{"start":46,"value":"subtext","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":18,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_02","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then User should see the following fields in Physical Activity","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":28,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_03","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see  dropdown for activity type","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":32,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_04","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks activity type dropdown","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should see the following options in Activity Type dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":44,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_05","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then User should see input field for duration","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":48,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_06","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User should see \"30\" in placeholder field","stepMatchArguments":[{"group":{"start":16,"value":"\"30\"","children":[{"start":17,"value":"30","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":52,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_07","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see drop down duration","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":56,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_08","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When user clicks the duration dropdown","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then User should see the following duration units","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":63,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_09","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see date picker in physical activity","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":67,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_10","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then User should see the following intensity options","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":75,"tags":["@sweetBalance","@PhysicalActivity","@premiumUserRecordData","@PhysicalActivity_11","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks physical activity","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see save activity button in physical activity","stepMatchArguments":[]}]},
]; // bdd-data-end