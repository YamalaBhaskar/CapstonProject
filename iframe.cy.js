/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
// import cypress from 'cypress'
import 'cypress-iframe';


describe("Handling the Frames",()=>{
   it("Iframes",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe")
 
        cy.iframe().find(`a[href*='mentorship']`).eq(0).click();
 
        cy.wait(7000);
 
        cy.iframe().find(`h1[class*='pricing-title']`).should('have.length',2);
    })
    it("Iframegvc",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe")
        //cy.iframe.find("a[href='learning-path']").eq(0).click();
        cy.iframe().find(".main-header .header-upper >:nth-child(1) >:nth-child(1) >:nth-child(2) .main-menu >:nth-child(2) ul >:nth-child(4) a").click()
        cy.wait(2000)
        cy.iframe().find("a.active").click()
        cy.iframe().find(".javascript .learning-path-list-item .card-action >:nth-child(1)").then((t)=>{
            var T=t.text();
            expect(T).to.include("36")
        })
    })
})