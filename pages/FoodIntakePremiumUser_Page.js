export class FoodIntakePremiumUser_Page {

    constructor(page) {
        this.page = page;
        this.FoodIntakeScreen = page.getByRole('button', { name: 'Food Intake' });
        this.FoodIntakeHeader = page.locator('h1');
        this.FoodIntakeSubheader = page.getByText('Track what you eat to manage');
        this.MealName = (mealName) => this.page.getByRole('button', { name: mealName });
        this.formField = (label) => this.page.getByLabel(label, { exact: true });
        this.DatePicker = page.locator('button[aria-haspopup="dialog"]');
        this.calculatorIcon = page.locator("//button[@title = 'Calculate calories automatically']");
        this.calorieHelpertext = page.locator('p.mt-1.text-sm.text-gray-500');
        this.saveFoodEntry = page.getByRole('button', { name: 'Save Food Entry' });



    }
    async navigateToFoodIntakeScreen() {
        await this.FoodIntakeScreen.click();
    }

    async getFoodIntakeHeader() {
        return await this.FoodIntakeHeader.textContent();
    }

    async getFoodIntakeSubheader() {
        return await this.FoodIntakeSubheader.textContent();
    }

    async clickMealTab(mealName) {
        await this.MealName(mealName).click();
    }

    async getPlaceholder(label) {
        return await this.formField(label).getAttribute('placeholder');
    }

    async clickFormField(label) {
        await this.formField(label).click();
    }

    async getServingSizeDropdown(label) {
        const dropdown = this.formField(label);
        const optionElements = dropdown.locator('option');
        return await optionElements.allTextContents();
    }

    async getFormFieldText(label) {
        const dropdown = this.formField(label);
        const selectedOption = dropdown.locator('option:checked');
        return (await selectedOption.textContent()).trim();
    }

    async getCalorieHelpertext() {
        return await this.calorieHelpertext.textContent();
    }


}

