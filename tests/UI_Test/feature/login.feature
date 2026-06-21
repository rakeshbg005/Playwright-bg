@login @saucedemo
Feature: Sauce Demo Login Tests

  # ============ Sauce Demo Login Scenarios ============

  @test1 @smoke
  Scenario: Verify user is able to login with valid credentials
    Given I navigate to Sauce Demo application
    When I enter username "standard_user"
    And I enter password as "secret_sauce"
    And I click the Login button
    Then I should see the products page
    And I take a screenshot of the successful login

  # @test2 @smoke
  # Scenario: Verify user is able to login with performance glitch user
  #   Given I navigate to Sauce Demo application
  #   When I enter username "performance_glitch_user"
  #   And I enter password as "secret_sauce"
  #   And I click the Login button
  #   Then I should see the products page

  # @test3 @regression
  # Scenario: Verify user cannot login with invalid username
  #   Given I navigate to Sauce Demo application
  #   When I enter username "invalid_user"
  #   And I enter password as "secret_sauce"
  #   And I click the Login button
  #   Then I should see an error message

  # @test4 @regression
  # Scenario: Verify user cannot login with invalid password
  #   Given I navigate to Sauce Demo application
  #   When I enter username "standard_user"
  #   And I enter password as "wrong_password"
  #   And I click the Login button
  #   Then I should see an error message

  # @test5 @regression
  # Scenario: Verify login form is displayed on page load
  #   Given I navigate to Sauce Demo application
  #   Then I should see the login form

  # @test6 @regression
  # Scenario Outline: Verify user cannot login with various invalid credentials
  #   Given I navigate to Sauce Demo application
  #   When I enter username "<username>"
  #   And I enter password as "<password>"
  #   And I click the Login button
  #   Then I should see an error message

  #   Examples:
  #     | username             | password       |
  #     | locked_out_user      | secret_sauce   |
  #     | invalid_user         | invalid_pass   |
  #     | standard_user        | invalid_pass   |
  #     | problem_user         | wrong_password |
