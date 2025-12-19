@sweetBalance @DashboardPage @loginfree
Feature: Dashboard page validation for Registered Free account user

    Background:
        Given User is in Home Page
        When User clicks the Dashboard on the navigation bar

    @DashboardPage_01  @UIValidation
    Scenario Outline: Verify <Scenario> on Dashboard page
        Then User should see the "<text>" for "<Scenario>"

        Examples:
            | Scenario    | text                                                                                 |
            | WelcomeMesg | Welcome Back,                                                                        |
            | subtext     | Track your metrics, manage your diet, and stay healthy with our comprehensive tools. |

    @DashboardPage_02 @UIValidation
    Scenario: Verify action buttons visibility on Dashboard page
        Then User should see the following buttons on Dashboard page
            | Upgrade to Premium |
            | Save Changes       |

    @DashboardPage_03 @UIValidation
    Scenario: Verify Account Information header is present
        Then User should see the header "Account Information" with correct spelling

    @DashboardPage_04 @UIValidation
    Scenario Outline: Verify all fields under Account Information section are displayed
        Then User should see the "<fieldName>" field under Account Information section

        Examples:
            | fieldName              |
            | Age                    |
            | Weight(kg)             |
            | Cuisine Preferences    |
            | Food Allergies         |
            | Height(cm)             |
            | Exercise Routine Level |


    @DashboardPage_05 @FunctionalValidation
    Scenario: Verify Exercise Routine Level dropdown options
        Given User is in dashboard Page
        When User clicks the "Exercise Routine Level" dropdown
        Then User should see the dropdown options
            | Easy   |
            | Medium |
            | Hard   |

    @DashboardPage_06 @FunctionalValidation
    Scenario: Verify Cuisine Preferences dropdown options
        Given User is in dashboard Page
        When User clicks the "Cuisine Preferences" dropdown
        Then User should see the dropdown options
            | Indian         |
            | American       |
            | Continental    |
            | Mediterranean  |
            | Asian          |
            | Middle Eastern |
            | Mexican        |

    @DashboardPage_07 @FunctionalValidation
    Scenario: Verify Food Allergies dropdown options
        When User clicks the "Food Allergies" dropdown
        Then User should see the dropdown options
            | None      |
            | Dairy     |
            | Gluten    |
            | Shellfish |
            | Soy       |
            | Eggs      |
            | Nuts      |
            | Other     |

    @DashboardPage_08 @FunctionalValidation @negative
    Scenario Outline: Verify <Scenario> value is rejected in age field
        Given User is in dashboard Page
        When User edit "age" field with "<Scenario>"
        Then User should see an "age" field remain blank

        Examples:
            | TestCaseId | Scenario     |
            | TC_DP_01   | alphabet     |
            | TC_DP_02   | special char |
            | TC_DP_03   | negative     |

    @DashboardPage_09 @FunctionalValidation @negative
    Scenario Outline: Verify <Scenario> value is rejected in height field
        Given User is in dashboard Page
        When User edit "Height" field with "<Scenario>"
        Then User should see an "Height" field remain blank

        Examples:
            | TestCaseId | Scenario     |
            | TC_DP_04   | alphabet     |
            | TC_DP_05   | special char |
            | TC_DP_06   | negative     |

    @DashboardPage_10 @FunctionalValidation @negative
    Scenario Outline: Verify <Scenario> value is rejected in weight field
        When User edit "Weight" field with "<Scenario>"
        Then User should see an "Weight" field remain blank

        Examples:
            | TestCaseId | Scenario     |
            | TC_DP_07   | alphabet     |
            | TC_DP_08   | special char |
            | TC_DP_09   | negative     |

    @DashboardPage_11 @FunctionalValidation @positive
    Scenario Outline: Verify account details can be updated with <Scenario>
        When User clicks save button after editing field with <Scenario>
        Then User should see messages "Changes SavedYour profile has been updated successfully!"

        Examples:
            | TestCaseId | Scenario   |
            | TC_DP_10   | valid data |



