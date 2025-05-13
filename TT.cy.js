describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
        cy.wait(4000)
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();
        cy.get('.inventory_list .inventory_item').should('have.length','6')
        cy.get('.inventory_list .inventory_item').each(($d,index)=>{
            var T=$d.find('.inventory_item_name').text()
           if(T==='Sauce Labs Backpack'){            
                cy.wrap($d).get('#add-to-cart-sauce-labs-backpack').click()
           }
           else if(T==='Test.allTheThings() T-Shirt (Red)'){
                cy.wrap($d).find('button','Add to cart').click();
           }
        })
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_button').eq(0).click()
        cy.get('#continue-shopping').click()
        cy.get('.inventory_list .inventory_item').each(($d,index)=>{
            var T=$d.find('.inventory_item_name').text()
           if(T==='Sauce Labs Onesie'){
                cy.wrap($d).get('#add-to-cart-sauce-labs-backpack').click()
           }
        })
        cy.get('.shopping_cart_link').click();
        cy.get('#checkout').click()
        cy.get('#first-name').type('bhaskar')
        cy.get('#last-name').type('yamala')
        cy.get('#postal-code').type('12345')
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('.complete-header').should('contain','Thank you')
    })
})