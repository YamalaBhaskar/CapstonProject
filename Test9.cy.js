/// <reference types="cypress" />
describe("practice",()=>{
    it("url verfication",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("cu");
        cy.get(".product").should("have.length",3)
        cy.get(".product:visible").should("have.length",2);

        let pp
        let h=0;
        cy.get(".products").find('.product').each(($el, index, $list) =>{
            const iname=$el.find('h4.product-name').text()
            if(iname.includes("Capsicum"))
            {
                pp= $el.find("p.product-price").text();
                cy.log(pp);
               // $el.find("ADD TO CART").click()
                $el.find('button').click()
            }
        })
        let tt=cy.get('.products > :nth-child(2) > .product-price')  ;
        cy.log(pp);
            tt.then((tval) =>{
                cy.log(pp);
                cy.log(tval.text());
                expect(tval).to.have.text(pp);
            })
    })
})