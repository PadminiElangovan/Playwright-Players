import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

When('User clicks Food Intake', async ({ pages }) => {
  await pages.foodIntake.navigateToFoodIntakeScreen();
});

Then('User should see {string} for {string} on the food intake form', async ({ pages }, Text, Scenario) => {
  let actual;
  switch (Scenario.toLowerCase().trim()) {
    case 'title':
      actual = await pages.foodIntake.getFoodIntakeHeader();
      break;
    case 'subtext':
      actual = await pages.foodIntake.getFoodIntakeSubheader();
      break;
    default:
      throw new Error(`Unknown scenario: ${Scenario}`);
  }
  await expect(actual.trim()).toBe(Text);
});

Then('User should see following meal tabs in food intake form', async ({ pages }, dataTable) => {
  const meals = dataTable.rows();

  for (const meal of meals) {
    await pages.foodIntake.clickMealTab(meal);
  }
});

Then('User should see the following fields in the food intake form', async ({ pages }, dataTable) => {
  const fields = dataTable.rows();

  for (const Field of fields) {
    if (Field == 'Date') {
      await expect(pages.foodIntake.DatePicker).toBeVisible();
    } else {
      await expect(pages.foodIntake.formField(Field)).toBeVisible();
    }
  }
});

Then('User should see Serving Size dropdown options in food intake form', async ({ pages }, dataTable) => {
  await pages.foodIntake.clickFormField('Serving Size');
  const actualOptions = await pages.foodIntake.getServingSizeDropdown('Serving Size');
  const expectedOptions = dataTable.rows().map(row => row[0]);
  await expect(actualOptions).toEqual(expectedOptions);

});

Then('User should see  {string} as the default value in the Serving Size dropdown', async ({ pages }, expectedValue) => {
  const actualvalue = await pages.foodIntake.getFormFieldText('Serving Size');
  await expect(actualvalue.trim()).toEqual(expectedValue);
});

Then('User should see calculator icon in calorie', async ({ pages }) => {
  await expect(pages.foodIntake.calculatorIcon).toBeVisible();
});

Then('User should see helper text {string} below calorie field', async ({ pages }, expectedText) => {
  const helperLocator = pages.foodIntake.calorieHelpertext;
  await expect(helperLocator).toBeVisible();
  await expect(helperLocator).toContainText(expectedText, { timeout: 6000 });
  const actual = await helperLocator.innerText();
  console.log(`Expected: "${expectedText}", Actual: "${actual}"`);
  expect(actual).toContain(expectedText);

});

Then('User should see {string} field with placeholder {string}', async ({ pages }, fieldName, expectedPlaceholder) => {
  const actualPlaceholder = await pages.foodIntake.getPlaceholder(fieldName);
  expect(actualPlaceholder).toBe(expectedPlaceholder);

});

Then('User should see current date displayed in the date field', async ({ pages }) => {

  const actualDate = await pages.foodIntake.DatePicker.textContent();
  const formattedDate = actualDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const today = new Date();

  const expectedDateText = today.toLocaleDateString('en-US',
    {
      month: 'long', day: 'numeric', year: 'numeric',
    });
  expect(formattedDate).toBe(expectedDateText);
});

Then('User should see Save Food Entry button', async ({ pages }) => {
  await expect(pages.foodIntake.saveFoodEntry).toBeVisible();
});

Given('User is on the Food Intake screen', async ({ }) => {
  console.log("user is in food inatke screen")
});

When('User selects {string} option in {string} dropdown', async ({ pages }, option, fieldName) => {
  await pages.foodIntake.selectServingSize(fieldName, option);
}
);

Then('User should see new input field added below the serving field', async ({ pages }) => {
  await expect(pages.foodIntake.customField).toBeVisible();
});

When('User enters invalid value {string} in {string}', async ({ pages, testData }, Scenario, foodNameField) => {
  await pages.foodIntake.enterFormField(foodNameField, testData.FoodName)

});

Then('User should see error message {string} under food name field', async ({ pages }, ExpectedErrorMesg) => {
  const actualMessage = await pages.foodIntake.getFoodNameErrorMesg();
  await expect(actualMessage).toEqual(ExpectedErrorMesg);
});

When('User enters valid {string} in {string} field', async ({ pages }, Food, foodNameField) => {
  await pages.foodIntake.enterFormField(foodNameField, Food);
});

Then('User should see {string} value for the food name calculated automatically', async ({ pages }, calorieField) => {
  const locator = pages.foodIntake.formField(calorieField);
  await expect(locator).not.toHaveValue('');

  const raw = await pages.foodIntake.getCaloriesValue(calorieField);
  console.log('calorie field', calorieField, 'calories raw value', raw);

  const numericString = String(raw).replace(/[^\d.]/g, '').trim();
  const caloriesNum = numericString === '' ? NaN : Number(numericString);

  expect(Number.isFinite(caloriesNum)).toBeTruthy();
  expect(caloriesNum).toBeGreaterThan(0);

});

When('User edit calorie value after automatic calorie calculation', async ({ pages }) => {
  pages.foodIntake.formField('Calories').fill('');
  await pages.foodIntake.enterFormField('Calories', String(20));
});

Then('User should see edited value in automatic calorie value', async ({ pages }) => {
  const locator = pages.foodIntake.formField('Calories');
  await expect(locator).toHaveValue(String(20));

});

When('User clicks the Save Food Entry button after leaving the {string} field empty', async ({ pages }, fieldName) => {
  await pages.foodIntake.enterFormField(fieldName, '');
  await pages.foodIntake.formField('Food Name').click();
});

Then('User should see an error message indicating that the {string}', async ({ pages }, expectedMesg) => {
  const msg = await pages.foodIntake.getValidationMessageForLabel('Food Name');
  await pages.foodIntake.formField('Food Name').focus();
  await pages.foodIntake.formField('Food Name').blur();

  expect(msg).toBe(expectedMesg);

});

When('User clicks save food entry after more than {int} words in notes', async ({ pages }, wordLimit) => {

  const longText = Array(wordLimit + 5).fill('word').join(' ');
  await pages.foodIntake.enterFormField('Notes', longText);
  await pages.foodIntake.clickSave();

});

Then('User should see error message in alert', async ({ pages }) => {
  // const dialog = await pages.foodIntake.alertPromise;
  // const text = dialog.message();
  // expect(text).toBe('Notes cannot exceed 250 words.');
  // await dialog.accept();
});

Given('User is in food Intake form', async ({ pages }) => {
  console.log("user is in food intake form");
});

When('User clicks save food entry button after entering {string}', async ({ pages, testData }, Scenario) => {
  console.log(testData);
  await pages.foodIntake.enterFormField('Food Name', testData.FoodName);
  await pages.foodIntake.selectServingSize('Serving Size', testData.ServingSize);
  await pages.foodIntake.enterFormField('Notes', testData.Notes);
  await pages.foodIntake.clickSave();

})

Then('User should see {string} in food intake form', async ({ pages }, expectedMessage) => {
  const actualMessage = await pages.foodIntake.getSucessMesg();
  expect(actualMessage.trim()).toBe(expectedMessage);
});

Then('User should see alert with message {string} in food intake form', async ({ pages }, expectedMessage) => {
  // const dialog = await pages.foodIntake.alertPromise;
  // expect(dialog.type()).toBe('alert');
  // expect(dialog.message()).toContain(expectedMessage);
  // await dialog.accept();
});
