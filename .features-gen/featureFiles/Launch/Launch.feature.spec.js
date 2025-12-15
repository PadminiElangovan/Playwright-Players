// Generated from: featureFiles/Launch/Launch.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Launch Page Validations', () => {

  test('Validate the presence of App Name on the home page', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see app name on the top left', null, { pages }); 
  });

  test('Validate the presence of policy details', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see text "Our Terms of Service and Privacy Policy have recently been updated"', null, { pages }); 
  });

  test('Verify the homepage heading is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the heading "Smart Diabetes Tracking Powered by AI"', null, { pages }); 
  });

  test('Verify the Start Today input button is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a "Start Today" input button', null, { pages }); 
  });

  test('Verify the diabetes management tools section is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Comprehensive Diabetes Management Tools"', null, { pages }); 
  });

  test('Verify the Health Tracking card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Health Tracking"', null, { pages }); 
  });

  test('Verify the Nutrition & Exercise card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Nutrition & Exercise"', null, { pages }); 
  });

  test('Verify the Smart Insights card is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Smart Insights"', null, { pages }); 
  });

  test('Validate Health Tracking description - monitor glucose levels text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Monitor glucose levels, medication, and vital statistics"', null, { pages }); 
  });

  test('Validate Health Tracking description - easy logging text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Easy logging of daily readings"', null, { pages }); 
  });

  test('Validate Health Tracking description - visualize trends text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Visualize trends over time"', null, { pages }); 
  });

  test('Validate Health Tracking description - personalized targets text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Set personalized targets"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - balance diet and activity text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Balance diet and physical activity for optimal control"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - carb counting tools text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Carb counting tools"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - customized exercise plans text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Customized exercise plans"', null, { pages }); 
  });

  test('Validate Nutrition & Exercise description - meal suggestions text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Meal suggestions based on readings"', null, { pages }); 
  });

  test('Validate Smart Insights description - personalized guidance text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Get personalized guidance based on your data"', null, { pages }); 
  });

  test('Validate Smart Insights description - pattern detection algorithms text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Pattern detection algorithms"', null, { pages }); 
  });

  test('Validate Smart Insights description - early warning notifications text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Early warning notifications"', null, { pages }); 
  });

  test('Validate Smart Insights description - actionable recommendations text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Actionable recommendations"', null, { pages }); 
  });

  test('Validate icon in Health tracking feature card', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see heart icon', null, { pages }); 
  });

  test('Validate icon in Nutrition & Exercise card', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see activity inside square icon', null, { pages }); 
  });

  test('Validate icon in Smart Insights card', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see clock icon', null, { pages }); 
  });

  test('Verify testimonial from James D. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "James D."', null, { pages }); 
  });

  test('Verify testimonial from Maria L. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "Maria L."', null, { pages }); 
  });

  test('Verify testimonial from Robert T. is visible', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "Robert T."', null, { pages }); 
  });

  test('Validate "Join our community of successful members" text is visible above testimonial section', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see "Join our community of successful members" text is visible above testimonial section', null, { pages }); 
  });

  test('Validate presence of 5 yellow stars above "Join our community of successful members" text', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 yellow stars above "Join our community of successful members" text', null, { pages }); 
  });

  test('Validate star rating for testimonial by James D.', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 stars for "James D."', null, { pages }); 
  });

  test('Validate star rating for testimonial by Maria L.', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 stars for "Maria L."', null, { pages }); 
  });

  test('Validate star rating for testimonial by Robert T.', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 stars for "Robert T."', null, { pages }); 
  });

  test('Validate presence of bottom section heading in home page', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a section with heading "Take control of your diabetes today"', null, { pages }); 
  });

  test('Validate the presence of button "Check your Risk"', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a button labeled "Check Your Risk"', null, { pages }); 
  });

  test('Verify redirection from Start Today button', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click the "Start Today" button', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Validate Login link visibility', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User look at the top right corner'); 
    await Then('User should see a link labeled "Login"', null, { pages }); 
  });

  test('Validate Login link redirection', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click on the "Login" link', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Verify redirection from Check Your Risk button', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click on "Check Your Risk" button', null, { pages }); 
    await Then('User should be redirected to the assessment modal dialog', null, { pages }); 
  });

  test('Homepage loads within acceptable time', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('Page should be fully loaded within 3 seconds', null, { pages }); 
  });

  test('Homepage is responsive', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('All elements are readable and accessible without horizontal scrolling', null, { pages }); 
  });

  test('Homepage maintains accessibility standards', { tag: ['@skiplaunch', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
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
  {"pwTestLine":6,"pickleLine":4,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see app name on the top left","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"Our Terms of Service and Privacy Policy have recently been updated\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Our Terms of Service and Privacy Policy have recently been updated\"","children":[{"start":22,"value":"Our Terms of Service and Privacy Policy have recently been updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the heading \"Smart Diabetes Tracking Powered by AI\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Smart Diabetes Tracking Powered by AI\"","children":[{"start":29,"value":"Smart Diabetes Tracking Powered by AI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see a \"Start Today\" input button","stepMatchArguments":[{"group":{"start":18,"value":"\"Start Today\"","children":[{"start":19,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":24,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Comprehensive Diabetes Management Tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Comprehensive Diabetes Management Tools\"","children":[{"start":26,"value":"Comprehensive Diabetes Management Tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":29,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Health Tracking\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Health Tracking\"","children":[{"start":35,"value":"Health Tracking","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":34,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":43,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Nutrition & Exercise\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Nutrition & Exercise\"","children":[{"start":35,"value":"Nutrition & Exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":39,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":49,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Smart Insights\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Smart Insights\"","children":[{"start":35,"value":"Smart Insights","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":44,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":55,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Monitor glucose levels, medication, and vital statistics\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Monitor glucose levels, medication, and vital statistics\"","children":[{"start":26,"value":"Monitor glucose levels, medication, and vital statistics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":49,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":61,"gherkinStepLine":50,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Easy logging of daily readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Easy logging of daily readings\"","children":[{"start":26,"value":"Easy logging of daily readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":54,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":67,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Visualize trends over time\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Visualize trends over time\"","children":[{"start":26,"value":"Visualize trends over time","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":59,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":73,"gherkinStepLine":60,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Set personalized targets\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Set personalized targets\"","children":[{"start":26,"value":"Set personalized targets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":64,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":79,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Balance diet and physical activity for optimal control\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Balance diet and physical activity for optimal control\"","children":[{"start":26,"value":"Balance diet and physical activity for optimal control","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":84,"pickleLine":69,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":85,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Carb counting tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Carb counting tools\"","children":[{"start":26,"value":"Carb counting tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":90,"pickleLine":74,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":91,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Customized exercise plans\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Customized exercise plans\"","children":[{"start":26,"value":"Customized exercise plans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":96,"pickleLine":79,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":97,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Meal suggestions based on readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Meal suggestions based on readings\"","children":[{"start":26,"value":"Meal suggestions based on readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":102,"pickleLine":84,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":103,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Get personalized guidance based on your data\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Get personalized guidance based on your data\"","children":[{"start":26,"value":"Get personalized guidance based on your data","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":108,"pickleLine":89,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":109,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Pattern detection algorithms\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Pattern detection algorithms\"","children":[{"start":26,"value":"Pattern detection algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":114,"pickleLine":94,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":115,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Early warning notifications\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Early warning notifications\"","children":[{"start":26,"value":"Early warning notifications","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":120,"pickleLine":99,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":121,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Actionable recommendations\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Actionable recommendations\"","children":[{"start":26,"value":"Actionable recommendations","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":126,"pickleLine":104,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":127,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then User should see heart icon","stepMatchArguments":[]}]},
  {"pwTestLine":132,"pickleLine":109,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":133,"gherkinStepLine":110,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then User should see activity inside square icon","stepMatchArguments":[]}]},
  {"pwTestLine":138,"pickleLine":114,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":139,"gherkinStepLine":115,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then User should see clock icon","stepMatchArguments":[]}]},
  {"pwTestLine":144,"pickleLine":119,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":145,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"James D.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"James D.\"","children":[{"start":41,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":150,"pickleLine":124,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":151,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Maria L.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Maria L.\"","children":[{"start":41,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":156,"pickleLine":129,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":157,"gherkinStepLine":130,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":131,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Robert T.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Robert T.\"","children":[{"start":41,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":162,"pickleLine":134,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":163,"gherkinStepLine":135,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":136,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":137,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Join our community of successful members\" text is visible above testimonial section","stepMatchArguments":[{"group":{"start":16,"value":"\"Join our community of successful members\"","children":[{"start":17,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":168,"pickleLine":139,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":169,"gherkinStepLine":140,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":141,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":142,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 yellow stars above \"Join our community of successful members\" text","stepMatchArguments":[{"group":{"start":16,"value":"5","children":[]},"parameterTypeName":"int"},{"group":{"start":37,"value":"\"Join our community of successful members\"","children":[{"start":38,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":174,"pickleLine":144,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":175,"gherkinStepLine":145,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":146,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":147,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"James D.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"James D.\"","children":[{"start":29,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":180,"pickleLine":149,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":181,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"Maria L.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Maria L.\"","children":[{"start":29,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":186,"pickleLine":154,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":187,"gherkinStepLine":155,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":156,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":157,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"Robert T.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Robert T.\"","children":[{"start":29,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":192,"pickleLine":159,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":193,"gherkinStepLine":160,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":161,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":162,"keywordType":"Outcome","textWithKeyword":"Then User should see a section with heading \"Take control of your diabetes today\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Take control of your diabetes today\"","children":[{"start":40,"value":"Take control of your diabetes today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":198,"pickleLine":164,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":199,"gherkinStepLine":165,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":166,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":167,"keywordType":"Outcome","textWithKeyword":"Then User should see a button labeled \"Check Your Risk\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Check Your Risk\"","children":[{"start":34,"value":"Check Your Risk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":204,"pickleLine":169,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":205,"gherkinStepLine":170,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":171,"keywordType":"Action","textWithKeyword":"When User click the \"Start Today\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Start Today\"","children":[{"start":16,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":207,"gherkinStepLine":172,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":210,"pickleLine":174,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":211,"gherkinStepLine":175,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User look at the top right corner","stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see a link labeled \"Login\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Login\"","children":[{"start":32,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":216,"pickleLine":179,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":217,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":218,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When User click on the \"Login\" link","stepMatchArguments":[{"group":{"start":18,"value":"\"Login\"","children":[{"start":19,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":219,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":222,"pickleLine":184,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":223,"gherkinStepLine":185,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":186,"keywordType":"Action","textWithKeyword":"When User click on \"Check Your Risk\" button","stepMatchArguments":[]},{"pwStepLine":225,"gherkinStepLine":187,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the assessment modal dialog","stepMatchArguments":[]}]},
  {"pwTestLine":228,"pickleLine":189,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":229,"gherkinStepLine":190,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":230,"gherkinStepLine":191,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":192,"keywordType":"Outcome","textWithKeyword":"Then Page should be fully loaded within 3 seconds","stepMatchArguments":[]}]},
  {"pwTestLine":234,"pickleLine":194,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":235,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then All elements are readable and accessible without horizontal scrolling","stepMatchArguments":[]}]},
  {"pwTestLine":240,"pickleLine":199,"tags":["@skiplaunch","@launch"],"steps":[{"pwStepLine":241,"gherkinStepLine":200,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":243,"gherkinStepLine":202,"keywordType":"Outcome","textWithKeyword":"Then All major sections are accessible with appropriate labels and alt texts","stepMatchArguments":[]}]},
]; // bdd-data-end