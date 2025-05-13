
describe("swiggy application", () => {
    context('720p resolution', () => {
        beforeEach(() => {
            // run these tests as if in a desktop
            // browser with a 720p monitor
            cy.viewport(1280, 720)
        })
        it("login", () => {
            cy.visit("https://www.swiggy.com/my-account")
            // cy.contains('a','Sign in').click()
            // cy.get('#mobile').type('6302980020')
            // cy.get("a[class=lyOGZ]").click()
            // cy.get("#name").type("Bhaskar yamala")
            // cy.get("#email").type("bhaskaryamala6@gmail.com")
            // cy.contains('a',"CONTINUE").click()
        })
    })
})