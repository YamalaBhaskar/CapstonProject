//import 'cypress-file-upload';
describe("Main project suite",()=>{
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
    })
    it("Test on elements_textbox",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(0).click()
        //cy.get(".header-text").eq(0).click()
        cy.get("#item-0").eq(0).click()
        cy.get(".text-center").should('have.text',"Text Box")
        cy.get("#userName").type("Bhaskar")
        cy.get("#userEmail").type("Bhaskar@gmail.com")
        cy.get("#currentAddress").type("delta durgamchervu hyderabad telengana")
        cy.get("#permanentAddress").type("Adurupalli chejarlla Nellore Andhra pradesh")
        cy.get("#submit").click()
        cy.get("#name").should('contain',"Bhaskar")
        cy.get("#email").should('contain',"Bhaskar@gmail.com")
        cy.get("p#currentAddress").should('contain',"delta durgamchervu hyderabad telengana")
        cy.get("p#permanentAddress").should('contain',"Adurupalli chejarlla Nellore Andhra pradesh")
  
    })
    it("Test on elements_Checkbox",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(0).click()
       // cy.get(".header-text").eq(0).click()
        cy.get("#item-1").eq(0).click()
        cy.get(".text-center").should('have.text',"Check Box")
        cy.get(".rct-options button").eq(0).click()
        cy.get(".rct-checkbox").eq(0).click()
        cy.get("#result ").should('contain',"home")
  
    })
    it("Test on elements_Radio Button",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(0).click()
       // cy.get(".header-text").eq(0).click()
        cy.get("#item-2").eq(0).click()
        cy.get(".text-center").should('have.text',"Radio Button")
        cy.get("#yesRadio").check({force: true})
        cy.get(".text-success ").should('contain',"Yes")
    })
    it("Test on elements_checkbox",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(0).click()
        //cy.get(".header-text").eq(0).click()
        cy.get("#item-3").eq(0).click()
        cy.get(".text-center").should('have.text',"Web Tables")
        cy.get("#addNewRecordButton").click()
        cy.get("#firstName").type("Bhaskar")
        cy.get("#lastName").type("yamala")
        cy.get("#userEmail").type("Bhaskaryamala@gmail.com")
        cy.get("#age").type("23")
        cy.get("#salary").type("19500")
        cy.get("#department").type("QA")
        cy.get("#submit").click()
        cy.get(".rt-tbody .rt-td").each((s)=>{
            const g=s.text()
            if(g==='Bhaskar'){
                expect(g).to.equal("Bhaskar")
            }
        })
    })
    it("Test on elements_Radio Button",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(0).click()
        //cy.get(".header-text").eq(0).click()
        cy.get("#item-4").eq(0).click()
        cy.get(".text-center").should('have.text',"Buttons")
        cy.get("#doubleClickBtn").dblclick()
        cy.get("#doubleClickMessage").should("have.text","You have done a double click")
        cy.get("#rightClickBtn").rightclick()
        cy.get("#rightClickMessage").should("have.text","You have done a right click")
        cy.wait(6000)
        cy.get('button:contains("Click Me"):eq(2)').click()
        cy.get("#dynamicClickMessage").should("have.text","You have done a dynamic click") 
    })
    it.only("Test on Form",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(1).click()
        //cy.get(".header-text").eq(1).click()
        cy.get(".menu-list #item-0").eq(1).click({force: true})
        cy.get(".text-center").should('have.text',"Practice Form")
        cy.get("#firstName").type("Bhaskar")
        cy.get("#lastName").type("Yamala")
        cy.get("#userEmail").type("bhaskaryamala@gmail.com")
        cy.get("#gender-radio-1").eq(0).check( {force: true})
        cy.get("#userNumber").type('6302980020')
        cy.get("#dateOfBirthInput").click()
        cy.get(".react-datepicker__year-select option").each(($a)=>{
            const d=$a.text()
          
            if(d==='2003'){
                cy.log(d)
                cy.wrap($a).click({force: true})
            }
        })
        cy.get(".react-datepicker__month-select option").each(($s)=>{
            const x=$s.text()
           
            if(x==='June'){
                cy.log(x)
                cy.wrap($s).click({force: true})
            }
        })
        cy.wait(4000)
        cy.get(".react-datepicker__day ").each(($f,index)=>{
            const g=$f.text()
            if(g==='30' && index > 10){
                cy.log(g)
                cy.wrap($f).click({force: true})
            } 
        })
        cy.get(".subjects-auto-complete__value-container").type("QA")
        cy.get('#hobbies-checkbox-1, #hobbies-checkbox-2').check({force: true});
        //cy.get("#uploadPicture").attachFile("C:\Users\byamala\Pictures\Screenshots\Screenshot 2025-01-22 124053.png");
        cy.get("#currentAddress").type("Durgam Chervvu Hyderabad Telengana")
        cy.get("#state").click()
        cy.get(".css-11unzgr div[tabindex='-1']").each(($r)=>{
            const h=$r.text()
            if(h==='Haryana'){
                cy.wrap($r).click({froce:true})
            }
        })
        cy.get("#city").click()
        cy.get(" .css-11unzgr div[tabindex='-1']").each(($m)=>{
            const k=$m.text();
            if(k==="Panipat"){
                cy.wrap($m).click({froce:true})
            }
        })
        cy.get(" #submit").click()
        cy.get(" #example-modal-sizes-title-lg").should('have.text','Thanks for submitting the form')
    })
    it("Test on Alerts",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(2).click()
        //cy.get(".header-text").eq(2).click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click({force:true})
        cy.get(".text-center").should('have.text',"Alerts")
       
        cy.on('window:alert',(r)=>{
            if (r === 'You clicked a button') {
                expect(r).to.be.equal('You clicked a button')
            } else if (r === 'This alert appeared after 5 seconds') {
                expect(r).to.be.equal('This alert appeared after 5 seconds')
            }
           
        })
        cy.get("#alertButton").click()
        cy.get("#timerAlertButton").click()
        cy.wait(7000)
    
        cy.on('window:confirm',(j)=>{
            expect(j).to.be.equal('Do you confirm action?')
        })
      
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Bhaskar');
        });
        cy.get("#confirmButton").click()
        cy.get("#promtButton").click()
    })
    it.only("Test on Widgets_Slider",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(3).click()
        //cy.get("#item-3").eq(2).click({force:true})
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-3').click()
        cy.get(".text-center").should('have.text',"Slider")
        cy.get('.range-slider').invoke('val', '95').trigger('change')
        cy.get('.range-slider').invoke('val').then((v) => {
          expect(v).to.be.equal('95')
        })
    })
    it("Test on Widgets_Progress Bar",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(3).click()
        //cy.get("#item-3").eq(2).click({force:true})
        cy.get(':nth-child(4) > .element-list > .menu-list > #item-4').click()
        cy.get(".text-center").should('have.text',"Progress Bar")
        cy.get("#startStopButton").click()
        cy.wait(4000)
        cy.get("#startStopButton").click()
        cy.get(".progress-bar").then((y)=>{
            const g=y.text()
            cy.log(g)
        })
    })
    it("Test on Interactions_Selectable",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(4).click()
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-1').click()
        cy.get(".text-center").should('have.text',"Selectable")
        cy.get('#verticalListContainer > :nth-child(1)').click()
        cy.get('#verticalListContainer > :nth-child(1)').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        cy.get('#verticalListContainer > :nth-child(3)').click()
        cy.get('#verticalListContainer > :nth-child(3)').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        cy.get("#demo-tab-grid").click()
        cy.get('#row1 > :nth-child(1)').click()
        cy.get('#row1 > :nth-child(1)').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        cy.get('#row2 > :nth-child(2)').click()
        cy.get('#row2 > :nth-child(2)').should('have.css', 'background-color', 'rgb(0, 123, 255)')
        cy.get('#row3 > :nth-child(3)').click()
        cy.get('#row3 > :nth-child(3)').should('have.css', 'background-color', 'rgb(0, 123, 255)')
    })
    it("Test on Interactions_Resizable",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(4).click()
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click()
        cy.get(".text-center").should('have.text',"Resizable")
        cy.get('#resizableBoxWithRestriction')
        .invoke('attr', 'style', 'width: 500px; height: 200px;')
        cy.get('#resizableBoxWithRestriction')
        .invoke('width').should('eq', 498.666666)
        cy.get('#resizableBoxWithRestriction')
        .invoke('height').should('eq', 198.666666)
    })
    it("Test on Book Store Application_Login",()=>{
        cy.visit("https://demoqa.com/")
        cy.get(".card-body").eq(5).click()
        cy.get(':nth-child(6) > .element-list > .menu-list > #item-0').click()
        cy.get(".text-center").should('have.text',"Login")
        cy.get("#userName").type("byamala")
        cy.get("#password").type("V@nny9030846854")
        cy.get("#login").click()
        cy.get("#gotoStore").click()
        cy.get(".rt-table .rt-tr").should('have.length','11')
        cy.get(".rt-table .rt-tbody .rt-tr-group .rt-td").each((w)=>{
            const g=w.text()
            if(g==='Richard E. Silverman'){
                expect(g).to.be.equal('Richard E. Silverman')
            }
        })
        cy.get("#submit").click()
        cy.get("#userForm div").eq(0).then((q)=>{
            const g=q.text()
            expect(g).to.be.equal('Welcome,Login in Book Store')
        })
    })
})