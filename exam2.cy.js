describe('google', function () {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    })
    it('first case', function () {
        cy.visit("https://www.lambdatest.com/selenium-playground/")
        cy.contains('Drag & Drop Sliders').click()
        cy.get('.sp__range-success input')
        cy.get('output[id="rangeSuccess"]').invoke('val', 95).trigger('change')
        cy.wait(6000);
        cy.get('output[id="rangeSuccess"]').should('have.text', '95')
      })
    it('second case', function () {
        cy.visit('https://www.lambdatest.com/selenium-playground/input-form-demo');
        cy.viewport('samsung-note9');
        cy.get('#name').type('Bhaskar')
        cy.get('#inputEmail4').type('bhaskaryamala6@gmail.com')
        cy.get('#inputPassword4').type('Bh@sk@r6302')
        cy.get('#company').type('delta')
        cy.get('#websitename').type('deltaweklke')
        // cy.get('#seleniumform >:nth-child(3) select').type('i')
        cy.get('#seleniumform >:nth-child(3) select option').each(($a, index, $list) => {
            if ($a.text() === 'India') {
                cy.wrap($a).click({ force: true })
            }
        })
        cy.get('#inputCity').type('hyderabed')
        cy.get('#inputAddress1').type('Madhapur')
        cy.get('#inputAddress2').type('doctors colony')
        cy.get('#inputState').type('telengana')
        cy.get('#inputZip').type('500081')
        cy.contains('button', 'Submit').click()
        cy.get('.success-msg ').then((w) => {
            expect(w.text()).to.be.equal('Thanks for contacting us, we will get back to you shortly.')
        })
    })
})