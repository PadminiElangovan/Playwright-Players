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