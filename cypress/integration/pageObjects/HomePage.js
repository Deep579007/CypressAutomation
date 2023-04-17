class HomePage
{
  getEditBox()
  {
    return cy.get('input[name="name"]:nth-child(2)')
  }

  getTwowaydatabinding()
  {
    return cy.get(':nth-child(4) > .ng-untouched')
  }

  getGender()
  {
    return cy.get('select')
  }

  getEnterprenureRadiobtn()
  {
    return cy.get('#inlineRadio3')
  }

  getShopbtn()
  {
    return cy.get(':nth-child(2)> .nav-link')
  }


}

export default HomePage