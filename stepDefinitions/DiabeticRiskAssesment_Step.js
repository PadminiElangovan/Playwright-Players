  import {createBdd} from 'playwright-bdd';
  import { test } from '../fixtures/Index_Fixture.js';
  import { expect } from '@playwright/test';

  const { Given, When, Then } = createBdd(test, { passTags: true });
  When('User clicks the Check Your Risk button', async ({pages}) => {

      await pages.diabeticrisk.clickCheckRisk();
      
  });

  Then('User should see {string} displayed in the Diabetes Risk Analyzer', async ({pages}, expected) => {

      if (expected === 'Diabetes Risk Analyzer')
          await expect(pages.diabeticrisk.riskAnlyHeader).toContainText(expected);
      else 
          await expect(pages.diabeticrisk.riskAnlySubTxt).toContainText(expected);
  });

  Then('User should see {string} in the Diabetes Risk Analyzer', async ({pages}, field) => {

      switch (field.trim()) {
          case "Cancel button":
              await expect(pages.diabeticrisk.cancelBtn).toBeVisible(); 
          break;
          case "Calculate Risk button":
              await expect(pages.diabeticrisk.calRiskBtn).toBeVisible(); 
          break;           
          case "Family history checkbox":
              await expect(pages.diabeticrisk.familyHstyChkBox).toBeVisible(); 
          break;           
          case "Physical Activity dropdown":
              await expect(pages.diabeticrisk.pysActLevelDrpdwn).toBeVisible(); 
          break;          
          case "Blood Pressure dropdown":
              await expect(pages.diabeticrisk.bpDrpdwn).toBeVisible(); 
          break;       
          case "Diet Quality dropdown":
              await expect(pages.diabeticrisk.deitQltyDrpdwn).toBeVisible(); 
          break;
      }

  });

  Then('User should see {string} in {string} field of Diabetes Risk Analyzer', async ({pages}, expected, field) => {
      
      switch (field.trim()) {
          case "Age":
              await expect(pages.diabeticrisk.ageInputBtn).toHaveAttribute('placeholder', expected); 
          break;
          case "Weight":
              await expect(pages.diabeticrisk.weightInputBtn).toHaveAttribute('placeholder', expected); 
          break;
          case "Physical Activity":
              await expect(pages.diabeticrisk.pysActLevelDrpdwn).toContainText(expected); 
          break;            
          case "Blood Pressure":
              await expect(pages.diabeticrisk.bpDrpdwn).toContainText(expected); 
          break;
          case "Diet Quality":
              await expect(pages.diabeticrisk.deitQltyDrpdwn).toContainText(expected); 
          break;
      }
  });

  Then('User should see {string} dropdown contain {string}', async ({pages}, field, expected) => {

      const options = expected.split(',').map(o => o.trim());

      let dropdown;
      switch (field.trim()) {
          case "Physical Activity":
              dropdown = pages.diabeticrisk.pysActLevelDrpdwn;
          break;
          case "Blood Pressure":
              dropdown = pages.diabeticrisk.bpDrpdwn;
          break;
          case "Diet Quality":
              dropdown = pages.diabeticrisk.deitQltyDrpdwn;
          break;
      }

  for (const option of options) {
      await expect(dropdown).toContainText(option);
  }

  });

  // Then('User should see {string} numeric stepper {string} control', async ({}, arg, arg1) => {
  // // Step: Then User should see "Age" numeric stepper "increment" control
  // // From: featureFiles\DiabeticRiskAssesment.feature:65:3
  // });

  Then('User should see Calculate Risk button disabled', async ({pages}) => {
      await expect(pages.diabeticrisk.calRiskBtn).toBeDisabled(); 
  });

  Given('User is in diabetes risk analyzer', async ({pages}) => {
      await pages.login.launchApp();
      await pages.diabeticrisk.clickCheckRisk();
  });

  When('User clicks the Cancel button', async ({pages}) => {
      await pages.diabeticrisk.cancelBtn.click();
  });

  Then('User should be returned to the home page', async ({page}) => {
      await expect(page).toHaveURL(process.env.BASE_URL);
  });

  When('User enters values in all fields', async ({pages, testData}) => {
      await pages.diabeticrisk.inputValues(
          testData.Age,
          testData.Weight,
          testData.PhysicalActivity,
          testData.BP,
          testData.Diet);
  });

  Then('User should see Calculate Risk button enabled', async ({pages}) => {
      await expect(pages.diabeticrisk.calRiskBtn).toBeEnabled(); 
  });

  When('User clicks Calculate Risk button after entering valid values in all fields', async ({pages, testData}) => {
      await pages.diabeticrisk.inputValues(
          testData.Age,
          testData.Weight,
          testData.PhysicalActivity,
          testData.BP,
          testData.Diet);
      await pages.diabeticrisk.calRiskBtn.click(); 
  });

  Then('User should see {string} dialog', async ({pages}, expected) => {
      await expect(pages.diabeticrisk.yourAssessmentHeader).toContainText(expected);
  });