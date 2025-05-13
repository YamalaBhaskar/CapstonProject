describe('Nav Menus', () => {
    context('720p resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1280, 720)
        })

        it('displays full header', () => {
            cy.visit('https://www.tutorialspoint.com/index.htm')
            cy.get(".dropdown__toggle ").click()
            cy.get('.categories-menu >:nth-child(1) >:nth-child(1) >:nth-child(2)').click({force:true})
            cy.get('.categories-menu-sections-wrapper >:nth-child(2) li').each(($a, index, $list) => {
                 var t = $a.text()
                 if (t.includes("Lua")) {
                     cy.log("successfully found");
                     //cy.get(" .categories-menu-sections-wrapper >:nth-child(2) >:nth-child(4) >:nth-child(5) a")
                     cy.wrap($a).click({force:true});
                    // cy.origin("https://www.tutorialspoint.com/lua/index.htm",()=>{})
                       // cy.log(t);
                 }
             })
        })
    })
})