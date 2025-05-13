
describe('RedBus Date Picker - Dynamic Date', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.viewport(1280, 720)
    })
    it('Selects a date dynamically from today', () => {
        cy.visit('https://www.redbus.com/');
        cy.get('#src').click({force: true}).type('hyd')
        cy.get(`div[class='autoFill autosuggest-ul rdc-src'] > li .liBpList`).each(($el,index,$list1) =>{
            var j=$el.text();
            if(j.includes('Miyapur')){
                cy.wrap($el).click({force:true})
            }
        })
        cy.get("#dest").click({force: true}).type('Nel')
        cy.get(`.mainelm .liBpList`).each(($el,index,$list1) =>{
            var j=$el.text();
            if(j.includes('Mini Bypass')){
                cy.wrap($el).click({force:true})
            }
        })
        cy.get(".rdc-db").eq(0).click({ force: true });
        var m = 'June 2025'
        var c=0;
        function checkCalendar(m)
        {
            cy.get(".DatePicker__DoubleCalendar-sc-1x9sb82-2 .DatePicker__MainBlock-sc-1x9sb82-1").each(($a, index, $list) =>
            {
                const h = Cypress.$($a).find(">:nth-child(1) .DayNavigator__IconBlock-sc-1tlckkc-2").text().trim();
                //cy.log('Extracted text: ' + h);
                if (h === m)
                {
                    cy.wrap($a).find(".DayTiles__CalendarDaysBlock-sc-14em0t0-0 .DayTiles__CalendarDaysSpan-sc-14em0t0-1").each((e1) =>
                    {
                        const date = e1.text()
                        if (date === '9') 
                        {
                            cy.wrap(e1).click({ force: true }) 
                            c++;   
                        }
                    })
                }
                else if(index>=1 )
                {   
                    cy.get('body').then(()=>{
                        if(c==0){
                            cy.get("#next").click({ force: true })
                            checkCalendar(m);
                        }  
                    })
                }
            })
        }
        checkCalendar(m);
        cy.get("#search_butn").click()
        cy.origin('https://www.redbus.in/', () => {
            cy.get('.busesFoundText__ind-search-styles-module-scss-PHVGD').then((f)=>{
                var t=f.text()
                cy.log(t)
            })
            cy.get(".srpList__ind-search-styles-module-scss-EOdde .tupleWrapper___f7dcfa").should("have.length",10)
            //cy.get('.sort-sec > :nth-child(4) > span').click()
            cy.get(':nth-child(1) > .sortType__ind-search-styles-module-scss-CKwxM').click()  
        })
    })
})
