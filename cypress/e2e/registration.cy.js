// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1600,1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide ability to register a new account', () => {
  const user = generateUser();
  
  cy.get('#firstName')
    .type(user.firstName)
    .tab()
    .type(user.lastName)
    .tab()
    .type(user.email);
  
  cy.get('#genterWrapper')
    .contains('Female')
    .click();

  cy.get('#userNumber')
    .type(user.phone);

  cy.get('#dateOfBirthInput')
    .type('{selectAll}04 Oct 1990');

  cy.get('#subjectsContainer > div')
    .type('Soc{enter}Ar{enter}');

  cy.get('#hobbiesWrapper')
    .contains('Reading')
    .click();
  
  cy.get('#hobbiesWrapper')
    .contains('Music')
    .click();

  cy.get('#currentAddress')
    .type(user.address);

  cy.get('#state').click().within(() => {
    cy.get('#react-select-3-option-0').click();
  });
  
  cy.get('#city').click().within(() => {
    cy.get('#react-select-4-option-0').click();
  });

  cy.get('#submit').click();

  cy.get('div.modal-header')
    .should('contain', 'Thanks for submitting the form');
    
    cy.get('tbody')
      .should('contain', user.fullName)
      .should('contain', user.email);
  });
});
