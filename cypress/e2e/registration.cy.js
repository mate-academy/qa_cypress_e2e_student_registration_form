/// <reference types='cypress' />
/// <reference types="cypress" />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('fills in the registration form and submits it', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');

    cy.get('#userEmail').type('john.doe@example.com');

    cy.get('#genterWrapper').find('label').contains('Male').click();

    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get('#hobbiesWrapper').find('label').contains('Sports').click();

    cy.get('#currentAddress').type('123 Main St, Cityville');

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.table-responsive').should('contain', 'John Doe');
    cy.get('.table-responsive').should('contain', 'john.doe@example.com');
    cy.get('.table-responsive').should('contain', 'Male');
    cy.get('.table-responsive').should('contain', '1234567890');
  });
});
