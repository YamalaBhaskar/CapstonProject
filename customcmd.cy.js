describe("custom command",()=>{
    it("cmd",()=>{
       var b= cy.sum(100,200)
       b.then((v)=>{
            cy.log(v.text())
        });
        
        cy.sub(200,200)
    })
})