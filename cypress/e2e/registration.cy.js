/// <reference types='cypress' />


const { generateUser } = require('../support/generate');

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const user = generateUser();

it('student is able to create account', () => {
  cy.get('#firstName')
    .type(user.firstName);

  cy.get('#lastName')
    .type(user.lastName);

    cy.get('#userEmail')
    .type(user.email);

  cy.contains('.custom-control-label', user.gender)
    .click();

  cy.get('#userNumber')
    .type(user.phoneNumber);

  cy.get('#dateOfBirthInput')
    .click();

  cy.pickDate('year-select')
    .select(`${user.birth.year}`);

  cy.pickDate('month-select')
    .select(`${user.birth.month}`);
  
  cy.pickDate('day')
    .contains(user.birth.day)
    .click();

  cy.get('.subjects-auto-complete__value-container')
    .type(user.subject + '{enter}');
  
  cy.contains('.custom-control-label', user.hobby)
    .click();

  cy.get('#currentAddress')
    .type(user.address);

  cy.contains('Select State')
    .type('{downArrow}{enter}');

  cy.contains('Select City')
    .type('{downArrow}{enter}');

  cy.get('#submit')
    .click();

  cy.contains('tr', 'Student Name')
    .should('contain', user.firstName)
    .and('contain', user.lastName);


  cy.contains('tr', 'Student Name')
    .should('contain', user.firstName + ' ' + user.lastName);
  cy.contains('tr', 'Student Email')
    .should('contain', user.email)
  cy.contains('tr', 'Gender')
    .should('contain', user.gender)
  cy.contains('tr', 'Mobile')
    .should('contain', user.phoneNumber)
  cy.contains('tr', 'Subjects')
    .should('contain', user.subject)
  cy.contains('tr', 'Hobbies')
    .should('contain', user.hobby)
  cy.contains('tr', 'Address')
    .should('contain', user.address)

});
});
