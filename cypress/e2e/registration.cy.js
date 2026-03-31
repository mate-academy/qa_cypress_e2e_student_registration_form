/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit(`https://demoqa.com/automation-practice-form`);
  });

  it('should submit student registration form with valid data', () => {
    const { userName, email, address } = generateUser();

    cy.get('#firstName').type(userName);
    cy.get('#lastName').type(userName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-3').check();
    cy.get('#userNumber').type('1234567890');
    cy.get('#subjectsInput').type('Math{Enter}Chemistry{Enter}English{Enter}');
    cy.get('#hobbies-checkbox-2').check();
    cy.get('#uploadPicture').selectFile('cypress/downloads/cat.jpg');
    cy.get('#currentAddress').type(address);
    cy.get('#react-select-3-input').type('Haryana{Enter}');
    cy.get('#react-select-4-input').type('Karnal{Enter}' + `{Enter}`);
    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain.text', 'Thanks for submitting the form');
  });
});
