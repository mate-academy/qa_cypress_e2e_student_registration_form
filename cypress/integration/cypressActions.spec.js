/// <reference types='cypress' />
const { generateUser } = require('../support/generateuser');

describe('Practice form', () => {
before(() => {
cy.visit('/automation-practice-form')
});

it('should allow to register', () => {
  const user = generateUser();

  cy.get('#firstName')
    .type(user.firstName)
    .should("have.value", user.firstName)

  cy.get('#lastName')
    .type(user.lastName)
    .should("have.value", user.lastName)

  cy.get('#userEmail')
    .type(user.email)
    .should("have.value", user.email)

  cy.get('#gender-radio-2')
    .check({force: true})

  cy.get('#userNumber')
    .type(user.phone)
    .should("have.value", user.phone)

  cy.get('#dateOfBirthInput')
    .click()
    .get('.react-datepicker__month-select')
    .select('February')
    .get('.react-datepicker__year-select')
    .select('1990')
    .get('[aria-label]').contains('17')
    .click()
    cy.get('#dateOfBirthInput')
    .should("have.value", '17 Feb 1990')

  cy.get('.subjects-auto-complete__value-container')
    .type('Maths{enter}')

  cy.get('#hobbies-checkbox-1')
    .check({force: true})

  cy.get('#currentAddress')
    .type(user.address)
    .should("have.value", user.address)

  cy.get('#state')
    .click({force: true})
    .type('NCR{enter}')
    cy.get('#state .css-1uccc91-singleValue')
    .should("have.text", 'NCR')

  cy.get('#city')
    .click({force: true})
    .type('Gurgaon{enter}')
    cy.get('#city .css-1uccc91-singleValue')
    .should("have.text", 'Gurgaon')

  cy.get('#submit')
    .click({force: true})

  cy.get('tbody :nth-child(1) :nth-child(2)')
    .should("have.text", `${user.firstName} ${user.lastName}`)

  cy.get('tbody :nth-child(2) :nth-child(2)')
    .should("have.text", user.email)

  cy.get('tbody :nth-child(3) :nth-child(2)')
    .should("have.text", 'Female')

  cy.get('tbody :nth-child(4) :nth-child(2)')
    .should("have.text", user.phone)

  cy.get('tbody :nth-child(5) :nth-child(2)')
    .should("have.text", '17 February,1990')

  cy.get('tbody :nth-child(6) :nth-child(2)')
    .should("have.text", 'Maths')

  cy.get('tbody :nth-child(7) :nth-child(2)')
    .should("have.text", 'Sports')

  cy.get('tbody :nth-child(9) :nth-child(2)')
    .should("have.text", user.address)

  cy.get('tbody :nth-child(10) :nth-child(2)')
    .should("have.text", 'NCR Gurgaon')
    
  });

});