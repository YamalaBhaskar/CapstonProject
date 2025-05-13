
describe('web page automation', function () {
    it('login', function () {
        cy.visit('https://automationexercise.com/')
        cy.contains('AutomationExercise')
        cy.get('a[href="/login"]').should('have.text', ' Signup / Login').click()
        cy.get('.signup-form h2').should('have.text', 'New User Signup!')
        cy.get('input[type="text"]').type('Samatha')
        cy.get('input[type="email"]').eq(1).type('llllughmhunnyyiiyyyboolneni@gmail.com')
        cy.get('button[type="submit"]').eq(1).click()
        cy.get('#id_gender2').check().should('be.checked')
        cy.get('input[type="password"]').type('Sam@2903')
        cy.get('#years').select('2019')
        cy.get('#months').select('January')
        cy.get('#days').select('5')
        cy.get('#newsletter').check().should('be.visible')
        cy.get('#first_name').type('Samatha')
        cy.get('#last_name').type('Bolneni')
        cy.get('#company').type('Delta Technologies')
        cy.get('#address1').type('Madhapur vittal rao nagar')
        cy.get('#country').select('India')
        cy.get('#state').type('Telangana')
        cy.get('#city').type('Hyderabad')
        cy.get('#zipcode').type('500081')
        cy.get('#mobile_number').type('7013149605')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('b').should('have.text', 'Account Created!')
        cy.contains('a', 'Continue').click()
        cy.get('ul li:nth-child(1) a[href="/"]').click()
        var gender = "Women"
        var model = "Dress"
        if (gender == 'Women' && model == 'Dress') {
            fun1(gender, model)
        }
        else if (gender === 'Women' && model === 'Saree') {
            fun4(gender, model)
        }
        function fun1(gender, model) {
            cy.get('.panel-title a').eq(0).click({ force: true })
            cy.get(' a[href="/category_products/1"]').click({ force: true })
            cy.get('.productinfo p').each(($e1) => {
                const name = $e1.text()
                if (name === 'Sleeveless Dress') {
                    cy.get('a[href="/product_details/3"]').click()
                    cy.get('.product-information p').eq(1).then((Ia) => {
                        cy.log(Ia.text())
                        if (Ia.text().includes('Availability: In Stock')) {
                            cy.contains('button', 'Add to cart').click()
                        }
                    })
                    cy.get('.modal-title ').should('have.text', 'Added!')
                    // cy.contains('button', 'Add to cart').click()
                    cy.get('.modal-footer button').then((verify) => {
                        const check = verify.text()
                        if (check === 'Continue Shopping') {
                            gender = 'Men'
                            model = "Tshirts "
                            fun2(gender, model)
                        }
                        else {
                            cy.get('.text-center u ').click({ force: true })
                            cy.get('.col-sm-6 a').click()
                            cy.get('a[href="/payment"]').click()
                            cy.get('input[class="form-control"]').type('ICIC')
                            cy.get('input[name="card_number"]').type('9088700567893323')
                            cy.get('input[name="cvc"]').type('705')
                            cy.get('input[name="expiry_month"]').type('02')
                            cy.get('input[name="expiry_year"]').type('2030')
                            cy.get('#submit').click()
                            cy.get('.title  b').should('have.text', 'Order Placed!')
                            cy.get('a[data-qa="continue-button"]').click()
                        }
                    })
                }
            })
        }
        function fun2(gender, model) {
            cy.get('.panel-title a').eq(1).click({ force: true })
            cy.get(' a[href="/category_products/3"]').click({ force: true })
            cy.get('.productinfo p').each(($e1) => {
                const name = $e1.text()
                if (name === 'Men Tshirt') {
                    cy.get('a[href="/product_details/2"]').click()
                    cy.get('.product-information p').eq(1).then((Ia) => {
                        cy.log(Ia.text())
                        if (Ia.text().includes('Availability: In Stock')) {
                            cy.contains('button', 'Add to cart').click()
                        }
                    })
                    cy.get('.modal-title ').should('have.text', 'Added!')
                    //we can give it in dynamic
                    cy.get('.modal-footer button').then((verify) => {
                        //cy.get('.text-center u').then((verify)=>{...view cart
                        const check1 = verify.text()
                        if (check1 === 'View Cart') {
                            cy.get('.text-center u ').click({ force: true })
                            cy.get('.col-sm-6 a').click({ force: true })
                            cy.get('a[href="/payment"]').click({ force: true })
                            cy.wait(5000);
                            cy.get('input[class="form-control"]').type('ICIC')
                            cy.get('input[name="card_number"]').type('9088700567893323')
                            cy.get('input[name="cvc"]').type('705')
                            cy.get('input[name="expiry_month"]').type('02')
                            cy.get('input[name="expiry_year"]').type('2030')
                            cy.get('#submit').click()
                            cy.get('.title  b').should('have.text', 'Order Placed!')
                            cy.get('a[data-qa="continue-button"]').click()
                        }
                        else {
                            gender = 'Kids'
                            model = "Tops & Shirts "
                            fun3(gender, model)
                        }
                    })
 
                }
            })
        }
        function fun3(gender, model) {
            cy.get('.panel-title a').eq(2).click({ force: true })
            cy.get(' a[href="/category_products/5"]').click({ force: true })
            cy.get('.productinfo p').each(($e1) => {
                const name = $e1.text()
                if (name === 'Frozen Tops For Kids') {
                    cy.get('a[href="/product_details/13"]').click()
                    cy.get('.product-information p').eq(1).then((Ia) => {
                        cy.log(Ia.text())
                        if (Ia.text().includes('Availability: In Stock')) {
                            cy.contains('button', 'Add to cart').click()
                        }
                    })
                    cy.get('.modal-title ').should('have.text', 'Added!')
                    // cy.get('.modal-footer button').then((verify)=>{
                    cy.get('.text-center u').then((verify) => {
                        const check1 = verify.text()
                        if (check1 === 'View Cart') {
                            var sum = 0;
                            //validations calculations
                            cy.get('.text-center u ').click({ force: true })
                            cy.get('.cart_price p').eq(0).then((price1) => {
                                var P1 = Number(price1.text().split(' ')[1])
                                cy.get('.cart_quantity').eq(0).then((quan) => {
                                    var Q1 = Number(quan.text())
                                    cy.get('.cart_total p').eq(0).then((total1) => {
                                        var T1 = Number(total1.text().split(' ')[1])
                                        sum = sum + T1
                                        expect(T1).to.equal(P1 * Q1)
                                        cy.get('.cart_price p').eq(1).then((price2) => {
                                            var P2 = Number(price2.text().split(' ')[1])
                                            cy.get('.cart_quantity').eq(1).then((quan1) => {
                                                var Q2 = Number(quan1.text())
                                                cy.get('.cart_total p').eq(1).then((total2) => {
                                                    var T2 = Number(total2.text().split(' ')[1])
                                                    sum = sum + T2
                                                    expect(T2).to.equal(P2 * Q2)
                                                    cy.get('.cart_price p').eq(2).then((price3) => {
                                                        var P3 = Number(price3.text().split(' ')[1])
                                                        cy.get('.cart_quantity').eq(2).then((quan2) => {
                                                            var Q3 = Number(quan2.text())
                                                            cy.get('.cart_total p').eq(2).then((total3) => {
                                                                var T3 = Number(total3.text().split(' ')[1])
                                                                sum = sum + T3
                                                                expect(T3).to.equal(P3 * Q3)
                                                                cy.get('.col-sm-6 a').click({ force: true })
                                                                cy.get('.address_title h3').eq(0).should('have.text', 'Your delivery address')
                                                                cy.get('.address_title h3').eq(1).should('have.text', 'Your billing address')
                                                                cy.get('.address_phone').eq(1).should('have.text', '7013149605')
                                                                cy.get('.cart_total_price').eq(3).then((valid) => {
                                                                    var Total = Number(valid.text().split(' ')[1])
                                                                    expect(sum).to.equal(Total)
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                            cy.get('a[href="/payment"]').click({ force: true })
                            cy.wait(5000);
                            cy.get('input[class="form-control"]').type('ICIC')
                            cy.get('input[name="card_number"]').type('9088700567893323')
                            cy.get('input[name="cvc"]').type('705')
                            cy.get('input[name="expiry_month"]').type('02')
                            cy.get('input[name="expiry_year"]').type('2030')
                            cy.get('#submit').click()
                            cy.get('.title  b').should('have.text', 'Order Placed!')
                            cy.get('a[data-qa="continue-button"]').click()
                        }
                        else {
                        }
                    })
 
                }
            })
        }
        function fun4(gender, model) {
            cy.get('.panel-title a').eq(0).click({ force: true })
            cy.get(' a[href="/category_products/7"]').click({ force: true })
            cy.get('.productinfo p').each(($e1) => {
                const name = $e1.text()
                if (name === 'Rust Red Linen Saree') {
                    cy.get('a[href="/product_details/40"]').click()
                    cy.contains('button', 'Add to cart').click()
                    //we can give it in dynamic
                    // cy.get('.modal-footer button').then((verify)=>{
                    cy.get('.text-center u').then((verify) => {
                        const check1 = verify.text()
                        if (check1 === 'View Cart') {
                            cy.get('.text-center u ').click({ force: true })
                            cy.get('.col-sm-6 a').click({ force: true })
                            cy.get('a[href="/payment"]').click({ force: true })
                            cy.wait(5000);
                            cy.get('input[class="form-control"]').type('ICIC')
                            cy.get('input[name="card_number"]').type('9088700567893323')
                            cy.get('input[name="cvc"]').type('705')
                            cy.get('input[name="expiry_month"]').type('02')
                            cy.get('input[name="expiry_year"]').type('2030')
                            cy.get('#submit').click()
                            cy.get('.title  b').should('have.text', 'Order Placed!')
                            cy.get('a[data-qa="continue-button"]').click()
                        }
                        else {
                        }
                    })
                }
            })
        }
    })
})
 