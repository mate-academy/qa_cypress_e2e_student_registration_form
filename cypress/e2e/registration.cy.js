/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should register a new student', () => {
    const { firstName, lastName, email, gender, mobileNumber, birth, subject, hobby, address } = generateUser();

  cy.findByPlaceholder('First Name')
    .type(firstName);
  cy.findByPlaceholder('Last Name')
    .type(lastName);
  cy.get('#userEmail')
    .type(email);
  cy.contains('.custom-control-label', gender)
    .click();
  cy.findByPlaceholder('Mobile Number')
    .type(mobileNumber);
  cy.get('#dateOfBirthInput')
    .click();
  cy.pickDate('year-select')
    .select(`${birth.year}`);
  cy.pickDate('month-select')
    .select(`${birth.month}`);
  cy.pickDate('day')
    .contains(birth.day)
    .click();
  cy.get('.subjects-auto-complete__value-container')
    .type(subject + '{enter}');
  cy.contains('.custom-control-label', hobby)
    .click();
  cy.findByPlaceholder('Current Address')
    .type(address);
  cy.contains('Select State')
    .type('{downArrow}{enter}');
  cy.contains('Select City')
    .type('{downArrow}{enter}');
  cy.get('#submit')
    .click({ force: true });
    
  cy.contains('tr', 'Student Name')
    .should('contain', firstName)
    .and('contain', lastName);
  cy.contains('tr', 'Student Email')
    .should('contain', email);
  cy.contains('tr', 'Gender')
    .should('contain', gender);
  });
});
