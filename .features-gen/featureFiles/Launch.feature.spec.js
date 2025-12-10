// Generated from: featureFiles\Launch.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Launch Page Validations', () => {

  test('Validate the presence of App Name on the home page', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see app name on the top left', null, { pages }); 
  });

  test('Validate the presence of policy details', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see text "Our Terms of Service and Privacy Policy have recently been updated"', null, { pages }); 
  });

  test('Verify the homepage heading is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the heading "Smart Diabetes Tracking Powered by AI"', null, { pages }); 
  });

  test('Verify the Start Today input button is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a "Start Today" input button', null, { pages }); 
  });

  test('Verify the diabetes management tools section is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Comprehensive Diabetes Management Tools"', null, { pages }); 
  });

  test('Verify the Health Tracking card is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Health Tracking"', null, { pages }); 
  });

  test('Verify the Nutrition & Exercise card is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Nutrition & Exercise"', null, { pages }); 
  });

  test('Verify the Smart Insights card is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a card with title "Smart Insights"', null, { pages }); 
  });

  test('Validate description in Health Tracking feature card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Monitor glucose levels, medication, and vital statistics"', null, { pages }); 
    await Then('User should see the text "Easy logging of daily readings"', null, { pages }); 
    await Then('User should see the text "Visualize trends over time"', null, { pages }); 
    await Then('User should see the text "Set personalized targets"', null, { pages }); 
  });

  test('Validate description in Nutrition & Exercise card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Balance diet and physical activity for optimal control"', null, { pages }); 
    await Then('User should see the text "Carb counting tools"', null, { pages }); 
    await Then('User should see the text "Customized exercise plans"', null, { pages }); 
    await Then('User should see the text "Meal suggestions based on readings"', null, { pages }); 
  });

  test('Validate description in Smart Insights card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see the text "Get personalized guidance based on your data"', null, { pages }); 
    await Then('User should see the text "Pattern detection algorithms"', null, { pages }); 
    await Then('User should see the text "Early warning notifications"', null, { pages }); 
    await Then('User should see the text "Actionable recommendations"', null, { pages }); 
  });

  test('Validate icon in Health tracking feature card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see heart icon', null, { pages }); 
  });

  test('Validate icon in Nutrition & Exercise card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see activity inside square icon', null, { pages }); 
  });

  test('Validate icon in Smart Insights card', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see clock icon', null, { pages }); 
  });

  test('Verify testimonial from James D. is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "James D."', null, { pages }); 
  });

  test('Verify testimonial from Maria L. is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "Maria L."', null, { pages }); 
  });

  test('Verify testimonial from Robert T. is visible', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a testimonial from user "Robert T."', null, { pages }); 
  });

  test('Validate "Join our community of successful members" text is visible above testimonial section', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see "Join our community of successful members" text is visible above testimonial section', null, { pages }); 
  });

  test('Validate presence of 5 yellow stars above "Join our community of successful members" text', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 yellow stars above "Join our community of successful members" text', null, { pages }); 
  });

  test('Validate star ratings for all testimonials', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, And, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see 5 stars for "James D."', null, { pages }); 
    await And('User should see 5 stars for "Maria L."', null, { pages }); 
    await And('User should see 5 stars for "Robert T."', null, { pages }); 
  });

  test('Validate presence of bottom section heading in home page', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a section with heading "Take control of your diabetes today"', null, { pages }); 
  });

  test('Validate the presence of button "Check your Risk"', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User launches the browser', null, { pages }); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('User should see a button labeled "Check Your Risk"', null, { pages }); 
  });

  test('Verify redirection from Start Today button', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click the "Start Today" button', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Validate Login link visibility', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User look at the top right corner'); 
    await Then('User should see a link labeled "Login"', null, { pages }); 
  });

  test('Validate Login link redirection', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click on the "Login" link', null, { pages }); 
    await Then('User should be redirected to the Login page', null, { pages }); 
  });

  test('Verify redirection from Check Your Risk button', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User goes to the SweetBalance homepage', null, { pages }); 
    await When('User click on "Check Your Risk" button', null, { pages }); 
    await Then('User should be redirected to the assessment modal dialog', null, { pages }); 
  });

  test('Homepage loads within acceptable time', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('Page should be fully loaded within 3 seconds', null, { pages }); 
  });

  test('Homepage is responsive', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('All elements are readable and accessible without horizontal scrolling', null, { pages }); 
  });

  test('Homepage maintains accessibility standards', { tag: ['@skiplogin', '@launch'] }, async ({ Given, When, Then, pages }) => { 
    await Given('User is in browser'); 
    await When('User enters the SweetBalance url', null, { pages }); 
    await Then('All major sections are accessible with appropriate labels and alt texts', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\Launch.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then User should see app name on the top left","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":9,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"Our Terms of Service and Privacy Policy have recently been updated\"","stepMatchArguments":[{"group":{"start":21,"value":"\"Our Terms of Service and Privacy Policy have recently been updated\"","children":[{"start":22,"value":"Our Terms of Service and Privacy Policy have recently been updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see the heading \"Smart Diabetes Tracking Powered by AI\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Smart Diabetes Tracking Powered by AI\"","children":[{"start":29,"value":"Smart Diabetes Tracking Powered by AI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then User should see a \"Start Today\" input button","stepMatchArguments":[{"group":{"start":18,"value":"\"Start Today\"","children":[{"start":19,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":24,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Comprehensive Diabetes Management Tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Comprehensive Diabetes Management Tools\"","children":[{"start":26,"value":"Comprehensive Diabetes Management Tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":29,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Health Tracking\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Health Tracking\"","children":[{"start":35,"value":"Health Tracking","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":34,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":43,"gherkinStepLine":35,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Nutrition & Exercise\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Nutrition & Exercise\"","children":[{"start":35,"value":"Nutrition & Exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":39,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":49,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then User should see a card with title \"Smart Insights\"","stepMatchArguments":[{"group":{"start":34,"value":"\"Smart Insights\"","children":[{"start":35,"value":"Smart Insights","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":44,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":55,"gherkinStepLine":45,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Monitor glucose levels, medication, and vital statistics\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Monitor glucose levels, medication, and vital statistics\"","children":[{"start":26,"value":"Monitor glucose levels, medication, and vital statistics","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Easy logging of daily readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Easy logging of daily readings\"","children":[{"start":26,"value":"Easy logging of daily readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Visualize trends over time\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Visualize trends over time\"","children":[{"start":26,"value":"Visualize trends over time","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Set personalized targets\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Set personalized targets\"","children":[{"start":26,"value":"Set personalized targets","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":52,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":64,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Balance diet and physical activity for optimal control\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Balance diet and physical activity for optimal control\"","children":[{"start":26,"value":"Balance diet and physical activity for optimal control","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Carb counting tools\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Carb counting tools\"","children":[{"start":26,"value":"Carb counting tools","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":68,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Customized exercise plans\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Customized exercise plans\"","children":[{"start":26,"value":"Customized exercise plans","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Meal suggestions based on readings\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Meal suggestions based on readings\"","children":[{"start":26,"value":"Meal suggestions based on readings","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":60,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":73,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Get personalized guidance based on your data\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Get personalized guidance based on your data\"","children":[{"start":26,"value":"Get personalized guidance based on your data","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Pattern detection algorithms\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Pattern detection algorithms\"","children":[{"start":26,"value":"Pattern detection algorithms","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":77,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Early warning notifications\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Early warning notifications\"","children":[{"start":26,"value":"Early warning notifications","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":78,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then User should see the text \"Actionable recommendations\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Actionable recommendations\"","children":[{"start":26,"value":"Actionable recommendations","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":81,"pickleLine":68,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":82,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should see heart icon","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":73,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":88,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then User should see activity inside square icon","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":78,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":94,"gherkinStepLine":79,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then User should see clock icon","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":83,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":100,"gherkinStepLine":84,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"James D.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"James D.\"","children":[{"start":41,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":105,"pickleLine":88,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":106,"gherkinStepLine":89,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Maria L.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Maria L.\"","children":[{"start":41,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":111,"pickleLine":93,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":112,"gherkinStepLine":94,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":96,"keywordType":"Outcome","textWithKeyword":"Then User should see a testimonial from user \"Robert T.\"","stepMatchArguments":[{"group":{"start":40,"value":"\"Robert T.\"","children":[{"start":41,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":117,"pickleLine":98,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":118,"gherkinStepLine":99,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Join our community of successful members\" text is visible above testimonial section","stepMatchArguments":[{"group":{"start":16,"value":"\"Join our community of successful members\"","children":[{"start":17,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":123,"pickleLine":103,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":124,"gherkinStepLine":104,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 yellow stars above \"Join our community of successful members\" text","stepMatchArguments":[{"group":{"start":16,"value":"5","children":[]},"parameterTypeName":"int"},{"group":{"start":37,"value":"\"Join our community of successful members\"","children":[{"start":38,"value":"Join our community of successful members","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":129,"pickleLine":108,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":130,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":132,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see 5 stars for \"James D.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"James D.\"","children":[{"start":29,"value":"James D.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":133,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"And User should see 5 stars for \"Maria L.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Maria L.\"","children":[{"start":29,"value":"Maria L.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"And User should see 5 stars for \"Robert T.\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Robert T.\"","children":[{"start":29,"value":"Robert T.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":115,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":138,"gherkinStepLine":116,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":117,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then User should see a section with heading \"Take control of your diabetes today\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Take control of your diabetes today\"","children":[{"start":40,"value":"Take control of your diabetes today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":143,"pickleLine":120,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":144,"gherkinStepLine":121,"keywordType":"Context","textWithKeyword":"Given User launches the browser","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":122,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":123,"keywordType":"Outcome","textWithKeyword":"Then User should see a button labeled \"Check Your Risk\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Check Your Risk\"","children":[{"start":34,"value":"Check Your Risk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":149,"pickleLine":125,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":150,"gherkinStepLine":126,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"When User click the \"Start Today\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Start Today\"","children":[{"start":16,"value":"Start Today","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":152,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":155,"pickleLine":130,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":156,"gherkinStepLine":131,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When User look at the top right corner","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then User should see a link labeled \"Login\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Login\"","children":[{"start":32,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":161,"pickleLine":135,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":162,"gherkinStepLine":136,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":137,"keywordType":"Action","textWithKeyword":"When User click on the \"Login\" link","stepMatchArguments":[{"group":{"start":18,"value":"\"Login\"","children":[{"start":19,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":164,"gherkinStepLine":138,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the Login page","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":140,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":168,"gherkinStepLine":141,"keywordType":"Context","textWithKeyword":"Given User goes to the SweetBalance homepage","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"When User click on \"Check Your Risk\" button","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the assessment modal dialog","stepMatchArguments":[]}]},
  {"pwTestLine":173,"pickleLine":145,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":174,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Page should be fully loaded within 3 seconds","stepMatchArguments":[]}]},
  {"pwTestLine":179,"pickleLine":150,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":180,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then All elements are readable and accessible without horizontal scrolling","stepMatchArguments":[]}]},
  {"pwTestLine":185,"pickleLine":155,"tags":["@skiplogin","@launch"],"steps":[{"pwStepLine":186,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given User is in browser","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When User enters the SweetBalance url","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then All major sections are accessible with appropriate labels and alt texts","stepMatchArguments":[]}]},
]; // bdd-data-end