/* eslint-disable */
/// <reference types="cypress" />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/student-registration'); // 🔹 Navigate to registration page
  });

  it('should fill all fields except picture, submit the form, and verify modal data', () => {
    // 🔹 Fill out required form fields
    cy.get("input[name='firstName']").type('John');
    cy.get("input[name='lastName']").type('Doe');
    cy.get("input[name='email']").type('[email protected]');
    cy.get("input[name='phone']").type('1234567890');
    cy.get("select[name='gender']").select('Male');
    cy.get("input[name='birthDate']").type('2000-05-15');
    cy.get("textarea[name='address']").type('123 Cypress St, Test City');

    // 🔹 Do not upload a picture

    // 🔹 Click submit button
    cy.get("button[type='submit']").click();

    // 🔹 Assert modal contains entered data
    cy.get('.modal').should('be.visible');
    cy.contains('.modal', 'John Doe').should('be.visible');
    cy.contains('.modal', '[email protected]').should('be.visible');
    cy.contains('.modal', '1234567890').should('be.visible');
    cy.contains('.modal', 'Male').should('be.visible');
    cy.contains('.modal', '2000-05-15').should('be.visible');
    cy.contains('.modal', '123 Cypress St, Test City').should('be.visible');

    // 🔹 Ensure modal does NOT include a picture
    cy.get('.modal img').should('not.exist');
  });
});
