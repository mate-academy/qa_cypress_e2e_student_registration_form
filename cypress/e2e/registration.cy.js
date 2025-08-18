/// <reference types="cypress" />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the form, submit and verify modal', () => {
    cy.get('#firstName').type('Jan');
    cy.get('#lastName').type('Kowalski');

    cy.get('#userEmail').type('jan.kowalski@example.com');

    cy.get('label[for="gender-radio-1"]').click();

    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();

    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('#subjectsInput').type('Physics{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('#currentAddress').type('ul. Testowa 1, 00-001 Warszawa');

    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();

    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('#example-modal-sizes-title-lg')
      .should('have.text', 'Thanks for submitting the form');
    cy.get('td').contains('Jan Kowalski');
  });
});
