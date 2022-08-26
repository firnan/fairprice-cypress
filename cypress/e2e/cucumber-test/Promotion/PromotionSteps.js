import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Promotion = require('../../../support/pages/Promotion');
let promotion = new Promotion();

Given(/^I open FairPrice Web$/, () => {
    promotion.visit('/')
})

When(/^I click and verify Promotions Tab$/, () => {
    promotion.gotoPromotion();
})

And(`I validate label tags {string}, {string}, and {string}`, () => {
    promotion.validateLabel();
})

And(`I click {string} tag`, () => {
    promotion.gotoPWP();
})

Then(/^I validate tag labels of product is PWP$/, () => {
    promotion.validateLabelPWP();
})

