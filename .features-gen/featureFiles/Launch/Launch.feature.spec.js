// Generated from: featureFiles/Launch/Launch.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Launch Page Validations', () => {

  test.beforeEach('Background', async ({ Given, pages }, testInfo) => { if (testInfo.error) return;
    await Given('User launches the browser', null, { pages }); 
  });
  
  test('Validate the presence of App Name on the home page', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see app name on the top left', null, { pages }); 
  });

  test('Validate the presence of policy details', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see text "Our Terms of Service and Privacy Policy have recently been updated"', null, { pages }); 
  });

  test('Verify the homepage heading is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the heading "Smart Diabetes Tracking Powered by AI"', null, { pages }); 
  });

  test('Verify the Start Today input button is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a "Start Today" input button', null, { pages }); 
  });

  test('Verify the diabetes management tools section is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Comprehensive Diabetes Management Tools"', null, { pages }); 
  });

  test('Verify the Health Tracking card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a card with title "Health Tracking"', null, { pages }); 
  });

  test('Verify the Nutrition & Exercise card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a card with title "Nutrition & Exercise"', null, { pages }); 
  });

  test('Verify the Smart Insights card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a card with title "Smart Insights"', null, { pages }); 
  });

  test('Validate Health Tracking description - monitor glucose levels text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Monitor glucose levels, medication, and vital statistics"', null, { pages }); 
  });

  test('Validate Health Tracking description - easy logging text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Easy logging of daily readings"', null, { pages }); 
  });

  test('Validate Health Tracking description - visualize trends text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Visualize trends over time"', null, { pages }); 
  });

  test('Validate Health Tracking description - personalized targets text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Set personalized targets"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - balance diet and activity text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Balance diet and physical activity for optimal control"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - carb counting tools text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Carb counting tools"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - customized exercise plans text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Customized exercise plans"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - meal suggestions text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Meal suggestions based on readings"', null, { pages }); 
  });

  test('Validate Smart Insights description - personalized guidance text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Get personalized guidance based on your data"', null, { pages }); 
  });

  test('Validate Smart Insights description - pattern detection algorithms text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Pattern detection algorithms"', null, { pages }); 
  });

  test('Validate Smart Insights description - early warning notifications text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Early warning notifications"', null, { pages }); 
  });

  test('Validate Smart Insights description - actionable recommendations text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see the text "Actionable recommendations"', null, { pages }); 
  });

  test('Validate icon in Health tracking feature card', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see heart icon', null, { pages }); 
  });

  test('Validate icon in Nutrition & Exercise card', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see activity inside square icon', null, { pages }); 
  });

  test('Validate icon in Smart Insights card', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see clock icon', null, { pages }); 
  });

  test('Verify testimonial from James D. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a testimonial from user "James D."', null, { pages }); 
  });

  test('Verify testimonial from Maria L. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a testimonial from user "Maria L."', null, { pages }); 
  });

  test('Verify testimonial from Robert T. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a testimonial from user "Robert T."', null, { pages }); 
  });

  test('Validate "Join our community of successful members" text is visible above testimonial section', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see "Join our community of successful members" text is visible above testimonial section', null, { pages }); 
  });

  test('Validate presence of 5 yellow stars above "Join our community of successful members" text', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see 5 yellow stars above "Join our community of successful members" text', null, { pages }); 
  });

  test('Validate star rating for testimonial by James D.', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see 5 stars for "James D."', null, { pages }); 
  });

  test('Validate star rating for testimonial by Maria L.', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see 5 stars for "Maria L."', null, { pages }); 
  });

  test('Validate star rating for testimonial by Robert T.', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see 5 stars for "Robert T."', null, { pages }); 
  });

  test('Validate presence of bottom section heading in home page', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a section with heading "Take control of your diabetes today"', null, { pages }); 
  });

  test('Validate the presence of button "Check your Risk"', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a button labeled "Check Your Risk"', null, { pages }); 
  });

  test('Verify redirection from Start Today button', { tag: ['@skiplaunch', '@launch'] }, async ({ When, Then, pages }) => { 
    await When('User click the "Start Today" button', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Validate Login link visibility', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('User should see a link labeled "Login"', null, { pages }); 
  });

  test('Validate Login link redirection', { tag: ['@skiplaunch', '@launch'] }, async ({ When, Then, pages }) => { 
    await When('User click on the "Login" link', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Verify redirection from Check Your Risk button', { tag: ['@skiplaunch', '@launch'] }, async ({ When, Then, pages }) => { 
    await When('User click on "Check Your Risk" button', null, { pages }); 
    await Then('User should be redirected to the assessment modal dialog', null, { pages }); 
  });

  test('Homepage loads within acceptable time', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('Page should be fully loaded within 3 seconds', null, { pages }); 
  });

  test('Homepage is responsive', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('All elements are readable and accessible without horizontal scrolling', null, { pages }); 
  });

  test('Homepage maintains accessibility standards', { tag: ['@skiplaunch', '@launch'] }, async ({ Then, pages }) => { 
    await Then('All major sections are accessible with appropriate labels and alt texts', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles/Launch/Launch.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then User should see app name on the top left","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":10,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"Our Terms of Service and Privacy Policy have recently been updated\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Our Terms of Service and Privacy Policy have recently been updated\"","children":[{"start":22,"value":"Our Terms of Service and Privacy Policy have recently been updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":13,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then User should see the heading \"Smart Diabetes Tracking Powered by AI\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Smart Diabetes Tracking Powered by AI\"","children":[{"start":29,"value":"Smart Diabetes Tracking Powered by AI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see a \"Start Today\" input button","stepMatchArguments":[{"group":{"start":18,"value":"\"Start Today\"","children":[{"start":19,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Comprehensive Diabetes Management Tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Comprehensive Diabetes Management Tools\"","children":[{"start":26,"value":"Comprehensive Diabetes Management Tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Health Tracking\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Health Tracking\"","children":[{"start":35,"value":"Health Tracking","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":25,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Nutrition & Exercise\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Nutrition & Exercise\"","children":[{"start":35,"value":"Nutrition & Exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":28,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Smart Insights\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Smart Insights\"","children":[{"start":35,"value":"Smart Insights","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":31,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Monitor glucose levels, medication, and vital statistics\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Monitor glucose levels, medication, and vital statistics\"","children":[{"start":26,"value":"Monitor glucose levels, medication, and vital statistics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":34,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Easy logging of daily readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Easy logging of daily readings\"","children":[{"start":26,"value":"Easy logging of daily readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":37,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Visualize trends over time\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Visualize trends over time\"","children":[{"start":26,"value":"Visualize trends over time","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":40,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Set personalized targets\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Set personalized targets\"","children":[{"start":26,"value":"Set personalized targets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":43,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Balance diet and physical activity for optimal control\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Balance diet and physical activity for optimal control\"","children":[{"start":26,"value":"Balance diet and physical activity for optimal control","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":62,"pickleLine":46,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Carb counting tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Carb counting tools\"","children":[{"start":26,"value":"Carb counting tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":49,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Customized exercise plans\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Customized exercise plans\"","children":[{"start":26,"value":"Customized exercise plans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":70,"pickleLine":52,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Meal suggestions based on readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Meal suggestions based on readings\"","children":[{"start":26,"value":"Meal suggestions based on readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":74,"pickleLine":55,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Get personalized guidance based on your data\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Get personalized guidance based on your data\"","children":[{"start":26,"value":"Get personalized guidance based on your data","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":58,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Pattern detection algorithms\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Pattern detection algorithms\"","children":[{"start":26,"value":"Pattern detection algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":61,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Early warning notifications\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Early warning notifications\"","children":[{"start":26,"value":"Early warning notifications","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":86,"pickleLine":64,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Actionable recommendations\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Actionable recommendations\"","children":[{"start":26,"value":"Actionable recommendations","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":90,"pickleLine":67,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then User should see heart icon","stepMatchArguments":[]}]},
  {"pwTestLine":94,"pickleLine":70,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should see activity inside square icon","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":73,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see clock icon","stepMatchArguments":[]}]},
  {"pwTestLine":102,"pickleLine":76,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"James D.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"James D.\"","children":[{"start":41,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":106,"pickleLine":79,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Maria L.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Maria L.\"","children":[{"start":41,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":82,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Robert T.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Robert T.\"","children":[{"start":41,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":114,"pickleLine":85,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Join our community of successful members\" text is visible above testimonial section","stepMatchArguments":[{"group":{"start":16,"value":"\"Join our community of successful members\"","children":[{"start":17,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":118,"pickleLine":88,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 yellow stars above \"Join our community of successful members\" text","stepMatchArguments":[{"group":{"start":16,"value":"5","children":[]},"parameterTypeName":"int"},{"group":{"start":37,"value":"\"Join our community of successful members\"","children":[{"start":38,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":91,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"James D.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"James D.\"","children":[{"start":29,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":126,"pickleLine":94,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"Maria L.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Maria L.\"","children":[{"start":29,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":130,"pickleLine":97,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"Robert T.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Robert T.\"","children":[{"start":29,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":100,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see a section with heading \"Take control of your diabetes today\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Take control of your diabetes today\"","children":[{"start":40,"value":"Take control of your diabetes today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":138,"pickleLine":103,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then User should see a button labeled \"Check Your Risk\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Check Your Risk\"","children":[{"start":34,"value":"Check Your Risk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":106,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When User click the \"Start Today\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Start Today\"","children":[{"start":16,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":147,"pickleLine":110,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see a link labeled \"Login\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Login\"","children":[{"start":32,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":151,"pickleLine":113,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When User click on the \"Login\" link","stepMatchArguments":[{"group":{"start":18,"value":"\"Login\"","children":[{"start":19,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":153,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":156,"pickleLine":117,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":118,"keywordType":"Action","textWithKeyword":"When User click on \"Check Your Risk\" button","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":119,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the assessment modal dialog","stepMatchArguments":[]}]},
  {"pwTestLine":161,"pickleLine":121,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then Page should be fully loaded within 3 seconds","stepMatchArguments":[]}]},
  {"pwTestLine":165,"pickleLine":124,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":125,"keywordType":"Outcome","textWithKeyword":"Then All elements are readable and accessible without horizontal scrolling","stepMatchArguments":[]}]},
  {"pwTestLine":169,"pickleLine":127,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then All major sections are accessible with appropriate labels and alt texts","stepMatchArguments":[]}]},
]; // bdd-data-end