/// <reference types="Cypress" />
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";



//Create object
const homepage = new HomePage()
const productpage = new ProductPage()

Before(()=>{
    cy.fixture('example').then(function(data){
        this.data=data
     })
})

Given('I open Ecommerce page', () => {
    cy.visit(Cypress.env('url') + "/angularpractice/")
})


When('I add items to cart', function() {
    homepage.getShopbtn().click()

    cy.log(this.data.productName)
    //validate the dynamic data comes from example.json file
    this.data.productName.forEach(function (el) {
        cy.selectProduct(el)
    })

    productpage.checkoutButton().click()

})

Then('Validate the total prices', () => {
    var sum = 0
    productpage.getTotalAmount().each((el, index, list) => {
        //cy.log(el.text())
        const amount = el.text()
        var result = amount.split(" ")
        result = result[1].trim()
        sum = Number(sum) + Number(result)

    }).then(function () {
        cy.log(sum)
    })

    productpage.getTotalCompareAmount().then(function (el) {
        const amount = el.text()
        var result = amount.split(" ")
        var total = result[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})

Then('select the country submit and verify thankyou message', () => {
    productpage.secondcheckoutBtn().click()
    productpage.getCountry().type('India')
    productpage.getCountrysuggestion().click()
    productpage.clickedCheckbox().click({ force: true })
    productpage.getSubmitbtn().click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')
    productpage.getAlertmsg().then(function (el) {
        const actualText = el.text()
        expect(actualText.includes("Success")).to.be.true

    })
})


//I fill the form details
When('I fill the form details',function(){
      //Validate the input name data
      homepage.getEditBox().type(this.data.name)
        
      //validate the gender
      homepage.getGender().select(this.data.gender)
})

//Then validate the form behaviour
Then('validate the form behaviour',function(){
     //validate two way data binding last input box
     homepage.getTwowaydatabinding().should('have.value',this.data.name)
        
     //validate the char are enter is < 2 
     homepage.getEditBox().should('have.attr','minlength','2')
     
     //validate the enterprenuer radiobtn is disable
     homepage.getEnterprenureRadiobtn().should('be.disabled')
     Cypress.config('defaultCommandTimeout',8000)
})

//And select the shop page
Then('select the shop page',()=>{
       //validate the shop button
       homepage.getShopbtn().click()
})