describe('My Second Test Suite', function() 
{
    it('My FirstTest case',function() {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyd')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
        const textVeg=$el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
        $el.find('button').click()
        }
        })
        cy.get('.cart-icon > img').click()
        //fixture
    })
})