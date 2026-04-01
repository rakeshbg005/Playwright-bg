@login
Feature: Verify login

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io"
    And click on my account
    And I enter E-mail address "rakesh.bg005@gmail.com"
    And I enter password "Test1234"
    And I click on submit button
    Then I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"

  Scenario Outline: Scenario Outline name: Verify user is not able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And click on my account
    And I enter E-mail address "<E-mail address>"
    And I enter password "<password>"
    And I click on submit button
    Then I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"

    Examples:
      | E-mail address | password |
      | xyz@sdjfhasd   | Test1234 |
