// Generated from: featureFiles\HomepageFreeuser\HomepageFreeuser.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Home Page - Features only for Free User', () => {

  test.beforeEach('Background', async ({ Given, When, pages }, testInfo) => { if (testInfo.error) return;
    await Given('User is logged into the app', null, { pages }); 
    await When('User is on the Home page', null, { pages }); 
  });
  
  test('Verify collapse caret toggle is visible for Today\'s Meal Plan', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ Then, pages }) => { 
    await Then('User should see collapse caret toggle next to "Today\'s Meal Plan"', null, { pages }); 
  });

  test.describe('Verify dot separator between time and calories in pre-meal row', () => {

    test('Example #1', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Breakfast"', null, { pages }); 
      await Then('User should see dot separator between time and calories', null, { pages }); 
    });

    test('Example #2', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Lunch"', null, { pages }); 
      await Then('User should see dot separator between time and calories', null, { pages }); 
    });

    test('Example #3', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Dinner"', null, { pages }); 
      await Then('User should see dot separator between time and calories', null, { pages }); 
    });

    test('Example #4', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks on meal section "Snacks"', null, { pages }); 
      await Then('User should see dot separator between time and calories', null, { pages }); 
    });

  });

  test('Verify Free user is redirected to subscription when clicking View Full Plan', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks "View Full Plan"', null, { pages }); 
    await Then('User should be redirected to subscription page', null, { pages }); 
  });

  test('Verify Today\'s Exercise Plan title is visible', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see home text "Today\'s Exercise Plan"', null, { pages }); 
  });

  test('Verify exercise list is visible', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see exercise list', null, { pages }); 
  });

  test('Verify free user sees only 2 exercises', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see 2 exercises listed', null, { pages }); 
  });

  test('Verify each exercise item shows scheduled time', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see scheduled time for each exercise', null, { pages }); 
  });

  test.describe('Verify exercise schedule', () => {

    test('Example #1', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks Exercise in sidebar', null, { pages }); 
      await Then('User should see "Morning exercise" scheduled at "7"', null, { pages }); 
    });

    test('Example #2', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
      await When('User clicks Exercise in sidebar', null, { pages }); 
      await Then('User should see "Evening exercise" scheduled at "5"', null, { pages }); 
    });

  });

  test('Verify AM/PM indicator is visible for exercise time', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see AM/PM indicator for exercise time', null, { pages }); 
  });

  test('Verify duration is visible for each exercise', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see duration for each exercise item', null, { pages }); 
  });

  test('Verify duration format is in minutes', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see duration format in mins', null, { pages }); 
  });

  test('Verify dot separator between duration and intensity', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see dot separator between duration and intensity', null, { pages }); 
  });

  test('Verify intensity level is visible for each exercise', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see intensity level for each exercise', null, { pages }); 
  });

  test('Verify View Full Schedule button is visible', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User clicks Exercise in sidebar', null, { pages }); 
    await Then('User should see "View Full Schedule" button', null, { pages }); 
  });

  test('Verify navigation of View Full Schedule', { tag: ['@homepagefreeuser', '@loginfree'] }, async ({ When, Then, pages }) => { 
    await When('User opens Exercise section and clicks "View Full Schedule"', null, { pages }); 
    await Then('User should be redirected to subscription page', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\HomepageFreeuser\\HomepageFreeuser.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then User should see collapse caret toggle next to \"Today's Meal Plan\"","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":17,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Breakfast\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Breakfast\"","children":[{"start":29,"value":"Breakfast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see dot separator between time and calories","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":18,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Lunch\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Lunch\"","children":[{"start":29,"value":"Lunch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see dot separator between time and calories","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Dinner\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Dinner\"","children":[{"start":29,"value":"Dinner","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see dot separator between time and calories","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":20,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks on meal section \"Snacks\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Snacks\"","children":[{"start":29,"value":"Snacks","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see dot separator between time and calories","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":22,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks \"View Full Plan\"","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to subscription page","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":26,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then User should see home text \"Today's Exercise Plan\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Today's Exercise Plan\"","children":[{"start":27,"value":"Today's Exercise Plan","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":30,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then User should see exercise list","stepMatchArguments":[]}]},
  {"pwTestLine":54,"pickleLine":34,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then User should see 2 exercises listed","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":38,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then User should see scheduled time for each exercise","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":48,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Morning exercise\" scheduled at \"7\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Morning exercise\"","children":[{"start":17,"value":"Morning exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"7\"","children":[{"start":49,"value":"7","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":71,"pickleLine":49,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then User should see \"Evening exercise\" scheduled at \"5\"","stepMatchArguments":[{"group":{"start":16,"value":"\"Evening exercise\"","children":[{"start":17,"value":"Evening exercise","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"5\"","children":[{"start":49,"value":"5","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":51,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then User should see AM/PM indicator for exercise time","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":55,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then User should see duration for each exercise item","stepMatchArguments":[]}]},
  {"pwTestLine":88,"pickleLine":59,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then User should see duration format in mins","stepMatchArguments":[]}]},
  {"pwTestLine":93,"pickleLine":63,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then User should see dot separator between duration and intensity","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":67,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then User should see intensity level for each exercise","stepMatchArguments":[]}]},
  {"pwTestLine":103,"pickleLine":71,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When User clicks Exercise in sidebar","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then User should see \"View Full Schedule\" button","stepMatchArguments":[]}]},
  {"pwTestLine":108,"pickleLine":75,"tags":["@homepagefreeuser","@loginfree"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is logged into the app","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User is on the Home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When User opens Exercise section and clicks \"View Full Schedule\"","stepMatchArguments":[{"group":{"start":39,"value":"\"View Full Schedule\"","children":[{"start":40,"value":"View Full Schedule","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":110,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to subscription page","stepMatchArguments":[]}]},
]; // bdd-data-end