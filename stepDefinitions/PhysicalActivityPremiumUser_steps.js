import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });


When('User clicks physical activity', async ({ pages }) => {
    await pages.physicalActivity.navigatePhysicalActivityScreen()
});

Then('User should see {string} {string} in physical activity form', async ({ pages }, text, scenario) => {
    let actual;
    switch (scenario.toLowerCase().trim()) {
        case 'title':
            actual = await pages.physicalActivity.getPhysicalActivityHeaderText()
            break;
        case 'subtext':
            actual = await pages.physicalActivity.getPhysicalActivitySubHeaderText();
            break;
        default:
            throw new Error(`Unknown scenario: ${Scenario}`);
    }
    await expect(actual.trim()).toBe(text);

});

Then('User should see the following fields in Physical Activity', async ({ pages }, dataTable) => {

    for (const row of dataTable.rows()) {
        const Field = row[0];
        switch (Field) {
            case 'Activity Type':
                await expect(pages.physicalActivity.ActivityTypeText).toBeVisible();
                break;
            case 'Duration':
                await expect(pages.physicalActivity.DurationText).toBeVisible();
                break;
            case 'Date':
                await expect(pages.physicalActivity.DateText).toBeVisible();
                break;
            case 'Intensity':
                await expect(pages.physicalActivity.IntensityText).toBeVisible();
                break;
            default:
                throw new Error(`Unknown Field: ${Field}`);
        }
    }
});

Then('User should see  dropdown for activity type', async ({ pages }) => {

    const tagName = await pages.physicalActivity.ActivityTypeDropdown.evaluate(el => el.tagName);
    if (tagName.toLowerCase() === 'select') {
        console.log('Activity Type is a dropdown');
        await expect(pages.physicalActivity.ActivityTypeDropdown).toBeVisible();
    } else {
        console.log('Activity Type is NOT a dropdown');
    }
});

When('User clicks activity type dropdown', async ({ pages }) => {
    await pages.physicalActivity.clickActivityDropdown();
});

Then('User should see the following options in Activity Type dropdown', async ({ pages }, dataTable) => {
    const expectedValues = dataTable.raw().flat();
    const options = await pages.physicalActivity.getActivityTypeOptionsText();

    for (const value of expectedValues) {
        expect(options).toContain(value);
    }
});

Then('User should see input field for duration', async ({ pages }) => {
    await expect(pages.physicalActivity.DurationInputField).toBeVisible();
});

Then('User should see {string} in placeholder field', async ({ pages }, duration) => {
    await expect(pages.physicalActivity.DurationInputField).toHaveValue(duration);
});

Then('User should see drop down duration', async ({ pages }) => {
    await expect(pages.physicalActivity.DurationDropdown).toBeVisible();
});

When('user clicks the duration dropdown', async ({ pages }) => {
    await pages.physicalActivity.clickDurationDropdown();
});

Then('User should see the following duration units', async ({ pages }, dataTable) => {
    const expectedUnits = dataTable.raw().flat();
    const options = await pages.physicalActivity.getDurationOptionsText();

    for (const unit of expectedUnits) {
        expect(options).toContain(unit);
    }
});

Then('User should see date picker in physical activity', async ({ pages }) => {
    await expect(pages.physicalActivity.DatePicker).toBeVisible();
});

Then('User should see the following intensity options', async ({ pages }, dataTable) => {
    for (const row of dataTable.rows()) {
        const Intensity = row[0].toLowerCase().trim();

        switch (Intensity) {
            case 'light':
                await expect(pages.physicalActivity.LightIntensity).toBeVisible();
                break;
            case 'moderate':
                await expect(pages.physicalActivity.ModerateIntensity).toBeVisible();
                break;
            case 'vigorous':
                await expect(pages.physicalActivity.VigorousIntensity).toBeVisible();
                break;
            default:
                throw new Error(`Unknown intensity: ${Intensity}`);

        }
    }
});

Then('User should see save activity button in physical activity', async ({ pages }) => {
    await expect(pages.physicalActivity.SaveActivityButton).toBeVisible();
});

Given('User is on the Physical Activity screen', async ({ pages }) => {
    console.log("User is on the Physical Activity screen");
});

When('User clicks record save activity button after entering {string}', async ({ pages, testData }, scenario) => {
   console.log("ActivityType:", testData.ActivityType, "Duration:", testData.Duration, "Intensity:", testData.Intensity);
    await pages.physicalActivity.selectActivityType(testData.ActivityType);
    await pages.physicalActivity.enterDuration(testData.Duration)
    await pages.physicalActivity.clickDurationDropdown();
    await pages.physicalActivity.selectDurationDropdown(testData.DurationUnit)
    await pages.physicalActivity.selectIntensity(testData.Intensity);
    await pages.physicalActivity.clickSaveActivityButton();
});

Then('User should see {string} in physical activity form', async ({ pages }, expectedMessage) => {
    const actualMessage = await pages.physicalActivity.physicalActivtySucessMesg();
    expect(actualMessage.trim()).toBe(expectedMessage);

});

When('User enters an {string} value in the duration text field', async ({ pages, testData }, Scenario) => {
    await pages.physicalActivity.enterDuration(testData.Duration);
});

Then('User should see the field remain blank', async ({ pages }) => {
    await expect(pages.physicalActivity.DurationInputField).toHaveValue('');
});

When('User clicks the date picker', async ({ pages }) => {
    await pages.physicalActivity.clickDatePicker();
});

Then('User should see the date calendar', async ({ pages }) => {
    await expect(pages.physicalActivity.calendar).toBeVisible();
});

Then('User should see the previous button in the date picker', async ({ pages }) => {
    await expect(pages.physicalActivity.previousBtnInCalendar).toBeVisible();
});

Then('User should see the next button in the date picker', async ({ pages }) => {
    await expect(pages.physicalActivity.nextBtnInCalendar).toBeVisible();
});
