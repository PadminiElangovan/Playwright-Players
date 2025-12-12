// pages/Launch_Page.js
export class Launch_Page {
  constructor(page) {
    this.page = page;
    this.startTodayBtn = this.button('Start Today', { exact: true });
    this.appName = this.text('SweetBalance', { exact: true });
    this.mainHeading = this.heading('Smart Diabetes Tracking Powered by AI', { exact: true },);
    this.healthCard = this.heading('Health Tracking', { exact: true }).locator('xpath=..');
    this.nutritionCard = this.heading('Nutrition & Exercise', { exact: true }).locator('xpath=..');
    this.smartInsightsCard = this.heading('Smart Insights', { exact: true }).locator('xpath=..');
    this.healthIcon = this.healthCard.locator('svg, img').first();
    this.nutritionIcon = this.nutritionCard.locator('svg, img').first();
    this.smartInsightsIcon = this.smartInsightsCard.locator('svg, img').first();
    this.centerStars = page.locator('section .flex.justify-center .lucide-star');
  }

  async openHome() {
    await this.page.goto(process.env.BASE_URL);
  }

  async clickStartToday() {
    await this.startTodayBtn.click();
  }

  //helper for differernt texts we r validating
  text(content, options = {}) {
    const { exact } = options;

    if (typeof content === 'string') {
      const locatorOptions = {};
      if (exact !== undefined) locatorOptions.exact = exact;
      return this.page.getByText(content, locatorOptions);
    }
    return this.page.getByText(content);
  }

  heading(nameOrPattern, options = {}) {
    const { exact } = options;
    const roleOptions = { name: nameOrPattern };
    if (typeof nameOrPattern === 'string' && exact !== undefined) {
      roleOptions.exact = exact;
    }
    return this.page.getByRole('heading', roleOptions);
  }

  button(nameOrPattern, options = {}) {
    const { exact } = options;
    const roleOptions = { name: nameOrPattern };
    if (typeof nameOrPattern === 'string' && exact !== undefined) {
      roleOptions.exact = exact;
    }

    return this.page.getByRole('button', roleOptions);
  }

  getLoginEntry(pattern) {
    return this.page
      .getByRole('link', { name: pattern })
      .or(this.page.getByRole('button', { name: pattern }))
      .or(this.page.getByText(pattern));
  }

  getTestimonialByUser(userName) {
    return this.page.getByText(userName, { exact: false });
  }

  getTextAboveTestimonial(expectedText) {
    return this.page.getByText(expectedText, { exact: false });
  }

  getStarsAboveHeader() {
    return this.centerStars;
  }

  getStarsForTestimonial(name) {
    const testimonial = this.page
      .locator('p.font-medium', { hasText: name })
      .locator('..');

    return testimonial.locator('.lucide-star');
  }

  getAssessmentDialog() {
    return this.page.getByRole('dialog');
  }

  async getPageLoadDuration() {
    return this.page.evaluate(() => {
      const entries = performance.getEntriesByType('navigation');
      if (!entries || entries.length === 0) return null;
      const entry = entries[0];
      return entry.loadEventEnd - entry.startTime; 
    });
  }

  async hasHorizontalScroll() {
    return this.page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth > window.innerWidth;
    });
  }

  async hasMainRegion() {
    return this.page.evaluate(() => {
      return !!document.querySelector('main, [role="main"]');
    });
  }

  async getImagesWithoutAltCount() {
    return this.page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).filter((img) => {
        const alt = img.getAttribute('alt');
        return !alt || alt.trim() === '';
      }).length;
    });
  }
}
