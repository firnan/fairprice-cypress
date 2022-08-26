Feature: FairPrice Promotions

    I want to be able to open pwp product

@Home @TabPromotions @TC_HOME_001
Scenario: I want to be able to open pwp product
Given I open FairPrice Web
When I click and verify Promotions Tab
And I validate label tags "PWP", "Weekly Deals", and "Digital Club Exlusive"
And I click "PWP" tag
Then I validate tag labels of product is PWP

@Home @TabPromotionsNeg @TC_HOME_002
Scenario: I want to be able to open pwp product
Given I open FairPrice Website
When I click and verify Promotions Tab 2
And I validate label "PWP", "Weekly Deals", and "Digital Club Exlusive"
And I click "PWP" tag label
Then I validate tag labels of product is Weekly Deals