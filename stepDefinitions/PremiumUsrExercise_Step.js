  import {createBdd} from 'playwright-bdd';
  import { test } from '../fixtures/Index_Fixture.js';
  import { expect } from '@playwright/test';

  const { Given, When, Then } = createBdd(test, { passTags: true });

  
Given('Premium user is on the homepage', async ({}) => {
  // Step: Given Premium user is on the homepage
  // From: featureFiles\PremiumUsrExercise.feature:7:3
});

When('Premium user clicks the Exercise option from the side panel', async ({}) => {
  // Step: When Premium user clicks the Exercise option from the side panel
  // From: featureFiles\PremiumUsrExercise.feature:8:3
});

Then('View Full Schedule button is displayed on the right', async ({}) => {
  // Step: Then View Full Schedule button is displayed on the right
  // From: featureFiles\PremiumUsrExercise.feature:9:3
});

When('Premium user clicks the View Full Schedule button', async ({}) => {
  // Step: When Premium user clicks the View Full Schedule button
  // From: featureFiles\PremiumUsrExercise.feature:16:3
});

Then('Premium user is redirected to Today\'s Exercise Schedule page', async ({}) => {
  // Step: Then Premium user is redirected to Today's Exercise Schedule page
  // From: featureFiles\PremiumUsrExercise.feature:17:3
});

Then('Premium user should see {string} tab is visible', async ({}, arg) => {
  // Step: Then Premium user should see "Warm Up" tab is visible
  // From: featureFiles\PremiumUsrExercise.feature:25:3
});

Then('Premium user should see {string} is displayed under Warm Up tab', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is displayed under Warm Up tab
  // From: featureFiles\PremiumUsrExercise.feature:39:3
});

Given('Premium user is in the Exercise section', async ({}) => {
  // Step: Given Premium user is in the Exercise section
  // From: featureFiles\PremiumUsrExercise.feature:53:3
});

When('Premium user clicks the Main Workout tab', async ({}) => {
  // Step: When Premium user clicks the Main Workout tab
  // From: featureFiles\PremiumUsrExercise.feature:54:3
});

Then('Premium user should see {string} is displayed under Main Workout tab', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is displayed under Main Workout tab
  // From: featureFiles\PremiumUsrExercise.feature:55:3
});

When('Premium user clicks the Cool Down tab', async ({}) => {
  // Step: When Premium user clicks the Cool Down tab
  // From: featureFiles\PremiumUsrExercise.feature:70:3
});

Then('Premium user should see {string} is displayed under Cool Down tab', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is displayed under Cool Down tab
  // From: featureFiles\PremiumUsrExercise.feature:71:3
});

Then('Mark As Completed button is displayed', async ({}) => {
  // Step: Then Mark As Completed button is displayed
  // From: featureFiles\PremiumUsrExercise.feature:87:3
});

When('Premium user clicks the Mark As Completed button', async ({}) => {
  // Step: When Premium user clicks the Mark As Completed button
  // From: featureFiles\PremiumUsrExercise.feature:94:3
});

Then('Premium user should see Success dialog for Mark As Completed', async ({}) => {
  // Step: Then Premium user should see Success dialog for Mark As Completed
  // From: featureFiles\PremiumUsrExercise.feature:95:3
});

Then('Premium user should see Completed Button in Exercise section', async ({}) => {
  // Step: Then Premium user should see Completed Button in Exercise section
  // From: featureFiles\PremiumUsrExercise.feature:103:3
});

Then('Premium user should see Undo option is visible in Exercise section', async ({}) => {
  // Step: Then Premium user should see Undo option is visible in Exercise section
  // From: featureFiles\PremiumUsrExercise.feature:111:3
});

When('Premium user click undo button after marking Exercise as completed', async ({}) => {
  // Step: When Premium user click undo button after marking Exercise as completed
  // From: featureFiles\PremiumUsrExercise.feature:118:3
});

When('Premium user clicks view full schedule', async ({}) => {
  // Step: When Premium user clicks view full schedule
  // From: featureFiles\PremiumUsrExercise.feature:126:3
});

Then('Premium user should redirect to Exercise schedule', async ({}) => {
  // Step: Then Premium user should redirect to Exercise schedule
  // From: featureFiles\PremiumUsrExercise.feature:127:3
});

Then('Premium user should see title Today\'s Exercise Schedule', async ({}) => {
  // Step: Then Premium user should see title Today's Exercise Schedule
  // From: featureFiles\PremiumUsrExercise.feature:135:3
});

Then('Premium user should see Back to Home button in Today\'s schedule page', async ({}) => {
  // Step: Then Premium user should see Back to Home button in Today's schedule page
  // From: featureFiles\PremiumUsrExercise.feature:143:3
});

Then('Premium user should see {string} section', async ({}, arg) => {
  // Step: Then Premium user should see "Warm Up" section
  // From: featureFiles\PremiumUsrExercise.feature:151:3
});

Then('Premium user should see {string} is visible under Warm Up section', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is visible under Warm Up section
  // From: featureFiles\PremiumUsrExercise.feature:165:3
});

Then('Premium user should see {string} is visible under Main Workout section', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is visible under Main Workout section
  // From: featureFiles\PremiumUsrExercise.feature:181:3
});

Then('Premium user should see {string} is visible under Cool Down section', async ({}, arg) => {
  // Step: Then Premium user should see "Exercise name" is visible under Cool Down section
  // From: featureFiles\PremiumUsrExercise.feature:197:3
});

Then('Exercise intensity should be low\\/medium\\/hard', async ({}) => {
  // Step: Then Exercise intensity should be low/medium/hard
  // From: featureFiles\PremiumUsrExercise.feature:213:3
});

Then('Premium user should see total duration in exercise schedule page', async ({}) => {
  // Step: Then Premium user should see total duration in exercise schedule page
  // From: featureFiles\PremiumUsrExercise.feature:221:3
});

Then('total duration should be equal the sum of all individual durations', async ({}) => {
  // Step: Then total duration should be equal the sum of all individual durations
  // From: featureFiles\PremiumUsrExercise.feature:229:3
});

Then('total calories should be equal the sum of all individual calories', async ({}) => {
  // Step: Then total calories should be equal the sum of all individual calories
  // From: featureFiles\PremiumUsrExercise.feature:237:3
});