describe('google', function() 
 {
  beforeEach(()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false prevents Cypress from failing the test
      return false;
    });
  })
    it('first case',function() {
     cy.visit("https://www.lambdatest.com/selenium-playground/")
      cy.contains('Drag & Drop Sliders').click()
      //cy.visit("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo")
        cy.get('input[type="range"]').eq(2).as('t')
        cy.get('@t').invoke('val','95').trigger('change')
        cy.get('@t').invoke('val').then((v)=>{
          expect(v).to.be.equal('95')
        })
      })
      


 })
// describe('Drag & Drop Sliders', () => {
//     it('should drag the slider to 95', () => {
//      
//       cy.visit('https://www.lambdatest.com/selenium-playground');
//       cy.contains('Drag & Drop Sliders').click();
//       cy.get('input[type="range"]').eq(0).as('slider');
//       cy.get('@slider').invoke('val', 95).trigger('change');
//       cy.get('@slider').siblings('output').should('have.text', '95');
//     });
//   });
  