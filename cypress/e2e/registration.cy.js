/// <reference types='cypress' />
const { generateUser } = require('../support/generate')   

describe('Student Registration page', () => {
  before(() => {
    cy.viewport (1000, 1000)
    cy.visit ('/')

  });

  it('should', () => {
    const { firstName, lastName, email, phone, genders, hobbies, adress, state, city, date } = generateUser()
    
    cy.findByPlaceholder('First Name')
      .type(firstName)

    cy.findByPlaceholder('Last Name')
      .type(lastName)

    cy.findByPlaceholder('name@example.com')
      .type(email)

    cy.findByPlaceholder('Mobile Number')
      .type(phone)

    cy.contains('.custom-control-label', genders)
      .click()

    cy.get('#dateOfBirthInput')
      .type(`{selectAll} ${date} {Enter}`)

    cy.get('.subjects-auto-complete__value-container')
      .type('E{Enter}')

    cy.contains('.custom-control-label', hobbies)
      .click()

    cy.get('#currentAddress')
      .type(adress)

    cy.get('#state')
      .type(`${state}{enter}`)

    cy.get('#city')
      .type(`${city}{enter}`)

    cy.get('#submit')
      .click()

      cy.contains('tr', 'Student Name')
      .should('contain', `${firstName} ${lastName}`)

      cy.contains('tr', 'Student Email')
      .should('contain', `${email}`)

      cy.contains('tr', 'Gender')
      .should('contain', `${genders}`)

      cy.contains('tr', 'Mobile')
      .should('contain', `${phone}`)

      cy.contains('tr', 'Date of Birth')
      .should('contain', `${date}`)

      cy.contains('tr', 'Subjects')
      .should('contain.text', 'English')

      cy.contains('tr', 'Hobbies')
      .should('contain', `${hobbies}`)

      cy.contains('tr', 'Address')
      .should('contain', `${adress}`)

      cy.contains('tr', 'State and City')
      .should('contain', `${state} ${city}`)
  });
});
