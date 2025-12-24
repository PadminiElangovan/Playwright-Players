export class CommonFeaturesDashboard_Page {

    constructor(page) {
        this.page = page;
        this.Dashboard = this.page.getByText('Dashboard', { exact: true });
        this.WelcomeMessage = page.getByRole('heading', { name: 'Welcome Back,' });
        this.SubText = page.getByText('Track your metrics, manage')
        this.AccountInformation = page.getByText('Account Information');
        this.SaveChangesButton = page.getByRole('button', { name: 'Save Changes' });
        this.UgradePremiumButton = page.getByRole('button', { name: 'Upgrade to Premium' });
        this.Age = page.getByRole('spinbutton', { name: 'Age' });
        this.Height = page.getByRole('spinbutton', { name: 'Height (cm)' });
        this.Weight = page.getByRole('spinbutton', { name: 'Weight (kg)' });
        this.ExerciseRoutineLevel = page.getByRole('combobox', { name: 'Exercise Routine Level' });
        this.CuisinePreferences = page.getByRole('combobox', { name: 'Cuisine Preferences' });
        this.FoodAllergies = page.getByRole('combobox', { name: 'Food Allergies' })
        this.dropdown = (field) => page.getByRole('combobox', { name: field });
        this.dropdownOptions = (text) => page.getByRole('option', { name: text, exact: true });
        this.successMessage = page.locator('.grid.gap-1')

    }
    async navigateToDashboard() {
        await this.Dashboard.waitFor({ state: 'visible' });
        await this.Dashboard.click();
        await this.WelcomeMessage.waitFor({ state: 'visible' });
    }

    async getWelcomeMesg() {
        return await this.WelcomeMessage.textContent();
    }

    async getSubText() {
        return await this.SubText.textContent();
    }

    async getAccountInformation() {
        return await this.AccountInformation.textContent();
    }

    async clickDropdown(field) {
        await this.dropdown(field).click();
    }

    async enterAge(value) {
        await this.Age.clear();
        await this.Age.pressSequentially(value)

    }

    async enterHeight(value) {
        await this.Height.clear();
        await this.Height.pressSequentially(value);
    }

    async enterWeight(value) {
        await this.Weight.clear();
        await this.Weight.pressSequentially(value);
    }

    async clickSaveChanges() {
        await this.SaveChangesButton.click();
    }

    async getSuccessMesg() {
        return await this.successMessage.textContent();
    }

    async clickDropdownOptions(options) {
        await this.dropdownOptions(options).click();
    }
}





















