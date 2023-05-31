/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  const user = generateUser();

  it('should allow to register with all required fields are filled in', () => {

    cy.findById('firstName')
    .type(user.firstName);

    cy.findById('lastName')
    .type(user.lastName);

    cy.findById('userEmail')
    .type(user.email);

    cy.contains('.custom-control-label', user.gender)
    .click();

    cy.findById('userNumber')
    .type(user.mobileNumber);

    cy.findById('dateOfBirthInput')
    .type(`{selectAll} ${user.birth}` + '{enter}');

    cy.get('.subjects-auto-complete__value-container')
    .type(user.subject + '{enter}');

    cy.contains('.custom-control-label', user.hobby)
    .click();

    cy.findById('currentAddress')
    .type(user.address);

    cy.findById('state')
    .type(`{selectAll} ${user.state}` + '{enter}')

    cy.findById('city')
    .type(`{selectAll} ${user.city}` + '{enter}')

    cy.findById('submit')
    .click();

    cy.get('#example-modal-sizes-title-lg')
    .should('contain.text', 'Thanks for submitting the form');

    cy.findById('closeLargeModal')
    .click();
  });
});
