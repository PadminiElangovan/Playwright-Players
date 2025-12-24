@sweet @withoutreport @skiplogin @ela
Feature: Onboarding scenarios without blood report Total 132 Scenarios

    Background: User successfully completed profile setup
        Given User is on complete profile form page
        When User clicks create account button after filling all values to set up background

    #-------------------------------------------------------------------------------------------------------------------
    #Module 1:Onboarding Step 1 UI validation ---- Total 6 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep01
    Scenario Outline: Verify presence of <Scenario> without report step 1
        When User clicks on step for onboarding button in upload blood report page
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                                             |
            | WithoutReport_01 | step 1 title      | So, Which sugar rebellion are we dealing with?       |
            | WithoutReport_02 | step 1 subheading | This will help us tailor your plan to your condition |

    #-------------------------------------------------------------------------------------------------------------------
    @tostep1withoutreport
    Scenario Outline: Verify <Scenario> in step 1 without report
        When User clicks on step for onboarding button in upload blood report page
        Then User should see "<Expected>" for "<Scenario>" in without report step 1

        Examples:
            | TestCaseID       | Scenario                          | Expected                     |
            | WithoutReport_03 | step progress is highlighted      | Step 1 indicator highlighted |
            | WithoutReport_04 | navigation of step for onboarding | Step 1 of 12                 |
            | WithoutReport_05 | progress shows 1 of 12 steps      | Step 1 of 12                 |
    #-------------------------------------------------------------------------------------------------------------------

    @step1optWithoutreport @WithoutReport_06
    Scenario: Verify presence of options in step 1 without report
        When User clicks on step for onboarding button in upload blood report page
        Then User should see options:
            | Type 2       |
            | I don't know |


    #-------------------------------------------------------------------------------------------------------------------
    #Module 2:Functional scenarios for Step 1 and non functional scenarios for Step 2 ---- Total 9 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep2
    Scenario Outline: Verify presence of <Scenario> without report step 2
        Given User is in step1 of onboarding without report
        When User selects "<Condition>" in step 1 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                            | Condition |
            | WithoutReport_07 | step 2 title      | Which fabulous label fits you best? | Type 2    |
            | WithoutReport_08 | step 2 subheading | Choose your gender                  | Type 2    |

    #-------------------------------------------------------------------------------------------------------------------
    @tostep2withoutreport
    Scenario Outline: Verify <Scenario> in step 2 without report
        Given User is in step1 of onboarding without report
        When User selects "<Condition>" in step 1 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 2

        Examples:
            | TestCaseID       | Scenario                     | Expected                     | Condition |
            | WithoutReport_09 | step progress is highlighted | Step 2 indicator highlighted | Type 2    |
            | WithoutReport_10 | progress shows 2 of 12 steps | Step 2 of 12                 | Type 2    |
            | WithoutReport_11 | option selection in step 1   | Step 2 of 12                 | Type 2    |
            | WithoutReport_12 | Back button visibility       | Back                         | Type 2    |

    #-------------------------------------------------------------------------------------------------------------------
    @msgafterselectionstep1
    Scenario Outline: Verify message after selecting <condition> in step 1
        Given User is in step1 of onboarding without report
        When User selects "<Condition>" in step 1 of onboarding without report
        Then User should see "<Expected>" message before navigating to step 2

        Examples:
            | TestCaseID       | Condition    | Expected                                             |
            | WithoutReport_14 | Type 2       | Sugar, we've got some sweet changes to make! 🍯      |
            | WithoutReport_15 | I don't know | No worries, we're here to figure it out together! 🔍 |

    #-------------------------------------------------------------------------------------------------------------------

    @step2optWithoutreport
    Scenario Outline: Verify presence of options in step 2 for <Condition> in step 1 without report
        Given User is in step1 of onboarding without report
        When User selects "<Condition>" in step 1 of onboarding without report
        Then User should see options:
            | Male 👨‍🦱   |
            | Female 👩‍🦰 |
            | Other ⚧️     |
        Examples:
            | TestCaseID       | Condition |
            | WithoutReport_16 | Type 2    |

    #-------------------------------------------------------------------------------------------------------------------
    #Module 3:Functional test for Onboarding Step 2 and non functional scenarios for Step 3 ---- Total 9 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep3
    Scenario Outline: Verify presence of <Scenario> step 3 without report
        Given User is in step2 of of onboarding without report
        When User selects "<Gender>" in step 2 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                       | Gender       |
            | WithoutReport_17 | step 3 title      | Age: own it, pick your number. | Female 👩‍🦰 |
            | WithoutReport_18 | step 3 subheading | Please select your age         | Female 👩‍🦰 |
    #-------------------------------------------------------------------------------------------------------------------

    @tostep3withoutreport
    Scenario Outline: Verify <Scenario> in step 3 without report
        Given User is in step2 of of onboarding without report
        When User selects "<Gender>" in step 2 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 3

        Examples:
            | TestCaseID       | Scenario                     | Expected                     | Gender       |
            | WithoutReport_19 | step progress is highlighted | Step 3 indicator highlighted | Female 👩‍🦰 |
            | WithoutReport_20 | progress shows 3 of 12 steps | Step 3 of 12                 | Female 👩‍🦰 |
            | WithoutReport_21 | option selection in step 2   | Step 3 of 12                 | Female 👩‍🦰 |
            | WithoutReport_22 | Back button visibility       | Back                         | Female 👩‍🦰 |

    #-------------------------------------------------------------------------------------------------------------------
    @step3optWithoutreport
    Scenario Outline: Verify presence of options in step 3 for <Gender> in step 2 without report
        Given User is in step2 of of onboarding without report
        When User selects "<Gender>" in step 2 of onboarding without report
        Then User should see options from "18 to 100" "years" in step 3
        Examples:
            | TestCaseID       | Gender       |
            | WithoutReport_23 | Female 👩‍🦰 |

    #-------------------------------------------------------------------------------------------------------------------

    @iframescrollablestep3
    Scenario Outline: Verify iframe is scrollable to see options in step 3 after selecting <Gender> in step 2
        Given User is in step2 of of onboarding without report
        When User selects "<Gender>" in step 2 of onboarding without report
        Then iframe options should have scroll option in step3

        Examples:
            | TestCaseID       | Gender       |
            | WithoutReport_24 | Female 👩‍🦰 |

    @navback2to1withoutreport @WithoutReport_25
    Scenario: Verify navigation of back button from step 2 to step 1 without report
        Given User is in step2 of of onboarding without report
        When User clicks back button
        Then User should see "Step 1 of 12" for "navigation of back button" in without report step 2

    #-------------------------------------------------------------------------------------------------------------------
    #Module 4:Functional test for Onboarding Step 3 and non functional scenarios for Step 4 ---- Total 15 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep4
    Scenario Outline: Verify presence of <Scenario> step 4 without report
        Given User is in step3 of of onboarding without report
        When User selects "<Age>" in step 3 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                         | Age      |
            | WithoutReport_26 | step 4 title      | How close are you to the clouds? | 20 years |
            | WithoutReport_27 | step 4 subheading | Please enter your height         | 70 years |

    #-------------------------------------------------------------------------------------------------------------------

    @tostep4withoutreport
    Scenario Outline: Verify <Scenario> in step 4 without report
        Given User is in step3 of of onboarding without report
        When User selects "<Age>" in step 3 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 4

        Examples:
            | TestCaseID       | Scenario                     | Expected                     | Gender       | Age      |
            | WithoutReport_28 | step progress is highlighted | Step 4 indicator highlighted | Female 👩‍🦰 | 20 years |
            | WithoutReport_29 | progress shows 4 of 12 steps | Step 4 of 12                 | Female 👩‍🦰 | 20 years |
            | WithoutReport_30 | option selection in step 3   | Step 4 of 12                 | Female 👩‍🦰 | 20 years |
            | WithoutReport_31 | Back button visibility       | Back                         | Female 👩‍🦰 | 20 years |


    #-------------------------------------------------------------------------------------------------------------------


    @step4tabswithoutreport
    Scenario Outline: Verify step 4 has <Scenario> without report
        Given User is in step3 of of onboarding without report
        When User selects "<Age>" in step 3 of onboarding without report
        Then User should see "<Expected>" for the "<Scenario>" in step 4 without report

        Examples:
            | TestCaseID       | Scenario                 | Expected      | Age      |
            | WithoutReport_32 | 2 tabs                   | 2             | 18 years |
            | WithoutReport_33 | Centimeters in 1st tab   | Centimeters   | 40 years |
            | WithoutReport_34 | Feet & Inches in 2nd tab | Feet & Inches | 80 years |

    #-------------------------------------------------------------------------------------------------------------------

    @msgafterselectionstep3
    Scenario Outline: Verify message after selecting age <Scenario> in step 3
        Given User is in step3 of of onboarding without report
        When User selects "<Age>" in step 3 of onboarding without report
        Then User should see "<Expected>" message before navigating to step 4

        Examples:
            | TestCaseID       | Scenario      | Expected                                               | Age      |
            | WithoutReport_35 | between 18-29 | Young and ready to conquer! 🚀                         | 23 years |
            | WithoutReport_36 | between 30-49 | In your prime and crushing it! 💫                      | 40 years |
            | WithoutReport_37 | above 50      | Age is just a number, and you're numbering it well! 🎯 | 70 years |

    #-------------------------------------------------------------------------------------------------------------------

    @step4optWithoutreport
    Scenario Outline: Verify presence of <Options> in step 4 for <Age> in step 3 without report
        Given User is in step3 of of onboarding without report
        When User selects "<Age>" in step 3 of onboarding without report
        Then User should see "<Options>" as "<Expected>" in step 4 without report


        Examples:
            | TestCaseID       | Options                          | Expected         | Age      |
            | WithoutReport_38 | Centimeter                       | 120cm to 220cm   | 23 years |
            | WithoutReport_39 | Inches after clicking inches tab | 4ft5in to 7ft3in | 23 years |


    #-------------------------------------------------------------------------------------------------------------------

    @navback3to2withoutreport @WithoutReport_40
    Scenario: Verify navigation of back button from step 3 to step 2  without report
        Given User is in step3 of of onboarding without report
        When User clicks back button
        Then User should see "Step 2 of 12" for "navigation of back button" in without report step 3


    #-------------------------------------------------------------------------------------------------------------------
    #Module 5:Functional test for Onboarding Step 4 and non functional scenarios for Step 5 ---- Total 18 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep5
    Scenario Outline: Verify presence of <Scenario> step 5 without report
        Given User is in step4 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 4 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario                 | Expected                                                                 | Tab           | Options |
            | WithoutReport_41 | step 5 title for cm      | How much awesome do you weigh?                                           | Centimeter    | 150 cm  |
            | WithoutReport_42 | step 5 subheading for cm | We will personalize your nutrition plan to guide you towards your goals! | Centimeter    | 150 cm  |
            | WithoutReport_43 | step 5 title for ft      | How much awesome do you weigh?                                           | Feet & Inches | 5ft5in  |
            | WithoutReport_44 | step 5 subheading for ft | We will personalize your nutrition plan to guide you towards your goals! | Feet & Inches | 5ft5in  |

    #-------------------------------------------------------------------------------------------------------------------

    @tostep5withoutreport
    Scenario Outline: Verify <Scenario> in step 5 without report
        Given User is in step4 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 4 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 5

        Examples:
            | TestCaseID       | Scenario                      | Expected                     | Tab           | Options |
            | WithoutReport_45 | step progress is highlighted  | Step 5 indicator highlighted | Centimeter    | 160 cm  |
            | WithoutReport_46 | progress shows 5 of 12 steps  | Step 5 of 12                 | Feet & Inches | 5ft5in  |
            | WithoutReport_47 | option selection in cm step 4 | Step 5 of 12                 | Centimeter    | 166 cm  |
            | WithoutReport_48 | option selection in ft step 4 | Step 5 of 12                 | Feet & Inches | 5ft5in  |
            | WithoutReport_49 | Back button visibility        | Back                         | Feet & Inches | 5ft5in  |

    #-------------------------------------------------------------------------------------------------------------------

    @step5tabswithoutreport
    Scenario Outline: Verify step 5 has <Scenario> without report
        Given User is in step4 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 4 of onboarding without report
        Then User should see "<Expected>" for the "<Scenario>" in step 4 without report

        Examples:
            | TestCaseID       | Scenario             | Expected  | Tab           | Options |
            | WithoutReport_50 | 2 tabs               | 2         | Feet & Inches | 5ft5in  |
            | WithoutReport_51 | Kilograms in 1st tab | Kilograms | Feet & Inches | 5ft5in  |
            | WithoutReport_52 | Pounds in 2nd tab    | Pounds    | Feet & Inches | 5ft5in  |

    #-------------------------------------------------------------------------------------------------------------------
    @msgafterselectionstep4
    Scenario Outline: Verify message after selecting height <Scenario> in step 4
        Given User is in step4 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 4 of onboarding without report
        Then User should see "<Expected>" message before navigating to step 4

        Examples:
            | TestCaseID       | Scenario           | Expected                                                                  | Tab        | Options |
            | WithoutReport_53 | above 180 cm       | How's the weather up there? (Sorry, we had to do it once) 🌤️             | Centimeter | 185 cm  |
            | WithoutReport_54 | below 159 cm       | Good things come in smaller packages! 📦                                  | Centimeter | 140 cm  |
            | WithoutReport_55 | between 160-179 cm | Right in the middle - you can reach shelves AND fit in airplane seats! ✈️ | Centimeter | 165 cm  |
    #-------------------------------------------------------------------------------------------------------------------

    @step5optWithoutreport
    Scenario Outline: Verify presence of options in step 5 <Unit> without report
        Given User is in step4 of of onboarding without report
        When User selects "<Tab>" and "<OptionsinStep4>" at step 4 of onboarding without report
        Then User should see options from "<Expected>" "<Unit>" in step 5
        Examples:
            | TestCaseID       | Expected  | Unit | Tab           | OptionsinStep4 |
            | WithoutReport_56 | 40 to 190 | kg   | Feet & Inches | 5ft5in         |
            | WithoutReport_57 | 90 to 550 | lbs  | Feet & Inches | 5ft5in         |

    #-------------------------------------------------------------------------------------------------------------------
    @navback4to3withoutreport @WithoutReport_58
    Scenario: Verify navigation of back button from step 4 to step  3 without report
        Given User is in step4 of of onboarding without report
        When User clicks back button
        Then User should see "Step 3 of 12" for "navigation of back button" in without report step 4

    #-------------------------------------------------------------------------------------------------------------------
    #Module 6:Functional test for Onboarding Step 5 and non functional scenarios for Step 6 ---- Total 11 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep6
    Scenario Outline: Verify presence of <Scenario> step 6 without report
        Given User is in step5 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 5 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                               | Tab       | Options |
            | WithoutReport_59 | step 6 title      | Your taste buds—what team are they on? | Kilograms | 70 kg   |
            | WithoutReport_60 | step 6 subheading | Select your dietary preference         | Pounds    | 92 lbs  |
    #-------------------------------------------------------------------------------------------------------------------

    @tostep6withoutreport
    Scenario Outline: Verify <Scenario> in step 6 without report
        Given User is in step5 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 5 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 6

        Examples:
            | TestCaseID       | Scenario                      | Expected                     | Tab       | Options |
            | WithoutReport_61 | step progress is highlighted  | Step 6 indicator highlighted | Kilograms | 75 kg   |
            | WithoutReport_62 | progress shows 6 of 12 steps  | Step 6 of 12                 | Kilograms | 75 kg   |
            | WithoutReport_63 | option selection in kg step 5 | Step 6 of 12                 | Kilograms | 75 kg   |
            | WithoutReport_64 | option selection in lb step 5 | Step 6 of 12                 | Pounds    | 100 lbs |
            | WithoutReport_65 | Back button visibility        | Back                         | Pounds    | 100 lbs |


    #-------------------------------------------------------------------------------------------------------------------
    @msgafterselectionstep5
    Scenario Outline: Verify message after selecting weight <Scenario> in step 4
        Given User is in step5 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 5 of onboarding without report
        Then User should see "<Expected>" message before navigating to step 6

        Examples:
            | TestCaseID       | Scenario           | Expected                                                                    | Tab       | Options |
            | WithoutReport_66 | less than 59 kg    | Light as a feather! But don't worry, our recipes will keep you grounded. 🪶 | Kilograms | 50 kg   |
            | WithoutReport_67 | between 60 -84 kg  | Perfectly balanced, as all things should be! ⚖️                             | Kilograms | 75 kg   |
            | WithoutReport_68 | greater than 85 kg | More of you to love! And more energy to power those workouts. 💪            | Kilograms | 100 kg  |


    #-------------------------------------------------------------------------------------------------------------------
    @step6optWithoutreport
    Scenario Outline: Verify presence of diet options in step 6 without report
        Given User is in step5 of of onboarding without report
        When User selects "<Tab>" and "<Options>" at step 5 of onboarding without report
        Then User should see options:
            | All-inclusive diet 🍴🍖🍎 |
            | Vegan 🥬🌱🌿              |
            | Vegetarian 🥗🍆🥕         |

        Examples:
            | TestCaseID         | Tab       | Options |
            | WithReportSteps_21 | Kilograms | 50 kg   |


    #-------------------------------------------------------------------------------------------------------------------
    @navback5to4withoutreport @WithoutReport_69
    Scenario: Verify navigation of back button from step 5 to step 4 without report
        Given User is in step5 of of onboarding without report
        When User clicks back button
        Then User should see "Step 4 of 12" for "navigation of back button" in without report step 5

    #-------------------------------------------------------------------------------------------------------------------
    #Module 7:Functional test for Onboarding Step 6 and non functional scenarios for Step 7 ---- Total 7 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep7
    Scenario Outline: Verify presence of <Scenario> step 7 without report
        Given User is in step6 of of onboarding without report
        When User selects "<DietOption>" in step 6 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                                                                   | DietOption   |
            | WithoutReport_70 | step 7 title      | What's your go-to food passport?                                           | Vegan 🥬🌱🌿 |
            | WithoutReport_71 | step 7 subheading | To create a meal plan you'll enjoy, please select your preferred cuisines! | Vegan 🥬🌱🌿 |

    #-------------------------------------------------------------------------------------------------------------------
    @tostep76withoutreport
    Scenario Outline: Verify <Scenario> in step 7 without report
        Given User is in step6 of of onboarding without report
        When User selects "<DietOption>" in step 6 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 7

        Examples:
            | TestCaseID       | Scenario                     | Expected                     | DietOption        |
            | WithoutReport_72 | step progress is highlighted | Step 7 indicator highlighted | Vegan 🥬🌱🌿      |
            | WithoutReport_73 | progress shows 7 of 12 steps | Step 7 of 12                 | Vegetarian 🥗🍆🥕 |
            | WithoutReport_74 | option selection in step 6   | Step 7 of 12                 | Vegetarian 🥗🍆🥕 |
            | WithoutReport_75 | Back button visibility       | Back                         | Vegetarian 🥗🍆🥕 |

    #-------------------------------------------------------------------------------------------------------------------

    @step7optWithoutreport
    Scenario Outline: Verify presence of cuisine options in step 7 without report
        Given User is in step6 of of onboarding without report
        When User selects "<DietOption>" in step 6 of onboarding without report
        Then User should see options:
            | Indian 🍛         |
            | American 🍔       |
            | Continental 🥖    |
            | Mediterranean 🥙  |
            | Asian 🍜          |
            | Middle Eastern 🥙 |
            | Mexican 🌮        |

        Examples:
            | TestCaseID         | DietOption   |
            | WithReportSteps_76 | Vegan 🥬🌱🌿 |

    #-------------------------------------------------------------------------------------------------------------------
    #Module 8:Functional test for Onboarding Step 7 and non functional scenarios for Step 8 ---- Total 7 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep8
    Scenario Outline: Verify presence of <Scenario> step 8 without report
        Given User is in step7 of of onboarding without report
        When User selects "<CuisineOption>" in step 7 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                                  | CuisineOption |
            | WithoutReport_77 | step 8 title      | Allergic to any foods?                    | Indian 🍛     |
            | WithoutReport_78 | step 8 subheading | Select yes if you have any food allergies | American 🍔   |

    #-------------------------------------------------------------------------------------------------------------------

    @tostep86withoutreport
    Scenario Outline: Verify <Scenario> in step 8 without report
        Given User is in step7 of of onboarding without report
        When User selects "<CuisineOption>" in step 7 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 8

        Examples:
            | TestCaseID       | Scenario                     | Expected                     | CuisineOption    |
            | WithoutReport_79 | step progress is highlighted | Step 8 indicator highlighted | Indian 🍛        |
            | WithoutReport_80 | progress shows 8 of 12 steps | Step 8 of 12                 | American 🍔      |
            | WithoutReport_81 | option selection in step 7   | Step 8 of 12                 | Continental 🥖   |
            | WithoutReport_82 | Back button visibility       | Back                         | Mediterranean 🥙 |

    #-------------------------------------------------------------------------------------------------------------------
    @step8optWithoutreport
    Scenario Outline: Verify presence of cuisine options in step 8 without report
        Given User is in step7 of of onboarding without report
        When User selects "<CuisineOption>" in step 7 of onboarding without report
        Then User should see options:
            | Yes ✅ |
            | No ❌  |

        Examples:
            | TestCaseID         | CuisineOption |
            | WithReportSteps_83 | Asian 🍜      |

    #-------------------------------------------------------------------------------------------------------------------
    #Module 9:Functional test for Onboarding Step 8 and non functional scenarios for Step 9 ---- Total 7 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep9
    Scenario Outline: Verify presence of <Scenario> step 9 when yes option is clicked without report
        Given User is in step8 of of onboarding without report
        When User selects "Yes ✅" in step 8 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                  |
            | WithoutReport_84 | step 9 title      | Tap foods your body hates |
            | WithoutReport_85 | step 9 subheading | Select all that apply     |
    #-------------------------------------------------------------------------------------------------------------------

    @tostep9withoutreport
    Scenario Outline: Verify <Scenario> in step 9 for yes option without report
        Given User is in step8 of of onboarding without report
        When User selects "Yes ✅" in step 8 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 9

        Examples:
            | TestCaseID       | Scenario                     | Expected                     |
            | WithoutReport_86 | step progress is highlighted | Step 9 indicator highlighted |
            | WithoutReport_87 | progress shows 9 of 12 steps | Step 9 of 12                 |
            | WithoutReport_88 | option selection in step 8   | Step 9 of 12                 |
            | WithoutReport_89 | Back button visibility       | Back                         |
    #-------------------------------------------------------------------------------------------------------------------

    @step9optWithoutreport @WithoutReport_90
    Scenario: Verify presence of allergy options in step 9 when clicked yes in step 8 without report
        Given User is in step8 of of onboarding without report
        When User selects "Yes ✅" in step 8 of onboarding without report
        Then User should see options:

            | Gluten 🥖🍞    |
            | Dairy 🐄🥛     |
            | Nuts 🌰🥜      |
            | Eggs 🍳🥚      |
            | Soy 🫘🥡       |
            | Shellfish 🐚🍤 |
            | Other 🍽️🥴    |
            | None           |

    #-------------------------------------------------------------------------------------------------------------------

    @tostep10withoutreport @WithoutReport_91
    Scenario: Verify user goes to step 10 when no option is clicked in step 8 without report
        Given User is in step8 of of onboarding without report
        When User selects "No ❌" in step 8 of onboarding without report
        Then User should see "Step 10 of 12 " for "progress shows 10 of 12 steps>" in without report step 9


    #-------------------------------------------------------------------------------------------------------------------
    #Module 10:Functional test for Onboarding Step 9 and non functional scenarios for Step 10 ---- Total 7 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep10
    Scenario Outline: Verify presence of <Scenario> step 10 without report
        Given User is in step9 of of onboarding without report
        When User selects "<AllergyOption>" and clicks "Continue" from step 9
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID       | Scenario          | Expected                                  | AllergyOption          |
            | WithoutReport_92 | step 9 title      | Any medical quirks worth mentioning?      | Gluten 🥖🍞            |
            | WithoutReport_93 | step 9 subheading | Do you have any other medical conditions? | Gluten 🥖🍞,Dairy 🐄🥛 |

    #-------------------------------------------------------------------------------------------------------------------


    @tostep10withoutreport
    Scenario Outline: Verify <Scenario> in step 10 without report
        Given User is in step9 of of onboarding without report
        When User selects "<AllergyOption>" and clicks "Continue" from step 9
        Then User should see "<Expected>" for "<Scenario>" in without report step 9

        Examples:
            | TestCaseID       | Scenario                      | Expected                      | AllergyOption |
            | WithoutReport_94 | step progress is highlighted  | Step 10 indicator highlighted | Gluten 🥖🍞   |
            | WithoutReport_95 | progress shows 10 of 12 steps | Step 10 of 12                 | Dairy 🐄🥛    |
            | WithoutReport_96 | option selection in step 9    | Step 10 of 12                 | Nuts 🌰🥜     |
            | WithoutReport_97 | Back button visibility        | Back                          | Eggs 🍳🥚     |

    #-------------------------------------------------------------------------------------------------------------------
    @step10optWithoutreport
    Scenario Outline: Verify presence of medical conditions in step 10 without report
        Given User is in step9 of of onboarding without report
        When User selects "<AllergyOption>" and clicks "Continue" from step 10
        Then User should see options:

            | High Blood Pressure              |
            | High Cholesterol                 |
            | Heart Disease                    |
            | PCOS (Polycystic Ovary Syndrome) |
            | Chronic kidney disease           |
            | Gastroesophageal reflux disease  |
            | Anemia                           |
            | Hypothyroidism                   |
            | Hyperthyroidism                  |
            | None of the above                |


        Examples:
            | TestCaseID         | AllergyOption           |
            | WithReportSteps_98 | Soy 🫘🥡,Shellfish 🐚🍤 |


    #-------------------------------------------------------------------------------------------------------------------
    #Module 11:Functional test for Onboarding Step 10 and non functional scenarios for Step 11 ---- Total 9 Scenario
    #-------------------------------------------------------------------------------------------------------------------
    @titleswithoutreportstep11
    Scenario Outline: Verify presence of <Scenario> step 11 without report
        Given User is in step10 of of onboarding without report
        When User selects "<MedicalCondition>" and clicks "Continue" from step 10
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID        | Scenario           | Expected                                        | MedicalCondition       |
            | WithoutReport_99  | step 10 title      | Pick your pace: chill stroll or marathon magic? | High Blood Pressure    |
            | WithoutReport_100 | step 10 subheading | Select your preferred exercise intensity level  | Anemia,Hyperthyroidism |


    #-------------------------------------------------------------------------------------------------------------------
    @tostep11withoutreport
    Scenario Outline: Verify <Scenario> in step 11 without report
        Given User is in step10 of of onboarding without report
        When User selects "<MedicalCondition>" and clicks "Continue" from step 10
        Then User should see "<Expected>" for "<Scenario>" in without report step 11

        Examples:
            | TestCaseID        | Scenario                      | Expected                      | MedicalCondition    |
            | WithoutReport_101 | step progress is highlighted  | Step 11 indicator highlighted | High Blood Pressure |
            | WithoutReport_102 | progress shows 11 of 12 steps | Step 11 of 12                 | None of the above   |
            | WithoutReport_103 | option selection in step 10   | Step 11 of 12                 | Anemia              |
            | WithoutReport_104 | Back button visibility        | Back                          | Hyperthyroidism     |


    #-------------------------------------------------------------------------------------------------------------------
    @chkboxselectionstep10
    Scenario Outline: Verify <Scenario> selection in step 10
        Given User is in step10 of of onboarding without report
        When User selects "<MedicalCondition>" from step 10
        Then User should see "<MedicalCondition>" selected in without report


        Examples:
            | TestCaseID        | Scenario          | MedicalCondition       |
            | WithoutReport_105 | single checkbox   | High Blood Pressure    |
            | WithoutReport_106 | multiple checkbox | Anemia,Hyperthyroidism |

    #-------------------------------------------------------------------------------------------------------------------
    @step11optWithoutreport
    Scenario Outline: Verify presence of intensity level options in step 11 without report
        Given User is in step10 of of onboarding without report
        When User selects "<MedicalCondition>" and clicks "Continue" from step 10
        Then User should see options:

            | Easy 🦋   |
            | Medium 💪 |
            | Hard 🔥   |

        Examples:
            | TestCaseID          | MedicalCondition |
            | WithReportSteps_107 | Anemia           |


    #-------------------------------------------------------------------------------------------------------------------
    #Module 12:Functional test for Onboarding Step 11 and non functional scenarios for Step 12 ---- Total 10 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @titleswithoutreportstep12
    Scenario Outline: Verify presence of <Scenario> step 12 without report
        Given User is in step11 of of onboarding without report
        When User selects "<IntensityLevel>" in step 11 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in step without report

        Examples:
            | TestCaseID        | Scenario      | Expected                                      | IntensityLevel |
            | WithoutReport_108 | step 10 title | Final Step- What’s your latest HbA1c number?! | Easy 🦋        |

    #-------------------------------------------------------------------------------------------------------------------

    @tostep12withoutreport
    Scenario Outline: Verify <Scenario> in step 12 without report
        Given User is in step11 of of onboarding without report
        When User selects "<IntensityLevel>" in step 11 of onboarding without report
        Then User should see "<Expected>" for "<Scenario>" in without report step 12

        Examples:
            | TestCaseID        | Scenario                      | Expected                      | IntensityLevel |
            | WithoutReport_109 | step progress is highlighted  | Step 12 indicator highlighted | Easy 🦋        |
            | WithoutReport_110 | progress shows 12 of 12 steps | Step 12 of 12                 | Easy 🦋        |
            | WithoutReport_111 | option selection in step 11   | Step 12 of 12                 | Hard 🔥        |
            | WithoutReport_112 | Back button visibility        | Back                          | Easy 🦋        |
            | WithoutReport_113 | Continue button visibility    | Continue                      | Easy 🦋        |
    #-------------------------------------------------------------------------------------------------------------------

    @step12inputfieldanddesc
    Scenario Outline: Verify presence of <Scenario> in step 12 without report
        Given User is in step11 of of onboarding without report
        When User selects "<IntensityLevel>" in step 11 of onboarding without report
        Then User should see expected "<Outcome>" for "<Scenario>" in without report step 12

        Examples:
            | TestCaseID        | Scenario                   | IntensityLevel | Outcome                              |
            | WithoutReport_114 | input field                | Easy 🦋        | input field is visible               |
            | WithoutReport_115 | placeholder in input field | Easy 🦋        | placeholder text                     |
            | WithoutReport_116 | text below input field     | Easy 🦋        | Please enter a value between 4.0 and |
            | WithoutReport_117 | description text           | Hard 🔥        | What is HbA1c?HbA1c measures         |

    #-------------------------------------------------------------------------------------------------------------------
    #Module 13:Functional test for Onboarding Step 12 and personalised screen  ---- Total 15 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @step12textfield
    Scenario Outline: Verify HbA1c text field does not accept value with <Scenario> step 12 without report
        Given User is in step12 of of onboarding without report
        When User enters "<Scenario>" HbA1c vlaue in step 12
        Then User should see the input field "<Expected>" in step 12

        Examples:
            | TestCaseID        | Scenario          | Expected              |
            | WithoutReport_118 | character         | does not accept value |
            | WithoutReport_119 | special character | does not accept value |
            | WithoutReport_120 | below range       | does not accept value |
            | WithoutReport_121 | above range       | does not accept value |
            | WithoutReport_122 | valid             | accepts value         |

    #-------------------------------------------------------------------------------------------------------------------


    @step12hba1cinpfieldfn
    Scenario Outline: Verify HbA1c text field behavior with <Scenario> step 12 without report
        Given User is in step12 of of onboarding without report
        When User enters "<Scenario>" HbA1c vlaue and clicks "Continue" in step 12
        Then User should see the input field "<Expected>" in step 12

        Examples:
            | TestCaseID        | Scenario      | Expected             |
            | WithoutReport_123 | empty         | throws error message |
            | WithoutReport_124 | character     | throws error message |
            | WithoutReport_125 | below range   | throws error message |
            | WithoutReport_126 | above range   | throws error message |
            | WithoutReport_127 | special chars | throws error message |
            | WithoutReport_128 | valid         | success message      |
    #-------------------------------------------------------------------------------------------------------------------


    @personalscr
    Scenario Outline: Verify <Scenario> after clicking continue in step 12
        Given User is in step12 of of onboarding without report
        When User enters "valid" HbA1c vlaue and clicks "Continue" in step 12
        Then User should see "<Expected>" for "<Scenario>" after step 12

        Examples:
            | TestCaseID        | Scenario                       | Expected                                              |
            | WithoutReport_129 | personalization screen appears | loading indicator                                     |
            | WithoutReport_130 | loading indicator title        | Getting you all set—like a VIP pass to better health! |
            | WithoutReport_131 | loading indicator subtext      | Just a moment while we personalize your experience    |

    #-------------------------------------------------------------------------------------------------------------------


    @freeandpremiumpg @WithoutReport_132
    Scenario: Verify user navigated to free and premium details page from step 12
        Given User is in step12 of of onboarding without report
        When User enters "valid" HbA1c vlaue and clicks "Continue" in step 12
        Then User should be navigated to free and premium details page

