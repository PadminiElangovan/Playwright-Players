export class Login_Page {

    constructor(page) {
        this.page = page;
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.modal = page.locator("//div[@id='root']/div[1]/div");
        this.emailTextBox = page.getByRole('textbox', { name: 'Enter email' });
        this.closeBtn = page.locator("//div[@id='root']/div/div/button");
        this.contWithEmailBtn = page.locator("//button[@type='submit']");
        this.contWithGoogleBtn = page.getByRole('button', { name: 'Continue with Google' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Enter your password' })
        this.signinBtn = page.getByRole('button', { name: 'Sign in' });
        this.reflectedEmailText = page.locator("//p[@class='text-sm text-gray-500']");
        this.forgotPwdLink = page.getByRole('button', { name: 'Forgot password?' });
        this.homeBtn = page.getByRole('button', { name: 'Home' });
        this.completeProfileFormModal = page.locator("//h2[@class ='text-2xl font-semibold tracking-tight']");
        this.fullnameTextBox = page.getByRole('textbox', { name: 'Full Name' });
        this.usernameTextBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordTextBoxProfileForm = page.locator('input[name="password"]');
        this.termsAndCondCheckBox = page.locator("//button[@id='terms']");
        this.createAccountBtn = page.locator("//div[@id='root']/div[1]/div/div[2]/form/button");
        this.fullNameError = page.locator("//p[@id=':r7:-form-item-message']");
        this.userNameError = page.locator("//p[@id=':r8:-form-item-message']");
        this.uploadBloodReportBtn = page.getByRole('button', { name: 'Upload Blood Report' });
        this.stepThroOnboarding = page.getByRole('button', { name: 'Step Through Onboarding' });

    }


    async launchApp() {
        //    await this.page.goto('/');
        await this.page.goto(process.env.BASE_URL);
    }
    async getModalText() {
        await this.modal.waitFor({ state: 'visible' });
        const modalTexts = await this.modal.textContent();
        return modalTexts
    }


    async getCompleteProfileFormModalText() {
        const modalTexts = await this.completeProfileFormModal.textContent();
        return modalTexts
    }
    async fillEmailAndClickCont(email) {

        await this.emailTextBox.fill(email);
        await this.contWithEmailBtn.click();

    }

    async loginFunction(username, password) {
        if (username && password) {
            await this.loginBtn.click();
            await this.emailTextBox.fill(username);
            await this.contWithEmailBtn.click();
            await this.passwordTextBox.fill(password);
            await this.signinBtn.click();
        }
    }
    async loginFunctionForNav(username, password) {

        await this.emailTextBox.fill(username);
        await this.contWithEmailBtn.click();
        await this.passwordTextBox.fill(password);
        await this.signinBtn.click();
    }

    async fillCompleteProfileFormDetails(fullname, username, password) {
        await this.fullnameTextBox.fill(fullname);
        await this.usernameTextBox.fill(username);
        await this.passwordTextBoxProfileForm.fill(password);
        await this.termsAndCondCheckBox.click();
    }


    async validateErrorMsg() {
        const actualErrorMsg = await this.getModalText();
        console.log("actualErrorMsg :" + "--->" + actualErrorMsg);
        return actualErrorMsg;

    }

    async getReflectedEmailText() {
        await this.reflectedEmailText.waitFor({ state: 'visible' });
        const text = await this.reflectedEmailText.textContent();
        return text.trim();
    }

    async getPwdPlaceholderText() {
        const placeholderText = await this.passwordTextBox.getAttribute('placeholder');
        return placeholderText;
    }

    async getFullNameError() {
        const fullnameError = await this.fullNameError.textContent();
        console.log("actual error :  " + fullnameError);
        return fullnameError
    }

    async getUserNameError() {
        const userError = await this.userNameError.textContent();
        console.log("actual error :  " + userError);
        return userError
    }

    generateUniqueEmail() {
        this.generatedUniqueEmail = `ela${Date.now()}@gmail.com`;
        return this.generatedUniqueEmail;
    }

    generateUniqueUsername() {
        this.generatedUniqueUsername = `user${Date.now()}${Math.floor(Math.random() * 1000)}`;
        return this.generatedUniqueUsername;
    }












}