import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });


When('User scrolls to the Stress Management section', async ({ pages }) => {
    await pages.stressManageDashboard.scrollToStressManagementSection();
});

Then('User should see the title {string}', async ({ pages }, expectedTitle) => {
    const actualTitle = await pages.stressManageDashboard.getStressManagementSectionTitle();
    expect(actualTitle).toBe(expectedTitle);
});

Then('User should see the following tabs in order:', async ({ pages }, dataTable) => {
    const expectedTabs = dataTable.rows().flat();
    for (const tabName of expectedTabs) {
        const tabLocator = await pages.stressManageDashboard.tabs(tabName);
        expect(tabLocator).toBeVisible();
    }
});

When('User clicks on {string} tab', async ({ pages }, tabName) => {
    await pages.stressManageDashboard.clickTab(tabName);
});

Then('User should see the corresponding section displayed for {string}', async ({ pages }, tabName) => {
    await expect(pages.stressManageDashboard.tabs(tabName)).toHaveAttribute('aria-selected', 'true');
});

Given('User is in stress management section', async ({ pages }) => {
    console.log("user is in stress management section")
});

Then('User should see the title {string} in section', async ({ pages }, expectedTitle) => {
    await expect(pages.stressManageDashboard.textContainer).toContainText(expectedTitle);
});

Then('User should see the description {string}', async ({ pages }, expectedDescription) => {
    await expect(pages.stressManageDashboard.textContainer).toContainText(expectedDescription);
});


Then('User should see the content with title {string}', async ({ pages }, expectedTitle) => {
    await expect(pages.stressManageDashboard.GuidedMeditationTitle).toContainText(expectedTitle);
});

Then('User should see buttons for the following durations:', async ({ pages }, dataTable) => {
    const durations = dataTable.rows().flat();
    for (const duration of durations) {
        const durationButton = await pages.stressManageDashboard.durationButtons(duration);
        expect(durationButton).toBeVisible();
    }
});

Then('User should see a progress bar with time indicators {string} and {string} by default', async ({ pages }, startTime, endTime) => {

    const progressBar = pages.stressManageDashboard.progressBar;
    await expect(progressBar).toBeVisible();
    const { min, max } = await pages.stressManageDashboard.getProgressBarMinMax();
    const timeIndicators = await pages.stressManageDashboard.getProgressBarTimeIndicators();

    expect(timeIndicators).toContain(startTime);
    expect(timeIndicators).toContain(endTime);
});

When('User scrolls to the end of the Stress Management section', async ({ pages }) => {
    await pages.stressManageDashboard.scrollToEndOfStressManagementSection();
});

Then('User should see the following benefits for diabetes management:', async ({ pages }, dataTable) => {
    const actualText = await pages.stressManageDashboard.BenefitsSection.innerText();
    console.log('\n=== Benefits Section Text ===\n', actualText);

    const benefits = dataTable.hashes();

    for (const row of benefits) {
        console.log('Expected benefit:', row.benefit);
        console.log('Expected explanation:', row.explanation);
        await expect(pages.stressManageDashboard.BenefitsSection).toContainText(row.benefit);
        await expect(pages.stressManageDashboard.BenefitsSection).toContainText(row.explanation);
    }
});

Then('User should see {string} in Breathing tab for {string}', async ({ pages }, expected, scenario) => {
    switch (scenario) {
        case "heading":
            const actualHeading = await pages.stressManageDashboard.getBreathingExerciseHeading();
            expect(actualHeading).toBe(expected);
            break;
        case "description":
            const actualDescription = await pages.stressManageDashboard.getBreathingExerciseDescription();
            expect(actualDescription).toBe(expected);
            break;
        case "start button ":
            const isButtonVisible = await pages.stressManageDashboard.startBreathingBtn.isVisible();
            expect(isButtonVisible).toBe(true);
            break;
    }

});

Then('User should see default {string} with value {string} in Breathing tab', async ({ pages }, type, value) => {
    switch (type) {
        case "cycles completed":
            const actualCyclesLabel = await pages.stressManageDashboard.getCyclesCompletedLabel();
            const actualCyclesValue = await pages.stressManageDashboard.getCyclesCompletedValue();
            expect(actualCyclesLabel).toContain(type);
            expect(actualCyclesValue).toBe(value);
            break;
        case "current phase default value":
            const actualPhaseLabel = await pages.stressManageDashboard.getCurrentPhaseLabel();
            expect(actualPhaseLabel).toContain(type);
            const actualPhaseValue = await pages.stressManageDashboard.getCurrentPhaseValue();
            const normalizedPhaseValue = actualPhaseValue.replace(/[–—−]/g, '-');
            expect(normalizedPhaseValue).toBe(value);
            break;
    }
});

// When('User has started the breathing exercise', async ({}) => {
//   // Step: When User has started the breathing exercise
//   // From: featureFiles/DashboardPage/StressManagementCommonDashboard.feature:120:5
// });

// Then('User should see breathing phase {string}', async ({}, arg) => {
//   // Step: Then User should see breathing phase "Inhale"
//   // From: featureFiles/DashboardPage/StressManagementCommonDashboard.feature:121:5
// });


