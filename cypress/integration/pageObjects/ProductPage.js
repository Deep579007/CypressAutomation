class ProductPage
{
   checkoutButton()
   {
     return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
   }

   secondcheckoutBtn()
   {
     return cy.contains('Checkout')
   }

   getCountry()
   {
     return cy.get('#country')
   }

   getCountrysuggestion()
   {
     return cy.get('.suggestions > ul > li > a')
   }

   clickedCheckbox()
   {
     return cy.get('#checkbox2')
   }

   getSubmitbtn()
   {
     return cy.get('input[type="submit"]')
   }

   getAlertmsg()
   {
    return cy.get('.alert')
   }

   getTotalAmount()
   {
    return cy.get('tr td:nth-child(4) strong')
   }

   getTotalCompareAmount()
   {
    return cy.get('h3 strong')
   }
}

export default ProductPage