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
//Module 1
When('User clicks on Upload Blood Report button', async ({ pages }) => {
    await pages.onbrdwithreport.uploadBloodReportBtn.click();

});

Then('User should navigate to blood report modal', async ({ pages }) => {
    await expect(pages.onbrdwithreport.uploaadBloodReportModalHeading).toBeVisible();

});
Given('User is on blood report modal', async ({ pages }) => {
    await pages.onbrdwithreport.uploadBloodReportBtn.click();
});

When('User hovers over the upload box', async ({ pages }) => {
    const { initialColor, hoverColor } = await pages.onbrdwithreport.getInitialAndHoverBorderColor();
    console.log('Initial', initialColor, 'Hover:', hoverColor);
    pages.onbrdwithreport.initialColor = initialColor;
    pages.onbrdwithreport.hoverColor = hoverColor;
});

Then('Upload box should show drag & drop interaction', async ({ pages }) => {
    expect(pages.onbrdwithreport.hoverColor).not.toBe(pages.onbrdwithreport.initialColor);
});

When('user uploads {string} file', async ({ pages }, validORinvalid) => {
    await pages.onbrdwithreport.uploadFile(validORinvalid);
});

Then('User should see {string} outcome', async ({ pages,testData}, expected) => {

    switch(expected) {
    	case "Only PDF files are supported":
    	case "File exceeds 10MB":	
    		const actualError = await pages.onbrdwithreport.getUploadAndProcessError();
    		await expect(actualError).toContain(testData.Expected);
    		break;
    	case "processing percentage bar":
            const visible = await pages.onbrdwithreport.isProgressBarVisible();
            expect(visible).toBeTruthy();
    		break;
        case "upload&process button is enabled":
             await expect(pages.onbrdwithreport.uploadAndProcessBtn).toBeEnabled();    
    }

});

