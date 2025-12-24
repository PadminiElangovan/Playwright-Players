@sweet @withreportmodal @skiplogin @ela
Feature: Onboarding scenarios with blood report - Modal Total 16 Scenarios

    Background: User successfully completed profile setup
        Given User is on complete profile form page
        When User clicks create account button after filling all values to set up background

    #-------------------------------------------------------------------------------------------------------------------
    #Module 1:Blood Report Upload Modal Navigation Total 1 Scenario
    #-------------------------------------------------------------------------------------------------------------------
    @navbloodreportmodal @WithReport_01
    Scenario: Verify navigation of blood report modal
        When User clicks on Upload Blood Report button
        Then User should navigate to blood report modal

    #-------------------------------------------------------------------------------------------------------------------
    #Module 2:Blood Report Upload Modal Total 10 Scenario
    #-------------------------------------------------------------------------------------------------------------------

    @uploadbox @WithReport_02
    Scenario: Verify upload box supports drag & drop
        Given User is on blood report modal
        When User hovers over the upload box
        Then Upload box should show drag & drop interaction

    @pdfupload
    Scenario Outline: Verify <Scenario> in blood report upload modal
        Given User is on blood report modal
        When user uploads "<Valid/Invalid>" file
        Then User should see "<Expected>" outcome

        Examples:
            | TestCaseID    | Scenario                   | Valid/Invalid              | Expected                     |
            | WithReport_03 | supported file types (PDF) | Invalid file Text or Excel | Only PDF files are supported |
            | WithReport_04 | file size limit (10MB)     | Invalid pdf over 10mb      | File exceeds 10MB            |
            | WithReport_05 | valid PDF file upload      | Valid pdf file             | processing percentage bar    |

    @uploadandprocessbtnenabled @WithReport_06
    Scenario: Verify Upload & Process button is enabled after valid upload
        Given User is on blood report modal
        When user just uploads "Valid pdf file"
        Then User should see "enabled pload&Process button" outcome

    @uploadboxcancel @WithReport_07
    Scenario: Verify upload cancel button functionality
        Given User is on blood report modal
        When User clicks Cancel in upload blood report page
        Then User should see "modal closed and returned to previous screen" outcome

    @uploadmodalbehavior
    Scenario Outline: Verify <Scenario> after clicking Upload&Process button
        Given User is on blood report modal
        When user uploads "Valid pdf file" file
        Then User should see "<Expected>" after processing

        Examples:
            | TestCaseID    | Scenario                             | Expected                      |
            | WithReport_08 | Upload & Process processes the file  | Report analysis               |
            | WithReport_09 | onboarding button in report analysis | continue to onboarding button |

    @reportanalysisfield @WithReport_10
    Scenario: Upload report and verify all sections are visible
        Given User is on blood report modal
        When user uploads "Valid pdf file" file
        Then User should see the following sections:
            | Blood Test Results   |
            | Complete Blood Count |
            | Abnormal Values      |
            | Recommendations      |

    @reportanalysisMedicalfield @WithReport_10
    Scenario: Upload report and verify Medical Conditions section is visible
        Given User is on blood report modal
        When user uploads "Valid pdf file" file
        Then User should see "Medical Conditions" section

    #-------------------------------------------------------------------------------------------------------------------
    #Module 3:Onboarding Form Validation (Step 1 0f 5) Total 5 Scenarios
    #-------------------------------------------------------------------------------------------------------------------

    @formvalidationstep1
    Scenario Outline: Verify <Scenario> in report analysis
        Given User is on report analysis and uploads the file
        When User clicks Onboarding button
        Then User should see "<Expected>" for step for onboarding with Blood report for "<Scenario>"

        Examples:
            | TestCaseID    | Scenario                                   | Expected                                                              |
            | WithReport_11 | presence of text field                     | Enter your age,Enter height in cm (1-300), Enter weight in kg (1-500) |
            | WithReport_12 | presence of dropdown                       | dropdown option for Gender field                                      |
            | WithReport_13 | progress bar is visible                    | Progress Bar                                                          |
            | WithReport_14 | presence of continue button                | Continue button is visible                                            |
            | WithReport_15 | incomplete steps (2-5) are not highlighted | Steps 2 to 5 remain unhighlighted                                     |

