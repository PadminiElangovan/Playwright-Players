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
    const actual = await pages.foodIntake.getCalorieHelpertext();
    expect(actual).toBe(expectedText);
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