const locator = require('../locator/PromotionLocator');

class Promotion {
    
    async visit(path) {
        cy.viewport(1280, 720)
        cy.visit(path);
        return cy.url().should('eq', 'https://www.fairprice.com.sg/');
    }

    async gotoPromotion() {
        cy.get(locator.datatestid.promotion_tab).click().contains('Promotions');
        cy.get('[data-testid=tagAll]').click().wait(2000);
    }

    async validateLabel() {
        cy.get(locator.datatestid.promotion_carousel).contains('PWP');
        cy.get(locator.datatestid.promotion_carousel).contains('Weekly Deals');
        cy.get(locator.datatestid.promotion_carousel).contains('Digital Club Exclusive');
    }

    async gotoPWP() {
        cy.get(locator.datatestid.pwp_tab).click().contains('PWP');
    }

    async validateLabelPWP() {
        cy.get(locator.datatestid.pwp_label)
            .each(() => {
                expect('PWP').to.eql('PWP');
        });
        cy.wait(2000);
        cy.screenshot('After Successfully Get PWP Label');
    }

    async validateLabelWeeklyDeals() {
        cy.get(locator.datatestid.pwp_label)
            .each(() => {
                expect('PWP').to.eql('Weekly Deals');
        });
        cy.wait(2000);
        cy.screenshot('After Failed Get Weekly Deals Label');
    }
}

module.exports = Promotion;