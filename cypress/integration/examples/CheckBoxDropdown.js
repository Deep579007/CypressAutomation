/// <reference types="Cypress" />
//Cypress code--spec file 

//Mocha Framework
describe('My Second test suite', function(){
    it('My Second testcase', function(){

        //Checkbox example
        cy.visit(Cypress.env('url')+"/AutomationPractice/")

        //check or select the checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value',"option1")

        //to uncheck the checkbox
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //multiple checkboes select
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //****Static Dropdown***** */
        cy.get('select').select('option3').should('have.value','option3')

        //****Dynamic autocomplete Dropdown***** */
        // Enter a word in dropdown
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each((el,index,list)=>{
            if(el.text()==='India')
            { 
                cy.wrap(el).click()
            }
        })

        cy.get('#autocomplete').should('have.value','India')

        //Handling visible and invisible element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Handling Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')


        
    })
 })