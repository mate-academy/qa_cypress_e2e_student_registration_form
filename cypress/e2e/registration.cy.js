/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields and submit the form', () => {
    // Fill all fields in the form
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('#gender-radio-1').check();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('1990-01-01');
    cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
    cy.get('#hobbies-checkbox-1').check();
    cy.get('#currentAddress').type('123 Main St');
    cy.get('#state').type('NCR{enter}');
    cy.get('#city').type('Delhi{enter}');

    // Click on [Submit] button
    cy.get('#submit').click();

    // Assert inputed data in modal window
    cy.get('.table-responsive').should('contain', 'John');
    cy.get('.table-responsive').should('contain', 'Doe');
    cy.get('.table-responsive').should('contain', 'john.doe@example.com');
    cy.get('.table-responsive').should('contain', 'Male');
    cy.get('.table-responsive').should('contain', '1234567890');
    cy.get('.table-responsive').should('contain', '01 January,1990');
    cy.get('.table-responsive').should('contain', 'Maths');
    cy.get('.table-responsive').should('contain', 'Sports');
    cy.get('.table-responsive').should('contain', '123 Main St');
    cy.get('.table-responsive').should('contain', 'NCR Delhi');
  });
});
