/// <reference types='cypress' />

const { generateUser } = require('../support/generate')

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  })

  it('should allow to submit a new user', () => {
    const user = generateUser()
    cy.get('#firstName').type(user.firstName)

    cy.get('#lastName').type(user.lastName)

    cy.get('#userEmail').type(user.email)

    cy.contains('.custom-control-label', user.gender).click()

    cy.get('#userNumber').type(user.phoneNumber)

    cy.get('#dateOfBirthInput').type('{selectAll}5 May 1997' + '{enter}')

    cy.get('.subjects-auto-complete__value-container').type(
      user.subject + '{enter}'
    )
    cy.contains('.custom-control-label', user.hobbie).click()

    cy.get('#currentAddress').type('testAdress')

    cy.contains('Select State').type('Haryana' + '{enter}')

    cy.contains('Select City').type('Panipat' + '{enter}')

    cy.get('#submit').click()

     cy.get('#example-modal-sizes-title-lg').should(
       'contain',
       'Thanks for submitting the form'
     )

     cy.contains('tr', 'Student Name')
       .should('contain', user.firstName)
       .and('contain', user.lastName)

     cy.contains('tr', 'Student Email').should('contain', user.email)

     cy.contains('tr', 'Gender').should('contain', user.gender)

     cy.contains('tr', 'Mobile').should('contain', user.phoneNumber)

     cy.contains('tr', 'Date of Birth').should('contain', '5 May,1997')

     cy.contains('tr', 'Subjects').should('contain', user.subject)

     cy.contains('tr', 'Hobbies').should('contain', user.hobbie)

     cy.contains('tr', 'Address').should('contain', 'testAdress')

     cy.contains('tr', 'State and City').should('contain', 'Haryana Panipat')
  })
})
