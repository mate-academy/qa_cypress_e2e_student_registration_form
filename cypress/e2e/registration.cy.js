/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1200, 760);
    cy.visit('automation-practice-form');
  });

  it('shoud register the new User', () => {
    const { firstName, lastName, email, mobile } = generateUser();
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-2').click({force: true});
    cy.get('#userNumber').type(mobile);
    cy.get('#dateOfBirthInput').type('{selectAll}' + '30 Dec 1993')
      .click();
    cy.get('.subjects-auto-complete__value-container').click({force: true})
      .type('m' + '{enter}');
    cy.get('#hobbies-checkbox-1').click({force: true});
    cy.get('#currentAddress').click({force: true})
      .type('Adress');
    cy.get('#state').click({force: true})
      .type('n' + '{enter}');
    cy.get('#city').click({force: true})
      .type('d' + '{enter}');
    cy.contains('#submit', 'Submit')
      .click({force: true});
    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form');
    cy.contains('tbody > tr > td', `${firstName} ${lastName}`);
    cy.contains('tbody > tr > td', `${email}`);
  });
});
