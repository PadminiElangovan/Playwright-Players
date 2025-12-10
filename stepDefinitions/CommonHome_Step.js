import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User is logged into the app', async () => {
  // Login happens in the Page Fixture based on tags (.env users)
});

When('User is on the Home page', async ({ pages }) => {
  await pages.commonhome.waitForHomePage();
});

// App name / username / logout link / status labels
Then('User should see home text {string}', async ({ pages }, expectedText) => {
  await expect(
    pages.commonhome.page.getByText(expectedText, { exact: false })
  ).toBeVisible();
});

// Top navigation bar is visible
Then('User should see top navigation bar', async ({ pages }) => {
  await expect(pages.commonhome.topNavBar).toBeVisible();
});

// Navigation items: Home / Dashboard / Education
Then(
  'User should see navigation text {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByText(expectedText, { exact: true })
    ).toBeVisible();
  }
);

// Condition labels: "Diabetic", "Obese"
Then(
  'User should see condition text {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByText(expectedText, { exact: true })
    ).toBeVisible();
  }
);

// Units: "mg/dL"
Then(
  'User should see unit text {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByText(expectedText, { exact: true })
    ).toBeVisible();
  }
);

// Meal-plan texts: "Today's Meal Plan", "View Full Plan"
Then(
  'User should see meal plan text {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByText(expectedText, { exact: true })
    ).toBeVisible();
  }
);

// Sidebar labels (Meal Plan / Exercise)
Then(
  'User should see sidebar label {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByRole('button', {
        name: expectedText,
        exact: true,
      })
    ).toBeVisible();
  }
);

// Meal Plan tabs (Breakfast / Lunch / Dinner / Snacks)
Then(
  'User should see meal tab {string}',
  async ({ pages }, expectedText) => {
    await expect(
      pages.commonhome.page.getByRole('button', {
        name: expectedText,
        exact: true,
      })
    ).toBeVisible();
  }
);

// Metric values for HbA1C / BMI / Average Blood Sugar
Then(
  'User should see metric values for HbA1C, BMI, and Average Blood Sugar',
  async ({ pages }) => {
    await expect(pages.commonhome.hba1cValue).toBeVisible();
    await expect(pages.commonhome.bmiValue).toBeVisible();
    await expect(pages.commonhome.avgBloodSugarValue).toBeVisible();
  }
);

// Breakfast tab selected by default
Then(
  'User should see Breakfast tab selected by default',
  async ({ pages }) => {
    await expect(pages.commonhome.breakfastTab).toHaveClass(/bg-violet-500/);
    await expect(pages.commonhome.breakfastTab).toHaveClass(/text-white/);
  }
);

// Sidebar tab container within the flex layout
Then(
  'User should see sidebar tab container within the flex layout',
  async ({ pages }) => {
    await expect(pages.commonhome.sidebarTabContainer).toBeVisible();
  }
);

// Utensil icon in Meal Plan tab
Then(
  'User should see utensil icon in the Meal Plan tab',
  async ({ pages }) => {
    await expect(pages.commonhome.mealPlanIcon).toBeVisible();
  }
);

// Dumbbell icon in Exercise tab
Then(
  'User should see dumbbell icon in the Exercise tab',
  async ({ pages }) => {
    await expect(pages.commonhome.exerciseIcon).toBeVisible();
  }
);

// "Last updated" line
Then(
  'User should see timestamp next to the Last updated label',
  async ({ pages }) => {
    await expect(
      pages.commonhome.page.getByText('Last updated', { exact: false })
    ).toBeVisible();
  }
);

// --------------------------------------------------
// Meal sections clickable (Breakfast / Lunch / Dinner / Snacks)
// --------------------------------------------------

// When(
//   'User clicks on the {string} meal section',
//   async ({ pages }, mealSection) => {
//     await pages.commonhome.page
//       .getByRole('button', { name: mealSection, exact: true })
//       .click();
//   }
// );

When(
  'User clicks on the {string} meal section',
  async ({ pages }, mealSection) => {
    const tabButton = pages.commonhome.page.getByRole('button', {
      name: mealSection,
      exact: true,
    });

    // 1) Wait until the tab is actually visible & stable
    await expect(tabButton).toBeVisible();

    // 2) Click the tab
    await tabButton.click();

    // 3) Optional but nice: wait for meal details to be visible after click
    await expect(pages.commonhome.mealDetailsSection).toBeVisible();
  }
);


Then('User should see meal details section', async ({ pages }) => {
  await expect(pages.commonhome.mealDetailsSection).toBeVisible();
});

// --------------------------------------------------
// Snacks pre-meal detailed validations
// --------------------------------------------------

// NOTE: Step text must match feature file exactly
Then(
  'User should see the dish title in the meal section',
  async ({ pages }) => {
    await expect(pages.commonhome.snacksDishTitle).toBeVisible();
  }
);

Then('User should see the description for the dish', async ({ pages }) => {
  await expect(pages.commonhome.snacksDescription).toBeVisible();
});

Then(
  'User should see the pre-meal item name',
  async ({ pages }) => {
    await expect(pages.commonhome.preMealItemName).toBeVisible();
  }
);

Then(
  'User should see the pre-meal calorie value',
  async ({ pages }) => {
    const text = await pages.commonhome.preMealCalories.textContent();
    expect(text?.trim()).toMatch(/^\d+\s+calories$/);
  }
);

Then(
  'User should see text "calories" after the calorie value in pre-meal',
  async ({ pages }) => {
    const text = await pages.commonhome.preMealCalories.textContent();
    expect(text?.toLowerCase()).toContain('calories');
  }
);

// Time format hh:mm for pre-meal (generic)
Then('User should see time in "hh:mm" format in pre-meal', async ({ pages }) => {
  const text = await pages.commonhome.preMealTime.textContent();
  expect(text?.trim()).toMatch(/^\d{1,2}:\d{2}/);
});

// --------------------------------------------------
// BUG / requirement expectations – time values
// --------------------------------------------------

// Breakfast expected 7:00
Then('User should see 7 o\'clock for Breakfast', async ({ pages }) => {
  const time = await pages.commonhome.breakfastPreMealTime.textContent();
  expect(time?.trim().startsWith('7:00')).toBe(true);
});

// Lunch expected 12:00 (requirement vs 12:30 UI)
Then('User should see 12 o\'clock for Lunch', async ({ pages }) => {
  const time = await pages.commonhome.lunchPreMealTime.textContent();
  expect(time?.trim().startsWith('12:00')).toBe(true);
});

// Dinner expected 7:00 (requirement vs 7:30 UI)
Then('User should see 7 o\'clock for Dinner', async ({ pages }) => {
  const time = await pages.commonhome.dinnerPreMealTime.textContent();
  expect(time?.trim().startsWith('7:00')).toBe(true);
});

// --------------------------------------------------
// AM / PM indicators (Breakfast / Lunch / Dinner)
// --------------------------------------------------

Then(
  'User should see indicator "AM" for breakfast pre-meal',
  async ({ pages }) => {
    await expect(pages.commonhome.breakfastPreMealTime).toContainText('AM');
  }
);

Then(
  'User should see indicator "PM" for lunch pre-meal',
  async ({ pages }) => {
    await expect(pages.commonhome.lunchPreMealTime).toContainText('PM');
  }
);

Then(
  'User should see indicator "PM" for dinner pre-meal',
  async ({ pages }) => {
    await expect(pages.commonhome.dinnerPreMealTime).toContainText('PM');
  }
);

// --------------------------------------------------
// Colors for macros (Carbs / Fat / Protein)
// --------------------------------------------------

Then('User should see green color for Carbs', async ({ pages }) => {
  await expect(pages.commonhome.carbsBar).toHaveClass(/bg-green-500/);
});

Then('User should see purple color for Fat', async ({ pages }) => {
  await expect(pages.commonhome.fatBar).toHaveClass(/bg-purple-500/);
});

Then('User should see pink color for Protein', async ({ pages }) => {
  await expect(pages.commonhome.proteinBar).toHaveClass(/bg-pink-500/);
});

// --------------------------------------------------
// Units "g" for macros (Carbs / Protein / Fat)
// --------------------------------------------------

Then('User should see unit "g" for Carbs', async ({ pages }) => {
  const text = await pages.commonhome.carbsUnitText.textContent();
  expect(text?.includes('g')).toBeTruthy();
});

Then('User should see unit "g" for Protein', async ({ pages }) => {
  const text = await pages.commonhome.proteinUnitText.textContent();
  expect(text?.includes('g')).toBeTruthy();
});

Then('User should see unit "g" for Fat', async ({ pages }) => {
  const text = await pages.commonhome.fatUnitText.textContent();
  expect(text?.includes('g')).toBeTruthy();
});
