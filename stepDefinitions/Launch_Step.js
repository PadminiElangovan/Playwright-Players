import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });

Given('User launches the browser', async ({ pages }) => {
  await pages.launch.openHome(); 
});

Then('User should see app name on the top left', async ({ pages }) => {
  await expect(pages.launch.appName).toBeVisible();
});

Then('User should see text {string}', async ({ pages }, expectedText) => {
  await expect(
    pages.launch.text(expectedText)
  ).toBeVisible();
});

Then('User should see the text {string}', async ({ pages }, expectedText) => {
  await expect(
    pages.launch.text(expectedText, { exact: true })
  ).toBeVisible();
});

Then('User should see the heading {string}', async ({ pages }, expectedHeading) => {
    await expect(pages.launch.mainHeading).toHaveText(expectedHeading);
  }
);

//start today button
Then('User should see a {string} input button', async ({ pages }, buttonLabel) => {
    const button = pages.launch.button(buttonLabel, { exact: true });
    await expect(button).toBeVisible();
    await expect(button).toHaveText(buttonLabel);
  }
);

Then('User should see a button labeled {string}', async ({ pages }, buttonText) => {
    const button = pages.launch.button(buttonText); 
    await expect(button).toBeVisible();
  }
);

Then(
  'User should see a card with title {string}', async ({ pages }, expectedTitle) => {
    await expect(
      pages.launch.heading(expectedTitle, { exact: true })
    ).toBeVisible();
  }
);

Then('User should see heart icon', async ({ pages }) => {
  await expect(pages.launch.healthIcon).toBeVisible();
});

Then('User should see activity inside square icon', async ({ pages }) => {
  await expect(pages.launch.nutritionIcon).toBeVisible();
});

Then('User should see clock icon', async ({ pages }) => {
  await expect(pages.launch.smartInsightsIcon).toBeVisible();
});

Then('User should see a testimonial from user {string}', async ({ pages }, userName) => {
    await expect(
      pages.launch.getTestimonialByUser(userName)
    ).toBeVisible();
  }
);

Then('User should see {string} text is visible above testimonial section',async ({ pages }, expectedText) => {
    await expect(
      pages.launch.getTextAboveTestimonial(expectedText)
    ).toBeVisible();
  }
);

Then(
  'User should see {int} yellow stars above {string} text',
  async ({ pages }, count, headerText) => {
    await expect(pages.launch.text(headerText, { exact: true })).toBeVisible();
    await expect(pages.launch.getStarsAboveHeader()).toHaveCount(count);
  }
);

Then('User should see 5 stars for {string}', async ({ pages }, name) => {
  await expect(
    pages.launch.getStarsForTestimonial(name)
  ).toHaveCount(5);
});

Then('User should see a section with heading {string}', async ({ pages }, headingText) => {
    await expect(
      pages.launch.heading(headingText, { exact: false })
    ).toBeVisible();
  }
);

When('User click the {string} button', async ({ pages }, buttonText) => {
    const pattern = new RegExp(buttonText, 'i');  //regexp makes the text case insentitive
    await pages.launch
      .button(pattern)
      .click();
  }
);


Then('User should see a link labeled {string}', async ({ pages }, linkText) => {
    const pattern = new RegExp(linkText, 'i');
    const loginLocator = pages.launch.getLoginEntry(pattern);
    await expect(loginLocator).toBeVisible();
  }
);

When('User click on the {string} link', async ({ pages }, linkText) => {
    const pattern = new RegExp(linkText, 'i');
    const loginLocator = pages.launch.getLoginEntry(pattern);
    await loginLocator.click();
  }
);

Then('User should be redirected to the Login page', async ({ pages }) => {
  await expect(pages.launch.page).toHaveURL(/auth/i);
});

When('User click on "Check Your Risk" button', async ({ pages }) => {
  await pages.launch.button(/Check Your Risk/i).click();
});

Then('User should be redirected to the assessment modal dialog', async ({ pages }) => {
    const dialog = pages.launch.getAssessmentDialog();
    await expect(dialog).toBeVisible();
  }
);

Then('Page should be fully loaded within 3 seconds', async ({ pages }) => {
    const loadDuration = await pages.launch.getPageLoadDuration();
    expect(loadDuration).not.toBeNull();
    expect(loadDuration).toBeLessThanOrEqual(3000);
  }
);

Then('All elements are readable and accessible without horizontal scrolling', async ({ pages }) => {
    const hasHorizontalScroll = await pages.launch.hasHorizontalScroll();
    expect(hasHorizontalScroll).toBe(false);
  }
);

Then('All major sections are accessible with appropriate labels and alt texts', async ({ pages }) => {
    const hasMain = await pages.launch.hasMainRegion();
    expect(hasMain).toBe(true);

    const imagesWithoutAlt = await pages.launch.getImagesWithoutAltCount();
    expect(imagesWithoutAlt).toBe(0);
  }
);
