/// <reference types='cypress' />

describe('Student Registration page', () => {
  it('should fill all fields and click [Submit] button', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('firstName');
    cy.get('#lastName').type('lastName');
    cy.get('#userEmail').type('email@gmail.com');
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('0');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day.react-datepicker__day--020').click();
    cy.get('#subjectsInput').type('A{enter}');
    cy.get('.custom-checkbox [for="hobbies-checkbox-1"]').click();
    cy.get('#state').type('Ut{enter}');
    cy.get('#city').type('A{enter}');
    cy.get('#submit').click();
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-body').should('exist');
    cy.get('.modal-body').should('contain', 'firstName');
    cy.get('.modal-body').should('contain', 'lastName');
    cy.get('.modal-body').should('contain', 'email@gmail.com');
    cy.get('.modal-body').should('contain', '1234567890');
  });
});
