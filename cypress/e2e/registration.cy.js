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

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2003');
    cy.get('.react-datepicker__month-select').select('January');
    cy.contains('.react-datepicker__day', '11').click();

    cy.get('#subjectsInput').type('Math{Enter}Chemistry{Enter}English{Enter}');

    cy.get('#hobbies-checkbox-2').check();

    cy.get('#currentAddress').type(address);

    cy.get('#react-select-3-input').type('Haryana{Enter}');
    cy.get('#react-select-4-input').type('Karnal{Enter}');

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain.text', 'Thanks for submitting the form');

    cy.get('.table').within(() => {
      cy.contains(userName).should('exist');
      cy.contains(email).should('exist');
      cy.contains('Other').should('exist');
      cy.contains('1234567890').should('exist');
      cy.contains('11 January,2003');
      cy.contains('Maths, Chemistry, English').should('exist');
      cy.contains('Reading').should('exist');
      cy.contains(address).should('exist');
      cy.contains('Haryana').should('exist');
      cy.contains('Karnal').should('exist');
    });
  });
});
