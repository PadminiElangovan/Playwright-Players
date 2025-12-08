@sweetbalance @diabeticRisk
Feature: Verification of Diabetes Risk Analyzer

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
@skiplaunch @riskanalyzerheader
Scenario Outline: Validate <Scenario> text in Diabetes Risk Analyzer
  Given User is on SweetBalance homepage
  When User clicks the Check Your Risk button
  Then User should see "<Text>" displayed in the Diabetes Risk Analyzer

Examples:
  | TestCaseID        | Scenario                           | Text                                                              |
  | DiabeticRisk_01   | Risk Analyzer dialog heading       | Diabetes Risk Analyzer                                            |
  | DiabeticRisk_02   | Risk Analyzer dialog sub heading   | Answer a few questions to assess your risk of developing diabetes |
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @riskFieldPresent
Scenario Outline: Verify presence of <Field> in Diabetes Risk Analyzer
  Given User is on SweetBalance homepage
  When User clicks the Check Your Risk button
  Then User should see "<Field>" in the Diabetes Risk Analyzer

Examples:
  | TestCaseID        | Field                         | 
  | DiabeticRisk_03   | Cancel button                 |
  | DiabeticRisk_04   | Calculate Risk button         |
  | DiabeticRisk_05   | Family history checkbox       |
  | DiabeticRisk_06   | Physical Activity dropdown    |
  | DiabeticRisk_07   | Blood Pressure dropdown       |
  | DiabeticRisk_08   | Diet Quality dropdown         |
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @riskPlaceValue
Scenario Outline: Verify <Field> placeholder text and default values
  Given User is on SweetBalance homepage
  When User clicks the Check Your Risk button
  Then User should see "<Expected>" in "<Field>" field of Diabetes Risk Analyzer

Examples:
  | TestCaseID        | Field                       | Expected                         |
  | DiabeticRisk_09   | Age                         | Enter your age (1-150)           |
  | DiabeticRisk_10   | Weight                      | Enter your weight in kg (1-500)  |
  | DiabeticRisk_11   | Physical Activity           | Select activity level            |
  | DiabeticRisk_12   | Blood Pressure              | Select blood pressure status     |
  | DiabeticRisk_13   | Diet Quality                | Select diet quality              |
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────


@skiplaunch @riskOptionValue
Scenario Outline: Verify <Field> field and dropdown values
  Given User is on SweetBalance homepage
  When User clicks the Check Your Risk button
  Then User should see "<Field>" dropdown contain "<Expectedvalues>"
Examples:
  | TestCaseID        | Field                        | Expectedvalues                                                                                                                               |
  | DiabeticRisk_14   | Physical Activity            | Active (Exercise 3+ times a week), Moderate (Exercise 1-2 times a week), Sedentary (Rarely exercise)                                         |
  | DiabeticRisk_15   | Blood Pressure               | Normal, Elevated, High                                                                                                                       |
  | DiabeticRisk_16   | Diet Quality                 | Excellent (Balanced, mostly whole foods), Average (Mixed whole foods and processed foods), Poor (Mostly processed foods, high sugar)         |
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

# @skiplaunch @riskNumericStepper
# Scenario Outline: Verify numeric stepper controls for <Field>
#   Given User is on SweetBalance homepage
#   When User clicks the Check Your Risk button
#   Then User should see "<Field>" numeric stepper "<Control>" control

# Examples:
#   | TestCaseID        | Field   | Control      |
#   | DiabeticRisk_17   | Age     | increment    |
#   | DiabeticRisk_18   | Age     | decrement    |
#   | DiabeticRisk_19   | Weight  | updown arrow |
#   | DiabeticRisk_20   | Weight  | increment    |
#   | DiabeticRisk_21   | Weight  | decrement    |
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @riskbuttonDisabled
Scenario: Validate Calculate Risk is disabled 
  Given User is on SweetBalance homepage
  When User clicks the Check Your Risk button
  Then User should see Calculate Risk button disabled
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @cancelriskanalyzer
Scenario: Validate Cancel button navigation to home page
  Given User is in diabetes risk analyzer
  When User clicks the Cancel button
  Then User should be returned to the home page
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @riskbuttonEnabled
Scenario: Validate Calculate Risk is enabled 
  Given User is in diabetes risk analyzer
  When User enters values in all fields
  Then User should see Calculate Risk button enabled
# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@skiplaunch @assessmentrisk
Scenario: Validate assessment result dialog after valid form submission
  Given User is in diabetes risk analyzer
  When User clicks Calculate Risk button after entering valid values in all fields
  Then User should see "Your Diabetes Risk Assessment" dialog

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────