/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

const user = generateUser();

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register a new user', () => {
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastNmae);
    cy.get('#userEmail')
      .type(user.email);
    cy.get(`#genterWrapper > .col-md-9 > :nth-child(${user.randomGender})`)
      .click();
    cy.get('#userNumber')
      .type(user.number);
    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${user.birthDate}{enter}`);
    cy.get('.subjects-auto-complete__value-container')
      .type('e{enter}');
    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${user.randomHobbies})`)
      .click();
    cy.get('#currentAddress')
      .type(user.address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('.modal-header')
      .should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .should('contain', user.lastNmae);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Mobile')
      .should('contain', user.number);
    cy.contains('tr', 'Subjects')
      .should('contain', 'English');
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
