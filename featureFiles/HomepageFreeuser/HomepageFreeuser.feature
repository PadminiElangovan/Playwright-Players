@homepagefreeuser @loginfree
Feature: Home Page - Features only for Free User

  Background:
    Given User is logged into the app
    When User is on the Home page

  Scenario: Verify collapse caret toggle is visible for Today's Meal Plan
    Then User should see collapse caret toggle next to "Today's Meal Plan"

  Scenario Outline: Verify dot separator between time and calories in pre-meal row
    When User clicks on meal section "<meal>"
    Then User should see dot separator between time and calories

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario: Verify Free user is redirected to subscription when clicking View Full Plan
    When User clicks "View Full Plan"
    Then User should be redirected to subscription page

  Scenario: Verify Today's Exercise Plan title is visible
    When User clicks Exercise in sidebar
    Then User should see home text "Today's Exercise Plan"

  Scenario: Verify exercise list is visible
    When User clicks Exercise in sidebar
    Then User should see exercise list

  Scenario: Verify free user sees only 2 exercises
    When User clicks Exercise in sidebar
    Then User should see 2 exercises listed

  Scenario: Verify each exercise item shows scheduled time
    When User clicks Exercise in sidebar
    Then User should see scheduled time for each exercise

  Scenario Outline: Verify exercise schedule
    When User clicks Exercise in sidebar
    Then User should see "<label>" scheduled at "<time>"

    Examples:
      | label            | time |
      | Morning exercise | 7    |
      | Evening exercise | 5    |

  Scenario: Verify AM/PM indicator is visible for exercise time
    When User clicks Exercise in sidebar
    Then User should see AM/PM indicator for exercise time

  Scenario: Verify duration is visible for each exercise
    When User clicks Exercise in sidebar
    Then User should see duration for each exercise item

  Scenario: Verify duration format is in minutes
    When User clicks Exercise in sidebar
    Then User should see duration format in mins

  Scenario: Verify dot separator between duration and intensity
    When User clicks Exercise in sidebar
    Then User should see dot separator between duration and intensity

  Scenario: Verify intensity level is visible for each exercise
    When User clicks Exercise in sidebar
    Then User should see intensity level for each exercise

  Scenario: Verify View Full Schedule button is visible
    When User clicks Exercise in sidebar
    Then User should see "View Full Schedule" button

  Scenario: Verify navigation of View Full Schedule
    When User opens Exercise section and clicks "View Full Schedule"
    Then User should be redirected to subscription page
