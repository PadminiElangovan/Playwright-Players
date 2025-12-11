export class TrackGlucosePremiumUser_Page {

    constructor(page) {
        this.page = page;

        this.TrackGlucoseScreen = page.getByRole('button', { name: 'Blood Glucose' });
        this.TrackGlucoseHeader = page.getByRole('heading', { name: 'Track Glucose' });
        this.TrackGlucoseSubHeader = page.getByText('Keep your health in check');
        this.TrackGlucoseInputField = page.getByPlaceholder('Enter blood glucose level');
        this.bloodGlucoseUnit = page.locator('span', { hasText: 'mg/dL' });
        this.highlightedItem = page.locator('.transition-item.active');
        this.LowLabel = page.getByText('Low');
        this.normalLabel = page.getByRole('dialog').getByText('Normal');
        this.HighLabel = page.getByText('High');
        this.FastingBtn = page.getByRole('button', { name: 'Fasting' });
        this.PreMealBtn = page.getByRole('button', { name: 'Pre-meal' });
        this.PostMealBtn = page.getByRole('button', { name: 'Post-meal' });
        this.BedtimeBtn = page.getByRole('button', { name: 'Bedtime' });
        this.datePickerBtn = page.locator('button[aria-haspopup="dialog"]');
        this.LastReadingDetails = page.locator('text=Last reading:');
        this.calendar = page.locator('.rdp.p-3');
        this.currentDateBtn = page.locator('button[name="day"][aria-selected="true"]');
        this.previousBtnInCalendar = page.getByRole('button', { name: 'Go to previous month' });
        this.nextBtnInCalendar = page.getByRole('button', { name: 'Go to next month' });
        this.recordReadingBtn = page.getByRole('button', { name: 'Record Reading' });
        this.sucessMessage = page.getByText('Reading successfully recorded!');


    }

    async navigateToTrackGlucoseScreen() {
        await this.TrackGlucoseScreen.click();
        await this.TrackGlucoseHeader.waitFor({ state: 'visible' });
    }

    async getTrackGlucoseHeaderText() {
        return await this.TrackGlucoseHeader.textContent();
    }

    async getTrackGlucoseSubHeaderText() {
        return await this.TrackGlucoseSubHeader.textContent();
    }

    async getTrackGlucoseplaceholderText() {
        return await this.TrackGlucoseInputField.getAttribute('placeholder');
    }
    
    async getTrackGlucoseInputField(){
        return await this.TrackGlucoseInputField;

    }

    async getBloodGlucoseUnitText() {
        return await this.bloodGlucoseUnit.textContent();
    }

    async gethighlightedTransitionText() {
        return await this.highlightedItem.textContent();

    }
    async getColors(locator) {
        return await locator.evaluate(el => {
            const style = window.getComputedStyle(el);
            return {
                textColor: style.color,
                backgroundColor: style.backgroundColor
            };
        });
    }

    async lastReadingDetails() {
        return await this.LastReadingDetails.textContent();
    }


    async enterTrackGlucoseLevel(level) {
        //await this.TrackGlucoseInputField.fill(level);
        await this.TrackGlucoseInputField.pressSequentially(level);
    }
    
    async selectReadingType(type) {
        switch (type.toLowerCase()) {
            case 'fasting':
                await this.FastingBtn.click();
                break;
            case 'pre-meal':
                await this.PreMealBtn.click();
                break;
            case 'post-meal':
                await this.PostMealBtn.click();
                break;
            case 'bedtime':
                await this.BedtimeBtn.click();
                break;
            default:
                throw new Error(`Unknown reading type: ${type}`);
        }
    }

    async clickDatePicker() {
        await this.datePickerBtn.click();

    }

    async clickRecordReading() {
        await this.recordReadingBtn.click();
    }

    async getSucessMessage() {
        return await this.sucessMessage.textContent();

    }

}
