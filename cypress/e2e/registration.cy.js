/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('user should fill all fields in forms> except "picture"', () => {
    const { firstName, lastName, email, mobile } = generateUser();

    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.get('#gender-radio-1')
      .click({force: true});

    cy.get('#userNumber')
      .type(mobile);

    cy.get('[id = "dateOfBirthInput"]')
      .type('{selectAll}' + '01 Nov 1991')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type('r' + '{enter}');

    cy.get('[id="hobbies-checkbox-1"]')
      .click({force: true});

    cy.get('[id="currentAddress"]')
      .click({force: true})
      .type('Current Address');

    cy.get('#state')
      .click({force: true})
      .type('u' + '{enter}');

    cy.get('#city')
      .click({force: true})
      .type('g' + '{enter}');

    cy.contains('#submit', 'Submit')
      .click({force: true});

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form');

    cy.contains('tbody > tr > td', `${firstName} ${lastName}`);

    cy.contains('tbody > tr > td', `${email}`);
  });
});
