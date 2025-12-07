  import {createBdd} from 'playwright-bdd';
  import { test } from '../fixtures/Index_Fixture.js';
  import { expect } from '@playwright/test';

  const { Given, When, Then } = createBdd(test, { passTags: true });
  When('User clicks the Check Your Risk button', async ({}) => {
  // Step: When User clicks the Check Your Risk button
  // From: featureFiles\DiabeticRiskAssesment.feature:8:3
});

Then('User should see {string} displayed in the Diabetes Risk Analyzer', async ({}, arg) => {
  // Step: Then User should see "Diabetes Risk Analyzer" displayed in the Diabetes Risk Analyzer
  // From: featureFiles\DiabeticRiskAssesment.feature:9:3
});

Then('User should see {string} in the Diabetes Risk Analyzer', async ({}, arg) => {
  // Step: Then User should see "Cancel button" in the Diabetes Risk Analyzer
  // From: featureFiles\DiabeticRiskAssesment.feature:21:3
});

Then('User should see {string} in {string} field of Diabetes Risk Analyzer', async ({}, arg, arg1) => {
  // Step: Then User should see "Enter your age (1–150)" in "Age" field of Diabetes Risk Analyzer
  // From: featureFiles\DiabeticRiskAssesment.feature:37:3
});

Then('User should see {string} dropdown contain {string}', async ({}, arg, arg1) => {
  // Step: Then User should see "Physical Activity" dropdown contain "Active, Moderate, Sedentary"
  // From: featureFiles\DiabeticRiskAssesment.feature:53:3
});

Then('User should see {string} numeric stepper {string} control', async ({}, arg, arg1) => {
  // Step: Then User should see "Age" numeric stepper "increment" control
  // From: featureFiles\DiabeticRiskAssesment.feature:65:3
});

Then('User should see Calculate Risk button disabled', async ({}) => {
  // Step: Then User should see Calculate Risk button disabled
  // From: featureFiles\DiabeticRiskAssesment.feature:80:3
});

Given('User is in diabetes risk analyzer', async ({}) => {
  // Step: Given User is in diabetes risk analyzer
  // From: featureFiles\DiabeticRiskAssesment.feature:85:3
});

When('User clicks the Cancel button', async ({}) => {
  // Step: When User clicks the Cancel button
  // From: featureFiles\DiabeticRiskAssesment.feature:86:3
});

Then('User should be returned to the home page', async ({}) => {
  // Step: Then User should be returned to the home page
  // From: featureFiles\DiabeticRiskAssesment.feature:87:3
});

When('User enters values in all fields', async ({}) => {
  // Step: When User enters values in all fields
  // From: featureFiles\DiabeticRiskAssesment.feature:93:3
});

Then('User should see Calculate Risk button enabled', async ({}) => {
  // Step: Then User should see Calculate Risk button enabled
  // From: featureFiles\DiabeticRiskAssesment.feature:94:3
});

When('User clicks Calculate Risk button after entering valid values in all fields', async ({}) => {
  // Step: When User clicks Calculate Risk button after entering valid values in all fields
  // From: featureFiles\DiabeticRiskAssesment.feature:100:3
});

Then('User should see Your Diabetes Risk Assessment dialog', async ({}) => {
  // Step: Then User should see Your Diabetes Risk Assessment dialog
  // From: featureFiles\DiabeticRiskAssesment.feature:101:3
});

