@sweetBalance @FoodIntake  @premiumUserRecordData
Feature: Food Intake Validation in the premium user record data

  Background: User is in Home Page after logged in
    Given User is in Home Page
    When  User clicks Food Intake

  @FoodIntake_01 @UIValidation
  Scenario Outline: Verify Food Intake title and subtext
    Then User should see "<Text>" for "<Scenario>" on the food intake form
    Examples:
      | Scenario | Text                                              |
      | Title    | Food Intake Tracker                               |
      | Subtext  | Track what you eat to manage your diabetes better |

  @FoodIntake_02 @UIValidation
  Scenario: Verify presence of four tabs in food intake
    Then User should see following meal tabs in food intake form
      | Tab       |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snack     |

  @FoodIntake_03 @UIValidation
  Scenario: Verify fields in Food Intake form
    Then User should see the following fields in the food intake form
      | Field        |
      | Food Name    |
      | Serving Size |
      | Calories     |
      | Date         |
      | Notes        |

  @FoodIntake_04 @UIValidation
  Scenario: Verify Food Name field placeholder
    Then  User should see "Food Name" field with placeholder "e.g., Grilled Chicken Salad"

  @FoodIntake_05 @UIValidation
  Scenario: Verify the presense of dropdown for serving size
    Then User should see Serving Size dropdown options in food intake form
      | Options         |
      | Small (1/2 cup) |
      | Medium (1 cup)  |
      | Large (2 cups)  |
      | Custom...       |

  @FoodIntake_06 @UIValidation
  Scenario: Verify Serving Size default value
    Then User should see  "Medium (1 cup)" as the default value in the Serving Size dropdown

  @FoodIntake_07 @UIValidation
  Scenario: Verify the presence calculator icon in calorie
    Then User should see calculator icon in calorie

  @FoodIntake_08 @UIValidation
  Scenario: Verify the placeholder text for calorie
    Then User should see "Calories" field with placeholder "e.g., 250"

  @FoodIntake_09 @UIValidation
  Scenario: Verify helper text below Calories field
    Then User should see helper text "Enter calories or click the calculator icon for automatic calculation." below calorie field

  @FoodIntake_10 @UIValidation
  Scenario:Verify the presence of placeholder in notes blocks
    Then User should see "Notes" field with placeholder "Add any additional information..."

  @FoodIntake_11 @UIValidation
  Scenario: Verify Date field default value
    Then User should see current date displayed in the date field

  @FoodIntake_12 @UIValidation
  Scenario: Verify Save Food Entry button
    Then User should see Save Food Entry button

  @FoodIntake_13 @FunctionalValidation @positive
  Scenario Outline: Verify user able to save food entry button with <Scenario>
    Given User is in food Intake form
    When User clicks save food entry button after entering "<Scenario>"
    Then User should see "Food Entry is recorded" in food intake form

    Examples:
      | TestCaseId | Scenario   |
      | TC_FI_01   | valid data |

  @FoodIntake_14 @FunctionalValidation @negative
  Scenario Outline: Verify user able to save food entry button with <Scenario> data
    Given User is in food Intake form
    When User clicks save food entry button after entering "<Scenario>"
    Then User should see alert with message "Failed to save food intake" in food intake form

    Examples:
      | TestCaseId | Scenario |
      | TC_FI_02   | invalid  |


  @FoodIntake_15  @FunctionalValidation
  Scenario: Verify custom field in serving size
    When User selects "custom" option in "Serving Size" dropdown
    Then User should see new input field added below the serving field

  @FoodIntake_16 @FunctionalValidation @negative
  Scenario Outline: Verify user error message for invalid value <Scenario> in food name
    When User enters invalid value "<Scenario>" in "Food Name"
    Then User should see error message "Please enter valid food name" under food name field
    Examples:
      | Scenario     |
      | numbers      |
      | special char |

  @FoodIntake_17  @FunctionalValidation
  Scenario Outline: Verify the presence of automatic calorie calculation in calorie field
    When User enters valid "<FoodName>" in "Food Name" field
    Then User should see "Calories" value for the food name calculated automatically

    Examples:
      | FoodName              |
      | Grilled Chicken Salad |
      | paneer Sandwich       |
      | Fruit Bowl            |

  @FoodIntake_18  @FunctionalValidation
  Scenario Outline: Verify helper text after automatic calorie calculation
    When User enters valid "<FoodName>" in "Food Name" field
    Then User should see helper text "Calories calculated automatically. You can edit if needed." below calorie field
    Examples:
      | FoodName        |
      | pizza           |
      | paneer Sandwich |
      | Fruit Bowl      |

  @FoodIntake_19  @FunctionalValidation
  Scenario: Verify user able to edit the calorie value after automatic calorie calculation
    When User edit calorie value after automatic calorie calculation
    Then User should see edited value in automatic calorie value

  @FoodIntake_20  @FunctionalValidation
  Scenario: Verify user able to save food entry with null value in food name
    When User clicks the Save Food Entry button after leaving the "Food Name" field empty
    Then User should see an error message indicating that the "Please fill out this field."

  @FoodIntake_21  @FunctionalValidation
  Scenario: Verify date picker opens on clicking date field
    Given User is on the Food Intake screen
    When User clicks on date field
    Then  User should see date picker opened

  @FoodIntake_22  @FunctionalValidation
  Scenario: Verify today's date is highlighted in the date picker
    Given User is on the Food Intake screen
    When User clicks on date field
    Then User should see today's date highlighted

  @FoodIntake_23 @FunctionalValidation
  Scenario: Verify previous button is present in the date picker
    Given User is on the Food Intake screen
    When User clicks on date field
    Then User should see the Previous button in date

  @FoodIntake_24  @FunctionalValidation
  Scenario: Verify next button is present in the date picker
    Given User is on the Food Intake screen
    When User clicks on date field
    Then User should see the Next button in date

  @FoodIntake_25  @FunctionalValidation 
  Scenario: Verify user receives error message for entering more than 250 words in notes
    When User clicks save food entry after more than 250 words in notes
    Then User should see error message in alert