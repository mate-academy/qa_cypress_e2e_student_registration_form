/// <reference types='cypress' />

const { generateUser } = require('../support/commands.js');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should fill all fields in forms except "picture".', () => {
    const { firstName, lastName, email, phoneNumber, address } = generateUser();

    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.contains('.custom-control-label', 'Male')
      .click();
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}09 Jul 2001{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}');
    cy.contains('.custom-control-label', 'Sports')
      .click();
    cy.get('#currentAddress')
      .type(address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .should('contain', lastName);
    cy.contains('tr', 'Email')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.contains('tr', 'Mobile')
      .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '09 July,2001');
    cy.contains('tr', 'Subjects')
      .should('contain', 'English');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports');
    cy.contains('tr', 'Address')
      .should('contain', address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
