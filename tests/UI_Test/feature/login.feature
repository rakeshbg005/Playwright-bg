@login
Feature: Verify login

  @test1
  Scenario: Verify user is able to login with valid credentials
    Given I navigate to base url
    And click on my account
    And I enter E-mail address "rakesh.bg005@gmail.com"
    And I enter password "Test1234"
    And I click on submit button
    Then I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"

  @test2
  Scenario Outline: Scenario Outline name: Verify user is not able to login with valid credentials
    Given I navigate to base url
    And click on my account
    And I enter E-mail address "<E-mail address>"
    And I enter password "<password>"
    And I click on submit button
    Then I should Verify user is not able to login and url contains "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"

    Examples:
      | E-mail address | password |
      | xyz@sdjfhasd   | Test1234 |

  @test3
  Scenario: Verify fetching a list of products with specific limits and fields
    Given I have the endpoint "/products"
    When I send a GET request with parameters "limit=10&skip=10&select=title,price"
    Then the response status should be 200
    And the response should contain 10 products
