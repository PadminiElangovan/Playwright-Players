@sweetbalance @PremiumPayment
Feature: Upgrade to Premium Subscription

Background:
  Given User is on the subscription page
  When User clicks the Upgrade to Premium button

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@paymentAllEmpty @Payment_01
Scenario: Verify error messages appear when attempting payment with empty card details
  When User clicks the Pay "$9.99 USD" button without entering any card details
  Then User should see validation messages for all required fields

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@paymentInvalidCardNo @Payment_02
Scenario: Verify User is not able to do payment with invalid card number
  When User clicks the Pay "$9.99 USD" USD button with invalid card number
  Then User should see an error message for invalid card number

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@paymentExpiredCard @Payment_03
Scenario: Verify User is not able to do payment with expired card
  When User clicks the Pay "$9.99 USD" button with expired card
  Then User should see an error message for expired card

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

@paymentValidPay @Payment_04
Scenario: Verify User able to do payment with valid payment details
  When User clicks the Pay "$9.99 USD" USD button with valid payment details
  Then User should be redirected to the confirmation page

# ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
