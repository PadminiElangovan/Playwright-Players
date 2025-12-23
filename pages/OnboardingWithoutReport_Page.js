export class OnboardingWithoutReport_Page {

    constructor(page) {
        this.page = page;
        this.stepTitleWithoutReport = page.locator("//div[@class='space-y-2 text-center']/h1");
        this.stepSubTitleWithoutReport = page.locator("//div[@class='space-y-2 text-center']/p");
        this.progressBarWithoutReport = page.locator("//div[@class='h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300']");
        this.stepNumWithoutReport = page.locator("//p[@class='text-sm text-gray-600 text-right']");
        this.optionSelectionMsg = page.locator("//div[@class='text-sm opacity-90']");
        this.lastOption = page.getByRole('button', { name: '100 years', exact: true });
        this.tabContainer = page.locator("//div[@class='flex rounded-full bg-white/50 backdrop-blur-sm p-1 shadow-inner']");
        this.allChkBoxContainerStep = page.locator("//div[@class='relative overflow-hidden h-[400px] w-full pr-4']");
        this.allChkBoxOptionRowStep = this.allChkBoxContainerStep.locator("//div[@class='flex items-center space-x-2 p-4 border rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-all duration-200']");
        this.inputFieldStep12 = page.getByPlaceholder('Enter your HbA1c value (e.g');
        this.statusMsgStep12 = page.locator("//div[@class='grid gap-1']");
        this.loadingIndicator = page.locator("//div[@class='absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin']");
        this.personalPgTitle = page.locator("//h2[@class='text-xl font-semibold text-purple-600 text-center']");
        this.personalPgSubtxt = page.locator("//p[@class='text-sm text-purple-400 text-center']");
    }   

    async selectCheckboxWithoutReport(givenOption) {
        const row = this.allChkBoxOptionRowStep.filter({ hasText: givenOption }).first()    
        const checkbox = row.locator('button[role="checkbox"]');
        await checkbox.check();                   
    }

    getCentimeterOption(cm) {
        return this.page.getByRole('button', { name: `${cm} cm`, exact: true });
    }

    getInchesOption(feet, inch) {
        return this.page.getByRole('button', { name: `${feet}' ${inch}"`, exact: true, });
    }

    getTabs() {
        return this.tabContainer.locator('button');
    }

    getFieldByRole(option) {
        return this.page.getByRole('button', { name: option, exact: true });
    }

    async scrollToLastOptionAndVerify() {
        await this.lastOption.scrollIntoViewIfNeeded();
        return await this.lastOption.isVisible();
    }





}