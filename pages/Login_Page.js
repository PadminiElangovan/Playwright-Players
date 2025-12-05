export class Login_Page{

    constructor(page){
        this.page = page;
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.modal = page.locator("//div[@id='root']/div[1]/div");
        this.emailTextBox = page.getByRole('textbox', { name: 'Enter email' });
        this.closeBtn = page.locator("//div[@id='root']/div/div/button");
        this.contWithEmailBtn = page.getByRole('button', { name: 'Continue with email' });
        this.contWithGoogleBtn = page.getByRole('button', { name: 'Continue with Google' });
        this.passwordTestBox = page.getByRole('textbox', { name: 'Enter your password' })
        this.signinBtn = page.getByRole('button', { name: 'Sign in' });

    }


    async launchApp(){
    //    await this.page.goto('/');
       await this.page.goto(process.env.BASE_URL);
    }
    async getModalText(){
          await this.modal.first().waitFor({ state: 'visible' });
        const modalTexts = await this.modal.allTextContents();
        return modalTexts.join(' ').trim();
    }

    async fillEmailAndClickCont(email){

        await this.emailTextBox.fill(email);
        await this.contWithEmailBtn.click();

    }

    async loginFunction(username, password) {
    if (username && password) {
        await this.loginBtn.click();
        await this.emailTextBox.fill(username);
        await this.contWithEmailBtn.click();
        await this.passwordTestBox.fill(password);
        await this.signinBtn.click();
    }
}
}