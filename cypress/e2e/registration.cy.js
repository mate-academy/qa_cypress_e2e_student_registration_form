/// <reference types="cypress" />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form, submit, and verify modal data', () => {
    // Fill personal details
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');

    // Select gender
    cy.get('label[for="gender-radio-1"]').click(); // safer than force:true

    // Mobile number
    cy.get('#userNumber').type('1234567890');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();

    // Subjects
    cy.get('#subjectsInput').type('Maths{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading

    // Current address
    cy.get('#currentAddress').type('123 Main St');

    // State & City (split chains to avoid unsafe-to-chain errors)
    cy.get('#state').click();
    cy.contains('NCR').click();

    cy.get('#city').click();
    cy.contains('Delhi').click();

    // Submit
    cy.get('#submit').click();

    // Verify modal content
    cy.get('.modal-content').within(() => {
      cy.contains('John Doe');
      cy.contains('john.doe@example.com');
      cy.contains('Male');
      cy.contains('1234567890');
      cy.contains('15 May,1990');
      cy.contains('Maths');
      cy.contains('Sports, Reading');
      cy.contains('123 Main St');
      cy.contains('NCR Delhi');
    });

    // Close modal
    cy.get('#closeLargeModal').click();
  });
});
