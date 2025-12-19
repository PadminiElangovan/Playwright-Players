@sweetBalance @PhysicalActivity  @premiumUserRecordData
Feature: Validating physical activity functionality in the premium user record data

    Background: User is in Home Page after logged in
        Given User is in Home Page
        When  User clicks physical activity

    @PhysicalActivity_01 @UIValidation
    Scenario Outline: Verify <Scenario> in physical activity form
        Then  User should see "<text>" "<Scenario>" in physical activity form

        Examples:
            | Scenario | text                       |
            | title    | Physical Activity          |
            | subtext  | Track your fitness journey |

    @PhysicalActivity_02 @UIValidation
    Scenario: Verify fields in the Physical Activity form
        Then User should see the following fields in Physical Activity

            | Field         |
            | Activity Type |
            | Duration      |
            | Date          |
            | Intensity     |

    @PhysicalActivity_03 @UIValidation
    Scenario: Verify the presence of dropdown for Activity Type
        Then User should see  dropdown for activity type

    @PhysicalActivity_04 @UIValidation
    Scenario: Verify dropdown options for Activity Type
        When User clicks activity type dropdown
        Then User should see the following options in Activity Type dropdown
            | Walking         |
            | Running         |
            | Cycling         |
            | Weight Training |
            | Yoga            |
            | HIIT            |
            | Other           |

    @PhysicalActivity_05 @UIValidation
    Scenario: Verify the presence input for Duration
        Then User should see input field for duration

    @PhysicalActivity_06 @UIValidation
    Scenario: Verify the placeholder text for Duration
        Then User should see "30" in placeholder field

    @PhysicalActivity_07 @UIValidation
    Scenario: Verify dropdown for duration options
        Then User should see drop down duration

    @PhysicalActivity_08 @UIValidation
    Scenario: Verify dropdown options for Duration unit
        When user clicks the duration dropdown
        Then User should see the following duration units
            | minutes |
            | hours   |

    @PhysicalActivity_09 @UIValidation
    Scenario: Verify the date picker option
        Then User should see date picker in physical activity

    @PhysicalActivity_10 @UIValidation
    Scenario: Verify intensity buttons
        Then User should see the following intensity options
            | Intensity |
            | light     |
            | moderate  |
            | vigorous  |

    @PhysicalActivity_11 @UIValidation
    Scenario: Verify the save activity button
        Then User should see save activity button in physical activity

    @PhysicalActivity_12 @FunctionalValidation @positive
    Scenario Outline: Verify user is able to save activity for <Scenario>

        Given User is on the Physical Activity screen
        When User clicks record save activity button after entering "<Scenario>"
        Then User should see "Your activity has been saved." in physical activity form

        Examples:
            | TestCaseId | Scenario                                 |
            | TC_PA_01   | walking with duration in minutes         |
            | TC_PA_02   | running with duration in minutes         |
            | TC_PA_03   | cycling with duration in minutes         |
            | TC_PA_04   | yoga with duration in minutes            |
            | TC_PA_05   | weight training with duration in minutes |
            | TC_PA_06   | walking with duration in hours           |
            | TC_PA_07   | running with duration in hours           |
            | TC_PA_08   | cycling with duration in hours           |
            | TC_PA_09   | yoga with duration in hours              |
            | TC_PA_10   | weight training with duration in hours   |
            | TC_PA_11   | HIIT with duration in minutes            |
            | TC_PA_12   | HIIT with duration in hours              |

    @PhysicalActivity_13 @FunctionalValidation @negative
    Scenario Outline: Verify user is unable to enter <Scenario> duration value

        Given User is on the Physical Activity screen
        When User enters an "<Scenario>" value in the duration text field
        Then User should see the field remain blank

        Examples:
            | TestCaseId | Scenario     |
            | TC_PA_13   | alphabetic   |
            | TC_PA_14   | special char |

    @PhysicalActivity_14 @FunctionalValidation
    Scenario: Verify date picker can be opened

        Given User is on the Physical Activity screen
        When User clicks the date picker
        Then User should see the date calendar

    @PhysicalActivity_15 @FunctionalValidation
    Scenario: Verify today's date is highlighted in the date picker

        Given User is on the Physical Activity screen
        When User clicks the date picker
        Then User should see today's date highlighted

    @PhysicalActivity_16 @FunctionalValidation
    Scenario: Verify the presence of previous button in the date picker

        Given User is on the Physical Activity screen
        When User clicks the date picker
        Then User should see the previous button in the date picker

    @PhysicalActivity_17 @FunctionalValidation
    Scenario: Verify the presence of next button in the date picker

        Given User is on the Physical Activity screen
        When User clicks the date picker
        Then User should see the next button in the date picker