/// <reference types='cypress' />
const { generateUser } = require('../support/generate');


describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
  });
  it.only('Register a new user and assert inputed data', () => {
  cy.findPlaceholder('First Name') .type(user.firstName);
  cy.findPlaceholder('Last Name') .type(user.lastName);
  cy.get('#userEmail') .type(user.email);
  cy.contains('.custom-control-label', user.gender) .click();
  cy.findPlaceholder('Mobile Number') .type(user.phoneNumber);
  cy.get('#dateOfBirthInput') .type('{selectAll}24 February 1982{enter}');
  cy.get('.subjects-auto-complete__value-container') .type(user.subject + '{enter}');
  cy.contains('.custom-control-label', user.hobby) .click();
  cy.findPlaceholder('Current Address') .type(user.address);
  cy.contains('Select State')
      .type('Rajasthan{enter}');
    cy.contains('Select City')
      .type('Jaipur{enter}');
  cy.get('#submit') .click();

  cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
  cy.contains('tr', 'Student Email') .should('contain', user.email);
  cy.contains('tr', 'Gender') .should('contain', user.gender);
  cy.contains('tr', 'Mobile') .should('contain', user.phoneNumber);
  cy.contains('tr', 'Date of Birth') .should('contain', '24 February,1982');
  cy.contains('tr', 'Subjects') .should('contain', user.subject);
  cy.contains('tr', 'Hobbies') .should('contain', user.hobby);
  cy.contains('tr', 'Address') .should('contain', user.address);
  cy.contains('tr', 'State and City') .should('contain', 'Rajasthan Jaipur'); 
  });
});

 
