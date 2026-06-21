// Generated from: tests\UI_Test\feature\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe('Sauce Demo Login Tests', () => {

  test('Verify user is able to login with valid credentials', { tag: ['@login', '@saucedemo', '@test1', '@smoke'] }, async ({ Given, When, Then, And, inventoryLandingPage, loginPage }) => { 
    await Given('I navigate to Sauce Demo application', null, { loginPage }); 
    await When('I enter username "standard_user"', null, { loginPage }); 
    await And('I enter password as "secret_sauce"', null, { loginPage }); 
    await And('I click the Login button', null, { loginPage }); 
    await Then('I should see the products page', null, { inventoryLandingPage, loginPage }); 
    await And('I take a screenshot of the successful login', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\feature\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"tags":["@login","@saucedemo","@test1","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I navigate to Sauce Demo application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I enter password as \"secret_sauce\"","stepMatchArguments":[{"group":{"start":20,"value":"\"secret_sauce\"","children":[{"start":21,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click the Login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then I should see the products page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And I take a screenshot of the successful login","stepMatchArguments":[]}]},
]; // bdd-data-end