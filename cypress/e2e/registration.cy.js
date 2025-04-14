/// <reference types='cypress' />

const { textData, optionData } = require('../support/data');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the form', () => {
    cy.get('.text-center').should('have.text', 'Practice Form');
  });

  it('accepts data into the form', () => {
    cy.register(textData, optionData);

    cy.contains('button', 'Submit').click();
    cy.contains('Thanks for submitting the form');
  });

  it('displays entered data after submission', () => {
    cy.register(textData, optionData);
    cy.contains('button', 'Submit').click();

    // I only decided to check some of the data
    cy.validate(textData);
  });
});
