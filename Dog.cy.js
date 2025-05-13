/// <reference types="cypress"/>
describe("buying animals",()=>{
    it("dogs",()=>{
        cy.visit("https://jpetstore.aspectran.com/");
        cy.contains("a",'Dogs').click()
        cy.get("#Content #Catalog table tbody td").each(($s,index)=>{
            if($s.text()==="Labrador Retriever"){
                cy.wrap($s).prev().click()
                cy.contains('a','EST-23').click()
                cy.contains('a','Add to Cart').click()
                cy.contains('a','Proceed to Checkout').click()
                cy.contains('button','Login').click();
                cy.get('INPUT[TYPE="checkbox"]').click()
                cy.contains('button','Continue').click()
                cy.contains('button','Continue').click()
                cy.contains('button','Confirm').click()
                cy.get('#MessageBar p').should('contain.text', 'Thank you')
                cy.log("hello")
                cy.get('.button-bar > .button').click()
                cy.log(10+20)
               
            }
        })
    })
})