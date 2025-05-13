/// <reference types="cypress" />
describe('task ts', function () {
    var IC,IC2;
    var I1C,I2C;
    var multi1,multi2;
    var TT;
    it('task tc', function () {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const item = $e1.find('h4.product-name').text();
            if (item.includes('Carrot')) {
                cy.wrap($e1).find('a.increment').click()
                cy.wrap($e1).contains('ADD TO CART').click()
                IC = $e1.find('p.product-price').text()
                var g = cy.wrap($e1).find('input.quantity').invoke('val')
                g.then((G) => {
                    cy.log(G);
                    I1C = G;
                    var I1CV = Number(IC)
                    cy.log(I1CV)
                    multi1 = I1CV * I1C
                    cy.log(multi1);
                })
            }
            else if (item.includes('Cashews')) {
                cy.wrap($e1).find('a.increment').click()
                cy.wrap($e1).find('a.increment').click()
                cy.wrap($e1).contains('ADD TO CART').click()
                IC2 = $e1.find('p.product-price').text()
                var h = cy.wrap($e1).find('input.quantity').invoke('val')
                h.then((H) => {
                    I2C = H;
                    var I2CV = Number(IC2)
                    cy.log(I2C);
                    cy.log(I2CV)
                    multi2 = I2CV * I2C
                    cy.log(multi2);
                    var TX =cy.get('.cart-info tbody >:nth-child(2) strong');
                    TX.then((tt)=>{
                        TT=tt.text();
                    })
                })
            }
        })

        cy.get('body').then(()=>{
            var add = multi1 + multi2;
            let tt=Number(TT); 

            expect(add).to.be.equal(tt);

            cy.log(TT)
        })
    })
    /*it("add", function () {
       // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        var add = multi1 + multi2
        cy.log(add);
        cy.log(TT);
        var tt=Number(TT); 
        expect(add).to.eq(tt); 
    })*/
})