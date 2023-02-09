/// <reference types='cypress' />

const { generateUser } = require('../support/commands');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should register a new student', () => {
    const { firstName, lastName, email, phone, address } = generateUser();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}12 Dec 2012{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('En{enter}');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
      .click();

    cy.get('#currentAddress').type(address);
    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');
    cy.get('#submit').click();
    cy.contains('.modal-header', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', `${firstName} ${lastName}`);

    cy.contains('tr', 'Student Email')
      .should('contain', `${email}`);

    cy.contains('tr', 'Mobile')
      .should('contain', `${phone}`);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '12 December,2012');

    cy.contains('tr', 'Subjects')
      .should('contain', `English`);

    cy.contains('tr', 'Address')
      .should('contain', `${address}`);

    cy.contains('tr', 'State and City')
      .should('contain', `Uttar Pradesh Lucknow`);
  });
});