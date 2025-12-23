import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';


const { Given, When, Then } = createBdd(test, { passTags: true });

// Background When
When('User clicks create account button after filling all values to set up background', async ({ pages, excelHelpers }) => {
    const row = await excelHelpers.getByName('User successfully completed profile setup');
    const newUsername = pages.login.generateUniqueUsername();
    await pages.login.fillCompleteProfileFormDetails(row.Fullname, newUsername, row.Password);
    await pages.login.createAccountBtn.click();

});
//Module 1 and Module 2
When('User clicks on Upload Blood Report button', async ({ pages }) => {
    await pages.onbrdwithreport.uploadBloodReportBtn.click();

});

Then('User should navigate to blood report modal', async ({ pages }) => {
    await expect(pages.onbrdwithreport.uploaadBloodReportModalHeading).toBeVisible();

});
Given('User is on blood report modal', async ({ pages }) => {
    await pages.onbrdwithreport.uploadBloodReportBtn.waitFor({ state: 'visible' });
    await pages.onbrdwithreport.uploadBloodReportBtn.click();
});

When('User hovers over the upload box', async ({ pages }) => {
    await pages.onbrdwithreport.hoverUploadBoxWithWait();
});

Then('Upload box should show drag & drop interaction', async ({ pages }) => {
    expect(pages.onbrdwithreport.hoverColor).not.toBe(pages.onbrdwithreport.initialColor);
});

When('user uploads {string} file', async ({ pages }, validORinvalid) => {

    await pages.onbrdwithreport.uploadFile(validORinvalid);

});

Then('User should see {string} outcome', async ({ pages, testData }, expected) => {

    switch (expected) {
        case "Only PDF files are supported":
        case "File exceeds 10MB":
            await pages.onbrdwithreport.progressBarLocator.waitFor({ state: 'visible' });
            const actualError = await pages.onbrdwithreport.getUploadAndProcessError();
            await expect(actualError).toContain(testData.Expected);
            break;
        case "processing percentage bar":
            await pages.onbrdwithreport.progressBarLocator.waitFor({ state: 'visible' });
            await expect(pages.onbrdwithreport.progressBarLocator).toBeVisible();
            break;
        case "enabled pload&Process button":
            await expect(pages.onbrdwithreport.uploadAndProcessBtn).toBeEnabled();
            break;
        case " modal closed and returned to previous screen":
            await expect(pages.onbrdwithreport.uploaadBloodReportModalHeading).toBeVisible();
            break;
    }

});

When('user just uploads {string}', async ({ pages }, validORinvalid) => {
    await pages.onbrdwithreport.justUploadFile(validORinvalid);
});

When('User clicks Cancel in upload blood report page', async ({ pages }) => {
    await pages.onbrdwithreport.cancelBtn.click();
});

Then('User should see {string} after processing', async ({ pages }, expected) => {
    switch (expected) {
        case "Report analysis":
            await pages.onbrdwithreport.waitForProcessingToFinish();
            await expect(pages.onbrdwithreport.reportAnalysisHeading).toBeVisible();
            break;
        case "continue to onboarding button":
            await pages.onbrdwithreport.waitForProcessingToFinish();
            await expect(pages.onbrdwithreport.contToOnboardingBtn).toBeVisible();
            break;
    }
});


Then('User should see the following sections:', async ({ pages }, dataTable) => {
    const expectedSections = dataTable.raw().flat();
    await pages.onbrdwithreport.waitForProcessingToFinish();
    for (const section of expectedSections) {
        let sectionHeading = pages.onbrdwithreport.getFieldByRole(section);
        await expect(sectionHeading, `Heading "${section}" is not visible`).toBeVisible();
    }
});

Then('User should see {string} section', async ({ pages }, expected) => {
    await pages.onbrdwithreport.waitForProcessingToFinish();
    const headingLocator = pages.onbrdwithreport.headingMedicalCondition;
    await expect(headingLocator).toBeVisible();
});

//Module 3
Given('User is on report analysis and uploads the file', async ({ pages }) => {
    await pages.onbrdwithreport.uploadBloodReportBtn.waitFor({ state: 'visible' });
    await pages.onbrdwithreport.uploadBloodReportBtn.click();
    await pages.onbrdwithreport.uploadFile("Valid pdf file");

});

When('User clicks Onboarding button', async ({ pages }) => {
    //  await pages.onbrdwithreport.page.waitForLoadState('domcontentloaded');
    await pages.onbrdwithreport.waitForProcessingToFinish();
    await pages.onbrdwithreport.contToOnboardingBtn.click();

});

Then('User should see {string} for step for onboarding with Blood report for {string}', async ({ pages, testData }, expected, scenario) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });

    switch (scenario) {
        case "presence of text field":
            const placeholders = pages.onbrdwithreport.parseCommaSeparated(expected);
            for (const text of placeholders) {
                const field = pages.onbrdwithreport.getFieldByPlaceholder(text);
                await expect(field, `Field with placeholder "${text}" is not visible`).toBeVisible();
            }
            break;

        case "presence of dropdown":
            await expect(pages.onbrdwithreport.genderDropBox).toBeVisible();
            break;

        case "progress bar is visible":
            await expect(pages.onbrdwithreport.progressBar).toBeVisible();
            break;

        case "presence of continue button":

            await expect(pages.onbrdwithreport.continueBtn).toBeVisible();
            break;

        case "incomplete steps (2-5) are not highlighted":
            const { fullClasses } = await pages.onbrdwithreport.getProgressBarClasses();
            await expect(fullClasses, 'Unfilled portion is not unhighlighted correctly').toContain(testData.Expected);
            break;
    }
});


