/// <reference types='cypress' />
const { generateUser } = require('../support/generate');
const { firstName, lastName, email, mobile, birthday, address } = generateUser();

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should', () => {
    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click();

    cy.get('#userNumber')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll} ${birthday} {enter}`);

    cy.get('.subjects-auto-complete__value-container')
      .type('Computer science{enter}');

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click();

    cy.get('#currentAddress')
      .type(address);

      cy.get('#state')
        .type('NCR{Enter}');

      cy.get('#city')
        .type('Delhi{Enter}');
  
      cy.get('#submit')
        .click();

      cy.contains('tr', 'Student Name')
        .should('contain', firstName + ' ' + lastName);

      cy.contains('tr', 'Student Email')
        .should('contain', email);

      cy.contains('tr', 'Gender')
        .should('contain', 'Female');

      cy.contains('tr', 'Mobile')
        .should('contain', mobile);

      cy.contains('tr', 'Date of Birth')
        .should('contain', birthday.slice(-4))
        .and('contain', birthday.slice(1, 4));

      cy.contains('tr', 'Subjects')
        .should('contain', 'Computer Science');

      cy.contains('tr', 'Hobbies')
        .should('contain', `Sports`);
   
      cy.contains('tr', 'Address')
        .should('contain', `${address}`);

      cy.contains('tr', 'State and City')
        .should('contain', 'NCR Delhi');
  });
});
