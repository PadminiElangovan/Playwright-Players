export class CommonHome_Page {
  constructor(page) {
    this.page = page;

    this.appName = this.text('SweetBalance', { exact: true });
    this.username = this.text('PlaywrightFreeUser', { exact: true }); 
    this.logoutLink = this.text('Logout', { exact: true });

    this.topNavBar = page.locator('nav');
    this.homeTab = this.navTab('Home');
    this.dashboardTab = this.navTab('Dashboard');
    this.educationTab = this.navTab('Education');

    this.lastUpdatedRow = page.getByText(/^Last updated:/i);
    this.hba1cValue = this.metricValue('Latest HbA1C');
    this.bmiValue = this.metricValue('BMI');
    this.avgBloodSugarValue = this.metricValue('Average Blood Sugar');

    this.breakfastTab = this.mealTab('Breakfast');
    this.lunchTab = this.mealTab('Lunch');
    this.dinnerTab = this.mealTab('Dinner');
    this.snacksTab = this.mealTab('Snacks');

    this.avgBloodSugarUnit = this.metricCard('Average Blood Sugar')
      .locator('div.text-sm.text-gray-500', { hasText: 'mg/dL' })
      .first();

    this.mealPlanSidebarButton = page.getByRole('button', { name: 'Meal Plan', exact: true }); //clickable meal plan text
    this.exerciseSidebarButton = page.getByRole('button', { name: 'Exercise', exact: true });  // clickable exercise text

    this.sidebarTabContainer = page  // left side layout container
      .locator('aside')
      .filter({ has: this.mealPlanSidebarButton })
      .first()
      .or(page.locator('div').filter({ has: this.mealPlanSidebarButton }).first());

    this.mealPlanIcon = this.mealPlanSidebarButton.locator('svg').first(); //mealplan fork icon
    this.exerciseIcon = this.exerciseSidebarButton.locator('svg').first(); //dumbbell icon 

    this.viewFullPlanButton = page.getByRole('button', { name: 'View Full Plan', exact: true });

    this.mealDetailsSection = page
      .locator('div')
      .filter({ hasText: /Nutrition Insights/i })
      .first();

    this.preMealSection = this.mealDetailsSection
      .locator('div.mt-6')
      .filter({ has: page.getByText(/Pre-/i) })
      .first();

    this.preMealLabel = this.preMealSection
      .locator('div.text-gray-700.font-medium.mb-2')
      .first();

    this.preMealCard = this.preMealSection
      .locator('div.bg-gray-50.rounded-xl.p-4, div.bg-gray-50.rounded-xl, div.rounded-xl.p-4')
      .first();

    this.preMealItemName = this.preMealCard.locator('h4').first();

    //validates the line with time and calories
    this.preMealInfoRow = this.preMealCard.locator('div.flex.items-center.text-gray-600').first();
    
    this.preMealTime = this.preMealInfoRow.locator('span').first(); // actual time only (NO calories)
    this.preMealCalories = this.preMealInfoRow.locator('span').filter({ hasText: /calories/i }).first();

    this.dishTitle = this.preMealItemName;
    this.dishDescription = this.preMealInfoRow;

    this.carbsBar = this.macroBar('Carbs', 'bg-green-500');
    this.proteinBar = this.macroBar('Protein', 'bg-pink-500');
    this.fatBar = this.macroBar('Fat', 'bg-purple-500');

    this.carbsUnitText = this.macroUnit('Carbs');
    this.proteinUnitText = this.macroUnit('Protein');
    this.fatUnitText = this.macroUnit('Fat');
  }

  async waitForHomePage() {
    await this.logoutLink.waitFor({ state: 'visible' });
  }

  async assertLoggedIn() {
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.username.waitFor({ state: 'visible' });
  }

  async clickMealSection(name) {  //mealdetails are visible and clickable
    const tab = this.mealTab(name);
    await tab.click();
    await this.mealDetailsSection.waitFor({ state: 'visible' });
  }

  text(content, options = {}) {   //used for appname, username, logout
    return this.page.getByText(content, options.exact === undefined ? {} : { exact: options.exact });
  }

  homeText(label) {  //lastupdated, bmi, avg blood sugar, todays meal plan etc
    return this.page.getByText(label, { exact: false });
  }

  conditionText(label) {  //obese, diabetic etc
    return this.page.getByText(label, { exact: true });
  }

  navTab(nameOrPattern) {
    return this.page
      .getByRole('link', { name: nameOrPattern })
      .or(this.page.getByRole('button', { name: nameOrPattern }));
  }

  mealTab(name) {
    return this.page.getByRole('button', { name, exact: true });
  }

  metricCard(labelText) {
  return this.page
    .getByText(labelText, { exact: false })
    .locator('xpath=ancestor::div[contains(@class,"text-center")]')
    .first();
  }

  metricValue(labelText) {
  return this.metricCard(labelText)
    .locator('div.inline-flex')
    .first();
  }

  macroCard(label) {
    const labelRegex = new RegExp(`\\b${label}\\b`, 'i');
    const labelLoc = this.mealDetailsSection.getByText(labelRegex).first();
    return this.mealDetailsSection.locator('div.flex-1', { has: labelLoc }).first();
  }

  macroBar(label, colorClass) {
    return this.macroCard(label).locator(`div.${colorClass}`).first();
  }

  macroUnit(label) {
    return this.macroCard(label).getByText(/g\b/i).first();
  }
}
