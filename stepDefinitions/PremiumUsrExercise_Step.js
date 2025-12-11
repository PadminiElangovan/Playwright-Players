  import {createBdd} from 'playwright-bdd';
  import { test } from '../fixtures/Index_Fixture.js';
  import { expect } from '@playwright/test';
  

  const { Given, When, Then, Before } = createBdd(test, { passTags: true });

    // Before(
    // { tags: '@PremUsrExer_21 or @PremUsrExer_22 or @PremUsrExer_23 or @PremUsrExer_24 or @PremUsrExer_25' },
    // async ({ pages }) => {
    //     await pages.pUsrExercise.exerciseSection();

    //     // Reset state if Undo button is visible
    //     if (await pages.pUsrExercise.undoBtn.isVisible().catch(() => false)) {
    //     await pages.pUsrExercise.undoBtn.click();
    //     await expect(pages.pUsrExercise.markComplBtn).toBeVisible();
    //     }
    // });
  
    Given('Premium user is on the homepage', async ({pages}) => {
        //await pages.login.launchApp();
    });

    When('Premium user clicks the Exercise option from the side panel', async ({pages}) => {
        await pages.pUsrExercise.exerciseTab.click();
    });

    Then('View Full Schedule button is displayed on the right', async ({pages}) => {
        const { ViewFullSchdBtn, SectionTitle } = await pages.pUsrExercise.getElementPositions();
        expect(ViewFullSchdBtn).toBeGreaterThan(SectionTitle);
    });

    Given('Premium user is in the Exercise section', async ({pages}) => {
        await pages.pUsrExercise.exerciseSection();
    });

    When('Premium user clicks the View Full Schedule button', async ({pages}) => {
        await pages.pUsrExercise.fullSchdBtn.click();
    });

    Then('Premium user is redirected to Today\'s Exercise Schedule page', async ({pages}) => {
        await expect(pages.pUsrExercise.exeSchdTitle).toBeVisible();
    });

    Then('Premium user should see {string} tab is visible', async ({pages}, tabname) => {
        
        switch (tabname.trim()) {
            case "Warm Up":
                await expect(pages.pUsrExercise.warmUpTab).toBeVisible(); 
            break;
            case "Main Workout":
                await expect(pages.pUsrExercise.mainWrkOutTab).toBeVisible(); 
            break;           
            case "Cool Down":
                await expect(pages.pUsrExercise.coolDwnTab).toBeVisible(); 
            break;           
        }
    });


    Then('Premium user should see exercise info {string} is displayed', async ({pages}, Field) => {
        switch (Field.trim()) {
            case "Exercise name":
                await expect(pages.pUsrExercise.exerciseName).toBeVisible(); 
            break;
            case "Exercise Description":
                await expect(pages.pUsrExercise.exerciseDesc).toBeVisible(); 
            break;           
            case "Exercise Duration":
                await expect(pages.pUsrExercise.exerciseTime).toBeVisible(); 
            break;    
            case "Exercise Calories":
                await expect(pages.pUsrExercise.exerciseCalorie).toBeVisible(); 
            break; 
            case "Exercise Intensity level":
                await expect(pages.pUsrExercise.exerciseIntensity).toBeVisible(); 
            break;      
        }
    });

    When('Premium user clicks the Main Workout tab', async ({pages}) => {
        await pages.pUsrExercise.mainWrkOutTab.click();
    });

    When('Premium user clicks the Cool Down tab', async ({pages}) => {
        await pages.pUsrExercise.coolDwnTab.click();
    });


    
    When('Premium user clicks the Mark As Completed button', async ({ pages }) => {
        await pages.pUsrExercise.markComplBtn.click();
    });

    Then('Mark As Completed button is displayed', async ({ pages }) => {
        await expect(pages.pUsrExercise.markComplBtn).toBeVisible();
    });
    

    Then('Premium user should see Success dialog for Mark As Completed', async ({ pages }) => {
        await expect.soft(pages.pUsrExercise.successmsg).toBeVisible();
        //await expect.soft(pages.pUsrExercise.wrkCompmsg).toBeVisible();
    });

    Then('Premium user should see Completed Button in Exercise section', async ({ pages }) => {
        await expect.soft(pages.pUsrExercise.completedTxt).toBeVisible();
    });

    Then('Premium user should see Undo option is visible in Exercise section', async ({ pages }) => {
        await expect.soft(pages.pUsrExercise.undoBtn).toBeVisible();
    });

    When('Premium user click undo button after marking Exercise as completed', async ({ pages }) => {
    if (await pages.pUsrExercise.markComplBtn.isVisible({ timeout: 5000 })) {
            await pages.pUsrExercise.markComplBtn.click();
        }
        await pages.pUsrExercise.undoBtn.click();
    });

    Then('Mark As Completed button is displayed on clicking undo', async ({ pages }) => {
        await expect.soft(pages.pUsrExercise.markComplBtn).toBeVisible();
    });

    

    When('Premium user clicks view full schedule', async ({pages}) => {
        await pages.pUsrExercise.fullSchdBtn.click();
    });

    Then('Premium user should redirect to Exercise schedule', async ({page}) => {
        await expect(page).toHaveURL(/exercise-schedule/);
    });

    Then('Premium user should see title Today\'s Exercise Schedule', async ({pages}) => {
        await expect(pages.pUsrExercise.exeSchdTitle).toBeVisible();
    });

    Then('Premium user should see Back to Home button in Today\'s schedule page', async ({pages}) => {
        await expect(pages.pUsrExercise.bckHomeBtn).toBeVisible();
    });

    Then('Premium user should see {string} section', async ({pages}, sectionName) => {
        switch (sectionName.trim()) {
            case "Warm Up":
                await expect(pages.pUsrExercise.warmUpSection).toBeVisible(); 
            break;
            case "Main Workout":
                await expect(pages.pUsrExercise.mainWrkOutSection).toBeVisible(); 
            break;           
            case "Cool Down":
                await expect(pages.pUsrExercise.coolDwnSection).toBeVisible(); 
            break;           
        }
    });

    Then('Premium user should see {string} is visible under Warm Up section', async ({pages}, Field) => {
      switch (Field.trim()) {
            case "Exercise name":
                await expect(pages.pUsrExercise.warmUpExerName).toBeVisible(); 
            break;
            case "Exercise Description":
                await expect(pages.pUsrExercise.warmUpExerDesc).toBeVisible(); 
            break;           
            case "Exercise Duration":
                await expect(pages.pUsrExercise.warmUpExerTime).toBeVisible(); 
            break;    
            case "Exercise Calories":
                await expect(pages.pUsrExercise.warmUpExerCalo).toBeVisible(); 
            break; 
            case "Exercise Intensity level":
                await expect(pages.pUsrExercise.warmUpExerIntens).toBeVisible(); 
            break;      
        }
    });

    Then('Premium user should see {string} is visible under Main Workout section', async ({pages}, Field) => {
      switch (Field.trim()) {
            case "Exercise name":
                await expect(pages.pUsrExercise.mainWrkExerName).toBeVisible(); 
            break;
            case "Exercise Description":
                await expect(pages.pUsrExercise.mainWrkExerDesc).toBeVisible(); 
            break;           
            case "Exercise Duration":
                await expect(pages.pUsrExercise.mainWrkExerTime).toBeVisible(); 
            break;    
            case "Exercise Calories":
                await expect(pages.pUsrExercise.mainWrkExerCalo).toBeVisible(); 
            break; 
            case "Exercise Intensity level":
                await expect(pages.pUsrExercise.mainWrkIntens).toBeVisible(); 
            break;      
        }
    });

    Then('Premium user should see {string} is visible under Cool Down section', async ({pages}, Field) => {
      switch (Field.trim()) {
            case "Exercise name":
                await expect(pages.pUsrExercise.coolDwnExerName).toBeVisible(); 
            break;
            case "Exercise Description":
                await expect(pages.pUsrExercise.coolDwnExerDesc).toBeVisible(); 
            break;           
            case "Exercise Duration":
                await expect(pages.pUsrExercise.coolDwnExerTime).toBeVisible(); 
            break;    
            case "Exercise Calories":
                await expect(pages.pUsrExercise.coolDwnExerCalo).toBeVisible(); 
            break; 
            case "Exercise Intensity level":
                await expect(pages.pUsrExercise.coolDwnIntens).toBeVisible(); 
            break;      
        }
    });

    Then('Exercise intensity should be low\\/medium\\/hard', async ({pages}) => {
        const p = pages.pUsrExercise
        const expected = ["low", "medium", "hard"];

        const warm = await p.getValue(p.warmUpExerIntens);
        const main = await p.getValue(p.mainWrkIntens);
        const cool = await p.getValue(p.coolDwnIntens);

        expect(expected).toContain(warm);
        expect(expected).toContain(main);
        expect(expected).toContain(cool);
    });

    Then('Premium user should see total duration in exercise schedule page', async ({pages}) => {
        await expect(pages.pUsrExercise.totalDuration).toBeVisible();
    });

    Then('total duration should be equal the sum of all individual durations', async ({pages}) => {
        const p = pages.pUsrExercise;

        const warmTime = await p.getTimeValue(p.warmUpExerTime);
        const mainTime = await p.getTimeValue(p.mainWrkExerTime);
        const coolTime = await p.getTimeValue(p.coolDwnExerTime);
        const totalTime = await p.getTimeValue(p.totalDuration);

        expect(warmTime + mainTime + coolTime).toBe(totalTime);
    });

    Then('total calories should be equal the sum of all individual calories', async ({pages}) => {
        const p = pages.pUsrExercise;

        const warmCal = await p.getTimeValue(p.warmUpExerCalo);
        const mainCal = await p.getTimeValue(p.mainWrkExerCalo);
        const coolCal = await p.getTimeValue(p.coolDwnExerCalo);
        const totalCal = await p.getTimeValue(p.totalCal);

        expect(warmCal + mainCal + coolCal).toBe(totalCal);
    });