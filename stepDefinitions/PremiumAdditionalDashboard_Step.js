import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test, { passTags: true });


Then('User should see {string} displayed', async ({ pages }, expected) => {
    let actual;
    switch (expected) {
        case '👑 Premium Activated':
            actual = await pages.premiumAddDashboard.getPremiumActivatedStatus();
            expect(actual.trim()).toBe(expected);
            break;
        case 'Manage Premium':
            await expect(pages.premiumAddDashboard.ManagePremiumButton).toBeVisible();
            break;
        default:
            throw new Error(`Unknown element: ${expected}`);
    }

});

When('User clicks the {string} button in dashboard page', async ({ pages }, expected) => {
    await pages.premiumAddDashboard.clickManagePremiumButton();

});

Then('User should see the premium subscription dialog box', async ({ pages }) => {
    await expect(pages.premiumAddDashboard.DialogBox).toBeVisible();
});

Then('User should see {string} with value in format {string}', async ({ pages }, label, format) => {
    const dateText = await pages.premiumAddDashboard.getDateValue(label);
    expect(dateText).toMatch(/^[A-Za-z]{3}, [A-Za-z]{3} \d{2}, \d{4}$/)
});

When('User scrolls to the middle of the Dashboard page', async ({ pages }) => {
    await pages.premiumAddDashboard.scrollToEmotionalWellbeingSection();
});

Then('User should see the title {string} in dashboard page', async ({ pages }, expectedTitle) => {
    const actualTitle = await pages.premiumAddDashboard.EmotionalWellBeingElement(expectedTitle).textContent();
    expect(actualTitle.trim()).toBe(expectedTitle);
});

Then('User should see {string} in Emotional Wellbeing section', async ({ pages }, element) => {
    let locator;
    switch (element) {
        case 'Log emotional state button':
            locator = pages.premiumAddDashboard.LogEmotionalStateButton;
            break;
        case 'Energy level slider':
            locator = pages.premiumAddDashboard.slider;
            break;
        case 'How are you feeling today?':
        case 'Notes on your mood':
            await pages.premiumAddDashboard.EmotionalWellBeingElement(element).waitFor({ state: 'visible' });
            locator = pages.premiumAddDashboard.EmotionalWellBeingElement(element);
            break;
        case "What's affecting your mood today?":
            locator = pages.premiumAddDashboard.EmoWellbeingInputPlaceholder;
            break;
        default:
            throw new Error(`Unknown element: ${element}`);
    }
    await expect(locator).toBeVisible();
});

Then('User should see the following mood emojis {string}', async ({ pages }, arg) => {
    const expectedEmojis = arg.split(' ');
    const actualEmojis = await pages.premiumAddDashboard.getMoodEmojis();

    for (const emoji of expectedEmojis) {
        expect(actualEmojis).toContain(emoji);
    }
});

Then('User should see Energy level slider with labels {string} and {string}', async ({ pages }, low, high) => {

    await expect(pages.premiumAddDashboard.lowLabel).toBeVisible();
    await pages.premiumAddDashboard.highLabel.waitFor({ state: 'visible' });
    await expect(pages.premiumAddDashboard.highLabel).toBeVisible();

});


When('User enters text in notes on your mood field', async ({ pages, testData }) => {
    console.log("Test Data Notes:", testData.Notes);
    await pages.premiumAddDashboard.enterTextInNotes(testData.Notes)
});

Then('User should see the entered value in the input field', async ({ pages, testData }) => {
    const inputField = pages.premiumAddDashboard.EmoWellbeingInputPlaceholder;
    const enteredText = await inputField.inputValue();
    console.log("Entered Text:", enteredText);
    expect(enteredText.trim()).toBe(testData.Notes);
});

When('User moves the energy level slider to {string}', async ({ pages, testData }, scenario) => {

    pages.beforeSliderValue = await pages.premiumAddDashboard.getSliderValue();
    if (scenario.toLowerCase() === 'moving left') {
        await pages.premiumAddDashboard.moveSliderLeft(testData.sliderValue);
    } else if (scenario.toLowerCase() === 'moving right') {
        await pages.premiumAddDashboard.moveSliderRight(testData.sliderValue);
    } else {
        throw new Error(`Unknown scenario: ${scenario}`);
    }
});

Then('User should see the energy value change accordingly for {string}', async ({ pages, testData }, scenario) => {
    const before = parseInt(pages.beforeSliderValue, 10);
    const after = parseInt(await pages.premiumAddDashboard.getSliderValue(), 10);
    const steps = parseInt(testData.sliderValue, 10);

    let expected = before;
    if (scenario.toLowerCase() === 'moving left') {
        expected = Math.max(1, before - steps);
    } else if (scenario.toLowerCase() === 'moving right') {
        expected = Math.min(10, before + steps);
    } else {
        throw new Error(`Unknown scenario type: ${scenario}`);
    }

    console.log('before sliding value:' + before)
    console.log('after sliding value:' + after)
    console.log('steps slided:' + steps)
    expect(after).toBe(expected);

});

When('User clicks log emotional state after selecting a {string} mood emoji', async ({ pages, testData }, emoji) => {
    await pages.premiumAddDashboard.selectMoodEmoji(testData.emoji);
    await pages.premiumAddDashboard.clickLogEmotionButton();
});

Then('User should see the message {string}', async ({ pages }, expectedMesg) => {
    const actualMesg = await pages.premiumAddDashboard.getSuccessMesg();
    expect(actualMesg).toBe(expectedMesg);
});

Then('User should see Smart Insights section with the following details:', async ({ pages }, dataTable) => {
    for (const row of dataTable.rows()) {
        const element = row[0];
        switch (element) {
            case 'Section Title':
                await expect(pages.premiumAddDashboard.smartInsights('Smart Insights')).toBeVisible();
                break;
            case 'Label':
                await expect(pages.premiumAddDashboard.smartInsights('Last 7 days')).toBeVisible();
                break;
        }
    }
});

Then('User should see the following Smart Insights titles:', async ({ pages }, dataTable) => {

    const titles = dataTable.raw().flat();
    for (const title of titles) {
        await expect(pages.premiumAddDashboard.smartInsights(title)).toBeVisible();
    }
});

Then('User should see the following {string} under Smart Insights {string}:', async ({ pages }, _contentLabel, _titleLabel, dataTable) => {

    const rows = dataTable.hashes();
    for (const row of rows) {
        const title = row.Titles;
        await expect(pages.premiumAddDashboard.content(title)).toBeVisible();
        const text = await pages.premiumAddDashboard.content(title).textContent();

        switch (title) {
            case 'Target Achievement':
                expect(text).toMatch(/You've stayed within target range \d+% of the time - up \d+% from last week!/i);
                break;
            case 'Pattern Detected':
                expect(text).toMatch(/Your glucose tends to spike between \d+-\d+ PM\. Consider adjusting your lunch carb intake\./i);
                break;
            case 'Suggestion':
                expect(text).toMatch(/Walking for 15 minutes after dinner.*reduce your evening glucose by an average of \d+ ?mg\/dL\./i);
                break;
            default:
                throw new Error(`No validation defined for Smart Insight title: ${title}`);
        }
    }
});

Then('User should see the card titled {string}', async ({ pages }, title) => {
    const cardLocator = pages.premiumAddDashboard.cardTitle(title);
    await cardLocator.waitFor({ state: 'visible' });
    const isVisible = await cardLocator.isVisible();
    expect(isVisible).toBe(true);
    const text = await cardLocator.textContent();
    expect(text.trim()).toBe(title);
});

Then('User should see the card value for {string}', async ({ pages, testData }, title) => {

    const actualValue = await pages.premiumAddDashboard.getCardValue(title);
    const actualMsg = await pages.premiumAddDashboard.getCardText(title);
    switch (title) {
        case 'Med Adherence':
            expect(actualValue).toBe(`${testData.cardValue}%`);
            break;

        case 'Exercise Minutes':
            expect(actualValue).toBe(testData.cardValue);
            break;

        case 'Weekly Checks':
            expect(actualValue).toBe(testData.cardValue);
            break;

        case 'Carb Goals':
            expect(actualValue).toBe(testData.cardValue);
            break;

        default:
            throw new Error(`Unhandled dashboard card title: ${title}`);
    }
    expect(actualMsg).toBe(testData.cardMesg);
});

Then('User should see the confirmation message:', async ({ pages }, docString) => {
    const actualMesg = await pages.premiumAddDashboard.getManagePremiumMesgText();
    await expect(actualMesg).toBe(docString);

});

Then('User should see the section title {string}', async ({ pages }, expectedTitle) => {
    const actualTitle = await pages.premiumAddDashboard.getLossOfFeaturesTitle();
    expect(actualTitle).toContain(expectedTitle);
});

Then('User should see the following loss of features', async ({ pages }, dataTable) => {
    const rows = dataTable.hashes();

    for (const row of rows) {
        const featureLocator = pages.premiumAddDashboard.lossOfFeaturesItem(row.Features);
        await expect(featureLocator).toBeVisible();
        await expect(featureLocator).toHaveText(row.Features);
    }
});

Then('User should see the following action buttons:', async ({ pages }, dataTable) => {
     const rows = dataTable.hashes();

     for(const row of rows){
     await expect (pages.premiumAddDashboard.PremiumButtons(row['Buttons']) ).toBeVisible();   
     }
});

Given('User is in Manage premium dialog box', async ({ pages }) => {
  await pages.premiumAddDashboard.clickManagePremiumButton();

});

When('User clicks the {string} button', async ({ pages }, buttonName) => {
   await pages.premiumAddDashboard.clickDialogBoxButtons(buttonName);
});

Then('User should see success message {string}', async ({ pages }, expectedMesg) => {
  
  await expect(pages.premiumAddDashboard.toastMesg).toHaveText(expectedMesg);
});

When('User clicks the close icon', async ({ pages }) => {
    await pages.premiumAddDashboard.clickCloseIcon()
});

Then('User should see the Manage Premium dialog box closed', async ({ pages }) => {
   await expect(pages.premiumAddDashboard.DialogBox).not.toBeVisible();
});

Then('User should see {string} button with background color {string} and text color {string}', async ({ pages }, buttonText, background, textColor) => {
  const button = await pages.premiumAddDashboard.PremiumButtons(buttonText);
  const bgColor = await button.evaluate(el => window.getComputedStyle(el).backgroundColor);
  const Color = await button.evaluate(el => window.getComputedStyle(el).color);
   expect(bgColor).toBe(background);
   expect(Color).toBe(textColor);

});












