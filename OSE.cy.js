describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
       cy.visit("https://www.demoblaze.com/index.html")
       cy.get('.list-group >:nth-child(3)').click()
       cy.get('.col-lg-9 .row div.col-lg-4').should('have.length',6);
       cy.get('.col-lg-9 .row >:nth-child(1) .hrefch').click();
       cy.contains('a','Add to cart').click()
       cy.get('#cartur').click()
       cy.contains('button','Place Order').click()
       cy.get('#name').type('chaithhu')
       cy.get('#country').type('India')
       cy.get('#city').type('hyderabad')
       cy.get('#card').type('123456789098765')
       cy.get('#month').type('11')
       cy.get('#year').type('2030')
       cy.contains('button','Purchase').click()
       cy.get('.showSweetAlert h2').should('include.text','Thank you')
       cy.contains('button','OK').click();
    })
})