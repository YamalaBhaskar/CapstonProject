
describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
        var sum = (r) => {
            return r(100,200);
        }
        var sub=(x,y)=>{
            cy.log(x-y);
        }
        sum(sub)
    })
})