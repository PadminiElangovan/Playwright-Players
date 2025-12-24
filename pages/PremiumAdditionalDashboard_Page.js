export class PremiumAdditionalDashboard_Page {

    constructor(page) {
        this.page = page;
        this.PremiumActivatedStatus = page.getByText('👑 Premium Activated');
        this.ManagePremiumButton = page.getByRole('button', { name: /manage premium/i });
        this.DialogBox = page.getByRole('dialog', { name: 'Cancel Premium Subscription?' })
        this.dateValueByLabel = (label) => page.getByText(label, { exact: true }).locator('..').locator('div').first();
        this.EmotionalWellBeingElement = (name) => page.getByText(name, { exact: true });
        this.EmoWellbeingInputPlaceholder = page.getByPlaceholder("What\'s affecting your mood today?");
        this.LogEmotionalStateButton = page.getByRole('button', { name: 'Log Emotional State' })
        this.slider = page.getByRole('slider');
        this.emojiContainer = page.locator('div.flex.justify-between.gap-2.mt-2');
        this.emoji = (emoji) => this.emojiContainer.getByText(emoji, { exact: true });
        this.successMesg = page.locator('div.text-sm.opacity-90');
        this.lowLabel = page.getByText('Low', { exact: true });
        this.highLabel = page.getByText('High', { exact: true });
        this.smartInsights = (element) => page.getByText(element, { exact: true });
        this.content = (title) => page.locator('div.border-l-4').filter({ has: page.getByText(title, { exact: true }) }).locator('p.text-xs');


    }

    async getPremiumActivatedStatus() {

        return await this.PremiumActivatedStatus.textContent();
    }

    async clickManagePremiumButton() {
        await this.ManagePremiumButton.waitFor({ state: 'visible' });
        await this.ManagePremiumButton.click();
    }

    async enterTextInNotes(text) {
        await this.EmoWellbeingInputPlaceholder.fill(text);
    }

    async getDateValue(label) {
        const value = this.dateValueByLabel(label);
        await value.waitFor({ state: 'visible' });
        return (await value.textContent()).trim();
    }

    async scrollToEmotionalWellbeingSection() {
        await this.EmotionalWellBeingElement('😊 Emotional Wellbeing').scrollIntoViewIfNeeded();
    }

    async getSliderValue() {
        return await this.slider.getAttribute('aria-valuenow');
    }

    async moveSliderLeft(steps = 1) {
        await this.slider.focus();
        for (let i = 0; i < steps; i++) {
            await this.page.keyboard.press('ArrowLeft');
        }
    }

    async moveSliderRight(steps = 1) {
        await this.slider.focus();
        for (let i = 0; i < steps; i++) {
            await this.page.keyboard.press('ArrowRight');
        }
    }

    async clickLogEmotionalState() {
        await this.LogEmotionalStateButton.click();
    }

    async getMoodEmojis() {
        return await this.emojiContainer.allTextContents();

    }

    async selectMoodEmoji(emoji) {
        await this.emoji(emoji).waitFor({ state: 'visible' });
        await this.emoji(emoji).click();
    }

    async clickLogEmotionButton() {
        await this.LogEmotionalStateButton.click();

    }

    async getSuccessMesg() {
        await this.successMesg.waitFor({ state: 'visible' });
        return await this.successMesg.textContent();
    }


}