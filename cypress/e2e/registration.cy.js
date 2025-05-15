/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fills the form and verifies submitted data in modal', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();

    cy.get('#subjectsInput').type('Maths{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress').type('123 Main St, City');

    cy.get('#state').click().contains('NCR').click();
    cy.get('#city').click().contains('Delhi').click();

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('John Doe');
    cy.get('td').contains('john.doe@example.com');
    cy.get('td').contains('Male');
    cy.get('td').contains('1234567890');
    cy.get('td').contains('15 April,1990');
    cy.get('td').contains('Maths');
    cy.get('td').contains('Sports, Music');
    cy.get('td').contains('123 Main St, City');
    cy.get('td').contains('NCR Delhi');

    cy.get('#closeLargeModal').click();
  });
});
