/*describe('tyt', function() 
{
    it('tutorial',function() {
        cy.visit('https://www.tutorialspoint.com/cypress/index.htm')
        //cy.get(".nav .nav__list button[aria-controls='category']").click();
        cy.get('.nav-toggle').click();
       // cy.get(".category-button").click();
        cy.contains("Web Development Languages").click({force:true})
        cy.get(".categories-menu-sections-wrapper >:nth-child(3) ").each(($a,index,$list)=>{
            var t=$a.text()
            if(t.includes("HTML")){
                cy.log("successfully found");
                cy.log(t);
            }
            else{
                cy.log(t);
            }
        })
       
    })
})*/
describe('page',function(){
    it('load',function(){
        cy.visit('https://www.tutorialspoint.com/index.htm')
       // cy.get('.nav ul >:nth-child(1) button[aria-controls="category"]').click()
       cy.get('.topbar > .nav-toggle').click()
       cy.get('.dropdown__toggle').click()
       cy.get('.categories-menu > :nth-child(1) > :nth-child(1) > :nth-child(2)').click()
       cy.get('.categories-menu-sections-wrapper > :nth-child(2) li').each(($e1,index,$List)=>{
        if($e1.text().includes('Java'))
        {
            cy.log("found java")
            //cy.wrap($e1).invoke('show')
          //  $e1.find("button","Java").click();
            //cy.wrap($e1).contains('Java').click();
            //cy.get('.categories-menu-sections-wrapper>:nth-child(2) ul >:nth-child(2) a[href="/java/index.htm"]').click()
        }
       })
    })
})
 