// Generated from: featureFiles/PremiumUserRecordData/FoodIntakePremiumUser.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Food Intake Validation in the premium user record data', () => {

  test.beforeEach('Background: User is in Home Page after logged in', async ({ Given, When, pages }, testInfo) => { if (testInfo.error) return;
    await Given('User is in Home Page', null, { pages }); 
    await When('User clicks Food Intake', null, { pages }); 
  });
  
  test.describe('Verify Food Intake title and subtext', () => {

    test('Example #1', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_01', '@UIValidation'] }, async ({ Then, pages }) => { 
      await Then('User should see "Food Intake Tracker" for "Title" on the food intake form', null, { pages }); 
    });

    test('Example #2', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_01', '@UIValidation'] }, async ({ Then, pages }) => { 
      await Then('User should see "Track what you eat to manage your diabetes better" for "Subtext" on the food intake form', null, { pages }); 
    });

  });

  test('Verify presence of four tabs in food intake', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_02', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see following meal tabs in food intake form', {"dataTable":{"rows":[{"cells":[{"value":"Tab"}]},{"cells":[{"value":"Breakfast"}]},{"cells":[{"value":"Lunch"}]},{"cells":[{"value":"Dinner"}]},{"cells":[{"value":"Snack"}]}]}}, { pages }); 
  });

  test('Verify fields in Food Intake form', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_03', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see the following fields in the food intake form', {"dataTable":{"rows":[{"cells":[{"value":"Field"}]},{"cells":[{"value":"Food Name"}]},{"cells":[{"value":"Serving Size"}]},{"cells":[{"value":"Calories"}]},{"cells":[{"value":"Date"}]},{"cells":[{"value":"Notes"}]}]}}, { pages }); 
  });

  test('Verify Food Name field placeholder', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_04', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see "Food Name" field with placeholder "e.g., Grilled Chicken Salad"', null, { pages }); 
  });

  test('Verify the presense of dropdown for serving size', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_05', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see Serving Size dropdown options in food intake form', {"dataTable":{"rows":[{"cells":[{"value":"Options"}]},{"cells":[{"value":"Small (1/2 cup)"}]},{"cells":[{"value":"Medium (1 cup)"}]},{"cells":[{"value":"Large (2 cups)"}]},{"cells":[{"value":"Custom..."}]}]}}, { pages }); 
  });

  test('Verify Serving Size default value', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_06', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see  "Medium (1 cup)" as the default value in the Serving Size dropdown', null, { pages }); 
  });

  test('Verify the presence calculator icon in calorie', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_07', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see calculator icon in calorie', null, { pages }); 
  });

  test('Verify the placeholder text for calorie', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_08', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see "Calories" field with placeholder "e.g., 250"', null, { pages }); 
  });

  test('Verify helper text below Calories field', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_09', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see helper text "Enter calories or click the calculator icon for automatic calculation." below calorie field', null, { pages }); 
  });

  test('Verify the presence of placeholder in notes blocks', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_10', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see "Notes" field with placeholder "Add any additional information..."', null, { pages }); 
  });

  test('Verify Date field default value', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_11', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see current date displayed in the date field', null, { pages }); 
  });

  test('Verify Save Food Entry button', { tag: ['@sweetBalance', '@FoodIntake', '@premiumUserRecordData', '@FoodIntake_12', '@UIValidation'] }, async ({ Then, pages }) => { 
    await Then('User should see Save Food Entry button', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles/PremiumUserRecordData/FoodIntakePremiumUser.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":13,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_01","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Food Intake Tracker\" for \"Title\" on the food intake form","stepMatchArguments":[{"group":{"start":16,"value":"\"Food Intake Tracker\"","children":[{"start":17,"value":"Food Intake Tracker","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"Title\"","children":[{"start":43,"value":"Title","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_01","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Track what you eat to manage your diabetes better\" for \"Subtext\" on the food intake form","stepMatchArguments":[{"group":{"start":16,"value":"\"Track what you eat to manage your diabetes better\"","children":[{"start":17,"value":"Track what you eat to manage your diabetes better","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":72,"value":"\"Subtext\"","children":[{"start":73,"value":"Subtext","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":17,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_02","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then User should see following meal tabs in food intake form","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":26,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_03","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the following fields in the food intake form","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":36,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_04","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Food Name\" field with placeholder \"e.g., Grilled Chicken Salad\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Food Name\"","children":[{"start":17,"value":"Food Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":51,"value":"\"e.g., Grilled Chicken Salad\"","children":[{"start":52,"value":"e.g., Grilled Chicken Salad","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":40,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_05","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see Serving Size dropdown options in food intake form","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":49,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_06","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see  \"Medium (1 cup)\" as the default value in the Serving Size dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"Medium (1 cup)\"","children":[{"start":18,"value":"Medium (1 cup)","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":53,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_07","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see calculator icon in calorie","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":57,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_08","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Calories\" field with placeholder \"e.g., 250\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Calories\"","children":[{"start":17,"value":"Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":50,"value":"\"e.g., 250\"","children":[{"start":51,"value":"e.g., 250","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":61,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_09","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see helper text \"Enter calories or click the calculator icon for automatic calculation.\" below calorie field","stepMatchArguments":[{"group":{"start":28,"value":"\"Enter calories or click the calculator icon for automatic calculation.\"","children":[{"start":29,"value":"Enter calories or click the calculator icon for automatic calculation.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":55,"pickleLine":65,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_10","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Notes\" field with placeholder \"Add any additional information...\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Notes\"","children":[{"start":17,"value":"Notes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"Add any additional information...\"","children":[{"start":48,"value":"Add any additional information...","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":69,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_11","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then User should see current date displayed in the date field","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":73,"tags":["@sweetBalance","@FoodIntake","@premiumUserRecordData","@FoodIntake_12","@UIValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is in Home Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks Food Intake","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see Save Food Entry button","stepMatchArguments":[]}]},
]; // bdd-data-end