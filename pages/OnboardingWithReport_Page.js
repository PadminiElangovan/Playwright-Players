import path from "path";
export class OnboardingWithReport_Page {

        constructor(page) {
                this.page = page;

                this.uploadBloodReportBtn = page.getByRole('button', { name: 'Upload Blood Report' });
                this.uploaadBloodReportModalHeading = page.locator("//div[@class='text-center']/h1");
                this.uploadBox = page.locator("//div[@class='border-2 border-dashed rounded-xl p-6 text-center border-gray-300 hover:border-[#7D39EC] transition-colors cursor-pointer bg-white/50']");
                this.fileInput = page.locator("//input[@type='file']");
                this.uploadAndProcessBtn = page.getByRole('button', { name: 'Upload & Process' });
                this.uploadAndProcessError = page.locator("//p[@class='text-sm text-gray-500']");
                this.progressBarLocator = page.locator("//div[@role='progressbar']");

        }

        async getUploadAndProcessError() {
                const uploadAndProcessErrorText = await this.uploadAndProcessError.textContent();
                return uploadAndProcessErrorText;
        }


        async getInitialAndHoverBorderColor() {

                const initialColor = await this.uploadBox.evaluate(el => window.getComputedStyle(el).borderBottomColor);
                await this.uploadBox.hover();
                const hoverColor = await this.uploadBox.evaluate(el => window.getComputedStyle(el).borderBottomColor);
                return { initialColor, hoverColor };
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
                await this.fileInput.setInputFiles(filePath);
                await this.uploadAndProcessBtn.click();
        }


        async isProgressBarVisible() {
                return await this.progressBarLocator.isVisible().catch(() => false);
        }





}