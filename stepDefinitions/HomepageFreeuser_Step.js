import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Then(`User should see collapse caret toggle next to "Today's Meal Plan"`, async ({ pages }) => {
  await expect(pages.homepagefreeuser.todaysMealPlanToggle).toBeVisible();
  await expect(pages.homepagefreeuser.todaysMealPlanCaret).toBeVisible();
});

Then('User should see dot separator between time and calories', async ({ pages }) => {
  await expect(pages.homepagefreeuser.preMealInfoRow).toContainText('•');
});

When('User clicks "View Full Plan"', async ({ pages }) => {
  await pages.homepagefreeuser.clickViewFullPlan();
});

When('User clicks Exercise in sidebar', async ({ pages }) => {
  await pages.homepagefreeuser.openExerciseTab();
});

Then('User should see exercise list', async ({ pages }) => {
  await expect(pages.homepagefreeuser.exerciseList).toBeVisible();
});

Then('User should see 2 exercises listed', async ({ pages }) => {
  const count = await pages.homepagefreeuser.exerciseItems().count();
  expect(count).toBe(2);
});

Then('User should see scheduled time for each exercise', async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseTime(card)).toHaveText(
      /\d{1,2}:\d{2}\s?(AM|PM)/
    );
  }
});

Then('User should see {string} scheduled at {string}', async ({ pages }, label, time) => {
  const row = pages.homepagefreeuser.exerciseByLabel(label);
  await expect(row).toBeVisible();
  await expect(row).toContainText(time);
});


// used regex for step, when I wrote it in normal string, bddgen was not matching 
Then(/^User should see AM\/PM indicator for exercise time$/, async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseTime(card)).toContainText(/AM|PM/);
  }
});

Then('User should see duration for each exercise item', async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseInfo(card)).toContainText(/\d+\s+mins/i);
  }
});

Then('User should see duration format in mins', async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseInfo(card)).toContainText(/mins/i);
  }
});

Then('User should see dot separator between duration and intensity', async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseInfo(card)).toContainText('•');
  }
});

Then('User should see intensity level for each exercise', async ({ pages }) => {
  const items = pages.homepagefreeuser.exerciseItems();
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    const card = items.nth(i);
    await expect(pages.homepagefreeuser.exerciseInfo(card)).toContainText(/intensity/i);
  }
});

Then('User should see "View Full Schedule" button', async ({ pages }) => {
  await expect(pages.homepagefreeuser.viewFullScheduleBtn).toBeVisible();
});

When('User opens Exercise section and clicks {string}', async ({ pages }, btnText) => {
  await pages.homepagefreeuser.clickViewFullSchedule();
});

Then('User should be redirected to subscription page', async ({ pages }) => {
  await expect(pages.homepagefreeuser.page).toHaveURL(/\/upgrade$/, { timeout: 15000 });
  await expect(pages.homepagefreeuser.continueFreeBtn).toBeVisible();
  await expect(pages.homepagefreeuser.upgradeToPremiumBtn).toBeVisible();
});


