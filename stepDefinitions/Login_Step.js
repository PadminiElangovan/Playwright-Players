import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

//const {Given, When, Then} = createBdd(test);
const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User is on SweetBalance homepage', async ({ pages }) => {
  await pages.login.launchApp();
});


When('User clicks on Login link', async ({ pages }) => {

  await pages.login.loginBtn.click();
});

Then('User should see {string} heading in home page', async ({ pages }, expectedText) => {

  const actualText = await pages.login.getModalText();
  console.log("actualText :" + "--->" + actualText);
  await expect(actualText).toContain(expectedText);
});

Then('User should see {string} with {string} in home page', async ({ pages }, scenario, expected) => {
  switch (scenario.toLowerCase().trim()) {
    case "presence of close button":
      await expect(pages.login.closeBtn).toBeVisible();
      break;
    case "email input field":
      await expect(pages.login.emailTextBox).toBeVisible();
      break;
    case "placeholder text in email field":
      const actual = await pages.login.emailTextBox.getAttribute('placeholder');
      expect(actual.trim()).toBe(expected.trim());
      break;
    case "Continue with Email is visible":
      await expect(pages.login.contWithEmailBtn).toBeVisible();
      break;
    case "Continue with Email is enabled":
      await expect(pages.login.contWithEmailBtn).toBeEnabled();
      break;
    case "Continue with Google is visible":
      await expect(pages.login.contWithGoogleBtn).toBeVisible();
      break;
  }

});

Given('User is on the login page', async ({ pages }) => {
  await pages.login.loginBtn.click();
});

When('User clicks continue with email button after entering email', async ({ pages, testData }) => {
  await pages.login.fillEmailAndClickCont(testData.Email);

});

//Module 2

Then('User should see {string} with {string} for login', async ({ pages, testData }, scenario, expected) => {
  switch (scenario.toLowerCase().trim()) {
    case "email input accepts valid existing email":
      await expect(pages.login.passwordTextBox).toBeVisible();
      break;
    case "email input rejects invalid email format":
      const actualErrorMsg = await pages.login.validateErrorMsg();
      const expectedErrorMsg = testData.Expected;
      await expect(actualErrorMsg).toContain(expectedErrorMsg);
      break;
    case "presence of signin button":
      await expect(pages.login.signinBtn).toBeVisible();
      break;
    case "sub text in login":
      const actualEmail = await pages.login.getReflectedEmailText();
      const expectedEmail = testData.Email;
      await expect(actualEmail).toBe(expectedEmail);
      break;
    case "presence of forgot password link":
      await expect(pages.login.contWithEmailBtn).toBeEnabled();
      break;
    case "presence of placeholder in password field":
      const actualPlaceholder = await pages.login.getPwdPlaceholderText();
      const expectedPlaceholder = testData.Expected;
      await expect(actualPlaceholder).toBe(expectedPlaceholder);
      break;
  }

});

// Testcase: Login_19
When('User Registered user clicks sign in after entering password', async ({ pages }) => {
  // Step: When User Registered user clicks sign in after entering password
  // From: featureFiles\Login.feature:58:5
});

Then('User should be navigated to home page', async ({ pages }) => {
  // Step: Then User should be navigated to home page
  // From: featureFiles\Login.feature:59:5
});



