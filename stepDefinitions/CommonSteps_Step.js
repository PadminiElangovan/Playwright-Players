import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then, Before } = createBdd(test, { passTags: true });

Before({ tags: "@newPremUser" }, async ({ pages, excelHelpers, testData }) => {
    console.log("Running BEFORE hook for scenarios that needs new premium user");
    await pages.login.loginBtn.click();
    const newUserEmail = pages.login.generateUniqueEmail();
    await pages.login.fillEmailAndClickCont(newUserEmail);
    const data = await excelHelpers.getByName('Creating a premium user for hooks');
    const newUsername = pages.login.generateUniqueUsername();
    await pages.login.fillCompleteProfileFormDetails(data.Fullname, newUsername, data.Password);
    await pages.login.createAccountBtn.click();
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
    await pages.withoutsteps.getFieldByRole("No ❌").click();
    await pages.withoutsteps.selectCheckboxWithoutReport("Anemia");
    await pages.withoutsteps.getFieldByRole("Continue").click();
    await pages.withoutsteps.getFieldByRole("Easy 🦋").click();
    await (pages.withoutsteps.inputFieldStep12).type(data.HbA1cValue);
    await pages.withoutsteps.getFieldByRole("Continue").click();

});