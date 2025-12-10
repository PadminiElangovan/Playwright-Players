@skiplogin @launch 
Feature: Launch Page Validations

Scenario: Validate the presence of App Name on the home page
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see app name on the top left

Scenario: Validate the presence of policy details
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see text "Our Terms of Service and Privacy Policy have recently been updated"

Scenario: Verify the homepage heading is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see the heading "Smart Diabetes Tracking Powered by AI"

Scenario: Verify the Start Today input button is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a "Start Today" input button

Scenario: Verify the diabetes management tools section is visible
  Given User launches the browser 
  When User enters the SweetBalance url
  Then User should see the text "Comprehensive Diabetes Management Tools"

Scenario: Verify the Health Tracking card is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a card with title "Health Tracking"

Scenario: Verify the Nutrition & Exercise card is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a card with title "Nutrition & Exercise"

Scenario: Verify the Smart Insights card is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a card with title "Smart Insights"

Scenario: Validate description in Health Tracking feature card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see the text "Monitor glucose levels, medication, and vital statistics"
  Then User should see the text "Easy logging of daily readings"
  Then User should see the text "Visualize trends over time"
  Then User should see the text "Set personalized targets"

Scenario: Validate description in Nutrition & Exercise card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see the text "Balance diet and physical activity for optimal control"
  Then User should see the text "Carb counting tools"
  Then User should see the text "Customized exercise plans"
  Then User should see the text "Meal suggestions based on readings"

Scenario: Validate description in Smart Insights card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see the text "Get personalized guidance based on your data"
  Then User should see the text "Pattern detection algorithms"
  Then User should see the text "Early warning notifications"
  Then User should see the text "Actionable recommendations"

Scenario: Validate icon in Health tracking feature card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see heart icon

Scenario: Validate icon in Nutrition & Exercise card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see activity inside square icon

Scenario: Validate icon in Smart Insights card
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see clock icon

Scenario: Verify testimonial from James D. is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a testimonial from user "James D."

Scenario: Verify testimonial from Maria L. is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a testimonial from user "Maria L."

Scenario: Verify testimonial from Robert T. is visible
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a testimonial from user "Robert T."

Scenario: Validate "Join our community of successful members" text is visible above testimonial section
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see "Join our community of successful members" text is visible above testimonial section

Scenario: Validate presence of 5 yellow stars above "Join our community of successful members" text
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see 5 yellow stars above "Join our community of successful members" text

Scenario: Validate star ratings for all testimonials
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see 5 stars for "James D."
  And User should see 5 stars for "Maria L."
  And User should see 5 stars for "Robert T."

Scenario: Validate presence of bottom section heading in home page
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a section with heading "Take control of your diabetes today"

Scenario: Validate the presence of button "Check your Risk"
  Given User launches the browser
  When User enters the SweetBalance url
  Then User should see a button labeled "Check Your Risk"

Scenario: Verify redirection from Start Today button
  Given User goes to the SweetBalance homepage
  When User click the "Start Today" button
  Then User should be redirected to the Login page

Scenario: Validate Login link visibility
  Given User goes to the SweetBalance homepage
  When User look at the top right corner
  Then User should see a link labeled "Login"

Scenario: Validate Login link redirection
  Given User goes to the SweetBalance homepage
  When User click on the "Login" link
  Then User should be redirected to the Login page

Scenario: Verify redirection from Check Your Risk button
  Given User goes to the SweetBalance homepage
  When User click on "Check Your Risk" button
  Then User should be redirected to the assessment modal dialog

Scenario: Homepage loads within acceptable time
  Given User is in browser
  When User enters the SweetBalance url
  Then Page should be fully loaded within 3 seconds

Scenario: Homepage is responsive
  Given User is in browser
  When User enters the SweetBalance url
  Then All elements are readable and accessible without horizontal scrolling

Scenario: Homepage maintains accessibility standards
  Given User is in browser
  When User enters the SweetBalance url
  Then All major sections are accessible with appropriate labels and alt texts



