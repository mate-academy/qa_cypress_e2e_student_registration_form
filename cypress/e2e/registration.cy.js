/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('User can sign up with valid data', () => {
    const user = generateUser();
    cy.get('[placeholder="First Name"]')
      .type(user.firstName);

    cy.get('[placeholder="Last Name"]')
      .type(user.lastName);

    cy.get('#userEmail')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.get('[placeholder="Mobile Number"]')
      .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
      .type( '{SelectAll}01 Jan 2021' + '{Enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type(user.subject);

    cy.contains('.custom-control-label', user.hobby)
      .click({force: true});

    cy.get('[placeholder="Current Address"]')
      .type(user.address);

    cy.contains('Select State')
      .type('NCR' + '{enter}');
      
    cy.contains('Select City')
      .type('Delhi' + '{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '01 January,2021');

    cy.contains('tr', 'Subject')
     .should('contain', user.subject);

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'Picture')
      .should('contain', '');

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
    
  });
});
