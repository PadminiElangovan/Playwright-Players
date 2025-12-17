import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User is logged into the app', async ({ pages }) => {
  await pages.commonhome.assertLoggedIn();
});

When('User is on the Home page', async ({ pages }) => {
  await pages.commonhome.waitForHomePage();
});

Then('User should see {string} text on the home page', async ({ pages }, text) => {
  await expect(pages.commonhome.homeText(text)).toBeVisible();
});

Then('User should see username displayed on the home page', async ({ pages }) => {
  await expect(pages.commonhome.username).toBeVisible();
});

Then('User should see top navigation bar', async ({ pages }) => {
  await expect(pages.commonhome.topNavBar).toBeVisible();
});

Then('User should see navigation tab {string}', async ({ pages }, tabName) => {
  const tab = pages.commonhome.navTab(tabName);
  await expect(tab).toBeVisible();
});

Then('User should see home text {string}', async ({ pages }, text) => {
  await expect(pages.commonhome.homeText(text)).toBeVisible();
});

Then('User should see timestamp next to Last updated text', async ({ pages }) => {
  await expect(pages.commonhome.lastUpdatedRow).toBeVisible();
  await expect(pages.commonhome.lastUpdatedRow).toContainText(/Last updated/i);
});

Then('User should see last updated timestamp in 12-hour format', async ({ pages }) => {
  const rowText = (await pages.commonhome.lastUpdatedRow.textContent()) || '';
  expect(rowText).toMatch(/\b(1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d\s*(AM|PM)\b/i);
});

Then('User should see last updated 12-hour clock indicator', async ({ pages }) => {
  const rowText = (await pages.commonhome.lastUpdatedRow.textContent()) || '';
  expect(rowText).toMatch(/\b(AM|PM)\b/i);
});

Then('User should see metric value {string}', async ({ pages }, metric) => {
  const map = {
    HbA1C: pages.commonhome.hba1cValue,
    BMI: pages.commonhome.bmiValue,
    'Average Blood Sugar': pages.commonhome.avgBloodSugarValue,
  };
  const locator = map[metric];
  if (!locator) throw new Error(`Unsupported metric: ${metric}`);

  await expect(locator).toBeVisible();
});

Then('User should see condition text {string}', async ({ pages }, condition) => {
  await expect(pages.commonhome.conditionText(condition)).toBeVisible();
});

Then(
  'User should see {string} unit below Average Blood Sugar',
  async ({ pages }, unit) => {
    await expect(pages.commonhome.avgBloodSugarUnit).toBeVisible();
    await expect(pages.commonhome.avgBloodSugarUnit).toHaveText(unit);
  }
);

Then('User should see meal tab {string}', async ({ pages }, tabName) => {
  const tab = pages.commonhome.mealTab(tabName);
  await expect(tab).toBeVisible();
});

Then('User should see Breakfast tab selected by default', async ({ pages }) => {
  await expect(pages.commonhome.breakfastTab).toHaveClass(/bg-violet-500/); //validates background color
  await expect(pages.commonhome.breakfastTab).toHaveClass(/text-white/); //validates default tab text color
});

Then('User should see sidebar title in flex container', async ({ pages }) => {
  await expect(pages.commonhome.sidebarTabContainer).toBeVisible();
});

Then('User should see sidebar text {string}', async ({ pages }, label) => {
  const map = {
    'Meal Plan': pages.commonhome.mealPlanSidebarButton,
    Exercise: pages.commonhome.exerciseSidebarButton,
  };
  const locator = map[label];
  if (!locator) throw new Error(`Unsupported sidebar tab: ${label}`);

  await expect(locator).toBeVisible();
});

Then('User should see utensil icon', async ({ pages }) => {
  await expect(pages.commonhome.mealPlanIcon).toBeVisible();
});

Then('User should see dumbbell icon', async ({ pages }) => {
  await expect(pages.commonhome.exerciseIcon).toBeVisible();
});

Then('User should see "View Full Plan" button', async ({ pages }) => {
  await expect(pages.commonhome.viewFullPlanButton).toBeVisible();
});

When('User clicks on meal section {string}', async ({ pages }, mealName) => {
  await pages.commonhome.clickMealSection(mealName);
});

Then('User should see meal details section', async ({ pages }) => {
  await expect(pages.commonhome.mealDetailsSection).toBeVisible();
});

Then('User should see dish title', async ({ pages }) => {
  await expect(pages.commonhome.dishTitle).toBeVisible();
});

Then('User should see dish description', async ({ pages }) => {
  await expect(pages.commonhome.dishDescription).toBeVisible();
});

Then('User should see pre-meal item name', async ({ pages }) => {
  await expect(pages.commonhome.preMealItemName).toBeVisible();
});

Then('User should see pre-meal calories', async ({ pages }) => {
  const text = (await pages.commonhome.preMealCalories.textContent()) || '';
  expect(text.trim()).toMatch(/\d+\s*calories/i);
  //trim removes space 
  //\d+ matches single double or triple digits
  //\s* ignores spaces
});

Then('User should see text "calories" after calorie value', async ({ pages }) => {
  await expect(pages.commonhome.preMealCalories).toContainText(/calories/i);
});

Then('User should see time in "hh:mm" format', async ({ pages }) => {
  const text = (await pages.commonhome.preMealTime.textContent()) || '';
  expect(text.trim()).toMatch(/^\d{1,2}:\d{2}/);
  //\d{1,2} checks the hour (1 digit or 2 digit hour)
  //\d{2} checks the 2 digits for minutes
});

Then('User should see indicator {string}', async ({ pages }, ampm) => {
  await expect(pages.commonhome.preMealTime).toContainText(ampm);
});

Then('User should see pre-meal time {string} {string}', async ({ pages }, hour, ampm) => {
  const text = (await pages.commonhome.preMealTime.textContent()) || '';
  const pattern = new RegExp(`^\\s*${hour}:00\\s*${ampm}\\b`, 'i');
  expect(text.trim()).toMatch(pattern);
  // \b for exact match of am or pm
  // i makes it case insensitive
});

Then('User should see {string} color as {string}', async ({ pages }, macro, color) => {
  const colorClassMap = {
    green: /bg-green-500/,
    pink: /bg-pink-500/,
    purple: /bg-purple-500/,
  };
  const macroLocatorMap = {    //carbs proteins fat are the macro; maps macro names to their locators
    Carbs: pages.commonhome.carbsBar,
    Protein: pages.commonhome.proteinBar,
    Fat: pages.commonhome.fatBar,
  };

  const bar = macroLocatorMap[macro];
  const expectedClass = colorClassMap[color.toLowerCase()];
  if (!bar) throw new Error(`Unsupported macro: ${macro}`);
  if (!expectedClass) throw new Error(`Unsupported color: ${color}`);

  await expect(bar).toBeVisible();
  await expect(bar).toHaveClass(expectedClass);
});
