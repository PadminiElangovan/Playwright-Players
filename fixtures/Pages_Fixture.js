import { Login_Page } from '../pages/Login_Page.js';
import { DiabeticRiskAssesment_Page } from '../pages/DiabeticRiskAssesment_Page.js';
import { Launch_Page } from '../pages/Launch_Page.js';
import { PremiumUsrExercise_Page } from '../pages/PremiumUsrExercise_Page.js';
import { OnboardingWithReportModal_Page } from '../pages/OnboardingWithReportModal_Page.js';
import { TrackGlucosePremiumUser_Page } from '../pages/TrackGlucosePremiumUser_Page.js';
import { OndoardingWithReportSteps_Page } from '../pages/OndoardingWithReportSteps_Page.js';
import { CommonHome_Page } from '../pages/CommonHome_Page.js';
import { PhysicalActivityPremiumUser_page } from '../pages/PhysicalActivityPremiumUser_page.js';
import { FoodIntakePremiumUser_Page } from '../pages/FoodIntakePremiumUser_Page.js';
import { CommonFeaturesDashboard_Page } from '../pages/CommonFeaturesDashboard_Page.js';
import { OnboardingWithoutReport_Page } from '../pages/OnboardingWithoutReport_Page.js';

export const Pages_Fixture = {
  pages: async ({ page }, use, testInfo) => {
    const login = new Login_Page(page);
    const diabeticrisk = new DiabeticRiskAssesment_Page(page);
    const launch = new Launch_Page(page);
    const pUsrExercise = new PremiumUsrExercise_Page(page);
    const onbrdwithreport = new OnboardingWithReportModal_Page(page);
    const physicalActivity = new PhysicalActivityPremiumUser_page(page);
    const withsteps = new OndoardingWithReportSteps_Page(page, onbrdwithreport);
    const foodIntake = new FoodIntakePremiumUser_Page(page);
    const commonDashboard = new CommonFeaturesDashboard_Page(page);
    const commonhome = new CommonHome_Page(page);
    const withoutsteps = new OnboardingWithoutReport_Page(page, login, onbrdwithreport, withsteps)
    const trackGlucose = new TrackGlucosePremiumUser_Page(page, login, withoutsteps);
    

    const tags = (testInfo.tags || []).map(t => t.toLowerCase());
    console.log("Scenario:", testInfo.title);
    console.log("Detected tags:", tags.join(', '));

    const hasTag = (tag) => tags.includes(tag.toLowerCase());
    const skipLaunch = hasTag('@skiplaunch');
    const skipLogin = hasTag('@skiplogin');
    const loginFree = hasTag('@loginfree');

    console.log("skipLaunch?", skipLaunch, "skipLogin?", skipLogin, "loginFree?", loginFree);

    // Launch app
    if (!skipLaunch) {
      console.log("Launching application...");
      await login.launchApp();

      // Only attempt login if app launched
      if (!skipLogin) {
        console.log("Login required — using environment credentials");

        if (loginFree) {
          console.log("Logging in with FREE user (.env)");
          await login.loginFunction(process.env.FREE_USERNAME, process.env.FREE_PASSWORD);
        } else {
          console.log("Logging in with PREMIUM user (.env)");
          await login.loginFunction(process.env.PREMIUM_USERNAME, process.env.PREMIUM_PASSWORD);
        }

      } else {
        console.log("Skipping login due to @skiplogin");
      }

    } else {
      console.log("Skipping launch due to @skiplaunch — login will also be skipped");
      await page.goto('about:blank');
    }

    await use({ login, diabeticrisk, onbrdwithreport, pUsrExercise, launch, trackGlucose, physicalActivity, withsteps, commonhome, foodIntake, commonDashboard,withoutsteps });

  },
};


//-------------------------------------------------------------



