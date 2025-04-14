/// <reference types='cypress' />

describe('Registration new student', () => {
  it('fills the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type('tymek');
    cy.get('#lastName').type('tomaszewski');
    cy.get('#userEmail').type('tym.tym@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month')
      .find('.react-datepicker__day--001:not(' +
    '.react-datepicker__day--outside-month)')
      .first()
      .click();

    cy.get('.subjects-auto-complete__input').type('Maths{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type('123 Main Street, New City');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg')
      .should('have.text', 'Thanks for submitting the form');
    cy.contains('tymek tomaszewski');
    cy.contains('tym.tym@example.com');
    cy.contains('Male');
    cy.contains('1234567890');
    cy.contains('01 January,1990');
    cy.contains('Maths');
    cy.contains('Sports');
    cy.contains('123 Main Street, New City');
  });
});
