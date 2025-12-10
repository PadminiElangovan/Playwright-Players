import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User launches the browser', async ({ pages }) => {
  
});

When('User enters the SweetBalance url', async ({ pages }) => {
  await pages.launch.openHome();
});

Then('User should see app name on the top left', async ({ pages }) => {
  await expect(pages.launch.appName).toBeVisible();
});

//resusable steps for partial match and exact match
//used for most of the shud see the text scenarios
Then('User should see text {string}', async ({ pages }, expectedText) => {
  await expect(
    pages.launch.page.getByText(expectedText, { exact: false })
  ).toBeVisible();
});

Then('User should see the text {string}', async ({ pages }, expectedText) => {
  await expect(pages.launch.page.getByText(expectedText)).toBeVisible();
});

Then(
  'User should see the heading {string}',
  async ({ pages }, expectedHeading) => {
    await expect(pages.launch.mainHeading).toHaveText(expectedHeading);
  }
);

Then(
  'User should see a {string} input button', //start today button
  async ({ pages }, buttonLabel) => {
    await expect(pages.launch.startTodayBtn).toBeVisible();
    await expect(pages.launch.startTodayBtn).toHaveText(buttonLabel);
  }
);

//reused for health tracking, nutrition & exercise, smart insights
Then('User should see a card with title {string}', async ({ pages }, expectedTitle) => {
  await expect(pages.launch.page.getByRole('heading', { name: expectedTitle })).toBeVisible();
});

Then('User should see heart icon', async ({ pages }) => {
  await expect(pages.launch.healthIcon).toBeVisible();
});

Then('User should see activity inside square icon', async ({ pages }) => {
  await expect(pages.launch.nutritionIcon).toBeVisible();
});

Then('User should see clock icon', async ({ pages }) => {
  await expect(pages.launch.smartInsightsIcon).toBeVisible();
});

Then(
  'User should see a testimonial from user {string}',
  async ({ pages }, userName) => {
    await expect(
      pages.launch.page.getByText(userName, { exact: false })
    ).toBeVisible();
  }
);

Then(
  'User should see {string} text is visible above testimonial section', //join our community
  async ({ pages }, expectedText) => {
    await expect(
      pages.launch.page.getByText(expectedText, { exact: false })
    ).toBeVisible();
  }
);

Then('User should see {int} yellow stars above {string} text', async ({ pages }, count, headerText) => {
  await expect(
    pages.launch.page.locator('section .flex.justify-center .lucide-star')
  ).toHaveCount(count);
});

Then('User should see 5 stars for {string}', async ({ pages }, name) => {
  const testimonial = pages.launch.page
    .locator('p.font-medium', { hasText: name })
    .locator('..');       

  await expect(
    testimonial.locator('.lucide-star')
  ).toHaveCount(5);
});

// take control of your diabetes today
Then(
  'User should see a section with heading {string}',
  async ({ pages }, headingText) => {
    await expect(
      pages.launch.page.getByRole('heading', {
        name: headingText,
        exact: false,
      })
    ).toBeVisible();
  }
);

// check ur risk button
Then(
  'User should see a button labeled {string}',
  async ({ pages }, buttonText) => {
    await expect(
      pages.launch.page.getByRole('button', {
        name: buttonText,
        exact: false,
      })
    ).toBeVisible();
  }
);

// navigation validations
Given('User goes to the SweetBalance homepage', async ({ pages }) => {
  await pages.launch.openHome();
});

When('User click the {string} button', async ({ pages }, buttonText) => {  //for all clickable buttons
  await pages.launch.page
    .getByRole('button', { name: new RegExp(buttonText, 'i') })
    .click();
});

When('User look at the top right corner', async () => {
  
});

//visibility of login link
Then('User should see a link labeled {string}', async ({ pages }, linkText) => {
  const pattern = new RegExp(linkText, 'i');
  const loginLocator = pages.launch.page
    .getByRole('link', { name: pattern })
    .or(pages.launch.page.getByRole('button', { name: pattern }))
    .or(pages.launch.page.getByText(pattern));

  await expect(loginLocator).toBeVisible();
});

When('User click on the {string} link', async ({ pages }, linkText) => {   //click login link
  const pattern = new RegExp(linkText, 'i');
  const loginLocator = pages.launch.page
    .getByRole('link', { name: pattern })
    .or(pages.launch.page.getByRole('button', { name: pattern }))
    .or(pages.launch.page.getByText(pattern));

  await loginLocator.click();
});

Then('User should be redirected to the Login page', async ({ pages }) => {
  await expect(pages.launch.page).toHaveURL(/auth/i);
});

//check your risk button
When('User click on "Check Your Risk" button', async ({ pages }) => {
  await pages.launch.page
    .getByRole('button', { name: /Check Your Risk/i })
    .click();
});

//pop up window is visible when u click check ur risk
Then(
  'User should be redirected to the assessment modal dialog',
  async ({ pages }) => {
    const dialog = pages.launch.page.getByRole('dialog');
    await expect(dialog).toBeVisible();
  }
);

Given('User is in browser', async () => {
  
});

Then(
  'Page should be fully loaded within 3 seconds',
  async ({ pages }) => {
    const loadDuration = await pages.launch.page.evaluate(() => {
      const entries = performance.getEntriesByType('navigation');
      if (!entries || entries.length === 0) {
        return null;
      }
      const entry = entries[0]; 
      return entry.loadEventEnd - entry.startTime;
    });

    expect(loadDuration).not.toBeNull();
    expect(loadDuration).toBeLessThanOrEqual(3000);
  }
);

Then(
  'All elements are readable and accessible without horizontal scrolling',
  async ({ pages }) => {
    const hasHorizontalScroll = await pages.launch.page.evaluate(() => {
      const doc = document.documentElement;
      return doc.scrollWidth > window.innerWidth;
    });
    expect(hasHorizontalScroll).toBe(false);
  }
);

Then(
  'All major sections are accessible with appropriate labels and alt texts',
  async ({ pages }) => {

    const hasMain = await pages.launch.page.evaluate(() => { //we check whethger is a <main>
      return !!document.querySelector('main, [role="main"]');
    });
    expect(hasMain).toBe(true);
    //<img> elements contain alt text
    const imagesWithoutAlt = await pages.launch.page.evaluate(() => {
      return Array.from(document.querySelectorAll('img')).filter((img) => {
        const alt = img.getAttribute('alt');
        return !alt || alt.trim() === '';
      }).length;
    });
    expect(imagesWithoutAlt).toBe(0);
  }
);




