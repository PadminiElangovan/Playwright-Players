// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';


// dotenv.config({ path: path.resolve(__dirname, 'SweetBalance.env') }); //runs only in local not in CI/CD
//dotenv.config({ path: path.resolve(process.cwd(), 'SweetBalance.env') });

const envPath = process.env.ENV_PATH || path.resolve(process.cwd(), 'SweetBalance.env');
dotenv.config({ path: envPath });
console.log(`[Config] Using .env file at: ${envPath}`);


const testDir = defineBddConfig({
  features: ['featureFiles/**.feature'],
  steps: [

    'stepDefinitions/**.js',
    'fixtures/Index_Fixture.js'],


});

export default defineConfig({
  //testDir: './tests',
  testDir,
  retries: 3,
  globalSetup: "./global-setup.js",
  globalTeardown: './global-teardown.js',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  reporter: [['html'],
  ['allure-playwright', { outputFolder: 'Allure-Report' }]

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

