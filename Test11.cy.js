/// <reference types="cypress" />
describe("practice",()=>{
    it("url verfication",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        var pname='Beans';
        var iC=5;
        cy.get(".search-keyword").type(pname);
        var pn,pc
        var total
        var pcount=0;
        cy.get(".product:has(img[alt='"+pname+" - 1 Kg']) input.quantity ").clear().type(iC);
        cy.get(".products").find('.product').each(($el, index, $list) =>{
            const iname=$el.find('h4.product-name').text()
            if(iname.includes(pname))
            {
                pn= $el.find("h4[class='product-name']").text();
                pc= $el.find("p[class='product-price']").text();   
                total=Number(pc)*iC;
                cy.log(total)
                $el.find('button').click()
                pcount++
            }
        })
        var iq=cy.get('tr:contains("Items") strong')
        var pa=cy.get('tr:contains("Price") strong')
        iq.then((i)=>{
            expect(i).to.have.text(pcount);
        })
        pa.then((pas)=>{
            expect(pas).to.have.text(total)
        })
        cy.get('a.cart-icon img[alt="Cart"]').click();
        cy.get('div.cart-preview .action-block button[type="button"]').click();
        var VN=cy.get(".products tbody p.product-name")
        var VP=cy.get(".products tbody tr :nth-child(4) .amount")
        var VT=cy.get(".products tbody tr :nth-child(5) .amount")
        var VQ=cy.get(".products tbody tr :nth-child(3) .quantity")
        VN.then((vn) =>{
            expect(vn).to.have.text(pn);
        })
        VP.then((vp) =>{
            expect(vp).to.have.text(pc);
        })
        VT.then((vt) =>{
            expect(vt).to.have.text(total);
        })
        VQ.then((vq) =>{
            expect(vq).to.have.text(iC);
        })
        cy.contains('Place Order').click()
        cy.get('select').select('India').should('have.value','India')
        cy.get('.chkAgree').click();
        cy.contains("Proceed").click();
        //cy.get('.wrapperTwo').should('includes',"Thank you,");
        cy.get('.wrapperTwo').should("have.text","Thank you, your order has been placed successfully  You'll be redirected to Home page shortly!!");
    })
})