export class FoodIntakePremiumUser_Page {

    constructor(page) {
        this.page = page;
        this.FoodIntakeScreen = page.getByRole('button', { name: 'Food Intake' });
        this.FoodIntakeHeader = page.locator('h1');
        this.FoodIntakeSubheader = page.getByText('Track what you eat to manage');
        this.MealName = (mealName) => this.page.getByRole('button', { name: mealName });
        this.formField = (label) => this.page.getByLabel(label, { exact: true });
        this.dropdownOption = (option) => this.page.getByRole('option', { name: option });
        this.DatePicker = page.locator('button[aria-haspopup="dialog"]');
        this.calculatorIcon = page.locator("//button[@title = 'Calculate calories automatically']");
        this.calorieHelpertext = page.locator('p.mt-1.text-sm.text-gray-500');
        this.saveFoodEntry = page.getByRole('button', { name: 'Save Food Entry' });
        this.customField = page.locator('#customServingSize');
        this.foodNameErrorMesg = page.locator('#foodName-error');
        this.sucessMessage = page.getByText('Food Entry is recorded');
       


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
        await this.formField('Calories').click();
        await this.calorieHelpertext.waitFor({ state: 'visible' });
        return await this.calorieHelpertext.innerText();
    }

    async selectServingSize(label, option) {
        const dropdown = this.formField(label);
        await dropdown.selectOption(option);
    }

    async enterFormField(label, value) {
        await this.formField(label).fill(value);
    }

    async getFoodNameErrorMesg() {
        return await this.foodNameErrorMesg.textContent();
    }

    async getCaloriesValue(label) {
        return await this.formField(label).inputValue();
    }

    async getValidationMessageForLabel(label) {
        const locator = this.formField(label);
        return locator.evaluate(el => el.validationMessage);
    }

    async clickSave() {
        await this.saveFoodEntry.click({ force: true });
    }

    async getSuccessMesg() {
        return await this.sucessMessage.textContent();
    }






}

