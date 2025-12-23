@sweetBalance @DashboardPage @loginfree @stressManagement
Feature: Validation of Stress Management Techniques section from dashboardfor Registered Free User

    Background:
        Given User is in Home Page
        When User clicks the Dashboard on the navigation bar

    @DashboardPage_12 @UIValidation
    Scenario: Verify Stress Management Techniques section header
        Given User is in dashboard Page
        When User scrolls to the Stress Management section
        Then User should see the title "🧘 Stress Management Techniques"

    @DashboardPage_13 @UIValidation
    Scenario: Verify Stress Management navigation tabs order
        Given User is in dashboard Page
        When User scrolls to the Stress Management section
        Then User should see the following tabs in order:
            | tabName     |
            | Meditation  |
            | Breathing   |
            | Movement    |
            | Mindfulness |

    @DashboardPage_14 @UIValidation
    Scenario Outline: Verify tab navigation displays corresponding section
        Given User is in dashboard Page
        When User clicks on "<tabName>" tab
        Then User should see the corresponding section displayed for "<tabName>"

        Examples:
            | tabName     |
            | Meditation  |
            | Breathing   |
            | Movement    |
            | Mindfulness |

    @DashboardPage_15 @UIValidation
    Scenario Outline: Verify Stress Management tabs title
        Given User is in stress management section
        When User clicks on "<tab>" tab
        Then User should see the title "<title>" in section

        Examples:
            | tab         | title                    |
            | Movement    | Gentle Movement          |
            | Mindfulness | Present Moment Awareness |

    @DashboardPage_16 @UIValidation
    Scenario Outline: Verify Stress Management tabs description
        Given User is in stress management section
        When User clicks on "<tab>" tab
        Then User should see the description "<description>"

        Examples:
            | tab         | description                                                                                                                                                                    |
            | Movement    | Simple stretches to release tension:• Neck rolls - 5 times each direction• Shoulder circles - 10 times• Wrist and ankle rotations• Gentle torso twists                         |
            | Mindfulness | Focus on your senses:• Notice 5 things you can see• Identify 4 things you can touch• Listen for 3 different sounds• Find 2 things you can smell• Observe 1 thing you can taste |

    @DashboardPage_17 @UIValidation
    Scenario: Verify Meditation tab title
        Given User is in stress management section
        When User clicks on "Meditation" tab
        Then User should see the content with title "Guided Meditation"

    @DashboardPage_18 @UIValidation
    Scenario: Verify duration buttons in Meditation tab
        Given User is in stress management section
        When User clicks on "Meditation" tab
        Then User should see buttons for the following durations:
            | duration |
            | 5 min    |
            | 10 min   |
            | 15 min   |

    @DashboardPage_19 @UIValidation
    Scenario: Verify progress bar and time indicators in Meditation tab
        Given User is in stress management section
        When User clicks on "Meditation" tab
        Then User should see a progress bar with time indicators "0:00" and "5:00" by default


    @DashboardPage_20 @UIValidation
    Scenario: Verify Benefits for Diabetes Management section
        Given User is in stress management section
        When User scrolls to the end of the Stress Management section
        Then User should see the following benefits for diabetes management:
            | benefit                   | explanation                                     |
            | Reduces Stress Hormones   | Lowers cortisol that can increase blood glucose |
            | Improves Sleep            | Better sleep leads to better glucose control    |
            | Reduces Diabetes Distress | Helps manage overwhelm from diabetes care       |


    @DashboardPage_21 @UIValidation
    Scenario Outline: Verify presence of <Scenario> in Breathing tab
        Given User is in stress management section
        When User clicks on "Breathing" tab
        Then User should see "<Expected>" in Breathing tab for "<Scenario>"

        Examples:
            | Scenario     | Expected                                      |
            | heading      | 4-7-8 Breathing Technique                     |
            | description  | A natural tranquilizer for the nervous system |
            | start button | Start Breathing Exercise button is visible    |


    @DashboardPage_22 @UIValidation
    Scenario Outline: Verify default counters in Breathing tab
        Given User is in stress management section
        When User clicks on "Breathing" tab
        Then User should see default "<type>" with value "<value>" in Breathing tab

        Examples:
            | type             | value |
            | Cycles completed | 0     |
            | current phase    | -     |

# @mockTime
# Scenario Outline: Verify breathing phases
#     When User has started the breathing exercise
#     Then User should see breathing phase "<phase>"

# Examples:
#     | phase   |
#     | Inhale  |
#     | Hold    |
#     | Exhale  |

#
#   Scenario: Verify breathing steps are displayed
#
#   When User clicks on "Breathing" tab
#   Then User should see the following breathing steps
#     | step                |
#     | Inhale 4 seconds    |
#     | Hold 7 seconds      |
#     | Exhale 8 seconds    |

#   Scenario: Verify start breathing exercise functionality
#  
#   When User clicks the "Start Breathing Exercise" button
#   Then Breathing cycles should begin

 
#   Scenario: Verify breathing cycle completion counter

#   Given User has completed one full breathing cycle
#   Then "Cycles completed" counter should increase by 1

#  
#   Scenario: Verify stop breathing exercise functionality
# 
#   When User clicks the "Stop" button during the breathing exercise
#   Then Breathing exercise should stop




