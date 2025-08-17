/// <reference types="cypress" />

describe('Student Registration Form', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the form and assert modal', () => {
    // Personal Info
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('[name="gender"][value="Male"]').check();
    cy.get('#userNumber').type('1234567890');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--001')
      .not('.react-datepicker__day--outside-month')
      .click();

    // Subjects
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('#subjectsInput').type('Physics{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    // State and City
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click(); // NCR
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click(); // Delhi

    // Submit
    cy.get('#submit').click();

    // Assert modal
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('John').should('exist');
    cy.get('td').contains('Doe').should('exist');
    cy.get('td').contains('john.doe@example.com').should('exist');
    cy.get('td').contains('Male').should('exist');
    cy.get('td').contains('1234567890').should('exist');
    cy.get('td').contains('01 January,1990').should('exist');
    cy.get('td').contains('Maths, Physics').should('exist');
    cy.get('td').contains('Sports, Reading').should('exist');
    cy.get('td').contains('NCR Delhi').should('exist');
  });
});
