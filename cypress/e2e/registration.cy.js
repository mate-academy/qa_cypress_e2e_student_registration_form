/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  
  });

  it('should register a new user', () => {
    const user = generateUser();
    const state = 'Uttar Pradesh';
    const city = 'Lucknow';

    cy.visit('https://demoqa.com/automation-practice-form')

    cy.findByPlaceholder('First Name').type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(user.phoneNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}27 Jul 2004{enter}');
    
    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}' + 'Physics{enter}');

      cy.contains('.custom-control-label', user.hobby)
      .click();

    cy.findByPlaceholder('Current Address')
      .type(user.address);

    cy.get('#state')
      .type('{downArrow}{enter}');

    cy.get('#city')
      .type('{downArrow}{enter}');

    cy.contains('.btn', 'Submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', `${user.firstName} ${user.lastName}`);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '27 July,2004');

    cy.contains('tr', 'Subjects')
      .should('contain', 'English, Physics');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', `${state} ${city}`);

    
  });

