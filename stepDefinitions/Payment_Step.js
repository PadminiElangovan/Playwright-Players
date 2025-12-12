import {createBdd} from 'playwright-bdd';
  import { test } from '../fixtures/Index_Fixture.js';
  import { expect } from '@playwright/test';

  const { Given, When, Then } = createBdd(test, { passTags: true });

  Given('User is on the subscription page', async ({}) => {
  // Step: Given User is on the subscription page
  // From: featureFiles\PaymentSubscription\Payment.feature:5:3
});

When('User clicks the Upgrade to Premium button', async ({}) => {
  // Step: When User clicks the Upgrade to Premium button
  // From: featureFiles\PaymentSubscription\Payment.feature:6:3
});

When('User clicks the Pay {string} button without entering any card details', async ({}, arg) => {
  // Step: When User clicks the Pay "$9.99 USD" button without entering any card details
  // From: featureFiles\PaymentSubscription\Payment.feature:12:3
});

Then('User should see validation messages for all required fields', async ({}) => {
  // Step: Then User should see validation messages for all required fields
  // From: featureFiles\PaymentSubscription\Payment.feature:13:3
});

When('User clicks the Pay {string} USD button with invalid card number', async ({}, arg) => {
  // Step: When User clicks the Pay "$9.99 USD" USD button with invalid card number
  // From: featureFiles\PaymentSubscription\Payment.feature:19:3
});

Then('User should see an error message for invalid card number', async ({}) => {
  // Step: Then User should see an error message for invalid card number
  // From: featureFiles\PaymentSubscription\Payment.feature:20:3
});

When('User clicks the Pay {string} button with expired card', async ({}, arg) => {
  // Step: When User clicks the Pay "$9.99 USD" button with expired card
  // From: featureFiles\PaymentSubscription\Payment.feature:26:3
});

Then('User should see an error message for expired card', async ({}) => {
  // Step: Then User should see an error message for expired card
  // From: featureFiles\PaymentSubscription\Payment.feature:27:3
});

When('User clicks the Pay {string} USD button with valid payment details', async ({}, arg) => {
  // Step: When User clicks the Pay "$9.99 USD" USD button with valid payment details
  // From: featureFiles\PaymentSubscription\Payment.feature:33:3
});

Then('User should be redirected to the confirmation page', async ({}) => {
  // Step: Then User should be redirected to the confirmation page
  // From: featureFiles\PaymentSubscription\Payment.feature:34:3
});