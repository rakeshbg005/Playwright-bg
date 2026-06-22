@cart @saucedemo
Feature: Sauce Demo Shopping Cart Operations

  # ============ Cart Management Scenarios ============
  # added extra wait just for review and debugging purposes

  @test2 @smoke
  Scenario: Add and Remove Items from Cart
    # Setup: Navigate and Login
    Given I navigate to Sauce Demo application
    When I enter username "standard_user"
    And I enter password as "secret_sauce"s
    And I click the Login button
    Then I should see the products page

    # Add products to cart
    When I add "Sauce Labs Backpack" to the cart
    And I wait for 10 second(s)
    And I add "Sauce Labs Bike Light" to the cart
    And I wait for 10 second(s)

    # Navigate to cart and validate
    When I navigate to the shopping cart
    And I wait for 5 second(s)
    Then I should see the following products in the cart:
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
    And the cart should contain 2 products
    And I wait for 5 second(s)

    # Remove one product
    When I remove "Sauce Labs Bike Light" from the cart
    And I wait for 5 second(s)
    Then I should not see "Sauce Labs Bike Light" in the cart
    And the cart should contain 1 product
    And I wait for 5 second(s)
    And I should see the following products in the cart:
      | Sauce Labs Backpack |
    And I wait for 5 second(s)

    # Cleanup: Logout
    When I click the menu button
    And I wait for 5 second(s)
    And I click the logout option
