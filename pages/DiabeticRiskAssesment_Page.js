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
        this.calRiskBtn = page.getByText('CancelCalculate Risk');

    }


   
}