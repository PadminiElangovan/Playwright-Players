@commonhome @loginfree
Feature: Home Page - Common Features for Registered User

  Background:
    Given User is logged into the app
    When User is on the Home page

  Scenario Outline: Validate header items
    Then User should see "<headerText>" text on the home page

    Examples:
      | headerText        |
      | SweetBalance      |
      | Logout            |

  Scenario: Verify user name in home page
    Then User should see username displayed on the home page

  Scenario: Verify top navigation bar is visible
    Then User should see top navigation bar

  Scenario Outline: Validate navigation tabs
    Then User should see navigation tab "<tab>"

    Examples:
      | tab       |
      | Home      |
      | Dashboard |
      | Education |

  Scenario Outline: Validate status labels
    Then User should see home text "<label>"

    Examples:
      | label               |
      | Current Status      |
      | Last updated        |
      | Latest HbA1C        |
      | BMI                 |
      | Average Blood Sugar |

  Scenario: Verify timestamp next to Last Updated
    Then User should see timestamp next to Last updated text

  @bug
  Scenario: Verify last updated timestamp is in 12-hour format
    Then User should see last updated timestamp in 12-hour format

  @bug
  Scenario: Verify 12-hour clock indicator is visible for last updated
    Then User should see last updated 12-hour clock indicator

  Scenario Outline: Validate metric values are visible
    Then User should see metric value "<metric>"

    Examples:
      | metric                  |
      | HbA1C                   |
      | BMI                     |
      | Average Blood Sugar     |

  Scenario Outline: Validate condition text for registered user
    Then User should see condition text "<condition>"

    Examples:
      | condition |
      | Obese     |
      | Diabetic  |

  Scenario: Verify unit for Average Blood Sugar
    Then User should see "mg/dL" unit below Average Blood Sugar

  Scenario: Verify Today's Meal Plan title
    Then User should see home text "Today's Meal Plan"

  Scenario Outline: Validate meal tabs
    Then User should see meal tab "<mealTab>"

    Examples:
      | mealTab    |
      | Breakfast  |
      | Lunch      |
      | Dinner     |
      | Snacks     |

  Scenario: Verify Breakfast tab is selected by default
    Then User should see Breakfast tab selected by default

  Scenario: Verify sidebar title in flex container
    Then User should see sidebar title in flex container

  Scenario Outline: Validate sidebar tabs
    Then User should see sidebar text "<sidebarTab>"

    Examples:
      | sidebarTab |
      | Meal Plan  |
      | Exercise   |

  Scenario: Verify utensil icon in Meal Plan tab
    Then User should see utensil icon

  Scenario: Verify dumbbell icon in Exercise tab
    Then User should see dumbbell icon

  Scenario: Verify View Full Plan button is visible
    Then User should see "View Full Plan" button

  Scenario Outline: Validate each meal section is clickable to show details
    When User clicks on meal section "<meal>"
    Then User should see meal details section

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate dish title per meal
    When User clicks on meal section "<meal>"
    Then User should see dish title

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate dish description per meal
    When User clicks on meal section "<meal>"
    Then User should see dish description

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate pre-meal item name per meal
    When User clicks on meal section "<meal>"
    Then User should see pre-meal item name

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate pre-meal calories per meal
    When User clicks on meal section "<meal>"
    Then User should see pre-meal calories

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate calories text appears after value per meal
    When User clicks on meal section "<meal>"
    Then User should see text "calories" after calorie value

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate pre-meal time format per meal
    When User clicks on meal section "<meal>"
    Then User should see time in "hh:mm" format

    Examples:
      | meal      |
      | Breakfast |
      | Lunch     |
      | Dinner    |
      | Snacks    |

  Scenario Outline: Validate pre-meal AM/PM indicator per meal
    When User clicks on meal section "<meal>"
    Then User should see indicator "<ampm>"

    Examples:
      | meal      | ampm |
      | Breakfast | AM   |
      | Lunch     | PM   |
      | Dinner    | PM   |
      | Snacks    | PM   |

  Scenario Outline: Validate pre-meal time per meal (valid)
    When User clicks on meal section "<meal>"
    Then User should see pre-meal time "<hour>" "<ampm>"

    Examples:
      | meal      | hour | ampm |
      | Breakfast | 7    | AM   |

  @bug
  Scenario Outline: Validate pre-meal time per meal (bug)
    When User clicks on meal section "<meal>"
    Then User should see pre-meal time "<hour>" "<ampm>"

    Examples:
      | meal      | hour | ampm |
      | Lunch     | 12   | PM   |
      | Dinner    | 7    | PM   |

  Scenario Outline: Validate Nutrition Insights color per macro
    When User clicks on meal section "<meal>"
    Then User should see "<macro>" color as "<color>"

    Examples:
      | meal      | macro    | color        |
      | Breakfast | Carbs    | green        |
      | Breakfast | Protein  | pink         |
      | Breakfast | Fat      | purple       |
      | Lunch     | Carbs    | green        |
      | Lunch     | Protein  | pink         |
      | Lunch     | Fat      | purple       |
      | Dinner    | Carbs    | green        |
      | Dinner    | Protein  | pink         |
      | Dinner    | Fat      | purple       |
      | Snacks    | Carbs    | green        |
      | Snacks    | Protein  | pink         |
      | Snacks    | Fat      | purple       |
