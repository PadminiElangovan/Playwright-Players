// Generated from: featureFiles\PremiumUsrExercise.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Verification of Premium user Exercise Module', () => {

  test('Verify View Full Schedule button is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeScheduleBtn', '@PUsrExer_01'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is on the homepage', null, { pages }); 
    await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
    await Then('View Full Schedule button is displayed on the right', null, { pages }); 
  });

  test('Verify navigation to Today\'s Exercise Schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeScheduleNavi', '@PUsrExer_02'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks the View Full Schedule button', null, { pages }); 
    await Then('Premium user is redirected to Today\'s Exercise Schedule page', null, { pages }); 
  });

  test.describe('Verify <Tabname> tab is displayed in Exercise Section', () => {

    test('Verify Warm Up tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see "Warm Up" tab is visible', null, { pages }); 
    });

    test('Verify Main Workout tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see "Main Workout" tab is visible', null, { pages }); 
    });

    test('Verify Cool Down tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see "Cool Down" tab is visible', null, { pages }); 
    });

  });

  test.describe('Verify <Field> is displayed under Warm Up tab', () => {

    test('Verify Exercise name is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise name" is displayed', null, { pages }); 
    });

    test('Verify Exercise Description is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Description" is displayed', null, { pages }); 
    });

    test('Verify Exercise Duration is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Duration" is displayed', null, { pages }); 
    });

    test('Verify Exercise Calories is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Calories" is displayed', null, { pages }); 
    });

    test('Verify Exercise Intensity level is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is on the homepage', null, { pages }); 
      await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Intensity level" is displayed', null, { pages }); 
    });

  });

  test.describe('Verify <Field> is displayed under Main Workout tab', () => {

    test('Verify Exercise name is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Main Workout tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise name" is displayed', null, { pages }); 
    });

    test('Verify Exercise Description is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Main Workout tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Description" is displayed', null, { pages }); 
    });

    test('Verify Exercise Duration is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Main Workout tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Duration" is displayed', null, { pages }); 
    });

    test('Verify Exercise Calories is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Main Workout tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Calories" is displayed', null, { pages }); 
    });

    test('Verify Exercise Intensity level is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Main Workout tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Intensity level" is displayed', null, { pages }); 
    });

  });

  test.describe('Verify <Field> is displayed under Cool Down tab', () => {

    test('Verify Exercise name is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Cool Down tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise name" is displayed', null, { pages }); 
    });

    test('Verify Exercise Description is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Cool Down tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Description" is displayed', null, { pages }); 
    });

    test('Verify Exercise Duration is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Cool Down tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Duration" is displayed', null, { pages }); 
    });

    test('Verify Exercise Calories is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Cool Down tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Calories" is displayed', null, { pages }); 
    });

    test('Verify Exercise Intensity level is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks the Cool Down tab', null, { pages }); 
      await Then('Premium user should see exercise info "Exercise Intensity level" is displayed', null, { pages }); 
    });

  });

  test('Verify Mark As Completed button is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeMrkCompletedBtn', '@PremUsrExer_21'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is on the homepage', null, { pages }); 
    await When('Premium user clicks the Exercise option from the side panel', null, { pages }); 
    await Then('Mark As Completed button is displayed', null, { pages }); 
  });

  test('Verify navigation to View full exercise schedule', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullScheduleNavi', '@PremUsrExer_26'] }, async ({ Given, When, Then, page, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('Premium user should redirect to Exercise schedule', null, { page }); 
  });

  test('Verify todays exercise schedule page title is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullSchdTitle', '@PremUsrExer_27'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('Premium user should see title Today\'s Exercise Schedule', null, { pages }); 
  });

  test('Verify Back to Home button is visible in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeBack2HomeBtn', '@PremUsrExer_28'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('Premium user should see Back to Home button in Today\'s schedule page', null, { pages }); 
  });

  test.describe('Verify <SectionName> section in todays exercise schedule page', () => {

    test('Verify Warm Up section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Warm Up" section', null, { pages }); 
    });

    test('Verify Main Workout section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Main Workout" section', null, { pages }); 
    });

    test('Verify Cool Down section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Cool Down" section', null, { pages }); 
    });

  });

  test.describe('Verify <Field> under Warm Up in exercise schedule page', () => {

    test('Verify Exercise name under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise name" is visible under Warm Up section', null, { pages }); 
    });

    test('Verify Exercise Description under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Description" is visible under Warm Up section', null, { pages }); 
    });

    test('Verify Exercise Duration under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Duration" is visible under Warm Up section', null, { pages }); 
    });

    test('Verify Exercise Calories under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Calories" is visible under Warm Up section', null, { pages }); 
    });

    test('Verify Exercise Intensity under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Intensity" is visible under Warm Up section', null, { pages }); 
    });

  });

  test.describe('Verify <Field> under Main Workout in exercise schedule page', () => {

    test('Verify Exercise name under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise name" is visible under Main Workout section', null, { pages }); 
    });

    test('Verify Exercise Description under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Description" is visible under Main Workout section', null, { pages }); 
    });

    test('Verify Exercise Duration under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Duration" is visible under Main Workout section', null, { pages }); 
    });

    test('Verify Exercise Calories under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Calories" is visible under Main Workout section', null, { pages }); 
    });

    test('Verify Exercise Intensity under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Intensity" is visible under Main Workout section', null, { pages }); 
    });

  });

  test.describe('Verify <Field> under Cool Down in exercise schedule page', () => {

    test('Verify Exercise name under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise name" is visible under Cool Down section', null, { pages }); 
    });

    test('Verify Exercise Description under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Description" is visible under Cool Down section', null, { pages }); 
    });

    test('Verify Exercise Duration under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Duration" is visible under Cool Down section', null, { pages }); 
    });

    test('Verify Exercise Calories under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Calories" is visible under Cool Down section', null, { pages }); 
    });

    test('Verify Exercise Intensity under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then, pages }) => { 
      await Given('Premium user is in the Exercise section', null, { pages }); 
      await When('Premium user clicks view full schedule', null, { pages }); 
      await Then('Premium user should see "Exercise Intensity" is visible under Cool Down section', null, { pages }); 
    });

  });

  test('Verify the intensity value in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullIntensity', '@PremUsrExer_47'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('Exercise intensity should be low/medium/hard', null, { pages }); 
  });

  test('Verify total duration is displayed in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullDuration', '@PremUsrExer_48'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('Premium user should see total duration in exercise schedule page', null, { pages }); 
  });

  test('Verify total duration matches the sum of individual workout durations', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTotalDuration', '@PremUsrExer_49'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('total duration should be equal the sum of all individual durations', null, { pages }); 
  });

  test('Verify total calories matches the sum of individual workout calories', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTotalCal', '@PremUsrExer_50'] }, async ({ Given, When, Then, pages }) => { 
    await Given('Premium user is in the Exercise section', null, { pages }); 
    await When('Premium user clicks view full schedule', null, { pages }); 
    await Then('total calories should be equal the sum of all individual calories', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\PremiumUsrExercise.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeScheduleBtn","@PUsrExer_01"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then View Full Schedule button is displayed on the right","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":15,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeScheduleNavi","@PUsrExer_02"],"steps":[{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Premium user clicks the View Full Schedule button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Premium user is redirected to Today's Exercise Schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":30,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":21,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Warm Up\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Warm Up\"","children":[{"start":25,"value":"Warm Up","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":31,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Main Workout\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Main Workout\"","children":[{"start":25,"value":"Main Workout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":32,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":33,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Cool Down\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Cool Down\"","children":[{"start":25,"value":"Cool Down","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":44,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":43,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise name\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise name\"","children":[{"start":39,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":45,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":49,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Description\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Description\"","children":[{"start":39,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":46,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":55,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Duration\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Duration\"","children":[{"start":39,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":47,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":61,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Calories\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Calories\"","children":[{"start":39,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":48,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":67,"gherkinStepLine":38,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Intensity level\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Intensity level\"","children":[{"start":39,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":60,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":77,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise name\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise name\"","children":[{"start":39,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":61,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":83,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Description\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Description\"","children":[{"start":39,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":62,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":89,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Duration\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Duration\"","children":[{"start":39,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":63,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":95,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Calories\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Calories\"","children":[{"start":39,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":64,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":101,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Intensity level\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Intensity level\"","children":[{"start":39,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":76,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":111,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise name\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise name\"","children":[{"start":39,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":77,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":117,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Description\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Description\"","children":[{"start":39,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":78,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":123,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Duration\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Duration\"","children":[{"start":39,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":79,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":129,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Calories\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Calories\"","children":[{"start":39,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":80,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":135,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see exercise info \"Exercise Intensity level\" is displayed","stepMatchArguments":[{"group":{"start":38,"value":"\"Exercise Intensity level\"","children":[{"start":39,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":85,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeMrkCompletedBtn","@PremUsrExer_21"],"steps":[{"pwStepLine":143,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then Mark As Completed button is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":148,"pickleLine":125,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullScheduleNavi","@PremUsrExer_26"],"steps":[{"pwStepLine":149,"gherkinStepLine":126,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then Premium user should redirect to Exercise schedule","stepMatchArguments":[]}]},
  {"pwTestLine":154,"pickleLine":133,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullSchdTitle","@PremUsrExer_27"],"steps":[{"pwStepLine":155,"gherkinStepLine":134,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see title Today's Exercise Schedule","stepMatchArguments":[]}]},
  {"pwTestLine":160,"pickleLine":141,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeBack2HomeBtn","@PremUsrExer_28"],"steps":[{"pwStepLine":161,"gherkinStepLine":142,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see Back to Home button in Today's schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":168,"pickleLine":156,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":169,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Warm Up\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Warm Up\"","children":[{"start":25,"value":"Warm Up","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":174,"pickleLine":157,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":175,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Main Workout\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Main Workout\"","children":[{"start":25,"value":"Main Workout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":180,"pickleLine":158,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":181,"gherkinStepLine":150,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":151,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":152,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Cool Down\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Cool Down\"","children":[{"start":25,"value":"Cool Down","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":190,"pickleLine":170,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":191,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":196,"pickleLine":171,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":197,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":202,"pickleLine":172,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":203,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":208,"pickleLine":173,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":209,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":214,"pickleLine":174,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":215,"gherkinStepLine":164,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":165,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":166,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":224,"pickleLine":186,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":225,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":227,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":230,"pickleLine":187,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":231,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":233,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":236,"pickleLine":188,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":237,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":238,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":239,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":242,"pickleLine":189,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":243,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":245,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":248,"pickleLine":190,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":249,"gherkinStepLine":180,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":181,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":182,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":258,"pickleLine":202,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":259,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":260,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":261,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":264,"pickleLine":203,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":265,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":266,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":267,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":270,"pickleLine":204,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":271,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":272,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":273,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":276,"pickleLine":205,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":277,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":278,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":279,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":282,"pickleLine":206,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":283,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":285,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":290,"pickleLine":211,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullIntensity","@PremUsrExer_47"],"steps":[{"pwStepLine":291,"gherkinStepLine":212,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":292,"gherkinStepLine":213,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":293,"gherkinStepLine":214,"keywordType":"Outcome","textWithKeyword":"Then Exercise intensity should be low/medium/hard","stepMatchArguments":[]}]},
  {"pwTestLine":296,"pickleLine":219,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullDuration","@PremUsrExer_48"],"steps":[{"pwStepLine":297,"gherkinStepLine":220,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":298,"gherkinStepLine":221,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":299,"gherkinStepLine":222,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see total duration in exercise schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":302,"pickleLine":227,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTotalDuration","@PremUsrExer_49"],"steps":[{"pwStepLine":303,"gherkinStepLine":228,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":304,"gherkinStepLine":229,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":305,"gherkinStepLine":230,"keywordType":"Outcome","textWithKeyword":"Then total duration should be equal the sum of all individual durations","stepMatchArguments":[]}]},
  {"pwTestLine":308,"pickleLine":235,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTotalCal","@PremUsrExer_50"],"steps":[{"pwStepLine":309,"gherkinStepLine":236,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":310,"gherkinStepLine":237,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":311,"gherkinStepLine":238,"keywordType":"Outcome","textWithKeyword":"Then total calories should be equal the sum of all individual calories","stepMatchArguments":[]}]},
]; // bdd-data-end