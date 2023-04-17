/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My sixth test suite', function(){
    it('My sixth testcase', function(){

        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        //Handling Mouse Hover

        cy.get("div.mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        
    })
 })