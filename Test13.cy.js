describe('Amazon', function() 
{
    it('amazon',function() {
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-flyout-accountList").invoke('show');
        
        cy.contains("Sign in").click();
        cy.get('div #nav-search').invoke('hide').should('not.be.visible')
    })
})