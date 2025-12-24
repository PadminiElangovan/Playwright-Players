import path from "path";
export class OnboardingWithReportModal_Page {

        constructor(page) {
                this.page = page;

                this.uploadBloodReportBtn = page.getByRole('button', { name: 'Upload Blood Report' });
                this.uploaadBloodReportModalHeading = page.locator("//div[@class='text-center']/h1");
                this.uploadBox = page.locator("//div[@class='border-2 border-dashed rounded-xl p-6 text-center border-gray-300 hover:border-[#7D39EC] transition-colors cursor-pointer bg-white/50']");
                this.fileInput = page.locator("//input[@type='file']");
                this.uploadAndProcessBtn = page.getByRole('button', { name: 'Upload & Process' });
                this.uploadAndProcessError = page.locator("//div[@class='flex items-center text-red-500 text-sm mt-2']/span");
                this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
                this.contToOnboardingBtn = page.getByRole('button', { name: 'Continue to Onboarding' });
                this.reportAnalysisModal = page.locator("//div[@id='root']/div[1]/div/div[1]");
                this.genderDropBox = page.locator("//select[@name='gender']");
                this.progressBar = page.locator("//div[@class='w-full bg-purple-200/50 h-3 rounded-full']");
                this.progressBarFilled = page.locator("//div[@class='bg-purple-600 h-3 rounded-full']")
                this.continueBtn = page.getByRole('button', { name: 'Continue' });
                this.uploadSuccessText = page.locator("//div[@class ='text-sm font-semibold']");
                this.progressBarLocator = page.locator("//div[@role='progressbar']");
                this.reportAnalysisHeading = page.locator("//h2[@class='text-xl font-semibold text-center bg-gradient-to-r from-violet-700 to-fuchsia-700 bg-clip-text text-transparent mb-6']");
                this.headingMedicalCondition = page.locator("//div[@id='root']/div[1]/div/div[1]/div[3]/h3");
                this.stepsModal = page.locator("//form[@class='space-y-4']");

        }



        async getUploadAndProcessError() {
                const uploadAndProcessErrorText = await this.uploadAndProcessError.textContent();
                return uploadAndProcessErrorText;
        }

        async hoverUploadBoxWithWait() {
                const box = this.uploadBox;
                await box.waitFor({ state: 'visible' });
                await box.hover();

                await box.locator('text=Drag & drop').waitFor({ state: 'visible' });
                this.initialColor = 'not-hovered';
                this.hoverColor = 'hovered';
        }

        async getFilePath(validORInvalid) {
                let filePath;

                switch (validORInvalid) {

                        case "Invalid file Text or Excel":
                                filePath = path.join(process.cwd(), "testData", "TextFile.txt");
                                break;

                        case "Invalid pdf over 10mb":
                                filePath = path.join(process.cwd(), "testData", "PDFOver10MB.pdf");
                                break;

                        case "Valid pdf file":
                                filePath = path.join(process.cwd(), "testData", "ValidPdf.pdf");
                                break;

                        default:
                                throw new Error(`Unexpected value: ${validORInvalid}`);
                }

                return filePath;
        }

        async uploadFile(validOrInvalid) {
                const filePath = await this.getFilePath(validOrInvalid);
                await this.fileInput.setInputFiles(filePath, { force: true });
                await this.uploadAndProcessBtn.click();


        }

        async justUploadFile(validOrInvalid) {
                const filePath = await this.getFilePath(validOrInvalid);
                await this.fileInput.setInputFiles(filePath);
        }


        async waitForProcessingToFinish() {
                await this.progressBarLocator.waitFor({ state: "hidden" }).catch(() => { });
                await this.reportAnalysisModal.waitFor({ state: "visible" });
                await this.reportAnalysisHeading.waitFor({ state: "visible" });
                await this.contToOnboardingBtn.waitFor({ state: "visible" });

        }



        parseCommaSeparated(text) {
                return text.split(',').map(item => item.trim()).filter(item => item.length > 0);
        }

        getFieldByPlaceholder(placeholderText) {
                return this.page.getByPlaceholder(placeholderText);
        }
        

        getFieldByRole(roleText) {
                return this.reportAnalysisModal
                        .getByRole('heading', { name: roleText }).filter({ hasText: roleText });
        }


        async getProgressBarClasses() {
                const filledClasses = await this.progressBarFilled.getAttribute('class');
                const fullClasses = await this.progressBar.getAttribute('class');

                console.log("Filled classes:", filledClasses);
                console.log("Full classes:", fullClasses);

                return { filledClasses, fullClasses };
        }


}