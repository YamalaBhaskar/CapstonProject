/// <reference types="cypress" />
describe("practice",()=>{
    it("url verfication",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get(".search-keyword").type('cu');
        cy.get(".product:has(img[alt='Cucumber - 1 Kg']) .increment  ").click();
        cy.get(".product:has(img[alt='Cucumber - 1 Kg']) button  ").click();
        cy.get(".product:has(img[alt='Capsicum']) .increment  ").click();
        cy.get(".product:has(img[alt='Capsicum']) button  ").click();
        //another method with out using loop 
        /*cy.get('.products').filter(":contains('Cucumber - 1 Kg')").then($ea  =>{
                cy.wrap($ea).contains('button','ADD TO CART').click();
        })*/
        var iq=cy.get('tr:contains("Items") strong')
        iq.then((item)  =>{
            expect(item).to.have.text(2);
        })
        cy.get('a.cart-icon img[alt="Cart"]').click();
        cy.get('div.cart-preview .action-block button[type="button"]').click();
    })
})