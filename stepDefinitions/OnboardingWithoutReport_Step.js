import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/Index_Fixture.js';
import { expect } from '@playwright/test';

const { Given, When, Then, Before } = createBdd(test, { passTags: true });

When('User clicks on step for onboarding button in upload blood report page', async ({ pages }) => {
    // await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
});

Then('User should see {string} for {string} in step without report', async ({ pages }, expected, scenario) => {

    const scenarioLower = scenario.toLowerCase().trim();
    switch (true) {

        case scenarioLower.includes('title'):
            await expect(pages.withoutsteps.stepTitleWithoutReport).toHaveText(expected);
            break;
        case scenarioLower.includes('subheading'):
            await expect(pages.withoutsteps.stepSubTitleWithoutReport).toHaveText(expected);
            break;
    }
});

Then('User should see {string} for {string} in without report step {int}', async ({ pages }, expected, scenario, stepnum) => {
    const scenarioLower = scenario.toLowerCase();

    if (scenarioLower.includes("step progress is highlighted")) {
        await expect(pages.withoutsteps.progressBarWithoutReport).toBeEnabled();

    } else if (

        scenarioLower.includes("navigation of step") ||
        scenarioLower.includes("progress shows") ||
        scenarioLower.includes("option selection") ||
        scenarioLower.includes("navigation of back button")
    ) {
        await expect(pages.withoutsteps.stepNumWithoutReport).toHaveText(expected);

    } else if (scenarioLower.includes("button visibility")) {
        const button = pages.withoutsteps.getFieldByRole(expected);
        await expect(button).toBeVisible();

    } else if (scenarioLower.includes("Checkbox for options")) {
        const checkboxStep5 = pages.withsteps.verifyEachOptionHasCheckboxStep5();
        await expect(checkboxStep5).toBeVisible();
    }
});

Given('User is in step1 of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();

});

When('User selects {string} in step {int} of onboarding without report', async ({ pages }, option, stepnum) => {
    await pages.withoutsteps.getFieldByRole(option).click();
});


Then('User should see {string} message before navigating to step {int}', async ({ pages }, expected, stepnum) => {
    await expect(pages.withoutsteps.optionSelectionMsg).toHaveText(expected);
});


Given('User is in step2 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();

});




Then('User should see options from {string} {string} in step {int}', async ({ pages }, range, unit, stepnum) => {
    const [start] = range.split(' to ').map(Number);
    if (unit === 'lbs') {
        await pages.withoutsteps.getFieldByRole('Pounds').click();
    }
    await expect(pages.withoutsteps.allChkBoxContainerStep, 'Dropdown container not visible').toBeVisible();

    await expect(pages.withoutsteps.getFieldByRole(`${start} ${unit}`),'Start option missing' ).toBeVisible();
}
);




// Then('User should see options from {string} {string} in step {int}', async ({ pages }, range, unit, stepnum) => {
//     const [start, end] = range.split(' to ').map(Number);

//     if (unit === "lbs") {
//         await pages.withoutsteps.getFieldByRole("Pounds").click();
//     }
//     await pages.withoutsteps.allChkBoxContainerStep.evaluate(el => el.scrollTop = 0);
//     for (let option = start; option <= end; option++) {
//         const optionText = `${option} ${unit}`;
//         const optionLocator = pages.withoutsteps.getFieldByRole(optionText);
//         await expect(optionLocator, `Option "${optionText}" is missing`).toBeVisible();
//     }
// });



Then('iframe options should have scroll option in step3', async ({ pages }) => {
    const result = await pages.withoutsteps.scrollToLastOptionAndVerify();
    expect(result).toBe(true);

});

Given('User is in step3 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();

});

Then('User should see {string} for the {string} in step {int} without report', async ({ pages }, expected, scenario, stepnum) => {
    const scenarioLower = scenario.toLowerCase().trim();
    switch (true) {

        case scenarioLower.includes('2 tabs'):
            const expectedCount = Number(expected);
            await expect(pages.withoutsteps.getTabs()).toHaveCount(expectedCount);
            break;
        case scenarioLower.includes('in tab'):
            const tab = pages.withoutsteps.getFieldByRole(expected);
            await expect(tab).toBeVisible();
            break;

    }
});

Then('User should see {string} as {string} in step {int} without report', async ({ pages }, optionType, expected) => {

    if (optionType === 'Centimeter') {
        const [start, end] = expected.replace(/cm/g, '').split(' to ').map(Number);
        for (let cm = start; cm <= end; cm++) {
            await expect(pages.withoutsteps.getCentimeterOption(cm)).toBeVisible();
        }
    }

    if (optionType === 'Inches after clicking inches tab') {
        await pages.withoutsteps.getFieldByRole("Feet & Inches").click();
        const [start, end] = expected.split(' to ');

        const [startfeet, startiinch] = start.replace('ft', ' ').replace('in', '').split(' ').map(Number);
        const [endfeet, endinch] = end.replace('ft', ' ').replace('in', '').split(' ').map(Number);

        for (let feet = startfeet; feet <= endfeet; feet++) {
            const startInch = feet === startfeet ? startiinch : 0;
            const endInch = feet === endfeet ? endinch : 11;

            for (let inch = startInch; inch <= endInch; inch++) {
                await expect(pages.withoutsteps.getInchesOption(feet, inch)).toBeVisible();
            }
        }
    }
}
);

Given('User is in step4 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
});


When('User selects {string} and {string} at step {int} of onboarding without report', async ({ pages }, tab, option, stepnum) => {


    if (tab === "Feet & Inches") {
        let optionText = option.replace(/ft/, "' ").replace(/in/, '"');
        await pages.withoutsteps.getFieldByRole(tab).click();
        await pages.withoutsteps.getFieldByRole(optionText).click();
    } else if (tab === "Pounds") {
        await pages.withoutsteps.getFieldByRole(tab).click();
        await pages.withoutsteps.getFieldByRole(option).click();
    } else {
        await pages.withoutsteps.getFieldByRole(option).click();
    }
});

Given('User is in step5 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();

});

Given('User is in step6 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
});

Given('User is in step7 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();

});

Given('User is in step8 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
});

Given('User is in step9 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
    await pages.withoutsteps.getFieldByRole("Yes ✅").click();
});

When('User selects {string} and clicks {string} from step {int}', async ({ pages }, option, cont, stepnum) => {
    const givenOpt = option.split(',').map(a => a.trim());
    for (const opt of givenOpt) {
        await pages.withoutsteps.selectCheckboxWithoutReport(opt);
    }
    await pages.withoutsteps.getFieldByRole(cont).click();
});

Given('User is in step10 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
    await pages.withoutsteps.getFieldByRole("No ❌").click();

});

When('User selects {string} from step {int}', async ({ pages }, option, arg1) => {
    const givenOpt = option.split(',').map(a => a.trim());
    for (const opt of givenOpt) {
        await pages.withoutsteps.selectCheckboxWithoutReport(opt);
    }
});

Then('User should see {string} selected in without report', async ({ pages }, options) => {
    const givenOptions = options.split(',').map(opt => opt.trim());

    for (const opt of givenOptions) {
        const row = pages.withoutsteps.allChkBoxOptionRowStep.filter({ hasText: opt }).first();
        const checkbox = row.locator('button[role="checkbox"]');
        const isChecked = await checkbox.getAttribute('aria-checked');
        await expect(isChecked).toBe('true', `Checkbox for "${opt}" is not selected`);
    }
});

Given('User is in step11 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
    await pages.withoutsteps.getFieldByRole("No ❌").click();
    await pages.withoutsteps.selectCheckboxWithoutReport("Anemia");
    await pages.withoutsteps.getFieldByRole("Continue").click();

});

Then('User should see expected {string} for {string} in without report step {int}', async ({ pages, testData }, outcome, scenario, stepnum) => {
    const scenarioLower = scenario.toLowerCase().trim();
    switch (true) {
        case scenarioLower.includes('input field'):
            await expect(pages.withoutsteps.inputFieldStep12).toBeVisible();
            break;
        case scenarioLower.includes('placeholder'):
            await expect(pages.withoutsteps.inputFieldStep12).toHaveAttribute('placeholder', testData.Expected);
            break;
        case scenarioLower.includes('text'):
            let actualOption = pages.withsteps.getFieldByText(outcome);
            await expect(actualOption).toHaveText(testData.Expected);
            break;
    }
});

Given('User is in step12 of of onboarding without report', async ({ pages }) => {
    await pages.login.stepThroOnboarding.waitFor({ state: "visible" });
    await pages.login.stepThroOnboarding.click();
    await pages.withoutsteps.getFieldByRole("Type 2").click();
    await pages.withoutsteps.getFieldByRole("Female 👩‍🦰").click();
    await pages.withoutsteps.getFieldByRole("40 years").click();
    await pages.withoutsteps.getFieldByRole("150 cm").click();
    await pages.withoutsteps.getFieldByRole("50 kg").click();
    await pages.withsteps.getFieldByText("All-inclusive diet 🍴🍖🍎").click();
    await pages.withoutsteps.getFieldByRole("Middle Eastern 🥙").click();
    await pages.withoutsteps.getFieldByRole("No ❌").click();
    await pages.withoutsteps.selectCheckboxWithoutReport("Anemia");
    await pages.withoutsteps.getFieldByRole("Continue").click();
    await pages.withoutsteps.getFieldByRole("Easy 🦋").click();

});

When('User enters {string} HbA1c vlaue in step {int}', async ({ pages, testData }, scenario, stepnum) => {
    await (pages.withoutsteps.inputFieldStep12).type(testData.HbA1cValue);
});

When('User enters {string} HbA1c vlaue and clicks {string} in step {int}', async ({ pages, testData }, scenario, cont, stepnum) => {
    await (pages.withoutsteps.inputFieldStep12).type(testData.HbA1cValue);
    await pages.withoutsteps.getFieldByRole(cont).click();
});

Then('User should see the input field {string} in step {int}', async ({ pages, testData }, expected, stepnum) => {

    switch (expected) {
        case "does not accept value":
            await expect(pages.withoutsteps.inputFieldStep12).toHaveValue('');
            break;

        case "does not accept value":
            await expect(pages.withoutsteps.inputFieldStep12).toHaveValue(testData.HbA1cValue);
            break;

        case "throws error message":
            await expect(pages.withoutsteps.statusMsgStep12).toHaveText(testData.Expected);
            break;

        case "success message":
            const hbA1cValue = testData.HbA1cValue;
            const expectedMessage = testData.Expected.replace('{value}', `${hbA1cValue}%`);
            await expect(pages.withoutsteps.statusMsgStep12).toHaveText(expectedMessage);
            break;
    }
});

Then('User should see {string} for {string} after step {int}', async ({ pages, testData }, expected, scenario, stepnum) => {
    switch (scenario) {
        case "personalization screen appears":
            await expect(pages.withoutsteps.loadingIndicator).toBeVisible();
            break;
        case "loading indicator title":
            await expect(pages.withoutsteps.personalPgTitle).toHaveText(expected);
            break;
        case "loading indicator subtext":
            await expect(pages.withoutsteps.personalPgSubtxt).toHaveText(expected);
            break;

    }

});