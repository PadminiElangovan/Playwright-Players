// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';



const envPath = process.env.ENV_PATH || path.resolve(process.cwd(), 'SweetBalance.env');
dotenv.config({ path: envPath });
console.log(`[Config] Using .env file at: ${envPath}`);


const testDir = defineBddConfig({
  features: ['featureFiles/**/*.feature'],
  steps: [

    'stepDefinitions/**.js',
    'fixtures/Index_Fixture.js'],


});

export default defineConfig({
  //testDir: './tests',
  testDir,
  timeout: 90000,
  retries: 2,
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
      timeout: 120000,
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },


  ],

});

