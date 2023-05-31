/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {

  const {firstName, lastName, email, gender, mobileNumber, birth, subject, hobby, address} = generateUser();

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });
  it('should do something', {
    defaultCommandTimeout: 10000
  }, () => {
 
  });
  it('should provide an ability to register new student', () => {
    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.get(`[value=${gender}]`)
      .click({ force: true });
    cy.contains('.custom-control-label', gender)
      .click();
    cy.get('#userNumber')
      .type(mobileNumber);
    cy.get('#dateOfBirthInput', birth)
      .type('{selectAll}31 May 1993' + '{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type(subject + '{enter}')
    cy.contains('.custom-control-label', hobby)
      .click();
    cy.get('#currentAddress')
      .type(address);
    cy.contains('Select State')
      .type('{downArrow}{enter}');
    cy.contains('Select City')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click({force: true});
    
    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .and('contain', lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', gender);
    cy.contains('tr', 'Mobile')
      .should('contain', mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '31 May 1993');
    cy.contains('tr', 'Subjects')
      .should('contain', subject);
    cy.contains('tr', 'Hobbies')
      .should('contain', hobby);
    cy.contains('tr', 'Address')
      .should('contain', address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
