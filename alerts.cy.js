/// <reference types="cypress" />
describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value="radio1"]').check()
        // cy.get('input[type="checkbox"]').check(['option1','option2'])
         cy.get('#checkbox-example input').check(['option1','option2'])
         cy.get('#dropdown-class-example').select('option1')
         cy.get('#autocomplete').type('Ind')
         cy.get('.ui-menu-item-wrapper').each(($e,index,$list)=>{
             var r=$e.text()
             if(r==='India'){
                cy.log("hi")
                cy.wrap($e).click()
             }
         })
         cy.get('#alertbtn').click()
         cy.on('window:alert',(r)=>{
            expect(r).to.be.equal('Hello , share this practice page and share your knowledge')
         })
         cy.get('#confirmbtn').click()
         cy.on('window:confirm',(y)=>{
            expect(y).to.be.equal('Hello , Are you sure you want to confirm?')
         })
        var cost = "0"
        cy.get('.left-align .table-display tr td').each(($a, index, $list) => {
            var P = $a.text()
            if (P === cost) {
                cy.get('.left-align .table-display tr td').eq(index).prev().then((t) => {
                    let course = t.text()
                    cy.log(course)
                })
            }
        })
    })
})