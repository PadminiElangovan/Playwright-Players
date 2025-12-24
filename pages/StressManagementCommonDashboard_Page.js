export class StressManagementCommonDashboard_Page {

    constructor(page) {
        this.page = page;
        this.StressManagementSection = page.getByText('🧘 Stress Management');
        this.tabs = (tabName) => page.getByRole('tab', { name: tabName });
        this.headings = (heading) => page.getByRole('heading', { name: heading });
        this.durationButtons = (duration) => page.getByRole('button', { name: duration });
        this.progressBar = page.getByRole('progressbar');
        this.textContainer = page.locator('div.bg-white\\/10.rounded-lg.p-6');
        this.GuidedMeditationTitle = page.locator('h3.text-lg.font-medium.text-black');
        this.durationContainer = page.locator('div.flex.space-x-2');
        this.durationButtons = (duration) => this.durationContainer.getByRole('button', { name: duration }).first();
        this.progressBar = page.getByRole('progressbar');
        this.BenefitsSection = page.locator('div.mt-6.bg-white\\/10.rounded-lg.p-4');
        this.breathingHeading = page.locator('h3.text-lg.font-medium.mb-3.text-black');
        this.breathingDescription = page.locator('p.text-sm.text-black\\/80.mb-4');
        this.startBreathingBtn = page.getByText('Start Breathing Exercise');
        this.cyclesCompletedLabel = page.locator('p', { hasText: 'Cycles completed' });
        this.cyclesCompletedValue = this.cyclesCompletedLabel.locator('xpath=following-sibling::p[contains(@class,"font-semibold")]');
        this.currentPhaseLabel = page.locator('p', { hasText: 'Current phase' });
        this.currentPhaseValue = this.currentPhaseLabel.locator('xpath=following-sibling::p[contains(@class,"font-semibold")]');
    }

    async scrollToStressManagementSection() {
        await this.StressManagementSection.scrollIntoViewIfNeeded();
    }

    async getStressManagementSectionTitle() {
        return await this.StressManagementSection.textContent();
    }

    async clickTab(tabName) {
        await this.tabs(tabName).click();
    }

    async getProgressBarValue() {
        return await this.progressBar.getAttribute('value');
    }

    async getProgressBarMinMax() {
        const min = await this.progressBar.getAttribute('min');
        const max = await this.progressBar.getAttribute('max');
        return { min, max };
    }

    async getProgressBarTimeIndicators() {
        const text = await this.textContainer.textContent();
        return text.match(/\d{1,2}:\d{2}/g) || [];
    }

    async scrollToEndOfStressManagementSection() {
        await this.BenefitsSection.scrollIntoViewIfNeeded();
    }

    async getBreathingExerciseHeading() {
        return await this.breathingHeading.textContent();
    }

    async getBreathingExerciseDescription() {
        return await this.breathingDescription.textContent();
    }

    async getCyclesCompletedLabel() {
        return await this.cyclesCompletedLabel.textContent();
    }

    async getCyclesCompletedValue() {
        return await this.cyclesCompletedValue.textContent();
    }

    async getCurrentPhaseValue() {
        return await this.currentPhaseValue.textContent();
    }

    async getCurrentPhaseLabel() {
        return await this.currentPhaseLabel.textContent();
    }
}
