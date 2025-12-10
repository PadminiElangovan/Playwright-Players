export class Launch_Page {
  constructor(page) {
    this.page = page;

    // Top header / navigation
    this.startTodayBtn = page.getByRole('button', { name: 'Start Today' });
    this.appName = page.getByText('SweetBalance', { exact: true });

    // Full policy sentence used in the feature file
    this.policyText = page.getByText(
      'Our Terms of Service and Privacy Policy have recently been updated',
      { exact: false }
    );

    this.loginLink = page.getByRole('link', { name: 'Login' });

    this.mainHeading = page.getByRole('heading', {
      name: 'Smart Diabetes Tracking Powered by AI',
    });

    // ----- Cards & Icons -----
    // Grab each card by its title heading, then go one level up to the card container
    this.healthCard = page
      .getByRole('heading', { name: 'Health Tracking' })
      .locator('xpath=..');

    this.nutritionCard = page
      .getByRole('heading', { name: 'Nutrition & Exercise' })
      .locator('xpath=..');

    this.smartInsightsCard = page
      .getByRole('heading', { name: 'Smart Insights' })
      .locator('xpath=..');

    // Inside each card, take the first svg/img as the “icon”
    this.healthIcon = this.healthCard.locator('svg, img').first();
    this.nutritionIcon = this.nutritionCard.locator('svg, img').first();
    this.smartInsightsIcon = this.smartInsightsCard.locator('svg, img').first();
  }

  async openHome() {
    await this.page.goto(process.env.BASE_URL);
  }

  async clickStartToday() {
    await this.startTodayBtn.click();
  }
}
