@sweetBalance @DashboardPagePremium @dp
Feature: Additional Dashboard page validation for Registered Premium account user

    Background: User is in Home Page after logged in
        Given User is in Home Page
        When User clicks the Dashboard on the navigation bar

    @DashboardPage_Premium_01 @UIValidation
    Scenario Outline: Verify premium user indicators on dashboard
        Then User should see "<element>" displayed

        Examples:
            | element              |
            | 👑 Premium Activated |
            | Manage Premium       |

    @DashboardPage_Premium_02 @FunctionalValidation
    Scenario: Verify Manage Premium button is clickable
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see the premium subscription dialog box

    @DashboardPage_Premium_03 @UIValidation
    Scenario Outline: Verify premium subscription dates are displayed
        Then User should see "<label>" with value in format "EEE, MMM dd, yyyy"

        Examples:
            | label       |
            | Start Date: |
            | End Date:   |

    #-------------Emotional wellbeing section validation--------
    @DashboardPage_Premium_04 @UIValidation
    Scenario: Verify Emotional Wellbeing section title
        Given User is in dashboard Page
        When User scrolls to the middle of the Dashboard page
        Then User should see the title "😊 Emotional Wellbeing" in dashboard page

    @DashboardPage_Premium_05 @UIValidation
    Scenario Outline: Verify Emotional Wellbeing UI elements
        Given User is in dashboard Page
        When User scrolls to the middle of the Dashboard page
        Then User should see "<element>" in Emotional Wellbeing section

        Examples:
            | element                           |
            | How are you feeling today?        |
            | Notes on your mood                |
            | What's affecting your mood today? |
            | Energy level slider               |
            | Log emotional state button        |

    @DashboardPage_Premium_06 @UIValidation
    Scenario: Verify mood emojis are displayed
        Given User is in dashboard Page
        When User scrolls to the middle of the Dashboard page
        Then User should see the following mood emojis "😄😊😐😔😠😰"

    @DashboardPage_Premium_07 @UIValidation
    Scenario: Verify the text under energy slider
        Then User should see Energy level slider with labels "low" and "high"

    @DashboardPage_Premium_08 @FunctionalValidation
    Scenario: Verify user can enter <Scenario> on mood
        Given User is in dashboard Page
        When User enters text in notes on your mood field
        Then User should see the entered value in the input field
        Examples:
            | testCaseId | Scenario |
            | TC_PD_01   | notes    |

    @DashboardPage_Premium_09 @FunctionalValidation
    Scenario Outline: Verify energy level slider changes value for <Scenario>
        Given User is in dashboard Page
        When User moves the energy level slider to "<Scenario>"
        Then User should see the energy value change accordingly for "<Scenario>"
        Examples:
            | testCaseId | Scenario     |
            | TC_PD_02   | moving left  |
            | TC_PD_03   | moving right |

    @DashboardPage_Premium_10 @FunctionalValidation
    Scenario: Verify emotional state for <Scenario> is logged successfully
        Given User is in dashboard Page
        When User clicks log emotional state after selecting a "<Scenario>" mood emoji
        Then User should see the message "Your emotional state has been recorded successfully."

        Examples:
            | testCaseId | Scenario |
            | TC_PD_04   | Happy    |
            | TC_PD_05   | Content  |
            | TC_PD_06   | Neutral  |
            | TC_PD_07   | Sad      |
            | TC_PD_08   | Angry    |
            | TC_PD_09   | Anxious  |

    #-----------Smart Insights section validation-------------------
    @DashboardPage_Premium_11 @UIValidation
    Scenario: Verify Smart Insights section on Premium dashboard
        Then User should see Smart Insights section with the following details:
            | Element |
            | Title   |
            | Label   |

    @DashboardPage_Premium_12 @UIValidation
    Scenario: Verify Smart Insights titles on Premium dashboard
        Then  User should see the following Smart Insights titles:
            | Target Achievement |
            | Pattern Detected   |
            | Suggestion         |

    @DashboardPage_Premium_13 @UIValidation
    Scenario: Verify Smart Insights titles content on Premium dashboard
        Then User should see the following "Content" under Smart Insights "Titles":
            | Titles             | Content                                                                                                                               |
            | Target Achievement | percentage of time the user was in the target range for the last 7 days with the percentage improvement compared to the previous week |
            | Pattern Detected   | percentage of glucose value spike with suggestion to improve                                                                          |
            | Suggestion         | suggestion of activity with the average expected glucose reduction from this activity                                                 |

    #  -------------Activity Tracking section validation -----------------------------
    @DashboardPage_Premium_14 @UIValidation
    Scenario Outline: Verify dashboard card is displayed with <CardTitle> title
        Then User should see the card titled "<CardTitle>"

        Examples:
            | CardTitle        |
            | Weekly Checks    |
            | Exercise Minutes |
            | Med Adherence    |
            | Carb Goals       |


    @DashboardPage_Premium_15 @UIValidation
    Scenario Outline: Verify dashboard card values for <Scenario> without any log entries
        Then User should see the card value for "<Scenario>"

        Examples:
            | Scenario         |
            | Weekly Checks    |
            | Exercise Minutes |
            | Med Adherence    |
            | Carb Goals       |

    #---------------------------premium dialog box validation-----------------------
    @DashboardPage_Premium_16 @UIValidation
    Scenario: Verify confirmation message displayed in Manage Premium dialog box
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see the confirmation message:
            """
            Are you sure you want to cancel your premium subscription? You'll continue to have access to premium features until the end of your current billing period.
            """

    @DashboardPage_Premium_17 @UIValidation
    Scenario: Verify loss of features title is displayed
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see the section title "What you'll lose:"

    @DashboardPage_Premium_18 @UIValidation
    Scenario: Verify loss of features content is displayed
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see the following loss of features
            | Features                                                |
            | • Personalized meal plans tailored to your health goals |
            | • Advanced analytics and blood sugar insights           |
            | • Specialized diabetes management plans                 |
            | •  Priority support and premium features                |

    @DashboardPage_Premium_19 @FunctionalValidation
    Scenario: Verify action buttons are displayed in dialog box
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see the following action buttons:
            | Buttons        |
            | Keep Premium   |
            | Cancel Premium |

    @DashboardPage_Premium_20 @FunctionalValidation
    Scenario: Verify Keep Premium button functionality
        Given User is in Manage premium dialog box
        When User clicks the "Keep Premium" button
        Then User should see success message "Your premium subscription will continue."


    @DashboardPage_Premium_21 @FunctionalValidation
    Scenario: Verify Cancel Premium button functionality
        Given User is in Manage premium dialog box
        When User clicks the "Cancel Premium" button
        Then User should see success message "Your premium subscription has been cancelled but will remain active until the end date."

    @DashboardPage_Premium_22 @FunctionalValidation
    Scenario: Verify X button closes the dialog box
        Given User is in Manage premium dialog box
        When User clicks the close icon
        Then User should see the Manage Premium dialog box closed

    @DashboardPage_Premium_23 @UIValidation
    Scenario Outline: Verify style and color of action buttons
        Given User is in dashboard Page
        When User clicks the "Manage Premium" button in dashboard page
        Then User should see "<button>" button with background color "<background>" and text color "<textColor>"

        Examples:
            | button         | background         | textColor          |
            | Keep Premium   | rgb(255, 255, 255) | rgb(2, 8, 23)      |
            | Cancel Premium | rgb(239, 68, 68)   | rgb(255, 255, 255) |









