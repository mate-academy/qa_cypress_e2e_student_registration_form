/* eslint-disable max-len */
/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types="cypress" />

describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fills out the form and asserts submitted data', () => {
    cy.get('#firstName').type('Tom');
    cy.get('#lastName').type('Scavo');
    cy.get('#userEmail').type('tomscavo@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0991234567');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('#currentAddress').type('Kyiv, Ukraine');

    cy.get('#state').click().get('#react-select-3-option-0').click();
    cy.get('#city').click().get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('Tom Scavo');
    cy.get('td').contains('tomscavo@example.com');
    cy.get('td').contains('Male');
    cy.get('td').contains('0991234567');
    cy.get('td').contains('15 May,2000');
    cy.get('td').contains('Maths');
    cy.get('td').contains('Sports, Reading');
    cy.get('td').contains('Kyiv, Ukraine');
    cy.get('td').contains('NCR Delhi');
  });
});
