import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';


const { Given, When, Then, Before } = createBdd(test, { passTags: true });
Before({ tags: "@register" }, async ({ pages, excelHelpers, testData }) => {
    console.log("Running BEFORE hook for scenarios that needs Register");
    await pages.login.loginBtn.click();
    const newUserEmail = pages.login.generateUniqueEmail();
    await pages.login.fillEmailAndClickCont(newUserEmail);
    const row = await excelHelpers.getByName('User successfully completed profile setup');
    const newUsername = pages.login.generateUniqueUsername();
    await pages.login.fillCompleteProfileFormDetails(row.Fullname, newUsername, row.Password);
    await pages.login.createAccountBtn.click();
});


Then('User should see {string} for {string} in steps', async ({ pages }, expected, scenario) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    const scenarioLower = scenario.toLowerCase().trim();
    switch (true) {

        case scenarioLower.includes('title'):
            await expect(pages.withsteps.stepTitleWithReport).toHaveText(expected);
            const title = await pages.withsteps.getTitleText();
            console.log("Title --------> " + title);
            break;
        case scenarioLower.includes('subheading'):
            await expect(pages.withsteps.stepSubTitleWithReport).toHaveText(expected);
            const subtitle = await pages.withsteps.getSubTitleText();
            console.log("Subtitle --------> " + subtitle);
            break;

    }
});

Then('User should see {string} for {string} in step {int}', async ({ pages }, expected, scenario, stepnum) => {

    const scenarioLower = scenario.toLowerCase();
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });

    if (scenarioLower.includes("step progress is highlighted")) {
        await expect(pages.withsteps.progressBar).toBeEnabled();

    } else if (

        scenarioLower.includes("navigation of step") ||
        scenarioLower.includes("progress shows") ||
        scenarioLower.includes("option selection") ||
        scenarioLower.includes("navigation of back button")
    ) {
        await expect(pages.withsteps.stepNum).toHaveText(expected);
        console.log("Current stepNum -----> " + await pages.withsteps.getStepNum());

    } else if (scenarioLower.includes(" button visibility")) {

       const button = pages.withsteps.getFieldByRole(expected);
        await expect(button).toBeVisible();

    } else if (scenarioLower.includes("Checkbox for options")) {
        const checkboxStep5 = pages.withsteps.verifyEachOptionHasCheckboxStep5();
        await expect(checkboxStep5).toBeVisible();
    }


});

When('User clicks continue after entering values in step {int}', async ({ pages, testData }, arg) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.enterValuesStep1(testData.Height, testData.Weight);

});


Then('User should see {string} for {string} for step {int} fields', async ({ pages, testData, browserName }, expected, scenario) => {
    if (scenario === 'alphabets in height field') {
      if (browserName === 'firefox') {
        const message = await pages.withsteps.heightTextField.evaluate(el => el.validationMessage);
        expect(message).toBe(expected);
      } else {
        await expect(pages.withsteps.heightError).toHaveText(testData.Expected);
      }
    }

    if (scenario === 'alphabets in weight field') {

      if (browserName === 'firefox') {
        const message = await pages.withsteps.weightTextField.evaluate(el => el.validationMessage);
        expect(message).toBe(expected);
      } else {
        await expect(pages.withsteps.weightError).toHaveText(testData.Expected);
      }
    }
  }
);


Then('User should see options:', async ({ pages }, dataTable) => {
    const expectedOptions = dataTable.raw().flat();
    for (const option of expectedOptions) {
        let actualOption = pages.withsteps.getFieldByText(option);
        await expect(actualOption, `Option "${option}" is not visible`).toBeVisible();
    }
});


Given('User is in step2 of onboarding with report', async ({ pages, testData }) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.enterValuesStep1(testData.Height, testData.Weight);

});

When('User clicks {string} from step {int}', async ({ pages }, option, stepNum) => {
    await pages.withsteps.getFieldByText(option).click();

});


When('User clicks back button', async ({ pages }) => {
   await pages.withsteps.getFieldByRole("Back").click();
});

Given('User is in step3 of onboarding with report', async ({ pages, testData }) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.enterValuesStep1(testData.Height, testData.Weight);
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("Easy 🦋").click();

});

Given('User is in step4 of onboarding with report', async ({ pages, testData }) => {
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.enterValuesStep1(testData.Height, testData.Weight);
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("Easy 🦋").click();
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();

});

Given('User is in step5 of onboarding with report', async ({ pages, testData }) => {
  await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.enterValuesStep1(testData.Height, testData.Weight);
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("Easy 🦋").click();
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.onbrdwithreport.stepsModal.waitFor({ state: "visible" });
    await pages.withsteps.getFieldByText("Asian 🍜").click();

});

When('User selects {string} and clicks submit from step {int}', async ({ pages }, allergyoption, step) => {
    const allergies = allergyoption.split(',').map(a => a.trim());
    for (const allergy of allergies) {
        await pages.withsteps.selectAllergyCheckbox(allergy);
    }
    await pages.withsteps.getFieldByRole("Submit").click();
});

Then('User should be navigated to free and premium details page', async ({ pages }) => {
    await pages.withsteps.freePremiumDetailsTitle.waitFor({ state: "visible" });
    await expect(pages.withsteps.freePremiumDetailsTitle).toBeVisible();
});






