/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My first test suite', function(){
   it('My First testcase', function(){
       cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
       cy.get(".search-keyword").type('ca')
       cy.wait(2000)
       cy.get(".product:visible").should('have.length',4)

       //Parent child chaining
       cy.get('.products').as('productLocator')
       cy.get('@productLocator').find('.product').should('have.length',4)

       //Add product to the cart
       cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

       //Add a product to cart using product name
       cy.get('@productLocator').find('.product').each((el,index,list)=>{
        const textVeg=el.find('h4.product-name').text()
        if(textVeg.includes('Cashews'))
        {
            cy.wrap(el).find('button').click()
        }
       })

       //assert if logo is correctly displayed
       cy.get('.brand').should('have.text','GREENKART')

       //Get website logo name in testrunner console
       cy.get('.brand').then(function(logoelement){
          cy.log(logoelement.text())
       })

       
   })
})