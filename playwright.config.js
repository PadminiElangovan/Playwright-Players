  // @ts-check
  import { defineConfig, devices } from '@playwright/test';
  import {defineBddConfig} from 'playwright-bdd';
  import dotenv from 'dotenv';
  import path from 'path';
  
  dotenv.config({ path: path.resolve(__dirname, 'SweetBalance.env') });
  const testDir = defineBddConfig({
    features: ['featureFiles/Login.feature'],
    steps: [
     
      'stepDefinitions/Login_Step.js',
      'fixtures/Index_Fixture.js'],
      

  }); 

  export default defineConfig({
    //testDir: './tests',
    testDir,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,

   reporter: [
  // ['html', { outputFolder: 'reports/html-report' }],
  // ['allure-playwright', { outputFolder: 'reports/allure-results' }]
],

    use: {

     // baseURL: process.env.BASE_URL, 
      trace: 'on-first-retry',
    },

    /* Configure projects for major browsers */
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },

      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },

      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },

     
    ],

  });

