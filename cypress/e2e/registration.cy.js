/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should contain main parts', () => {
    cy.url().should('contain', 'practice');
    cy.contains('h5', 'Form');
  });

  it('should allow to register a new user', () => {
    const data = generateUser();

    cy.findByPlaceholder('First Name')
      .type(data.firstName);

    cy.findByPlaceholder('Last Name')
      .type(data.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(data.email);

    cy.get('[for="gender-radio-3"]')
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(data.mobile);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + '19 Nov 1999');

    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type('ma' + '{enter}' + 'bio' + '{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.findByPlaceholder('Current Address')
      .type('Leontovycha street');

    cy.get('#state')
      .type('Ha' + '{enter}');

    cy.get('#city')
      .type('Ka' + '{enter}');

    cy.contains('#submit', 'Submit')
      .click({force: true});

    cy.contains('[class="modal-title h4"]', 'Thanks for submitting the form');

    cy.contains('tbody > tr > td', `${data.email}`);
  });
});
