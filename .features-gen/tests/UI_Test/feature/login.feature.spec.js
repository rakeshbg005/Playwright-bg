// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/api.fixtures.ts";

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

    test('Example #1', { tag: ['@login', '@test2'] }, async ({ Given, Then, And, loginPage }) => { 
      await Given('I navigate to base url', null, { loginPage }); 
      await And('click on my account', null, { loginPage }); 
      await And('I enter E-mail address "xyz@sdjfhasd"', null, { loginPage }); 
      await And('I enter password "Test1234"', null, { loginPage }); 
      await And('I click on submit button', null, { loginPage }); 
      await Then('I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"', null, { loginPage }); 
    });

  });

  test('Verify fetching a list of products with specific limits and fields', { tag: ['@login', '@test3'] }, async ({ Given, When, Then, And, apiState }) => { 
    await Given('I have the endpoint "/products"', null, { apiState }); 
    await When('I send a GET request with parameters "limit=10&skip=10&select=title,price"', null, { apiState }); 
    await Then('the response status should be 200', null, { apiState }); 
    await And('the response should contain 10 products', null, { apiState }); 
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
  {"pwTestLine":17,"pickleLine":24,"tags":["@login","@test2"],"steps":[{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given I navigate to base url","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"And click on my account","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And I enter E-mail address \"xyz@sdjfhasd\"","stepMatchArguments":[{"group":{"start":23,"value":"\"xyz@sdjfhasd\"","children":[{"start":24,"value":"xyz@sdjfhasd","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"And I click on submit button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then I should Verify user is not able to login and url contains \"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","stepMatchArguments":[{"group":{"start":59,"value":"\"https://ecommerce-playground.lambdatest.io/index.php?route=account/login\"","children":[{"start":60,"value":"https://ecommerce-playground.lambdatest.io/index.php?route=account/login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":27,"tags":["@login","@test3"],"steps":[{"pwStepLine":29,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I have the endpoint \"/products\"","stepMatchArguments":[{"group":{"start":20,"value":"\"/products\"","children":[{"start":21,"value":"/products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When I send a GET request with parameters \"limit=10&skip=10&select=title,price\"","stepMatchArguments":[{"group":{"start":37,"value":"\"limit=10&skip=10&select=title,price\"","children":[{"start":38,"value":"limit=10&skip=10&select=title,price","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the response status should be 200","stepMatchArguments":[{"group":{"start":30,"value":"200","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":32,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And the response should contain 10 products","stepMatchArguments":[{"group":{"start":28,"value":"10","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end