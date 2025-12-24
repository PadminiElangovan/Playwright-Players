
import { test } from '../fixtures/Index_Fixture.js';
export class OndoardingWithReportSteps_Page {


    constructor(page, onbrdwithreport) {
        this.page = page;
        this.onbrdwithreport = onbrdwithreport;
        this.stepTitleWithReport = page.locator("//h2[@class='text-2xl font-semibold text-center mb-1 text-purple-700']");
        this.stepSubTitleWithReport = page.locator("//p[@class='text-center text-sm text-purple-600 mb-6']");
        this.progressBar = page.locator("//div[@class='bg-purple-600 h-3 rounded-full']");
        this.stepNum = page.locator("//p[@class='text-xs text-purple-700 font-medium']");
        this.heightTextField = page.getByPlaceholder('Enter height in cm (1-300)');
        this.weightTextField = page.getByPlaceholder('Enter weight in kg (1-500)');
        this.heightError = page.locator("//div[text()='Please enter a valid height in cm']");
        this.weightError = page.locator("//div[text()='Please enter a valid weight in kg']");
        this.allOptionsContainerStep5 = page.locator("//div[@class='bg-white rounded-xl p-4 shadow-md space-y-2 max-h-80 overflow-y-auto']");
        this.allOptionRowStep5 = this.allOptionsContainerStep5.locator("//div[@class='flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-purple-300 cursor-pointer']");
        this.freePremiumDetailsTitle = page.getByRole('heading', { name: 'Free vs. Premium Account' });

    }

    async selectAllergyCheckbox(allergy) {
        const row = this.allOptionRowStep5.filter({ hasText: allergy }).first()    
        const checkbox = row.locator('input[type="checkbox"]');
        await checkbox.check();                   
    }


    async verifyEachOptionHasCheckboxStep5() {
        const count = await this.allOptionRowStep5.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            const row = this.allOptionRowStep5.nth(i);
            const checkbox = row.locator("//input[@type='checkbox']");
        }
    }


    async getWeightErrorText() {
        return await this.weightError.textContent();
    }

    async getHeightErrorText() {
        return await this.heightError.textContent();
    }

    async getTitleText() {
        return await this.stepTitleWithReport.textContent();
    }

    async getSubTitleText() {
        return await this.stepSubTitleWithReport.textContent();

    }

    async getStepNum() {
        return await this.stepNum.textContent();
    }

    getFieldByText(text) {
        return this.page.getByText(text);
    }

    getFieldByRole(option) {
        return this.page.getByRole('button', { name: option, exact: true });
    }

    async enterValuesStep1(height, weight) {
        await this.heightTextField.clear();
        await this.heightTextField.type(height);
        await this.weightTextField.clear();
        await this.weightTextField.type(weight);
        await this.onbrdwithreport.continueBtn.click();

    }

}



