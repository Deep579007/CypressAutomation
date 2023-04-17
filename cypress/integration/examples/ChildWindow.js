/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My seven test suite', function(){
    it('My seven testcase', function(){

        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //Handling child window

       cy.get('#opentab').then(function(el){
           const url=el.prop('href')
           cy.visit(url)
           cy.origin(url,()=>{
            cy.get("div.sub-menu-bar a[href*='about']").click()
           })
       })
        
    })
 })