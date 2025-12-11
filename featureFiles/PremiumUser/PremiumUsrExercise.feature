@sweetbalance @PremiumUsrExercise
Feature: Verification of Premium user Exercise Module

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeScheduleBtn @PUsrExer_01
Scenario: Verify View Full Schedule button is displayed
  Given Premium user is on the homepage
  When Premium user clicks the Exercise option from the side panel
  Then View Full Schedule button is displayed on the right
	
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeScheduleNavi @PUsrExer_02
Scenario: Verify navigation to Today's Exercise Schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks the View Full Schedule button
  Then Premium user is redirected to Today's Exercise Schedule page
	
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeTab 
Scenario Outline: Verify <Tabname> tab is displayed in Exercise Section
  Given Premium user is on the homepage
  When Premium user clicks the Exercise option from the side panel
  Then Premium user should see "<Tabname>" tab is visible

Examples:
  | TestCaseID       | Tabname         | 
  | PremUsrExer_03   | Warm Up         |
  | PremUsrExer_04   | Main Workout    |
  | PremUsrExer_05   | Cool Down       |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeWarmUpField 
Scenario Outline: Verify <Field> is displayed under Warm Up tab
  Given Premium user is on the homepage
  When Premium user clicks the Exercise option from the side panel
  Then Premium user should see exercise info "<Field>" is displayed

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_06   | Exercise name             |
  | PremUsrExer_07   | Exercise Description      |
  | PremUsrExer_08   | Exercise Duration         |
  | PremUsrExer_09   | Exercise Calories         |
  | PremUsrExer_10   | Exercise Intensity level  |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrMainWorkOutField 
Scenario Outline: Verify <Field> is displayed under Main Workout tab
  Given Premium user is in the Exercise section
  When Premium user clicks the Main Workout tab
  Then Premium user should see exercise info "<Field>" is displayed 

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_11   | Exercise name             |
  | PremUsrExer_12   | Exercise Description      |
  | PremUsrExer_13   | Exercise Duration         |
  | PremUsrExer_14   | Exercise Calories         |
  | PremUsrExer_15   | Exercise Intensity level  |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrMainCoolDownField 
Scenario Outline: Verify <Field> is displayed under Cool Down tab
  Given Premium user is in the Exercise section
  When Premium user clicks the Cool Down tab
  Then Premium user should see exercise info "<Field>" is displayed

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_16   | Exercise name             |
  | PremUsrExer_17   | Exercise Description      |
  | PremUsrExer_18   | Exercise Duration         |
  | PremUsrExer_19   | Exercise Calories         |
  | PremUsrExer_20   | Exercise Intensity level  |

 # ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeMrkCompletedBtn @PremUsrExer_21
Scenario: Verify Mark As Completed button is displayed
  Given Premium user is on the homepage
  When Premium user clicks the Exercise option from the side panel
  Then Mark As Completed button is displayed

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

# @pUsrExeMrkCompSuccessMsg @PremUsrExer_22
# Scenario: Verify success dialog is shown after marking as completed
#   Given Premium user is in the Exercise section
#   When Premium user clicks the Mark As Completed button
#   Then Premium user should see Success dialog for Mark As Completed

# # ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

# @pUsrExeCompletedBtn @PremUsrExer_23
# Scenario: Verify button status changes to Completed from Mark As Completed
#   Given Premium user is in the Exercise section
#   When Premium user clicks the Mark As Completed button
#   Then Premium user should see Completed Button in Exercise section

# # ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

# @pUsrExeUndoOption @PremUsrExer_24
# Scenario: Verify undo option is displayed after marking completed
#   Given Premium user is in the Exercise section
#   When Premium user clicks the Mark As Completed button
#   Then Premium user should see Undo option is visible in Exercise section

# # ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

# @pUsrExeafterUndo @PremUsrExer_25
# Scenario: Verify reverts back to Mark As Completed button after undo action
#   Given Premium user is in the Exercise section
#   When Premium user click undo button after marking Exercise as completed
#   Then Mark As Completed button is displayed on clicking undo

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullScheduleNavi @PremUsrExer_26
Scenario: Verify navigation to View full exercise schedule
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should redirect to Exercise schedule

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullSchdTitle @PremUsrExer_27
Scenario: Verify todays exercise schedule page title is displayed
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see title Today's Exercise Schedule

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeBack2HomeBtn @PremUsrExer_28
Scenario: Verify Back to Home button is visible in todays exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see Back to Home button in Today's schedule page

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullsection 
Scenario Outline: Verify <SectionName> section in todays exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see "<SectionName>" section

Examples:
  | TestCaseID       | SectionName     | 
  | PremUsrExer_29   | Warm Up         |
  | PremUsrExer_30   | Main Workout    |
  | PremUsrExer_31   | Cool Down       |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullWarmUpField 
Scenario Outline: Verify <Field> under Warm Up in exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see "<Field>" is visible under Warm Up section

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_32   | Exercise name             |
  | PremUsrExer_33   | Exercise Description      |
  | PremUsrExer_34   | Exercise Duration         |
  | PremUsrExer_35   | Exercise Calories         |
  | PremUsrExer_36   | Exercise Intensity        |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullMainWorkoutField 
Scenario Outline: Verify <Field> under Main Workout in exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see "<Field>" is visible under Main Workout section

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_37   | Exercise name             |
  | PremUsrExer_38   | Exercise Description      |
  | PremUsrExer_39   | Exercise Duration         |
  | PremUsrExer_40   | Exercise Calories         |
  | PremUsrExer_41   | Exercise Intensity        |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullCoolDownField 
Scenario Outline: Verify <Field> under Cool Down in exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see "<Field>" is visible under Cool Down section

Examples:
  | TestCaseID       | Field                     | 
  | PremUsrExer_42   | Exercise name             |
  | PremUsrExer_43   | Exercise Description      |
  | PremUsrExer_44   | Exercise Duration         |
  | PremUsrExer_45   | Exercise Calories         |
  | PremUsrExer_46   | Exercise Intensity        |

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullIntensity @PremUsrExer_47
Scenario: Verify the intensity value in todays exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Exercise intensity should be low/medium/hard

#────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeFullDuration @PremUsrExer_48
Scenario: Verify total duration is displayed in todays exercise schedule page
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then Premium user should see total duration in exercise schedule page

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeTotalDuration @PremUsrExer_49
Scenario: Verify total duration matches the sum of individual workout durations
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then total duration should be equal the sum of all individual durations

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@pUsrExeTotalCal @PremUsrExer_50
Scenario: Verify total calories matches the sum of individual workout calories
  Given Premium user is in the Exercise section
  When Premium user clicks view full schedule
  Then total calories should be equal the sum of all individual calories

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

