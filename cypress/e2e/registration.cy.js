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
    cy.get('label[for="gender-radio-1"]').click();

    // Mobile number
    cy.get('#userNumber').type('1234567890');

    // Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get(
      '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
    ).click();
    cy.get('#dateOfBirthInput').should('have.value', '15 May 1990');

    // Subjects
    cy.get('#subjectsInput').type('Maths{enter}');

    // Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    // Address
    cy.get('#currentAddress').type('123 Main St');

    // State & City
    cy.get('#state').click();
    cy.get('#stateCity-wrapper').contains('NCR').click();
    cy.get('#city').click();
    cy.get('#stateCity-wrapper').contains('Delhi').click();

    // Submit button: scroll, assert visibility, then click
    cy.get('#submit').scrollIntoView();
    cy.get('#submit').should('be.visible');
    cy.get('#submit').click();

    // Assert modal
    cy.get('.modal-content').should('be.visible');

    // Table assertions: safe version
    cy.get('table').within(() => {
      cy.contains('td', 'Student Name').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'John Doe');
      });
      cy.contains('td', 'Student Email').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'john.doe@example.com');
      });
      cy.contains('td', 'Gender').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'Male');
      });
      cy.contains('td', 'Mobile').then(($el) => {
        cy.wrap($el.next()).should('have.text', '1234567890');
      });
      cy.contains('td', 'Date of Birth').then(($el) => {
        cy.wrap($el.next()).should('have.text', '15 May,1990');
      });
      cy.contains('td', 'Subjects').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'Maths');
      });
      cy.contains('td', 'Hobbies').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'Sports, Reading');
      });
      cy.contains('td', 'Address').then(($el) => {
        cy.wrap($el.next()).should('have.text', '123 Main St');
      });
      cy.contains('td', 'State and City').then(($el) => {
        cy.wrap($el.next()).should('have.text', 'NCR Delhi');
      });
    });

    // Close modal
    cy.get('#closeLargeModal').click();
  });
});
