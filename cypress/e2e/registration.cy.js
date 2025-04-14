/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should allow to register a new user', () => {
    const { firstName, lastName, email, mobile } = generateUser();

    cy.findByPlaceholder('First Name')
      .type(firstName);
    cy.findByPlaceholder('Last Name')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.get('[for="gender-radio-3"]')
      .should('exist')
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(mobile);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + '22 Sep 1955');
    cy.get('#subjectsContainer')
      .click({ force: true })
      .type('comp' + '{enter}' + 'ma' + '{enter}');
    cy.get('[for="hobbies-checkbox-3"]')
      .should('exist')
      .click();
    cy.findByPlaceholder('Current Address')
      .type('Shire');
    cy.get('#state')
      .type('sh' + '{enter}');
    cy.get('#city')
      .type('a' + '{enter}');
    cy.contains('#submit', 'Submit')
      .click({ force: true });

    cy.contains('[class="modal-title h4"]', 'Thanks for submitting the form');
    cy.contains('tbody > tr > td', `${firstName} ${lastName}`);
  });
});
