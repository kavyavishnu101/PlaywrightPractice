Feature: Ecommerce validation

Scenario: Placing the order
Given the user is on the ecommerce website
When the user adds items to the cart and proceeds to checkout
Then the user should be able to complete the purchase