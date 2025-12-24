export class HomepageFreeuser_Page {
  constructor(page) {
    this.page = page;

    this.todaysMealPlanToggle = page.getByRole('button', { name: /today's meal plan/i });
    this.todaysMealPlanCaret = this.todaysMealPlanToggle.locator('svg');


    this.preMealCard = page.locator('div.bg-gray-50.rounded-xl.p-4').first();
    this.preMealInfoRow = this.preMealCard
      .locator('div', { has: page.locator('span', { hasText: /\d{1,2}:\d{2}\s?(AM|PM)/ }) })
      .first();

    this.preMealDot = this.preMealInfoRow.locator('span.mx-2', { hasText: '•' });

    this.viewFullPlanBtn = page.getByRole('button', { name: 'View Full Plan' });
    this.continueFreeBtn = page.getByRole('button', { name: /continue free/i });
    this.upgradeToPremiumBtn = page.getByRole('button', { name: /upgrade to premium/i });

    this.exerciseSidebarBtn = page
      .getByRole('button', { name: /exercise/i })
      .or(page.getByRole('link', { name: /exercise/i }));

    this.todaysExercisePlanTitle = page.getByRole('heading', { name: /today's exercise plan/i });

    this.viewFullScheduleBtn = page
      .getByRole('button', { name: /view full schedule/i })
      .or(page.getByRole('link', { name: /view full schedule/i }));

    this.exerciseCards = page.locator('div.p-4.bg-white\\/60.rounded-xl.shadow-sm'); //seeing 2 exercise
    this.exerciseList = this.exerciseCards.first();
    this.exerciseItems = () => this.exerciseCards;
  }

  async openExerciseTab() {
    await this.exerciseSidebarBtn.click();
    await this.todaysExercisePlanTitle.waitFor({ state: 'visible' });
}

  async clickViewFullPlan() {
    await this.viewFullPlanBtn.click();
  }

  async clickViewFullSchedule() {
    await this.openExerciseTab();
    await this.viewFullScheduleBtn.click();
  }

  exerciseLabel(card) {
    return card.locator('span.font-medium').first();
  }

  exerciseTime(card) {
    return card.locator('span.text-violet-600.font-medium').first();
  }

  exerciseInfo(card) {
    return card.locator('div.text-sm.text-gray-600.ml-6').first();
  }

  exerciseByLabel(label) {
    const direct = this.exerciseCards.filter({ hasText: new RegExp(label, 'i') }).first();
    if (/morning exercise/i.test(label)) return this.exerciseCards.nth(0);
    if (/evening exercise/i.test(label)) return this.exerciseCards.nth(1);
    return direct;
  }
}
