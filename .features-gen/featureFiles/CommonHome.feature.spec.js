// Generated from: featureFiles\CommonHome.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Home Page - Common Features for Registered User', () => {

  test.beforeEach('Background', async ({ Given }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the app'); 
  });
  
  test('Validate user header section', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see home text "SweetBalance"', null, { pages }); 
    await Then('User should see home text "PlaywrightFreeUser"', null, { pages }); 
    await Then('User should see home text "Logout"', null, { pages }); 
  });

  test('Validate navigation tabs', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see navigation text "Home"', null, { pages }); 
    await Then('User should see navigation text "Dashboard"', null, { pages }); 
    await Then('User should see navigation text "Education"', null, { pages }); 
  });

  test('Validate status and metric labels', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see home text "Current Status"', null, { pages }); 
    await Then('User should see home text "Last updated"', null, { pages }); 
    await Then('User should see timestamp next to the Last updated label', null, { pages }); 
    await Then('User should see home text "Latest HbA1C"', null, { pages }); 
    await Then('User should see home text "BMI"', null, { pages }); 
    await Then('User should see home text "Average Blood Sugar"', null, { pages }); 
  });

  test('Validate metric values', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see metric values for HbA1C, BMI, and Average Blood Sugar', null, { pages }); 
  });

  test('Validate condition text and units', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see condition text "Diabetic"', null, { pages }); 
    await Then('User should see condition text "Obese"', null, { pages }); 
    await Then('User should see unit text "mg/dL"', null, { pages }); 
  });

  test('Validate Today’s Meal Plan section', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see meal plan text "Today\'s Meal Plan"', null, { pages }); 
    await Then('User should see meal tab "Breakfast"', null, { pages }); 
    await Then('User should see meal tab "Lunch"', null, { pages }); 
    await Then('User should see meal tab "Dinner"', null, { pages }); 
    await Then('User should see meal tab "Snacks"', null, { pages }); 
    await Then('User should see meal plan text "View Full Plan"', null, { pages }); 
  });

  test('Validate Breakfast tab is selected by default', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see Breakfast tab selected by default', null, { pages }); 
  });

  test('Validate sidebar labels', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see sidebar label "Meal Plan"', null, { pages }); 
    await Then('User should see sidebar label "Exercise"', null, { pages }); 
    await Then('User should see sidebar tab container within the flex layout', null, { pages }); 
  });

  test('Validate sidebar icons', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await Then('User should see utensil icon in the Meal Plan tab', null, { pages }); 
    await Then('User should see dumbbell icon in the Exercise tab', null, { pages }); 
  });

  test('Validate Breakfast meal section is clickable', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await When('User clicks on the "Breakfast" meal section', null, { pages }); 
    await Then('User should see meal details section', null, { pages }); 
  });

  test('Validate Lunch meal section is clickable', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await When('User clicks on the "Lunch" meal section', null, { pages }); 
    await Then('User should see meal details section', null, { pages }); 
  });

  test('Validate Dinner meal section is clickable', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await When('User clicks on the "Dinner" meal section', null, { pages }); 
    await Then('User should see meal details section', null, { pages }); 
  });

  test('Validate Snacks meal section is clickable', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await When('User clicks on the "Snacks" meal section', null, { pages }); 
    await Then('User should see meal details section', null, { pages }); 
  });

  test('Validate Snacks pre-meal details', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User is on the Home page', null, { pages }); 
    await When('User clicks on the "Snacks" meal section', null, { pages }); 
    await Then('User should see the dish title in the meal section', null, { pages }); 
    await Then('User should see the description for the dish', null, { pages }); 
    await Then('User should see the pre-meal item name', null, { pages }); 
    await Then('User should see the pre-meal calorie value', null, { pages }); 
    await Then('User should see text "calories" after the calorie value in pre-meal', null, { pages }); 
    await Then('User should see time in "hh:mm" format in pre-meal', null, { pages }); 
    await Then('User should see green color for Carbs', null, { pages }); 
    await Then('User should see purple color for Fat', null, { pages }); 
    await Then('User should see pink color for Protein', null, { pages }); 
    await Then('User should see unit "g" for Carbs', null, { pages }); 
    await Then('User should see unit "g" for Protein', null, { pages }); 
    await Then('User should see unit "g" for Fat', null, { pages }); 
  });

  test('Validate breakfast pre-meal item and calories', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Breakfast" meal section', null, { pages }); 
    await Then('User should see the pre-meal item name', null, { pages }); 
    await Then('User should see the pre-meal calorie value', null, { pages }); 
  });

  test('Validate lunch pre-meal item and calories', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Lunch" meal section', null, { pages }); 
    await Then('User should see the pre-meal item name', null, { pages }); 
    await Then('User should see the pre-meal calorie value', null, { pages }); 
  });

  test('Validate dinner pre-meal item and calories', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Dinner" meal section', null, { pages }); 
    await Then('User should see the pre-meal item name', null, { pages }); 
    await Then('User should see the pre-meal calorie value', null, { pages }); 
  });

  test('Validate breakfast pre-meal indicator and time', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Breakfast" meal section', null, { pages }); 
    await Then('User should see indicator "AM" for breakfast pre-meal', null, { pages }); 
    await Then('User should see time in "hh:mm" format in pre-meal', null, { pages }); 
  });

  test('Validate lunch pre-meal indicator and time', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Lunch" meal section', null, { pages }); 
    await Then('User should see indicator "PM" for lunch pre-meal', null, { pages }); 
    await Then('User should see time in "hh:mm" format in pre-meal', null, { pages }); 
  });

  test('Validate dinner pre-meal indicator and time', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Dinner" meal section', null, { pages }); 
    await Then('User should see indicator "PM" for dinner pre-meal', null, { pages }); 
    await Then('User should see time in "hh:mm" format in pre-meal', null, { pages }); 
  });

  test('Validate time in pre-breakfast', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Breakfast" meal section', null, { pages }); 
    await Then('User should see 7 o\'clock for Breakfast', null, { pages }); 
  });

  test('Lunch time should be 12 o\'clock', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Lunch" meal section', null, { pages }); 
    await Then('User should see 12 o\'clock for Lunch', null, { pages }); 
  });

  test('Dinner time should be 7 o\'clock', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks on the "Dinner" meal section', null, { pages }); 
    await Then('User should see 7 o\'clock for Dinner', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\CommonHome.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"SweetBalance\"","stepMatchArguments":[{"group":{"start":26,"value":"\"SweetBalance\"","children":[{"start":27,"value":"SweetBalance","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"PlaywrightFreeUser\"","stepMatchArguments":[{"group":{"start":26,"value":"\"PlaywrightFreeUser\"","children":[{"start":27,"value":"PlaywrightFreeUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Logout\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Logout\"","children":[{"start":27,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":13,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation text \"Home\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Home\"","children":[{"start":33,"value":"Home","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation text \"Dashboard\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Dashboard\"","children":[{"start":33,"value":"Dashboard","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation text \"Education\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Education\"","children":[{"start":33,"value":"Education","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Current Status\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Current Status\"","children":[{"start":27,"value":"Current Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Last updated\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Last updated\"","children":[{"start":27,"value":"Last updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see timestamp next to the Last updated label","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Latest HbA1C\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Latest HbA1C\"","children":[{"start":27,"value":"Latest HbA1C","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"BMI\"","stepMatchArguments":[{"group":{"start":26,"value":"\"BMI\"","children":[{"start":27,"value":"BMI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Average Blood Sugar\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Average Blood Sugar\"","children":[{"start":27,"value":"Average Blood Sugar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":28,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then User should see metric values for HbA1C, BMI, and Average Blood Sugar","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":32,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should see condition text \"Diabetic\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Diabetic\"","children":[{"start":32,"value":"Diabetic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see condition text \"Obese\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Obese\"","children":[{"start":32,"value":"Obese","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User should see unit text \"mg/dL\"","stepMatchArguments":[{"group":{"start":26,"value":"\"mg/dL\"","children":[{"start":27,"value":"mg/dL","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":38,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see meal plan text \"Today's Meal Plan\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Today's Meal Plan\"","children":[{"start":32,"value":"Today's Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Breakfast\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Breakfast\"","children":[{"start":26,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Lunch\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Lunch\"","children":[{"start":26,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Dinner\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Dinner\"","children":[{"start":26,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Snacks\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Snacks\"","children":[{"start":26,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then User should see meal plan text \"View Full Plan\"","stepMatchArguments":[{"group":{"start":31,"value":"\"View Full Plan\"","children":[{"start":32,"value":"View Full Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":47,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User should see Breakfast tab selected by default","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":51,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar label \"Meal Plan\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Meal Plan\"","children":[{"start":31,"value":"Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar label \"Exercise\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Exercise\"","children":[{"start":31,"value":"Exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar tab container within the flex layout","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":57,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then User should see utensil icon in the Meal Plan tab","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then User should see dumbbell icon in the Exercise tab","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":62,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Breakfast\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Breakfast\"","children":[{"start":20,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":67,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Lunch\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Lunch\"","children":[{"start":20,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":83,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":72,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Dinner\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Dinner\"","children":[{"start":20,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":89,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":77,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Snacks\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Snacks\"","children":[{"start":20,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":83,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"When User is on the Home page","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Snacks\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Snacks\"","children":[{"start":20,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":101,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should see the dish title in the meal section","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see the description for the dish","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal item name","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal calorie value","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"calories\" after the calorie value in pre-meal","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format in pre-meal","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should see green color for Carbs","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then User should see purple color for Fat","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then User should see pink color for Protein","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then User should see unit \"g\" for Carbs","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"Then User should see unit \"g\" for Protein","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then User should see unit \"g\" for Fat","stepMatchArguments":[]}]},
  {"pwTestLine":115,"pickleLine":99,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Breakfast\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Breakfast\"","children":[{"start":20,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":117,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal item name","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":121,"pickleLine":104,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Lunch\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Lunch\"","children":[{"start":20,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":123,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal item name","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":127,"pickleLine":109,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Dinner\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Dinner\"","children":[{"start":20,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":129,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal item name","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then User should see the pre-meal calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":133,"pickleLine":114,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Breakfast\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Breakfast\"","children":[{"start":20,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":135,"gherkinStepLine":116,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"AM\" for breakfast pre-meal","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format in pre-meal","stepMatchArguments":[]}]},
  {"pwTestLine":139,"pickleLine":119,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Lunch\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Lunch\"","children":[{"start":20,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":141,"gherkinStepLine":121,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"PM\" for lunch pre-meal","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format in pre-meal","stepMatchArguments":[]}]},
  {"pwTestLine":145,"pickleLine":124,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Dinner\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Dinner\"","children":[{"start":20,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":147,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"PM\" for dinner pre-meal","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format in pre-meal","stepMatchArguments":[]}]},
  {"pwTestLine":151,"pickleLine":129,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Breakfast\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Breakfast\"","children":[{"start":20,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":153,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then User should see 7 o'clock for Breakfast","stepMatchArguments":[]}]},
  {"pwTestLine":156,"pickleLine":133,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":134,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Lunch\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Lunch\"","children":[{"start":20,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":158,"gherkinStepLine":135,"keywordType":"Outcome","textWithKeyword":"Then User should see 12 o'clock for Lunch","stepMatchArguments":[]}]},
  {"pwTestLine":161,"pickleLine":137,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":138,"keywordType":"Action","textWithKeyword":"When User clicks on the \"Dinner\" meal section","stepMatchArguments":[{"group":{"start":19,"value":"\"Dinner\"","children":[{"start":20,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":163,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then User should see 7 o'clock for Dinner","stepMatchArguments":[]}]},
]; // bdd-data-end