// Generated from: featureFiles\PaymentSubscription\Payment.feature
import { test } from "../../../fixtures/Index_Fixture.js";

test.describe('Upgrade to Premium Subscription', () => {

  test.beforeEach('Background', async ({ Given, When }, testInfo) => { if (testInfo.error) return;
    await Given('User is on the subscription page'); 
    await When('User clicks the Upgrade to Premium button'); 
  });
  
  test('Verify error messages appear when attempting payment with empty card details', { tag: ['@sweetbalance', '@PremiumPayment', '@paymentAllEmpty', '@Payment_01'] }, async ({ When, Then }) => { 
    await When('User clicks the Pay "$9.99 USD" button without entering any card details'); 
    await Then('User should see validation messages for all required fields'); 
  });

  test('Verify User is not able to do payment with invalid card number', { tag: ['@sweetbalance', '@PremiumPayment', '@paymentInvalidCardNo', '@Payment_02'] }, async ({ When, Then }) => { 
    await When('User clicks the Pay "$9.99 USD" USD button with invalid card number'); 
    await Then('User should see an error message for invalid card number'); 
  });

  test('Verify User is not able to do payment with expired card', { tag: ['@sweetbalance', '@PremiumPayment', '@paymentExpiredCard', '@Payment_03'] }, async ({ When, Then }) => { 
    await When('User clicks the Pay "$9.99 USD" button with expired card'); 
    await Then('User should see an error message for expired card'); 
  });

  test('Verify User able to do payment with valid payment details', { tag: ['@sweetbalance', '@PremiumPayment', '@paymentValidPay', '@Payment_04'] }, async ({ When, Then }) => { 
    await When('User clicks the Pay "$9.99 USD" USD button with valid payment details'); 
    await Then('User should be redirected to the confirmation page'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('featureFiles\\PaymentSubscription\\Payment.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@sweetbalance","@PremiumPayment","@paymentAllEmpty","@Payment_01"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the subscription page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Upgrade to Premium button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When User clicks the Pay \"$9.99 USD\" button without entering any card details","stepMatchArguments":[{"group":{"start":20,"value":"\"$9.99 USD\"","children":[{"start":21,"value":"$9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then User should see validation messages for all required fields","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":18,"tags":["@sweetbalance","@PremiumPayment","@paymentInvalidCardNo","@Payment_02"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the subscription page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Upgrade to Premium button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User clicks the Pay \"$9.99 USD\" USD button with invalid card number","stepMatchArguments":[{"group":{"start":20,"value":"\"$9.99 USD\"","children":[{"start":21,"value":"$9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message for invalid card number","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":25,"tags":["@sweetbalance","@PremiumPayment","@paymentExpiredCard","@Payment_03"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the subscription page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Upgrade to Premium button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When User clicks the Pay \"$9.99 USD\" button with expired card","stepMatchArguments":[{"group":{"start":20,"value":"\"$9.99 USD\"","children":[{"start":21,"value":"$9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then User should see an error message for expired card","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":32,"tags":["@sweetbalance","@PremiumPayment","@paymentValidPay","@Payment_04"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given User is on the subscription page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When User clicks the Upgrade to Premium button","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When User clicks the Pay \"$9.99 USD\" USD button with valid payment details","stepMatchArguments":[{"group":{"start":20,"value":"\"$9.99 USD\"","children":[{"start":21,"value":"$9.99 USD","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then User should be redirected to the confirmation page","stepMatchArguments":[]}]},
]; // bdd-data-end