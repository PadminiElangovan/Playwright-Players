@sweet @withreport @skiplogin
Feature: Onboarding scenarios with blood report

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
    #Module 2:Blood Report Upload Modal
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
            | TestCaseID    | Scenario                      | Valid/Invalid              | Expected                         |
            | WithReport_03 | supported file types (PDF)    | Invalid file Text or Excel | Only PDF files are supported     |
            | WithReport_04 | file size limit (10MB)        | Invalid pdf over 10mb      | File exceeds 10MB                |
            | WithReport_05 | valid PDF file upload         | Valid pdf file             | processing percentage bar        |
           
