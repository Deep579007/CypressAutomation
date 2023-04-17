/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My fourth test suite', function(){
    it('My fourth testcase', function(){

        cy.visit(Cypress.env('url')+"/AutomationPractice/")
        
        //Handling alert and confirm button
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        //Window alert
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window confirm
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //Handling child tab
        cy.get('#opentab').invoke('removeAttr','target').click()

        //Validate successfully landed on correct page
        cy.wait(5000)
        cy.url().should('include',"qaclickacademy")

        //How to browser navigation back (previous page)
        cy.go('back')

        
    })
 })