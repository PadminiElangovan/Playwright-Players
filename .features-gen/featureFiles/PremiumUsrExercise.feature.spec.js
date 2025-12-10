// Generated from: featureFiles\PremiumUsrExercise.feature
import { test } from "../../fixtures/Index_Fixture.js";

test.describe('Verification of Premium user Exercise Module', () => {

  test('Verify View Full Schedule button is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeScheduleBtn', '@PremUsrExer_01'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is on the homepage'); 
    await When('Premium user clicks the Exercise option from the side panel'); 
    await Then('View Full Schedule button is displayed on the right'); 
  });

  test('Verify navigation to Today\'s Exercise Schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeScheduleNavi', '@PremUsrExer_02'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is on the homepage'); 
    await When('Premium user clicks the View Full Schedule button'); 
    await Then('Premium user is redirected to Today\'s Exercise Schedule page'); 
  });

  test.describe('Verify <Tabname> tab is displayed in Exercise Section', () => {

    test('Verify Warm Up tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Warm Up" tab is visible'); 
    });

    test('Verify Main Workout tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Main Workout" tab is visible'); 
    });

    test('Verify Cool Down tab is displayed in Exercise Section', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTab'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Cool Down" tab is visible'); 
    });

  });

  test.describe('Verify <Field> is displayed under Warm Up tab', () => {

    test('Verify Exercise name is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Exercise name" is displayed under Warm Up tab'); 
    });

    test('Verify Exercise Description is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Exercise Description" is displayed under Warm Up tab'); 
    });

    test('Verify Exercise Duration is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Exercise Duration" is displayed under Warm Up tab'); 
    });

    test('Verify Exercise Calories is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Exercise Calories" is displayed under Warm Up tab'); 
    });

    test('Verify Exercise Intensity level is displayed under Warm Up tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is on the homepage'); 
      await When('Premium user clicks the Exercise option from the side panel'); 
      await Then('Premium user should see "Exercise Intensity level" is displayed under Warm Up tab'); 
    });

  });

  test.describe('Verify <Field> is displayed under Main Workout tab', () => {

    test('Verify Exercise name is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Main Workout tab'); 
      await Then('Premium user should see "Exercise name" is displayed under Main Workout tab'); 
    });

    test('Verify Exercise Description is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Main Workout tab'); 
      await Then('Premium user should see "Exercise Description" is displayed under Main Workout tab'); 
    });

    test('Verify Exercise Duration is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Main Workout tab'); 
      await Then('Premium user should see "Exercise Duration" is displayed under Main Workout tab'); 
    });

    test('Verify Exercise Calories is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Main Workout tab'); 
      await Then('Premium user should see "Exercise Calories" is displayed under Main Workout tab'); 
    });

    test('Verify Exercise Intensity level is displayed under Main Workout tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainWorkOutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Main Workout tab'); 
      await Then('Premium user should see "Exercise Intensity level" is displayed under Main Workout tab'); 
    });

  });

  test.describe('Verify <Field> is displayed under Cool Down tab', () => {

    test('Verify Exercise name is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Cool Down tab'); 
      await Then('Premium user should see "Exercise name" is displayed under Cool Down tab'); 
    });

    test('Verify Exercise Description is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Cool Down tab'); 
      await Then('Premium user should see "Exercise Description" is displayed under Cool Down tab'); 
    });

    test('Verify Exercise Duration is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Cool Down tab'); 
      await Then('Premium user should see "Exercise Duration" is displayed under Cool Down tab'); 
    });

    test('Verify Exercise Calories is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Cool Down tab'); 
      await Then('Premium user should see "Exercise Calories" is displayed under Cool Down tab'); 
    });

    test('Verify Exercise Intensity level is displayed under Cool Down tab', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrMainCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks the Cool Down tab'); 
      await Then('Premium user should see "Exercise Intensity level" is displayed under Cool Down tab'); 
    });

  });

  test('Verify Mark As Completed button is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeMrkCompletedBtn', '@PremUsrExer_21'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is on the homepage'); 
    await When('Premium user clicks the Exercise option from the side panel'); 
    await Then('Mark As Completed button is displayed'); 
  });

  test('Verify success dialog is shown after marking as completed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeMrkCompSuccessMsg', '@PremUsrExer_22'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks the Mark As Completed button'); 
    await Then('Premium user should see Success dialog for Mark As Completed'); 
  });

  test('Verify button status changes to Completed from Mark As Completed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeCompletedBtn', '@PremUsrExer_23'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks the Mark As Completed button'); 
    await Then('Premium user should see Completed Button in Exercise section'); 
  });

  test('Verify undo option is displayed after marking completed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeUndoOption', '@PremUsrExer_24'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks the Mark As Completed button'); 
    await Then('Premium user should see Undo option is visible in Exercise section'); 
  });

  test('Verify reverts back to Mark As Completed button after undo action', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeUndoOption', '@PremUsrExer_25'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user click undo button after marking Exercise as completed'); 
    await Then('Mark As Completed button is displayed'); 
  });

  test('Verify navigation to View full exercise schedule', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullScheduleNavi', '@PremUsrExer_26'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('Premium user should redirect to Exercise schedule'); 
  });

  test('Verify todays exercise schedule page title is displayed', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullSchdTitle', '@PremUsrExer_27'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('Premium user should see title Today\'s Exercise Schedule'); 
  });

  test('Verify Back to Home button is visible in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeBack2HomeBtn', '@PremUsrExer_28'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('Premium user should see Back to Home button in Today\'s schedule page'); 
  });

  test.describe('Verify <SectionName> section in todays exercise schedule page', () => {

    test('Verify Warm Up section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Warm Up" section'); 
    });

    test('Verify Main Workout section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Main Workout" section'); 
    });

    test('Verify Cool Down section in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullsection'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Cool Down" section'); 
    });

  });

  test.describe('Verify <Field> under Warm Up in exercise schedule page', () => {

    test('Verify Exercise name under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise name" is visible under Warm Up section'); 
    });

    test('Verify Exercise Description under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Description" is visible under Warm Up section'); 
    });

    test('Verify Exercise Duration under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Duration" is visible under Warm Up section'); 
    });

    test('Verify Exercise Calories under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Calories" is visible under Warm Up section'); 
    });

    test('Verify Exercise Intensity under Warm Up in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullWarmUpField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Intensity" is visible under Warm Up section'); 
    });

  });

  test.describe('Verify <Field> under Main Workout in exercise schedule page', () => {

    test('Verify Exercise name under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise name" is visible under Main Workout section'); 
    });

    test('Verify Exercise Description under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Description" is visible under Main Workout section'); 
    });

    test('Verify Exercise Duration under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Duration" is visible under Main Workout section'); 
    });

    test('Verify Exercise Calories under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Calories" is visible under Main Workout section'); 
    });

    test('Verify Exercise Intensity under Main Workout in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullMainWorkoutField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Intensity" is visible under Main Workout section'); 
    });

  });

  test.describe('Verify <Field> under Cool Down in exercise schedule page', () => {

    test('Verify Exercise name under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise name" is visible under Cool Down section'); 
    });

    test('Verify Exercise Description under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Description" is visible under Cool Down section'); 
    });

    test('Verify Exercise Duration under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Duration" is visible under Cool Down section'); 
    });

    test('Verify Exercise Calories under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Calories" is visible under Cool Down section'); 
    });

    test('Verify Exercise Intensity under Cool Down in exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullCoolDownField'] }, async ({ Given, When, Then }) => { 
      await Given('Premium user is in the Exercise section'); 
      await When('Premium user clicks view full schedule'); 
      await Then('Premium user should see "Exercise Intensity" is visible under Cool Down section'); 
    });

  });

  test('Verify the intensity value in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullIntensity', '@PremUsrExer_47'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('Exercise intensity should be low/medium/hard'); 
  });

  test('Verify total duration is displayed in todays exercise schedule page', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeFullDuration', '@PremUsrExer_48'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('Premium user should see total duration in exercise schedule page'); 
  });

  test('Verify total duration matches the sum of individual workout durations', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTotalDuration', '@PremUsrExer_49'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('total duration should be equal the sum of all individual durations'); 
  });

  test('Verify total calories matches the sum of individual workout calories', { tag: ['@sweetbalance', '@PremiumUsrExercise', '@pUsrExeTotalCal', '@PremUsrExer_50'] }, async ({ Given, When, Then }) => { 
    await Given('Premium user is in the Exercise section'); 
    await When('Premium user clicks view full schedule'); 
    await Then('total calories should be equal the sum of all individual calories'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\PremiumUsrExercise.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":6,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeScheduleBtn","@PremUsrExer_01"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then View Full Schedule button is displayed on the right","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":14,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeScheduleNavi","@PremUsrExer_02"],"steps":[{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Premium user clicks the View Full Schedule button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Premium user is redirected to Today's Exercise Schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":29,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":21,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Warm Up\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Warm Up\"","children":[{"start":25,"value":"Warm Up","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":30,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Main Workout\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Main Workout\"","children":[{"start":25,"value":"Main Workout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":32,"pickleLine":31,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTab"],"steps":[{"pwStepLine":33,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Cool Down\" tab is visible","stepMatchArguments":[{"group":{"start":24,"value":"\"Cool Down\"","children":[{"start":25,"value":"Cool Down","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":42,"pickleLine":43,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":43,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is displayed under Warm Up tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":44,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":49,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is displayed under Warm Up tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":45,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":55,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is displayed under Warm Up tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":46,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":61,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is displayed under Warm Up tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":47,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeWarmUpField"],"steps":[{"pwStepLine":67,"gherkinStepLine":37,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity level\" is displayed under Warm Up tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity level\"","children":[{"start":25,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":76,"pickleLine":59,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":77,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is displayed under Main Workout tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":60,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":83,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is displayed under Main Workout tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":88,"pickleLine":61,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":89,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is displayed under Main Workout tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":94,"pickleLine":62,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":95,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is displayed under Main Workout tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":100,"pickleLine":63,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainWorkOutField"],"steps":[{"pwStepLine":101,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Main Workout tab","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity level\" is displayed under Main Workout tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity level\"","children":[{"start":25,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":110,"pickleLine":75,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":111,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is displayed under Cool Down tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":116,"pickleLine":76,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":117,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is displayed under Cool Down tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":77,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":123,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is displayed under Cool Down tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":128,"pickleLine":78,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":129,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is displayed under Cool Down tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":134,"pickleLine":79,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrMainCoolDownField"],"steps":[{"pwStepLine":135,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Cool Down tab","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity level\" is displayed under Cool Down tab","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity level\"","children":[{"start":25,"value":"Exercise Intensity level","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":142,"pickleLine":84,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeMrkCompletedBtn","@PremUsrExer_21"],"steps":[{"pwStepLine":143,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given Premium user is on the homepage","stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Exercise option from the side panel","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Mark As Completed button is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":148,"pickleLine":92,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeMrkCompSuccessMsg","@PremUsrExer_22"],"steps":[{"pwStepLine":149,"gherkinStepLine":93,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":94,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Mark As Completed button","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":95,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see Success dialog for Mark As Completed","stepMatchArguments":[]}]},
  {"pwTestLine":154,"pickleLine":100,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeCompletedBtn","@PremUsrExer_23"],"steps":[{"pwStepLine":155,"gherkinStepLine":101,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Mark As Completed button","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see Completed Button in Exercise section","stepMatchArguments":[]}]},
  {"pwTestLine":160,"pickleLine":108,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeUndoOption","@PremUsrExer_24"],"steps":[{"pwStepLine":161,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When Premium user clicks the Mark As Completed button","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see Undo option is visible in Exercise section","stepMatchArguments":[]}]},
  {"pwTestLine":166,"pickleLine":116,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeUndoOption","@PremUsrExer_25"],"steps":[{"pwStepLine":167,"gherkinStepLine":117,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":118,"keywordType":"Action","textWithKeyword":"When Premium user click undo button after marking Exercise as completed","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":119,"keywordType":"Outcome","textWithKeyword":"Then Mark As Completed button is displayed","stepMatchArguments":[]}]},
  {"pwTestLine":172,"pickleLine":124,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullScheduleNavi","@PremUsrExer_26"],"steps":[{"pwStepLine":173,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then Premium user should redirect to Exercise schedule","stepMatchArguments":[]}]},
  {"pwTestLine":178,"pickleLine":132,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullSchdTitle","@PremUsrExer_27"],"steps":[{"pwStepLine":179,"gherkinStepLine":133,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":180,"gherkinStepLine":134,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":135,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see title Today's Exercise Schedule","stepMatchArguments":[]}]},
  {"pwTestLine":184,"pickleLine":140,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeBack2HomeBtn","@PremUsrExer_28"],"steps":[{"pwStepLine":185,"gherkinStepLine":141,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see Back to Home button in Today's schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":192,"pickleLine":155,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":193,"gherkinStepLine":149,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Warm Up\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Warm Up\"","children":[{"start":25,"value":"Warm Up","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":198,"pickleLine":156,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":199,"gherkinStepLine":149,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Main Workout\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Main Workout\"","children":[{"start":25,"value":"Main Workout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":204,"pickleLine":157,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullsection"],"steps":[{"pwStepLine":205,"gherkinStepLine":149,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":150,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":207,"gherkinStepLine":151,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Cool Down\" section","stepMatchArguments":[{"group":{"start":24,"value":"\"Cool Down\"","children":[{"start":25,"value":"Cool Down","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":214,"pickleLine":169,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":215,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":220,"pickleLine":170,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":221,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":223,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":226,"pickleLine":171,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":227,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":228,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":229,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":232,"pickleLine":172,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":233,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":235,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":238,"pickleLine":173,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullWarmUpField"],"steps":[{"pwStepLine":239,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":240,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":241,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Warm Up section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":248,"pickleLine":185,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":249,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":254,"pickleLine":186,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":255,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":257,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":260,"pickleLine":187,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":261,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":262,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":263,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":266,"pickleLine":188,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":267,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":268,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":269,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":272,"pickleLine":189,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullMainWorkoutField"],"steps":[{"pwStepLine":273,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":274,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":275,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Main Workout section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":282,"pickleLine":201,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":283,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":285,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise name\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise name\"","children":[{"start":25,"value":"Exercise name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":288,"pickleLine":202,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":289,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":291,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Description\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Description\"","children":[{"start":25,"value":"Exercise Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":294,"pickleLine":203,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":295,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":297,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Duration\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Duration\"","children":[{"start":25,"value":"Exercise Duration","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":300,"pickleLine":204,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":301,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":302,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":303,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Calories\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Calories\"","children":[{"start":25,"value":"Exercise Calories","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":306,"pickleLine":205,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullCoolDownField"],"steps":[{"pwStepLine":307,"gherkinStepLine":195,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":308,"gherkinStepLine":196,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":309,"gherkinStepLine":197,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see \"Exercise Intensity\" is visible under Cool Down section","stepMatchArguments":[{"group":{"start":24,"value":"\"Exercise Intensity\"","children":[{"start":25,"value":"Exercise Intensity","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":314,"pickleLine":210,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullIntensity","@PremUsrExer_47"],"steps":[{"pwStepLine":315,"gherkinStepLine":211,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":316,"gherkinStepLine":212,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":317,"gherkinStepLine":213,"keywordType":"Outcome","textWithKeyword":"Then Exercise intensity should be low/medium/hard","stepMatchArguments":[]}]},
  {"pwTestLine":320,"pickleLine":218,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeFullDuration","@PremUsrExer_48"],"steps":[{"pwStepLine":321,"gherkinStepLine":219,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":322,"gherkinStepLine":220,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":323,"gherkinStepLine":221,"keywordType":"Outcome","textWithKeyword":"Then Premium user should see total duration in exercise schedule page","stepMatchArguments":[]}]},
  {"pwTestLine":326,"pickleLine":226,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTotalDuration","@PremUsrExer_49"],"steps":[{"pwStepLine":327,"gherkinStepLine":227,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":328,"gherkinStepLine":228,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":329,"gherkinStepLine":229,"keywordType":"Outcome","textWithKeyword":"Then total duration should be equal the sum of all individual durations","stepMatchArguments":[]}]},
  {"pwTestLine":332,"pickleLine":234,"tags":["@sweetbalance","@PremiumUsrExercise","@pUsrExeTotalCal","@PremUsrExer_50"],"steps":[{"pwStepLine":333,"gherkinStepLine":235,"keywordType":"Context","textWithKeyword":"Given Premium user is in the Exercise section","stepMatchArguments":[]},{"pwStepLine":334,"gherkinStepLine":236,"keywordType":"Action","textWithKeyword":"When Premium user clicks view full schedule","stepMatchArguments":[]},{"pwStepLine":335,"gherkinStepLine":237,"keywordType":"Outcome","textWithKeyword":"Then total calories should be equal the sum of all individual calories","stepMatchArguments":[]}]},
]; // bdd-data-end