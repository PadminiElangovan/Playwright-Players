export class CommonHome_Page {
  constructor(page) {
    this.page = page;

    // -----------------------------
    // Top nav / tabs
    // -----------------------------
    this.topNavBar = page.locator('nav');

    this.homeTab = page.getByText('Home', { exact: true });
    this.dashboardTab = page.getByText('Dashboard', { exact: true });
    this.educationTab = page.getByText('Education', { exact: true });

    // -----------------------------
    // Metric cards: HbA1C / BMI / Avg Blood Sugar
    // -----------------------------
    this.hba1cCard = page.locator('div', { hasText: 'Latest HbA1C' });
    this.hba1cValue = this.hba1cCard.locator('span.text-3xl.font-bold').first();
    this.hba1cCondition = this.hba1cCard.locator('div.text-sm.font-bold'); // "Diabetic"

    this.bmiCard = page.locator('div', { hasText: 'BMI' });
    this.bmiValue = this.bmiCard.locator('span.text-3xl.font-bold').first();
    this.bmiCondition = this.bmiCard.locator('div.text-sm.font-bold'); // "Obese"

    this.avgBloodSugarCard = page.locator('div', { hasText: 'Average Blood Sugar' });
    this.avgBloodSugarValue = this.avgBloodSugarCard
      .locator('span.text-3xl.font-bold')
      .first();
    this.avgBloodSugarCondition = this.avgBloodSugarCard.locator(
      'div.text-sm.font-bold' // "mg/dL"
    );

    // -----------------------------
    // Meal tabs / sidebar
    // -----------------------------
    this.breakfastTab = page.getByRole('button', {
      name: 'Breakfast',
      exact: true,
    });

    // Container for meal details (Nutrition Insights box)
    this.mealDetailsSection = page
      .locator('div', { hasText: 'Nutrition Insights' })
      .first();

    this.mealPlanSidebarButton = page.getByRole('button', {
      name: 'Meal Plan',
      exact: true,
    });
    this.exerciseSidebarButton = page.getByRole('button', {
      name: 'Exercise',
      exact: true,
    });

    this.sidebarTabContainer = page
      .locator('div', { has: this.mealPlanSidebarButton })
      .first();

    this.mealPlanIcon = this.mealPlanSidebarButton.locator('svg');
    this.exerciseIcon = this.exerciseSidebarButton.locator('svg');

    // -----------------------------
    // Snacks / pre-meal details
    // -----------------------------

    this.snacksDishTitle = this.mealDetailsSection.getByText('Herbal tea', {
      exact: true,
    });

    // All rows that use the grey, small, flex style (description + meta)
    const preMealInfoRows = this.mealDetailsSection
      .locator('div.flex.items-center.text-gray-600.text-sm.mt-1');

    // If only one row exists, first() and last() point to the same element – still safe.
    this.snacksDescription = preMealInfoRows.first();
    this.preMealMetaRow = preMealInfoRows.last();

    // ✅ Works for Pre-breakfast / Pre-lunch / Pre-dinner / Pre-snack
    this.preMealItemName = this.mealDetailsSection.getByText(/^Pre-/);

    this.preMealTime = this.preMealMetaRow.locator('span').first();
    this.preMealCalories = this.preMealMetaRow.locator('span').last();

    // -----------------------------
    // Macro bars (Carbs / Fat / Protein)
    // -----------------------------
    this.carbsBar = page.locator('div.bg-green-500');
    this.fatBar = page.locator('div.bg-purple-500');
    this.proteinBar = page.locator('div.bg-pink-500');

    this.carbsUnitText = page.getByText(/Carbs:\s*\d+g\/\d+g/);
    this.proteinUnitText = page.getByText(/Protein:\s*\d+g\/\d+g/);
    this.fatUnitText = page.getByText(/Fat:\s*\d+g\/\d+g/);

    // -----------------------------
    // Per-meal time locators (for exact hour + AM/PM)
    // -----------------------------
    this.breakfastPreMealTime = page.getByText('7:00 AM', { exact: true });
    this.lunchPreMealTime = page.getByText('12:30 PM', { exact: true });
    this.dinnerPreMealTime = page.getByText('7:30 PM', { exact: true });
  }

  async waitForHomePage() {
    await this.page.waitForSelector('text=SweetBalance');
  }
}
