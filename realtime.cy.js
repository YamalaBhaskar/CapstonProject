import HomePage from "../../support/pageObjects/homepage"
import CartPage from "../../support/pageObjects/CartPage"
import Validation from "../../support/pageObjects/Validation"
import CheckOut from "../../support/pageObjects/CheckOut"
describe('My Second Test Suite', function () {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
            this.home=new HomePage();
        })
    })
    it('My FirstTest case', function () {
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
        var cart=this.home.login(this.data.username,this.data.password)
        var B= cart.additems();
        cy.log( B.bill());
       new CheckOut().final();
        // cy.get("#username").type(this.data.username)
        // cy.get("#password").type(this.data.password)
        // cy.get(" input[value='admin']").should('be.checked')
        // cy.get(" option[value='stud']").then((T) => {
        //     var b = T.text()
        //     expect(b).to.equal('Student')
        // })
        // cy.get(" input[id='terms']").click()
        // cy.get(".btn-md").click()
        // cy.get("app-card-list.row >:nth-child(1) button").click()
        // cy.get("app-card-list.row >:nth-child(1) button").click()
        // cy.get("app-card-list.row >:nth-child(3) button").click()
        // cy.get("app-card-list.row >:nth-child(4) button").click()
        // cy.get("app-card-list.row >:nth-child(3) button").click()
        // cy.get("app-card-list.row >:nth-child(4) button").click()
        // cy.get("a.btn-primary").click()
        // var total = 0
        // cy.get(".col-md-offset-1 .table >:nth-child(2) tr").each(($s, index, $list) => {
        //     var PP = $s.find(":nth-child(3) strong").text()
        //     var TP = $s.find("td:nth-child(4) strong").text()
        //     var B = PP.split(' ')
        //     var C = TP.split(' ')
        //     var pp = Number(B[1])
        //     var tt = Number(C[1])
        //     if (pp > 0 && tt > 0) {
        //         cy.wrap($s).find('#exampleInputEmail1').invoke('val').then((qty) => {
        //             var pto=pp*qty
        //             cy.log('Quantity:', pto)
        //             expect(TP).to.include(pto)
        //             total = total + pto
        //         })
        //     }
        // })
        // cy.get(".text-right strong").then((tot) => {
        //     var ba = tot.text()
        //     expect(ba).to.include(total)
        // })
        // cy.get("td .btn-success").click()
        // cy.get("#country").type("Ind")
        // cy.wait(4000)
        // cy.get("div.suggestions ul a").each(($a, index,$list) => {
        //     var u=$a.text()
        //     if(u==="India"){
        //         cy.wrap($a).click()
        //     }
        // })
        // cy.get("#checkbox2").click({force:true})
        // cy.get("input[value='Purchase']").click()
        // cy.get(".alert-success strong").then((y) => {
        //     expect(y.text()).to.include("Success")
        // })
    })
})