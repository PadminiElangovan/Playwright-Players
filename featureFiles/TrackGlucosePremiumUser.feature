@sweetBalance @TrackGlucose  @premiumUserRecordData 
Feature: Validating Track Glucose functionality in the premium user record data

 Background: User is in Home Page after logged in
  Given User is in Home Page
  When  User clicks Blood Glucose

 @TrackGlucose @UIValidation 
 Scenario Outline: Verify <Scenario> in blood glucose form
  Then  User should see "<text>" Heading for "<Scenario>"

   Examples:
      | Scenario    | text                          |
      | title       | Track Glucose                 |
      | subtext     | Keep your health in check     |
     
 @TrackGlucose @UIValidation 
 Scenario: Verify input field in blood glucose field
  Then  User should see text field for blood glucose
   
 @TrackGlucose @UIValidation 
 Scenario: Verify the placeholder input in blood glucose field 
  Then  User should see text "Enter blood glucose level" blood glucose
   
 @TrackGlucose @UIValidation 
 Scenario:  Verify the text in the input field
  Then  User should see "mg/dL" level unit next to blood glucose field
   
@TrackGlucose @UIValidation 
Scenario: Verify the presence of transition fields in track glucose
  Then User should see the following transition labels:
    | Transition |
    | Low        |
    | Normal     |
    | High       |

 @TrackGlucose @UIValidation 
 Scenario Outline: Verify colors for <Transition> levels
  Then User should see "<Color>" color for "<Transition>"

  Examples:
    | Transition | Color  |
    | Low        | rgb(220, 38, 38)|
    | Normal     | rgb(22, 163, 74)|
    | High       | rgb(217, 119, 6)|

@TrackGlucose @UIValidation 
Scenario: Verify the four buttons below Reading Type
  Then User should see the following buttons:
    | Button    |
    | Fasting   |
    | Pre-meal  |
    | Post-meal |
    | Bedtime   |
     
 @TrackGlucose @UIValidation 
 Scenario:  Verify the date picker option
  Then  User should see date picker 
   
 @TrackGlucose @UIValidation 
 Scenario: Verify the last reading details 
  Then User should see last reading details
   
 @TrackGlucose @UIValidation 
 Scenario: Verify the record reading button 
  Then  User should see record reading button

@TrackGlucose @FunctionalValidation 
 Scenario: Verify date picker opens on clicking date field
  Given User is on the Blood Glucose screen
  When User clicks on date field
  Then  User should see date picker opened

@TrackGlucose @FunctionalValidation 
Scenario: Verify today's date is highlighted in the date picker
  Given User is on the Blood Glucose screen
  When User clicks on date field
  Then User should see today's date highlighted

@TrackGlucose @FunctionalValidation 
Scenario: Verify previous button is present in the date picker
  Given User is on the Blood Glucose screen
  When User clicks on date field
  Then User should see the Previous button in date

@TrackGlucose @FunctionalValidation 
Scenario: Verify next button is present in the date picker
  Given User is on the Blood Glucose screen
  When User clicks on date field
  Then User should see the Next button in date
  

@TrackGlucose @FunctionalValidation 
Scenario Outline: Verify transition details for <Scenario> are highlighted
  Given User is on the Blood Glucose screen
  When User enters "<Scenario>" in blood glucose
  Then User should see transition details highlights

   Examples:
    | TestCaseId	   | Scenario     |
    | TC_BG_18	     | low value    |
    | TC_BG_19       | high value   |
    | TC_BG_20       | normal value |


@TrackGlucose @FunctionalValidation @positive 
Scenario Outline: Verify blood glucose <Scenario> with valid input
    Given User is on the Blood Glucose screen
    When User clicks record reading button after entering "<Scenario>" valid details
    Then User should see "Reading successfully recorded!"

  Examples:
    | TestCaseId	   | Scenario                |
    | TC_BG_01	     | Low fasting reading     |
    | TC_BG_02	     | Normal fasting reading  |
    | TC_BG_03	     | High fasting reading    |
    | TC_BG_04       | Low pre-meal reading    |
    | TC_BG_05       | Normal pre-meal reading |
    | TC_BG_06	     | High pre-meal reading   |
    | TC_BG_07       | Low post-meal reading   |
    | TC_BG_08	     | Normal post-meal reading|
    | TC_BG_09	     | High post-meal reading  |
    | TC_BG_10       | Low bedtime reading     |
    | TC_BG_11	     | Normal bedtime reading  |
    | TC_BG_12	     | High bedtime reading    |

  
@TrackGlucose @FunctionalValidation @negative 
Scenario Outline: Verify <Scenario> blood glucose input is rejected
    Given User is on the Blood Glucose screen
    When User enters "<Scenario>" in the blood glucose field
    Then User should see the blood glucose field remain blank
   
  Examples:
    | TestCaseId	   | Scenario                |
    | TC_BG_13	     | Negative                |
    | TC_BG_14	     | Zero                    |
    | TC_BG_15	     | alphabetic              |
    | TC_BG_16	     | special char input      |
    | TC_BG_17	     | decimal value           |
    


     
