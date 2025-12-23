import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User is in Home Page', async ({ pages }) => {
  console.log("User is in Home Page");
});

When('User clicks Blood Glucose', async ({ pages }) => {
  await pages.trackGlucose.navigateToTrackGlucoseScreen();
});

Then('User should see {string} Heading for {string}', async ({ pages }, text, Scenario) => {
  let actual;
  switch (Scenario.toLowerCase().trim()) {
    case 'title':
      actual = await pages.trackGlucose.getTrackGlucoseHeaderText()
      break;
    case 'subtext':
      actual = await pages.trackGlucose.getTrackGlucoseSubHeaderText();
      break;
    default:
      throw new Error(`Unknown scenario: ${Scenario}`);
  }
  await expect(actual.trim()).toBe(text);

});

Then('User should see text field for blood glucose', async ({ pages }) => {
  await expect(pages.trackGlucose.TrackGlucoseInputField).toBeVisible();
});

Then('User should see text {string} blood glucose', async ({ pages }, text) => {
  const actualText = await pages.trackGlucose.getTrackGlucoseplaceholderText()
  await expect(actualText.trim()).toBe(text);
});

Then('User should see {string} level unit next to blood glucose field', async ({ pages }, ExpectedText) => {
  const actualText = await pages.trackGlucose.getBloodGlucoseUnitText();
  await expect(actualText.trim()).toBe(ExpectedText);
});

Then('User should see the following transition labels:', async ({ pages }, dataTable) => {

  for (const row of dataTable.rows()) {
    const label = row[0];
    switch (label.toLowerCase().trim()) {
      case 'low':
        await expect(pages.trackGlucose.LowLabel).toBeVisible();
        break;
      case 'normal':
        await expect(pages.trackGlucose.normalLabel).toBeVisible();
        break;
      case 'high':
        await expect(pages.trackGlucose.HighLabel).toBeVisible();
        break;
      default:
        throw new Error(`Unknown label: ${label}`);
    }
  }
});

Then('User should see {string} color for {string}', async ({ pages }, expectedColor, transition) => {

  let locator;
  switch (transition.toLowerCase().trim()) {

    case 'low':
      locator = pages.trackGlucose.LowLabel;
      break;
    case 'normal':
      locator = pages.trackGlucose.normalLabel;
      break;
    case 'high':
      locator = pages.trackGlucose.HighLabel;
      break;
    default:
      throw new Error(`Unknown transition: ${transition}`);
  }

  const colors = await pages.trackGlucose.getColors(locator);
  console.log(`Colors for ${transition} label:`, colors);
  await expect(colors.textColor).toBe(expectedColor);

});

Then('User should see the following buttons:', async ({ pages }, dataTable) => {
  for (const row of dataTable.rows()) {
    const buttonName = row[0]
    switch (buttonName.toLowerCase().trim()) {
      case 'fasting':
        await expect(pages.trackGlucose.FastingBtn).toBeVisible();
        break;
      case 'pre-meal':
        await expect(pages.trackGlucose.PreMealBtn).toBeVisible();
        break;
      case 'post-meal':
        await expect(pages.trackGlucose.PostMealBtn).toBeVisible();
        break;
      case 'bedtime':
        await expect(pages.trackGlucose.BedtimeBtn).toBeVisible();
        break;
      default:
        throw new Error(`Unknown button: ${buttonName}`);
    }

  }
});

Then('User should see date picker', async ({ pages }) => {
  await expect(pages.trackGlucose.datePickerBtn).toBeVisible();
});

Then('User should see last reading details', async ({ pages }) => {
  await expect(pages.trackGlucose.LastReadingDetails).toBeVisible();
  const text = await pages.trackGlucose.lastReadingDetails();
  const value = text.match(/-?\d+/);
  console.log('Last reading value:', value);
});

Then('User should see record reading button', async ({ pages }) => {
  await expect(pages.trackGlucose.recordReadingBtn).toBeVisible();
});

Given('User is on the Blood Glucose screen', async ({ }) => {
  console.log("User is on the Blood Glucose screen");
});

When('User clicks on date field', async ({ pages }) => {
  await pages.trackGlucose.clickDatePicker();
});

Then('User should see date picker opened', async ({ pages }) => {
  await expect(pages.trackGlucose.calendar).toBeVisible();
});

Then('User should see today\'s date highlighted', async ({ pages }) => {
  const today = new Date().getDate();
  const highlightedDate = await pages.trackGlucose.currentDateBtn.textContent();
  if (parseInt(highlightedDate) !== today) {
    throw new Error(`Expected today's date to be highlighted, but found ${highlightedDate}`);
  }
});

Then('User should see the Previous button in date', async ({ pages }) => {
  await expect(pages.trackGlucose.previousBtnInCalendar).toBeVisible();
});

Then('User should see the Next button in date', async ({ pages }) => {
  await expect(pages.trackGlucose.nextBtnInCalendar).toBeVisible();
});

When('User enters {string} in blood glucose', async ({ pages, testData }, transition) => {
  console.log('Blood glucose value from excel:', testData.BloodGlucoseLevel);
  await pages.trackGlucose.enterTrackGlucoseLevel(testData.BloodGlucoseLevel);
});

Then('User should see transition details highlights', async ({ pages, testData }) => {
  console.log("Expected highlight from Excel:", testData.Transition);
  let locator;

  switch (testData.Transition.toLowerCase().trim()) {
    case 'low':
      locator = pages.trackGlucose.LowLabel;
      break;
    case 'normal':
      locator = pages.trackGlucose.normalLabel;
      break;
    case 'high':
      locator = pages.trackGlucose.HighLabel;
      break;
    default:
      throw new Error(`Unknown transition: ${testData.Transition}`);
  }

  await expect(locator).toHaveClass(/scale-105/);
  await expect(locator).toHaveText(testData.Transition, { ignoreCase: true });
});

When('User clicks record reading button after entering {string} valid details', async ({ pages, testData }, reading) => {

  console.log('Blood glucose value from excel:', testData.BloodGlucoseLevel);
  await pages.trackGlucose.enterTrackGlucoseLevel(testData.BloodGlucoseLevel);
  await pages.trackGlucose.selectReadingType(testData.ReadingType);
  await pages.trackGlucose.clickRecordReading();
});

Then('User should see {string} in track glucose form', async ({ pages }, expectedMessage) => {
  const actualMessage = await pages.trackGlucose.getSucessMessage();
  expect(actualMessage.trim()).toBe(expectedMessage);

});

When('User enters {string} in the blood glucose field', async ({ pages, testData }, reading) => {
  console.log('Blood glucose invalid value from excel:', testData.BloodGlucoseLevel);
  await pages.trackGlucose.enterTrackGlucoseLevel(testData.BloodGlucoseLevel);
});

Then('User should see the blood glucose field remain blank', async ({ pages }) => {
  await expect(pages.trackGlucose.TrackGlucoseInputField).toHaveValue('');

});


