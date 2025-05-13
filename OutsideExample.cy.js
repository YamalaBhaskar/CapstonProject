//// <reference types="cypress" />
// 
describe('My Second Test Suite', function () {
    it('My First Test case', function () {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
       //cy.get('inventory_list .inventory_item').should('have.length', 6)
        cy.get('.inventory_list .inventory_item').each(($el, index) => {
            const itemName = $el.find('.inventory_item_name').text()
            if (itemName === 'Sauce Labs Backpack') {
                cy.wrap($el).find('#add-to-cart-sauce-labs-backpack').click()
            } else if (itemName === 'Test.allTheThings() T-Shirt (Red)') {
                cy.wrap($el).find('button').contains('Add to cart').click()
            }
        })
        
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_button').eq(0).click()
        cy.get('#continue-shopping').click()
    })
})
