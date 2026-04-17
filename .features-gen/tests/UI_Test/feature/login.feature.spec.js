// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe('Verify login', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login', '@test1'] }, async ({ Given, Then, And, loginPage }) => { 
    await Given('I navigate to base url', null, { loginPage }); 
    await And('click on my account', null, { loginPage }); 
    await And('I enter E-mail address "rakesh.bg005@gmail.com"', null, { loginPage }); 
    await And('I enter password "Test1234"', null, { loginPage }); 
    await And('I click on submit button', null, { loginPage }); 
    await Then('I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"', null, { loginPage }); 
  });

  test.describe('Scenario Outline name: Verify user is not able to login with valid credentials', () => {

    test('Example #1', { tag: ['@login'] }, async ({ Given, Then, And, loginPage }) => { 
      await Given('I navigate to base url', null, { loginPage }); 
      await And('click on my account', null, { loginPage }); 
      await And('I enter E-mail address "xyz@sdjfhasd"', null, { loginPage }); 
      await And('I enter password "Test1234"', null, { loginPage }); 
      await And('I click on submit button', null, { loginPage }); 
      await Then('I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"', null, { loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@login","@test1"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to base url","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And click on my account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter E-mail address \"rakesh.bg005@gmail.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"rakesh.bg005@gmail.com\"","children":[{"start":24,"value":"rakesh.bg005@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And I click on submit button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should Verify user is not able to login and url contains \"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","children":[{"start":60,"value":"https://ecommerce-playground.lambdatest.io/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":17,"pickleLine":23,"tags":["@login"],"steps":[{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given I navigate to base url","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"And click on my account","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And I enter E-mail address \"xyz@sdjfhasd\"","stepMatchArguments":[{"group":{"start":23,"value":"\"xyz@sdjfhasd\"","children":[{"start":24,"value":"xyz@sdjfhasd","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should Verify user is not able to login and url contains \"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","children":[{"start":60,"value":"https://ecommerce-playground.lambdatest.io/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end