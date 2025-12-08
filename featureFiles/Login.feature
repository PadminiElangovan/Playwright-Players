@sweet @login
Feature: Login Page Verification Total 31 scenarios


  #-------------------------------------------------------------------------------------------------------------------
  #Module 1:Login Page UI Verification -Total 12 Scenarios
  #-------------------------------------------------------------------------------------------------------------------
  @skiplaunch @uiLoginText
  Scenario Outline: Verify <Scenario> is displayed for login
    Given User is on SweetBalance homepage
    When User clicks on Login link
    Then User should see "<Text>" heading in home page

    Examples:
      | TestCaseID | Scenario                    | Text                                            |
      | Login_01   | login form header           | Welcome back                                    |
      | Login_02   | sub text of the header      | Sign in to your account or create a new one     |
      | Login_03   | Continue with Email button  | Continue with email                             |
      | Login_04   | Continue with Google button | Continue with Google                            |
      | Login_05   | OR separator                | OR                                              |
      | Login_06   | Terms and Privacy message   | By continuing you agree to our T&Cs and Privacy |

  @skiplaunch @uiverification
  Scenario Outline: Verify <Scenario> for login
    Given User is on SweetBalance homepage
    When User clicks on Login link
    Then User should see "<Scenario>" with "<Expected>" in home page

    Examples:
      | TestCaseID | Scenario                        | Expected                                 |
      | Login_07   | presence of close button        | close button at the right corner         |
      | Login_08   | email input field               | input field to enter email               |
      | Login_09   | placeholder text in email field | Enter email                              |
      | Login_10   | Continue with Email is visible  | Continue with email button is displayed  |
      | Login_11   | Continue with Email is enabled  | Continue with email button to be enabled |
      | Login_12   | Continue with Google is visible | Continue with Google button is displayed |


  #-------------------------------------------------------------------------------------------------------------------
  # #Module 2: Login page field and functional Validation - Total 7 Scenarios
  #-------------------------------------------------------------------------------------------------------------------
  @skiplogin @loginpg
  Scenario Outline: Verify <Scenario> for registered email

    Given User is on the login page
    When  User clicks continue with email button after entering email
    Then User should see "<Scenario>" with "<Expected>" for login

    Examples:
      | TestCaseID | Scenario                                  | Expected              |
      | Login_13   | email input accepts valid existing email  | password field        |
      | Login_14   | email input rejects invalid email format  | validation error      |
      | Login_15   | presence of signin button                 | Sign in button        |
      | Login_16   | sub text in login                         | email id  in sub text |
      | Login_17   | presence of forgot password link          | Forgot password link  |
      | Login_18   | presence of placeholder in password field | Enter your password   |


  @skiplogin @navtohomepg @Login_19
  Scenario: Password input accepts valid existing user
    Given User is on the login page
    When Registered user clicks sign in after entering password
    Then User should be navigated to home page

  #-------------------------------------------------------------------------------------------------------------------
  # Module 3: Complete Profile Form validation for new user - Total 6 Scenarios
  #-------------------------------------------------------------------------------------------------------------------
  @skiplogin @profileform
  Scenario Outline: Verify <Scenario> for new user email
    Given User is on the login page
    When  User clicks continue with email button after entering new email
    Then User should see "<Scenario>" with "<Expected>" for profile form

    Examples:
      | TestCaseID | Scenario                                    | Expected                    |
      | Login_20   | email input accepts valid new email         | Complete your profile form  |
      | Login_21   | Full Name field is visible                  | Full Name                   |
      | Login_22   | Username field is visible                   | Username                    |
      | Login_23   | Password field is visible                   | Password                    |
      | Login_24   | Terms & Conditions checkbox is visible      | Terms & Conditions checkbox |
      | Login_25   | Create Account button is disabled initially | Create Account is disabled  |

  #-------------------------------------------------------------------------------------------------------------------
  # Module 4: Profile form verification - Total 6 Scenarios
  #-------------------------------------------------------------------------------------------------------------------

  @skiplogin @navtohomepg @Login_26
  Scenario: Create Account button is enabled after valid input
    Given User is on complete profile form page
    When User checks the Terms & conditions box after filling all fields
    Then Create Account button should be enabled

  @skiplogin  @completeprofileform
  Scenario Outline: Verify <Scenario> in complete profile form
    Given User is on complete profile form page
    When User clicks create account button after filling all fields
    Then User should see "<Expected>" in complete profile form

    Examples:
      | TestCaseID | Scenario                                  | Expected               |
      | Login_27   | Create account form with invalid Fullname | fullname error message |
      | Login_28   | Create account form with invalid UserNmae | username error message |


  @skiplogin  @completeprofileformValid
  Scenario Outline: Verify <Scenario> in complete profile form valid
    Given User is on complete profile form page
    When User clicks create account button after filling all valid values
    Then User should see "<Expected>" in complete profile form

    Examples:
      | TestCaseID | Scenario                                   | Expected                       |
      | Login_29   | Create account form with valid data        | upload blood report            |
      | Login_30   | presence of Upload Blood Report button     | upload blood report            |
      | Login_31   | presence of Step Through Onboarding button | Step Through Onboarding button |






