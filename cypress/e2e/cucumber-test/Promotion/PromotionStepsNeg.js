import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Promotion = require('../../../support/pages/Promotion');
let promotion = new Promotion();

Given(/^I open FairPrice Website$/, () => {
    promotion.visit('/')
})

When(/^I click and verify Promotions Tab 2$/, () => {
    promotion.gotoPromotion();
})

And(`I validate label {string}, {string}, and {string}`, () => {
    promotion.validateLabel();
})

And(`I click {string} tag label`, () => {
    promotion.gotoPWP();
})

Then(/^I validate tag labels of product is Weekly Deals$/, () => {
    promotion.validateLabelWeeklyDeals();
})

