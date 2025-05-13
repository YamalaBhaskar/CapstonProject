/// <reference types="cypress" />

describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
        var sum = (r) => {
            return r(100,200);
        }
        var sub=(x:number,y:number)=>{
            cy.log("Test " +(x-y));
        }
        sum(sub)
    })
    it('ex', () => {
        cy.visit('https://blazedemo.com');
    })
})