/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My Second test suite', function(){
    it('My Second testcase', function(){
        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
        cy.get(".search-keyword").type('ca')
        cy.wait(2000)
        
 
        //Parent child chaining
        cy.get('.products').as('productLocator')
        
 
        //Add a product to cart using product name
        cy.get('@productLocator').find('.product').each((el,index,list)=>{
         const textVeg=el.find('h4.product-name').text()
         if(textVeg.includes('Cashews'))
         {
             cy.wrap(el).find('button').click()
         }
        })
        
        //Click on cart icon 
        cy.get('.cart-icon > img').click()

        //Click on proceed to checkout
        cy.contains('PROCEED TO CHECKOUT').click()

        //Click on place order
        cy.contains('Place Order').click()
        
 
        
    })
 })