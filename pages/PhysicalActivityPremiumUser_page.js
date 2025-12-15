export class PhysicalActivityPremiumUser_page {

    constructor(page) {
        this.page = page;
        this.physicalActivityScreen = page.getByRole('button', { name: 'Physical Activity' });
        this.physicalActivityHeader = page.getByRole('heading', { name: 'Physical Activity' });
        this.physicalActivitySubheader = page.getByText('Track your fitness journey');
        this.ActivityTypeText = page.getByText('Activity Type');
        this.DurationText = page.getByText('Duration');
        this.DateText = page.getByText('Date', { exact: true });
        this.IntensityText = page.getByText('Intensity');
        this.ActivityTypeDropdown = page.locator('#activityType');
        this.ActivityTypeDropdownOptions = this.ActivityTypeDropdown.locator('option');
        this.DurationInputField = page.getByRole('spinbutton', { name: 'Duration' });
        this.DurationDropdown = page.locator('select[name="durationUnit"]');
        this.DurationDropdownOptions = this.DurationDropdown.locator('option');
        this.DatePicker = page.locator('button[aria-haspopup="dialog"]');
        this.LightIntensity = page.getByRole('button', { name: 'Light' });
        this.ModerateIntensity = page.getByRole('button', { name: 'Moderate' });
        this.VigorousIntensity = page.getByRole('button', { name: 'Vigorous' });
        this.calendar = page.locator('.rdp.p-3');
        this.previousBtnInCalendar = page.getByRole('button', { name: 'Go to previous month' });
        this.nextBtnInCalendar = page.getByRole('button', { name: 'Go to next month' });
        this.SaveActivityButton = page.getByRole('button', { name: 'Save Activity' });
        this.sucessMessage = page.locator('div.text-sm.opacity-90');

    }

    async navigatePhysicalActivityScreen() {
        await this.physicalActivityScreen.click();
    }

    async getPhysicalActivityHeaderText() {
        return await this.physicalActivityHeader.textContent();
    }

    async getPhysicalActivitySubHeaderText() {
        return await this.physicalActivitySubheader.textContent();
    }

    async clickActivityDropdown() {
        await this.ActivityTypeDropdown.click();
    }

    async getActivityTypeOptionsText() {
        return await this.ActivityTypeDropdownOptions.allTextContents();
    }

    async getDurationInputFieldText() {
        await this.DurationInputField.textContent();
    }

    async clickDurationDropdown() {
        await this.DurationDropdown.click();
    }

    async getDurationOptionsText() {
        return await this.DurationDropdownOptions.allTextContents();
    }

    async clickDatePicker() {
        await this.DatePicker.click();

    }

    async physicalActivtySucessMesg() {
          await this.sucessMessage.waitFor({ state: 'visible', timeout: 3000 });
        return await this.sucessMessage.textContent();
    }

    async selectActivityType(option) {
        await this.ActivityTypeDropdown.waitFor({ state: 'visible' });
        await this.ActivityTypeDropdown.selectOption({ label: option });
    }

    async enterDuration(duration) {
        await this.DurationInputField.click();
        await this.DurationInputField.press(process.platform === 'darwin' ? 'Meta+A' : 'Control+A');
        await this.DurationInputField.press('Backspace');
        await this.DurationInputField.type(String(duration));
    }

    async selectDurationDropdown(option) {
        await this.DurationDropdown.selectOption(option);
    }

    async clickSaveActivityButton() {
        await this.SaveActivityButton.click();
    }

    async selectIntensity(type) {
        switch (type) {
            case 'Light':
                await this.LightIntensity.click();
                break;
            case 'Moderate':
                await this.ModerateIntensity.click();
                break;
            case 'Vigorous':
                await this.VigorousIntensity.click();
                break;
            default:
                throw new Error(`Unknown Intensity type: ${Intensity}`);
        }
    }

}


