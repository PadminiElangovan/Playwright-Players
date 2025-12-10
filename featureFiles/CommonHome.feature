@commonhome @loginfree 
Feature: Home Page - Common Features for Registered User

  Background:
    Given User is logged into the app

  Scenario: Validate user header section
    When User is on the Home page
    Then User should see home text "SweetBalance"
    Then User should see home text "PlaywrightFreeUser"
    Then User should see home text "Logout"

  Scenario: Validate navigation tabs
    When User is on the Home page
    Then User should see navigation text "Home"
    Then User should see navigation text "Dashboard"
    Then User should see navigation text "Education"

  Scenario: Validate status and metric labels
    When User is on the Home page
    Then User should see home text "Current Status"
    Then User should see home text "Last updated"
    Then User should see timestamp next to the Last updated label
    Then User should see home text "Latest HbA1C"
    Then User should see home text "BMI"
    Then User should see home text "Average Blood Sugar"

  Scenario: Validate metric values
    When User is on the Home page
    Then User should see metric values for HbA1C, BMI, and Average Blood Sugar

  Scenario: Validate condition text and units
    When User is on the Home page
    Then User should see condition text "Diabetic"
    Then User should see condition text "Obese"
    Then User should see unit text "mg/dL"

  Scenario: Validate Today’s Meal Plan section
    When User is on the Home page
    Then User should see meal plan text "Today's Meal Plan"
    Then User should see meal tab "Breakfast"
    Then User should see meal tab "Lunch"
    Then User should see meal tab "Dinner"
    Then User should see meal tab "Snacks"
    Then User should see meal plan text "View Full Plan"

  Scenario: Validate Breakfast tab is selected by default
    When User is on the Home page
    Then User should see Breakfast tab selected by default

  Scenario: Validate sidebar labels
    When User is on the Home page
    Then User should see sidebar label "Meal Plan"
    Then User should see sidebar label "Exercise"
    Then User should see sidebar tab container within the flex layout

  Scenario: Validate sidebar icons
    When User is on the Home page
    Then User should see utensil icon in the Meal Plan tab
    Then User should see dumbbell icon in the Exercise tab

  Scenario: Validate Breakfast meal section is clickable
    When User is on the Home page
    When User clicks on the "Breakfast" meal section
    Then User should see meal details section

  Scenario: Validate Lunch meal section is clickable
    When User is on the Home page
    When User clicks on the "Lunch" meal section
    Then User should see meal details section

  Scenario: Validate Dinner meal section is clickable
    When User is on the Home page
    When User clicks on the "Dinner" meal section
    Then User should see meal details section

  Scenario: Validate Snacks meal section is clickable
    When User is on the Home page
    When User clicks on the "Snacks" meal section
    Then User should see meal details section


  Scenario: Validate Snacks pre-meal details
    When User is on the Home page
    When User clicks on the "Snacks" meal section
    Then User should see the dish title in the meal section
    Then User should see the description for the dish
    Then User should see the pre-meal item name
    Then User should see the pre-meal calorie value
    Then User should see text "calories" after the calorie value in pre-meal
    Then User should see time in "hh:mm" format in pre-meal
    Then User should see green color for Carbs
    Then User should see purple color for Fat
    Then User should see pink color for Protein
    Then User should see unit "g" for Carbs
    Then User should see unit "g" for Protein
    Then User should see unit "g" for Fat

  Scenario: Validate breakfast pre-meal item and calories
    When User clicks on the "Breakfast" meal section
    Then User should see the pre-meal item name
    Then User should see the pre-meal calorie value

  Scenario: Validate lunch pre-meal item and calories
    When User clicks on the "Lunch" meal section
    Then User should see the pre-meal item name
    Then User should see the pre-meal calorie value

  Scenario: Validate dinner pre-meal item and calories
    When User clicks on the "Dinner" meal section
    Then User should see the pre-meal item name
    Then User should see the pre-meal calorie value

  Scenario: Validate breakfast pre-meal indicator and time
    When User clicks on the "Breakfast" meal section
    Then User should see indicator "AM" for breakfast pre-meal
    Then User should see time in "hh:mm" format in pre-meal

  Scenario: Validate lunch pre-meal indicator and time
    When User clicks on the "Lunch" meal section
    Then User should see indicator "PM" for lunch pre-meal
    Then User should see time in "hh:mm" format in pre-meal

  Scenario: Validate dinner pre-meal indicator and time
    When User clicks on the "Dinner" meal section
    Then User should see indicator "PM" for dinner pre-meal
    Then User should see time in "hh:mm" format in pre-meal

  Scenario: Validate time in pre-breakfast
    When User clicks on the "Breakfast" meal section
    Then User should see 7 o'clock for Breakfast

  Scenario: Lunch time should be 12 o'clock
    When User clicks on the "Lunch" meal section
    Then User should see 12 o'clock for Lunch

  Scenario: Dinner time should be 7 o'clock
    When User clicks on the "Dinner" meal section
    Then User should see 7 o'clock for Dinner
