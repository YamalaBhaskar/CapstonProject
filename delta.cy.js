/// <reference types="cypress" />

describe('My Second Test Suite', function () {
    context('720p resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1280, 720)
        })
    it('My FirstTest case', function () {
        cy.visit("https://deltaintech.com/")
        cy.contains('a','About Us').click() 
        cy.get(".ot-heading >:nth-child(2)").eq(0).then((T)=>{
            expect(T.text()).to.include("FOR")
        })
    })
})
})