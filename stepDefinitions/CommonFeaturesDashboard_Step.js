import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

When('User clicks the Dashboard on the navigation bar', async ({ pages }) => {
    await pages.commonDashboard.navigateToDashboard();
});

Then('User should see the {string} for {string}', async ({ pages }, expectedText, Scenario) => {
    let actualText;

    switch (Scenario) {
        case 'WelcomeMesg':
            actualText = await pages.commonDashboard.getWelcomeMesg();
            break;
        case 'subtext':
            actualText = await pages.commonDashboard.getSubText();
            break;
        default:
            throw new Error(`Unknown scenario type: ${Scenario}`);
    }
    await expect(actualText.trim()).toContain(expectedText);
});

Then('User should see the following buttons on Dashboard page', async ({ pages }, dataTable) => {
    const buttons = dataTable.raw().flat();

    for (const buttonName of buttons) {
        let buttonLocator;

        switch (buttonName) {
            case 'Upgrade to Premium':
                buttonLocator = pages.commonDashboard.UgradePremiumButton;
                break;
            case 'Save Changes':
                buttonLocator = pages.commonDashboard.SaveChangesButton;
                break;
            default:
                throw new Error(`Unsupported button name in DataTable: ${buttonName}`);
        }

        await expect(buttonLocator).toBeVisible();
    }
});

Then('User should see the header {string} with correct spelling', async ({ pages }, expectedHeader) => {
    const actualHeader = await pages.commonDashboard.getAccountInformation();
    await expect(actualHeader.trim()).toBe(expectedHeader);
});

Then('User should see the {string} field under Account Information section', async ({ pages }, fieldName) => {
    let fieldLocator;

    switch (fieldName) {
        case 'Age':
            fieldLocator = pages.commonDashboard.Age;
            break;
        case 'Height(cm)':
            fieldLocator = pages.commonDashboard.Height;
            break;
        case 'Weight(kg)':
            fieldLocator = pages.commonDashboard.Weight;
            break;
        case 'Exercise Routine Level':
            fieldLocator = pages.commonDashboard.ExerciseRoutineLevel;
            break;
        case 'Cuisine Preferences':
            fieldLocator = pages.commonDashboard.CuisinePreferences;
            break;
        case 'Food Allergies':
            fieldLocator = pages.commonDashboard.FoodAllergies;
            break;
        default:
            throw new Error(`Unsupported field name: ${fieldName}`);
    }

    await expect(fieldLocator).toBeVisible();
});

Given('User is in dashboard Page', async ({ pages }) => {
    console.log("user is in dashboard page");
});

When('User clicks the {string} dropdown', async ({ pages }, fieldName) => {
    await pages.commonDashboard.clickDropdown(fieldName)
});

Then('User should see the dropdown options', async ({ pages }, dataTable) => {
    const Options = dataTable.raw().flat();
    for (const Option of Options) {
        const locator = pages.commonDashboard.dropdownOptions(Option)
        await expect(locator).toBeVisible();
    }
});

When('User edit {string} field with {string}', async ({ pages, testData }, fieldName, scenario) => {
    switch (fieldName.toLowerCase()) {
        case 'age':
            await pages.commonDashboard.enterAge(testData.Age);
            break;
        case 'height':
            await pages.commonDashboard.enterHeight(testData.Height);
            break;
        case 'weight':
            await pages.commonDashboard.enterWeight(testData.Weight);
            break;
        default:
            throw new Error(`Unknown field: ${fieldName}`);
    }
});

Then('User should see an {string} field remain blank', async ({ pages }, fieldName) => {
    switch (fieldName.toLowerCase()) {
        case 'age':
            await expect(pages.commonDashboard.Age).toHaveValue('');
            break;
        case 'height':
            await expect(pages.commonDashboard.Height).toHaveValue('');
            break;
        case 'weight':
            await expect(pages.commonDashboard.Weight).toHaveValue('');
            break;
        default:
            throw new Error(`Unknown field: ${fieldName}`);
    }
});

When('User clicks save button after editing field with valid data', async ({ pages, testData }) => {
    await pages.commonDashboard.enterAge(testData.Age);
    await pages.commonDashboard.enterHeight(testData.Height);
    await pages.commonDashboard.enterWeight(testData.Weight);
    await pages.commonDashboard.clickDropdown("Exercise Routine Level");
    await pages.commonDashboard.clickDropdownOptions(testData.ExerciseLevel)
    await pages.commonDashboard.clickDropdown("Cuisine Preferences");
    await pages.commonDashboard.clickDropdownOptions(testData.Cuisine)
    await pages.commonDashboard.clickDropdown("Food Allergies");
    await pages.commonDashboard.clickDropdownOptions(testData.FoodAllergies)
    await pages.commonDashboard.clickSaveChanges();

});

Then('User should see messages {string}', async ({ pages }, expectedText) => {
    const actualMesg = await pages.commonDashboard.getSuccessMesg();
    await expect(actualMesg).toContain(expectedText);
});

