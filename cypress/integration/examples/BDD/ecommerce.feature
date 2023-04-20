Feature: END to END Ecomm validation

    application Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total prices
    Then select the country submit and verify thankyou message  

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
    Then validate the form behaviour
    And select the shop page

    