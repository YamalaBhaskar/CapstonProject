describe('My First Test Suite', function() 
{
 
    it('Select product',function() {
        var URL = "https://rahulshettyacademy.com/seleniumPractise/#/";
        cy.visit(URL)
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
    })
})