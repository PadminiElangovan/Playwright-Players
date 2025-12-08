export class DiabeticRiskAssesment_Page{

    constructor(page){
        this.page = page;
        this.riskAnlyHeader = page.getByRole('heading', { name: 'Diabetes Risk Analyzer' });
        this.riskAnlySubTxt = page.getByText('Answer a few questions to');
        this.chkRiskBtn = page.getByRole('button', { name: 'Check Your Risk' });
        this.ageInputBtn = page.getByRole('spinbutton', { name: 'Age' });
        this.weightInputBtn = page.getByRole('spinbutton', { name: 'Weight (kg)' });
        this.familyHstyChkBox = page.getByRole('checkbox', { name: 'Family history of diabetes' });
        this.pysActLevelDrpdwn = page.getByLabel('Physical Activity Level');
        this.bpDrpdwn = page.getByLabel('Blood Pressure');
        this.deitQltyDrpdwn = page.getByLabel('Diet Quality');
        this.cancelBtn = page.getByRole('button', { name: 'Cancel' });
        this.calRiskBtn = page.getByText('Calculate Risk');
        this.yourAssessmentHeader = page.getByRole('heading', { name: 'Your Diabetes Risk Assessment' });

    }

    async clickCheckRisk() {
        await this.chkRiskBtn.click();
    }

    async inputValues(Age, Weight, ActLevel, Bp, DietQlty){
        await this.ageInputBtn.fill(Age);
        await this.weightInputBtn.fill(Weight);
        await this.familyHstyChkBox.check();
        await this.pysActLevelDrpdwn.selectOption(ActLevel);
        await this.bpDrpdwn.selectOption(Bp);
        await this.deitQltyDrpdwn.selectOption(DietQlty);
    }
  
}