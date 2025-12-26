// Generated from: featureFiles/CommonHome/CommonHome.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Home Page - Common Features for Registered User', () => {

  test.beforeEach('Background', async ({ Given, When, pages }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the app', null, { pages }); 
    await When('User is on the Home page', null, { pages }); 
  });
  
  test.describe('Validate header items', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see "SweetBalance" text on the home page', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see "Logout" text on the home page', null, { pages }); 
    });

  });

  test('Verify user name in home page', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see username displayed on the home page', null, { pages }); 
  });

  test('Verify top navigation bar is visible', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see top navigation bar', null, { pages }); 
  });

  test.describe('Validate navigation tabs', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see navigation tab "Home"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see navigation tab "Dashboard"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see navigation tab "Education"', null, { pages }); 
    });

  });

  test.describe('Validate status labels', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see home text "Current Status"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see home text "Last updated"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see home text "Latest HbA1C"', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see home text "BMI"', null, { pages }); 
    });

    test('Example #5', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see home text "Average Blood Sugar"', null, { pages }); 
    });

  });

  test('Verify timestamp next to Last Updated', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see timestamp next to Last updated text', null, { pages }); 
  });

  test('Verify last updated timestamp is in 12-hour format', { tag: ['@commonhome', '@loginfree', '@bug'] }, async ({ Then, pages }) => { 
    await Then('User should see last updated timestamp in 12-hour format', null, { pages }); 
  });

  test('Verify 12-hour clock indicator is visible for last updated', { tag: ['@commonhome', '@loginfree', '@bug'] }, async ({ Then, pages }) => { 
    await Then('User should see last updated 12-hour clock indicator', null, { pages }); 
  });

  test.describe('Validate metric values are visible', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see metric value "HbA1C"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see metric value "BMI"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see metric value "Average Blood Sugar"', null, { pages }); 
    });

  });

  test.describe('Validate condition text for registered user', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see condition text "Normal"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see condition text "Diabetic"', null, { pages }); 
    });

  });

  test('Verify unit for Average Blood Sugar', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see "mg/dL" unit below Average Blood Sugar', null, { pages }); 
  });

  test('Verify Today\'s Meal Plan title', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see home text "Today\'s Meal Plan"', null, { pages }); 
  });

  test.describe('Validate meal tabs', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see meal tab "Breakfast"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see meal tab "Lunch"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see meal tab "Dinner"', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see meal tab "Snacks"', null, { pages }); 
    });

  });

  test('Verify Breakfast tab is selected by default', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see Breakfast tab selected by default', null, { pages }); 
  });

  test('Verify sidebar title in flex container', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see sidebar title in flex container', null, { pages }); 
  });

  test.describe('Validate sidebar tabs', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see sidebar text "Meal Plan"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
      await Then('User should see sidebar text "Exercise"', null, { pages }); 
    });

  });

  test('Verify utensil icon in Meal Plan tab', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see utensil icon', null, { pages }); 
  });

  test('Verify dumbbell icon in Exercise tab', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see dumbbell icon', null, { pages }); 
  });

  test('Verify View Full Plan button is visible', { tag: ['@commonhome', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see "View Full Plan" button', null, { pages }); 
  });

  test.describe('Validate each meal section is clickable to show details', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see meal details section', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see meal details section', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see meal details section', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see meal details section', null, { pages }); 
    });

  });

  test.describe('Validate dish title per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see dish title', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see dish title', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see dish title', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see dish title', null, { pages }); 
    });

  });

  test.describe('Validate dish description per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see dish description', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see dish description', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see dish description', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see dish description', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal item name per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see pre-meal item name', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see pre-meal item name', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see pre-meal item name', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see pre-meal item name', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal calories per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see pre-meal calories', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see pre-meal calories', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see pre-meal calories', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see pre-meal calories', null, { pages }); 
    });

  });

  test.describe('Validate calories text appears after value per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see text "calories" after calorie value', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see text "calories" after calorie value', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see text "calories" after calorie value', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see text "calories" after calorie value', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal time format per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see time in "hh:mm" format', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see time in "hh:mm" format', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see time in "hh:mm" format', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see time in "hh:mm" format', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal AM/PM indicator per meal', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see indicator "AM"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see indicator "PM"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see indicator "PM"', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see indicator "PM"', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal time per meal (valid)', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see pre-meal time "7" "AM"', null, { pages }); 
    });

  });

  test.describe('Validate pre-meal time per meal (bug)', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree', '@bug'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see pre-meal time "12" "PM"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree', '@bug'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see pre-meal time "7" "PM"', null, { pages }); 
    });

  });

  test.describe('Validate Nutrition Insights color per macro', () => {

    test('Example #1', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see "Carbs" color as "green"', null, { pages }); 
    });

    test('Example #2', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see "Protein" color as "pink"', null, { pages }); 
    });

    test('Example #3', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see "Fat" color as "purple"', null, { pages }); 
    });

    test('Example #4', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see "Carbs" color as "green"', null, { pages }); 
    });

    test('Example #5', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see "Protein" color as "pink"', null, { pages }); 
    });

    test('Example #6', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see "Fat" color as "purple"', null, { pages }); 
    });

    test('Example #7', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see "Carbs" color as "green"', null, { pages }); 
    });

    test('Example #8', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see "Protein" color as "pink"', null, { pages }); 
    });

    test('Example #9', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see "Fat" color as "purple"', null, { pages }); 
    });

    test('Example #10', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see "Carbs" color as "green"', null, { pages }); 
    });

    test('Example #11', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see "Protein" color as "pink"', null, { pages }); 
    });

    test('Example #12', { tag: ['@commonhome', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see "Fat" color as "purple"', null, { pages }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles/CommonHome/CommonHome.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":13,"pickleLine":13,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see \"SweetBalance\" text on the home page","stepMatchArguments":[{"group":{"start":16,"value":"\"SweetBalance\"","children":[{"start":17,"value":"SweetBalance","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":14,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Logout\" text on the home page","stepMatchArguments":[{"group":{"start":16,"value":"\"Logout\"","children":[{"start":17,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then User should see username displayed on the home page","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see top navigation bar","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":27,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation tab \"Home\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Home\"","children":[{"start":32,"value":"Home","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":28,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation tab \"Dashboard\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Dashboard\"","children":[{"start":32,"value":"Dashboard","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":41,"pickleLine":29,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then User should see navigation tab \"Education\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Education\"","children":[{"start":32,"value":"Education","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":36,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Current Status\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Current Status\"","children":[{"start":27,"value":"Current Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":37,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Last updated\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Last updated\"","children":[{"start":27,"value":"Last updated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":57,"pickleLine":38,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Latest HbA1C\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Latest HbA1C\"","children":[{"start":27,"value":"Latest HbA1C","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":61,"pickleLine":39,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"BMI\"","stepMatchArguments":[{"group":{"start":26,"value":"\"BMI\"","children":[{"start":27,"value":"BMI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":40,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Average Blood Sugar\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Average Blood Sugar\"","children":[{"start":27,"value":"Average Blood Sugar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":71,"pickleLine":42,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then User should see timestamp next to Last updated text","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":46,"tags":["@commonhome","@loginfree","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then User should see last updated timestamp in 12-hour format","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":50,"tags":["@commonhome","@loginfree","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then User should see last updated 12-hour clock indicator","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":58,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see metric value \"HbA1C\"","stepMatchArguments":[{"group":{"start":29,"value":"\"HbA1C\"","children":[{"start":30,"value":"HbA1C","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":89,"pickleLine":59,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see metric value \"BMI\"","stepMatchArguments":[{"group":{"start":29,"value":"\"BMI\"","children":[{"start":30,"value":"BMI","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":93,"pickleLine":60,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then User should see metric value \"Average Blood Sugar\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Average Blood Sugar\"","children":[{"start":30,"value":"Average Blood Sugar","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":101,"pickleLine":67,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then User should see condition text \"Normal\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Normal\"","children":[{"start":32,"value":"Normal","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":105,"pickleLine":68,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then User should see condition text \"Diabetic\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Diabetic\"","children":[{"start":32,"value":"Diabetic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":111,"pickleLine":70,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then User should see \"mg/dL\" unit below Average Blood Sugar","stepMatchArguments":[{"group":{"start":16,"value":"\"mg/dL\"","children":[{"start":17,"value":"mg/dL","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":115,"pickleLine":73,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Today's Meal Plan\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Today's Meal Plan\"","children":[{"start":27,"value":"Today's Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":121,"pickleLine":81,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Breakfast\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Breakfast\"","children":[{"start":26,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":125,"pickleLine":82,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Lunch\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Lunch\"","children":[{"start":26,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":129,"pickleLine":83,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Dinner\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Dinner\"","children":[{"start":26,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":133,"pickleLine":84,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should see meal tab \"Snacks\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Snacks\"","children":[{"start":26,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":139,"pickleLine":86,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then User should see Breakfast tab selected by default","stepMatchArguments":[]}]},
  {"pwTestLine":143,"pickleLine":89,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":90,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar title in flex container","stepMatchArguments":[]}]},
  {"pwTestLine":149,"pickleLine":97,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar text \"Meal Plan\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Meal Plan\"","children":[{"start":30,"value":"Meal Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":153,"pickleLine":98,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then User should see sidebar text \"Exercise\"","stepMatchArguments":[{"group":{"start":29,"value":"\"Exercise\"","children":[{"start":30,"value":"Exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":159,"pickleLine":100,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then User should see utensil icon","stepMatchArguments":[]}]},
  {"pwTestLine":163,"pickleLine":103,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then User should see dumbbell icon","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":106,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then User should see \"View Full Plan\" button","stepMatchArguments":[]}]},
  {"pwTestLine":173,"pickleLine":115,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":175,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":178,"pickleLine":116,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":179,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":180,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":183,"pickleLine":117,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":184,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":185,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":188,"pickleLine":118,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":190,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then User should see meal details section","stepMatchArguments":[]}]},
  {"pwTestLine":197,"pickleLine":126,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":199,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see dish title","stepMatchArguments":[]}]},
  {"pwTestLine":202,"pickleLine":127,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":204,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see dish title","stepMatchArguments":[]}]},
  {"pwTestLine":207,"pickleLine":128,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":208,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":209,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see dish title","stepMatchArguments":[]}]},
  {"pwTestLine":212,"pickleLine":129,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":213,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":214,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then User should see dish title","stepMatchArguments":[]}]},
  {"pwTestLine":221,"pickleLine":137,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":223,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then User should see dish description","stepMatchArguments":[]}]},
  {"pwTestLine":226,"pickleLine":138,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":228,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then User should see dish description","stepMatchArguments":[]}]},
  {"pwTestLine":231,"pickleLine":139,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":233,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then User should see dish description","stepMatchArguments":[]}]},
  {"pwTestLine":236,"pickleLine":140,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":238,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then User should see dish description","stepMatchArguments":[]}]},
  {"pwTestLine":245,"pickleLine":148,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":246,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":247,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal item name","stepMatchArguments":[]}]},
  {"pwTestLine":250,"pickleLine":149,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":252,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal item name","stepMatchArguments":[]}]},
  {"pwTestLine":255,"pickleLine":150,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":257,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal item name","stepMatchArguments":[]}]},
  {"pwTestLine":260,"pickleLine":151,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":261,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":262,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal item name","stepMatchArguments":[]}]},
  {"pwTestLine":269,"pickleLine":159,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":270,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":271,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal calories","stepMatchArguments":[]}]},
  {"pwTestLine":274,"pickleLine":160,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":275,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":276,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal calories","stepMatchArguments":[]}]},
  {"pwTestLine":279,"pickleLine":161,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":280,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":281,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal calories","stepMatchArguments":[]}]},
  {"pwTestLine":284,"pickleLine":162,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":285,"gherkinStepLine":154,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":286,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal calories","stepMatchArguments":[]}]},
  {"pwTestLine":293,"pickleLine":170,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":294,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":295,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"calories\" after calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":298,"pickleLine":171,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":299,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":300,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"calories\" after calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":303,"pickleLine":172,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":304,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":305,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"calories\" after calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":308,"pickleLine":173,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":309,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":310,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then User should see text \"calories\" after calorie value","stepMatchArguments":[]}]},
  {"pwTestLine":317,"pickleLine":181,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":318,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":319,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format","stepMatchArguments":[]}]},
  {"pwTestLine":322,"pickleLine":182,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":323,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":324,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format","stepMatchArguments":[]}]},
  {"pwTestLine":327,"pickleLine":183,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":328,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":329,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format","stepMatchArguments":[]}]},
  {"pwTestLine":332,"pickleLine":184,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":333,"gherkinStepLine":176,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":334,"gherkinStepLine":177,"keywordType":"Outcome","textWithKeyword":"Then User should see time in \"hh:mm\" format","stepMatchArguments":[]}]},
  {"pwTestLine":341,"pickleLine":192,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":342,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":343,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"AM\"","stepMatchArguments":[{"group":{"start":26,"value":"\"AM\"","children":[{"start":27,"value":"AM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":346,"pickleLine":193,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":347,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":348,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"PM\"","stepMatchArguments":[{"group":{"start":26,"value":"\"PM\"","children":[{"start":27,"value":"PM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":351,"pickleLine":194,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":352,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":353,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"PM\"","stepMatchArguments":[{"group":{"start":26,"value":"\"PM\"","children":[{"start":27,"value":"PM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":356,"pickleLine":195,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":357,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":358,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then User should see indicator \"PM\"","stepMatchArguments":[{"group":{"start":26,"value":"\"PM\"","children":[{"start":27,"value":"PM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":365,"pickleLine":203,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":366,"gherkinStepLine":198,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":367,"gherkinStepLine":199,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal time \"7\" \"AM\"","stepMatchArguments":[{"group":{"start":30,"value":"\"7\"","children":[{"start":31,"value":"7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"AM\"","children":[{"start":35,"value":"AM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":374,"pickleLine":212,"tags":["@commonhome","@loginfree","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":375,"gherkinStepLine":207,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":376,"gherkinStepLine":208,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal time \"12\" \"PM\"","stepMatchArguments":[{"group":{"start":30,"value":"\"12\"","children":[{"start":31,"value":"12","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"PM\"","children":[{"start":36,"value":"PM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":379,"pickleLine":213,"tags":["@commonhome","@loginfree","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":380,"gherkinStepLine":207,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":381,"gherkinStepLine":208,"keywordType":"Outcome","textWithKeyword":"Then User should see pre-meal time \"7\" \"PM\"","stepMatchArguments":[{"group":{"start":30,"value":"\"7\"","children":[{"start":31,"value":"7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"PM\"","children":[{"start":35,"value":"PM","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":388,"pickleLine":221,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":389,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":390,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Carbs\" color as \"green\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Carbs\"","children":[{"start":17,"value":"Carbs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"green\"","children":[{"start":34,"value":"green","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":393,"pickleLine":222,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":394,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":395,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Protein\" color as \"pink\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Protein\"","children":[{"start":17,"value":"Protein","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"pink\"","children":[{"start":36,"value":"pink","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":398,"pickleLine":223,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":399,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":400,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Fat\" color as \"purple\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Fat\"","children":[{"start":17,"value":"Fat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"purple\"","children":[{"start":32,"value":"purple","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":403,"pickleLine":224,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":404,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":405,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Carbs\" color as \"green\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Carbs\"","children":[{"start":17,"value":"Carbs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"green\"","children":[{"start":34,"value":"green","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":408,"pickleLine":225,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":409,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":410,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Protein\" color as \"pink\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Protein\"","children":[{"start":17,"value":"Protein","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"pink\"","children":[{"start":36,"value":"pink","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":413,"pickleLine":226,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":414,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":415,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Fat\" color as \"purple\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Fat\"","children":[{"start":17,"value":"Fat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"purple\"","children":[{"start":32,"value":"purple","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":418,"pickleLine":227,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":419,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":420,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Carbs\" color as \"green\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Carbs\"","children":[{"start":17,"value":"Carbs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"green\"","children":[{"start":34,"value":"green","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":423,"pickleLine":228,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":424,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":425,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Protein\" color as \"pink\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Protein\"","children":[{"start":17,"value":"Protein","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"pink\"","children":[{"start":36,"value":"pink","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":428,"pickleLine":229,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":429,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":430,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Fat\" color as \"purple\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Fat\"","children":[{"start":17,"value":"Fat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"purple\"","children":[{"start":32,"value":"purple","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":433,"pickleLine":230,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":434,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":435,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Carbs\" color as \"green\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Carbs\"","children":[{"start":17,"value":"Carbs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"green\"","children":[{"start":34,"value":"green","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":438,"pickleLine":231,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":439,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":440,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Protein\" color as \"pink\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Protein\"","children":[{"start":17,"value":"Protein","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"pink\"","children":[{"start":36,"value":"pink","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":443,"pickleLine":232,"tags":["@commonhome","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":444,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":445,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Fat\" color as \"purple\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Fat\"","children":[{"start":17,"value":"Fat","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":31,"value":"\"purple\"","children":[{"start":32,"value":"purple","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end