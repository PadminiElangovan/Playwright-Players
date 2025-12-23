@sweet @withreportsteps @skiplogin @register @ela
Feature: Onboarding scenarios with blood report - Steps Total 45 Scenarios

    Background: User is on step 1 of onboarding
        Given User is on report analysis and uploads the file
        When User clicks Onboarding button

    #-------------------------------------------------------------------------------------------------------------------
    #Module 1:Onboarding Step 1 UI --> Step2 ----- Total 13 Scenarios
    #-------------------------------------------------------------------------------------------------------------------
    @step1titleswithreport
    Scenario Outline: Verify presence of <Scenario> with report step 1
        Then User should see "<Expected>" for "<Scenario>" in steps

        Examples:
            | TestCaseID         | Scenario          | Expected                                      |
            | WithReportSteps_01 | step 1 title      | Help Us Help You (We Promise, No Long Forms!) |
            | WithReportSteps_02 | step 1 subheading | Help us understand your health better         |

    #-------------------------------------------------------------------------------------------------------------------
    @navbloodreportmodal @step1
    Scenario Outline: Verify <Scenario> in step 1 with report
        Then User should see "<Expected>" for "<Scenario>" in step 1

        Examples:
            | TestCaseID         | Scenario                     | Expected                     |
            | WithReportSteps_03 | step progress is highlighted | Step 1 indicator highlighted |
            | WithReportSteps_04 | progress shows 1 of 5 steps  | Step 1 of 5                  |

    #-------------------------------------------------------------------------------------------------------------------
    @step1fieldfn
    Scenario Outline: Verify <Scenario> functionality in step 1 with report
        When User clicks continue after entering values in step 1
        Then User should see "<Expected>" for "<Scenario>" for step 1 fields

        Examples:
            | TestCaseID         | Scenario                  | Expected               |
            | WithReportSteps_05 | alphabets in height field | Please enter a number. |
            | WithReportSteps_06 | alphabets in weight field | Please enter a number. |

    #-------------------------------------------------------------------------------------------------------------------
    @step2titleswithreport
    Scenario Outline: Verify presence of <Scenario> with report step 2
        When User clicks continue after entering values in step 1
        Then User should see "<Expected>" for "<Scenario>" in steps

        Examples:
            | TestCaseID         | Scenario          | Expected                                       |
            | WithReportSteps_07 | step 2 title      | Pick your pace: chill stroll or marathon magic |
            | WithReportSteps_08 | step 2 subheading | Select your preferred exercise intensity level |

    #-------------------------------------------------------------------------------------------------------------------
    @step1tostep2withreport
    Scenario Outline: Verify <Scenario> from step 1 to step 2 with report
        When User clicks continue after entering values in step 1
        Then User should see "<Expected>" for "<Scenario>" in step 2

        Examples:
            | TestCaseID         | Scenario                     | Expected                     |
            | WithReportSteps_09 | step progress is highlighted | Step 2 indicator highlighted |
            | WithReportSteps_10 | navigation of step           | Step 2 of 5                  |
            | WithReportSteps_11 | progress shows 2 of 5 steps  | Step 2 of 5                  |
            | WithReportSteps_12 | Back button visibility       | Back                         |

    #-------------------------------------------------------------------------------------------------------------------
    @step2options @WithReportSteps_13
    Scenario: Verify presence of intensity level options in step 2
        When User clicks continue after entering values in step 1
        Then User should see options:
            | Easy 🦋   |
            | Medium 💪 |
            | Hard 🔥   |


    #-------------------------------------------------------------------------------------------------------------------
    #Module 2:Onboarding Step 2 UI --> Step3 ----- Total 9 Scenarios
    #-------------------------------------------------------------------------------------------------------------------
    @step3titleswithreport
    Scenario Outline: Verify presence of <Scenario> with report step 3
        Given User is in step2 of onboarding with report
        When User clicks "<Option>" from step 2
        Then User should see "<Expected>" for "<Scenario>" in steps

        Examples:
            | TestCaseID         | Scenario          | Expected                               | Option  |
            | WithReportSteps_14 | step 3 title      | Your taste buds—what team are they on? | Easy 🦋 |
            | WithReportSteps_15 | step 3 subheading | Select your dietary preference         | Easy 🦋 |
    #-------------------------------------------------------------------------------------------------------------------

    @step2tostep3
    Scenario Outline: Verify <Scenario> from step 2 to step 3 with report
        Given User is in step2 of onboarding with report
        When User clicks "<Option>" from step 2
        Then User should see "<Expected>" for "<Scenario>" in step 3

        Examples:
            | TestCaseID         | Scenario                     | Expected                     | Option    |
            | WithReportSteps_16 | option selection in step 2   | Step 3 of 5                  | Medium 💪 |
            | WithReportSteps_17 | step progress is highlighted | Step 3 indicator highlighted | Easy 🦋   |
            | WithReportSteps_18 | navigation of step           | Step 3 of 5                  | Easy 🦋   |
            | WithReportSteps_19 | progress shows 3 of 5 steps  | Step 3 of 5                  | Easy 🦋   |
            | WithReportSteps_20 | Back button visibility       | Back                         | Easy 🦋   |

    #-------------------------------------------------------------------------------------------------------------------
    @step3options
    Scenario Outline: Verify presence of diet options in step 3 after selecting <Option> in step 2
        Given User is in step2 of onboarding with report
        When User clicks "<Option>" from step 2
        Then User should see options:
            | All-inclusive diet 🍴🍖🍎 |
            | Vegan 🥬🌱🌿              |
            | Vegetarian 🥗🍆🥕         |

        Examples:
            | TestCaseID         | Option  |
            | WithReportSteps_21 | Easy 🦋 |

    #-------------------------------------------------------------------------------------------------------------------

    @navbackstep2tostep1 @WithReportSteps_22
    Scenario: Verify navigation of back button in step 2 with report
        Given User is in step2 of onboarding with report
        When User clicks back button
        Then User should see "Step 1 of 5" for "navigation of back button" in step 2


    #-------------------------------------------------------------------------------------------------------------------
    #Module 3:Onboarding Step 3 UI --> Step 4 ----- Total 9 Scenarios
    #-------------------------------------------------------------------------------------------------------------------
    @step4titleswithreport
    Scenario Outline: Verify presence of <Scenario> with report step 4
        Given User is in step3 of onboarding with report
        When User clicks "<DietOption>" from step 3
        Then User should see "<Expected>" for "<Scenario>" in steps

        Examples:
            | TestCaseID         | Scenario          | Expected                                                                   | DietOption                |
            | WithReportSteps_23 | step 4 title      | What's your go-to food passport?                                           | All-inclusive diet 🍴🍖🍎 |
            | WithReportSteps_24 | step 4 subheading | To create a meal plan you'll enjoy, please select your preferred cuisines! | All-inclusive diet 🍴🍖🍎 |
    #-------------------------------------------------------------------------------------------------------------------

    @step3tostep4
    Scenario Outline: Verify <Scenario> from step 3 to step 4 with report
        Given User is in step3 of onboarding with report
        When User clicks "<DietOption>" from step 3
        Then User should see "<Expected>" for "<Scenario>" in step 4

        Examples:
            | TestCaseID         | Scenario                     | Expected                     | DietOption   |
            | WithReportSteps_25 | option selection in step 3   | Step 4 of 5                  | Vegan 🥬🌱🌿 |
            | WithReportSteps_26 | step progress is highlighted | Step 4 indicator highlighted | Vegan 🥬🌱🌿 |
            | WithReportSteps_27 | navigation of step           | Step 4 of 5                  | Vegan 🥬🌱🌿 |
            | WithReportSteps_28 | progress shows 4 of 5 steps  | Step 4 of 5                  | Vegan 🥬🌱🌿 |
            | WithReportSteps_29 | Back button visibility       | Back                         | Vegan 🥬🌱🌿 |

    #-------------------------------------------------------------------------------------------------------------------
    @step4options
    Scenario Outline: Verify presence of cuisine options in step 4 after <DietOption> in step 3
        Given User is in step3 of onboarding with report
        When User clicks "<DietOption>" from step 3
        Then User should see options:
            | Indian 🍛         |
            | American 🍔       |
            | Continental 🥖    |
            | Mediterranean 🥙  |
            | Asian 🍜          |
            | Middle Eastern 🥙 |
            | Mexican 🌮        |

        Examples:
            | TestCaseID         | DietOption                |
            | WithReportSteps_30 | All-inclusive diet 🍴🍖🍎 |

    #-------------------------------------------------------------------------------------------------------------------
    @navbackstep3tostep2 @WithReportSteps_31
    Scenario: Verify navigation of back button in step 3 with report
        Given User is in step3 of onboarding with report
        When User clicks back button
        Then User should see "Step 2 of 5" for "navigation of back button" in step 3


    #-------------------------------------------------------------------------------------------------------------------
    #Module 4:Onboarding Step 4 UI --> Step 5 ----- Total 11 Scenarios
    #-------------------------------------------------------------------------------------------------------------------

    @step5titleswithreport
    Scenario Outline: Verify presence of <Scenario> with report step 5
        Given User is in step4 of onboarding with report
        When User clicks "<CuisineOption>" from step 4
        Then User should see "<Expected>" for "<Scenario>" in steps

        Examples:
            | TestCaseID         | Scenario          | Expected               | CuisineOption |
            | WithReportSteps_32 | step 5 title      | Allergic to any foods? | Indian 🍛     |
            | WithReportSteps_33 | step 5 subheading | Select all that apply  | Indian 🍛     |
    #-------------------------------------------------------------------------------------------------------------------

    @step4tostep5
    Scenario Outline: Verify <Scenario> from step 4 to step 5 with report
        Given User is in step4 of onboarding with report
        When User clicks "<CuisineOption>" from step 4
        Then User should see "<Expected>" for "<Scenario>" in step 5

        Examples:
            | TestCaseID         | Scenario                     | Expected                     | CuisineOption |
            | WithReportSteps_34 | option selection in step 4   | Step 5 of 5                  | Indian 🍛     |
            | WithReportSteps_35 | step progress is highlighted | Step 5 indicator highlighted | Indian 🍛     |
            | WithReportSteps_36 | navigation of step           | Step 5 of 5                  | Indian 🍛     |
            | WithReportSteps_37 | progress shows 5 of 5 steps  | Step 5 of 5                  | Indian 🍛     |
            | WithReportSteps_38 | Back button visibility       | Back                         | Indian 🍛     |
            | WithReportSteps_39 | Submit button visibility     | Submit                       | Indian 🍛     |
            | WithReportSteps_40 | Checkbox for options         | Check box                    | Indian 🍛     |
    #-------------------------------------------------------------------------------------------------------------------

    @step5options
    Scenario Outline: Verify presence of allergy options in step 5 after <CuisineOption> in step 4
        Given User is in step4 of onboarding with report
        When User clicks "<CuisineOption>" from step 4
        Then User should see options:
            | Gluten 🥖🍞    |
            | Dairy 🐄🥛     |
            | Nuts 🌰🥜      |
            | Eggs 🍳🥚      |
            | Soy 🫘🥡       |
            | Shellfish 🐚🍤 |
            | Other 🍽️🥴    |
            | None           |

        Examples:
            | TestCaseID         | CuisineOption |
            | WithReportSteps_41 | Asian 🍜      |

    #-------------------------------------------------------------------------------------------------------------------
    @navbackstep4tostep3 @WithReportSteps_42
    Scenario: Verify navigation of back button in step 4 with report
        Given User is in step4 of onboarding with report
        When User clicks back button
        Then User should see "Step 3 of 5" for "navigation of back button" in step 4



    #-------------------------------------------------------------------------------------------------------------------
    #Module 5:Onboarding Step 5 UI ----- Total 3 Scenarios
    #-------------------------------------------------------------------------------------------------------------------

    @navbackstep5tostep4 @WithReportSteps_43
    Scenario: Verify navigation of back button in step 5 with report
        Given User is in step5 of onboarding with report
        When User clicks back button
        Then User should see "Step 4 of 5" for "navigation of back button" in step 5

    #-------------------------------------------------------------------------------------------------------------------
    @selectionstep5
    Scenario Outline: Verify <Scenario> selection in allergy from step 5
        Given User is in step5 of onboarding with report
        When User selects "<AllergyOption>" and clicks submit from step 5
        Then User should be navigated to free and premium details page

        Examples:
            | TestCaseID         | Scenario | AllergyOption                       |
            | WithReportSteps_44 | Single   | Gluten 🥖🍞, Dairy 🐄🥛,  Nuts 🌰🥜 |
            | WithReportSteps_45 | Multiple | Gluten 🥖🍞                         |



