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