

import { Login_Page } from '../pages/Login_Page.js';

export const Pages_Fixture = {
  pages: async ({ page }, use, testInfo) => {
    const login = new Login_Page(page);

    const tags = (testInfo.tags || []).map(t => t.toLowerCase());
    console.log("Scenario:", testInfo.title);
    console.log("Detected tags:", tags.join(', '));

    const hasTag = (tag) => tags.includes(tag.toLowerCase());
    const skipLaunch = hasTag('@skiplaunch');
    const skipLogin  = hasTag('@skiplogin');
    const loginFree  = hasTag('@loginfree');

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
          await login.loginFunction(
            process.env.FREE_USERNAME,
            process.env.FREE_PASSWORD
          );
        } else {
          console.log("Logging in with PREMIUM user (.env)");
          await login.loginFunction(
            process.env.PREMIUM_USERNAME,
            process.env.PREMIUM_PASSWORD
          );
        }

      } else {
        console.log("Skipping login due to @skiplogin");
      }

    } else {
      console.log("Skipping launch due to @skiplaunch — login will also be skipped");
       await page.goto('about:blank');
    }

    await use({ login });
  },
};


//-------------------------------------------------------------


    
 

