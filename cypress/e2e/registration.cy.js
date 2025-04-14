/// <reference types="cypress" />

describe('Automation Practice Form', () => {
  beforeEach(() => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });


    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form and assert data in modal', () => {

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');


    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--010').select('10');


    cy.get('#currentAddress').type('123 Main St, Anytown, USA');


    cy.get('.subjects-auto-complete__value-container').type('Math{enter}');


    cy.get('input[type="checkbox"][value="Sports"]').check();


    cy.get('#submit').click();


    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-body').should('contain', 'John Doe');
    cy.get('.modal-body').should('contain', 'john.doe@example.com');
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', '1234567890');
    cy.get('.modal-body').should('contain', '10 April, 1990');
    cy.get('.modal-body').should('contain', '123 Main St, Anytown, USA');
    cy.get('.modal-body').should('contain', 'Math');
    cy.get('.modal-body').should('contain', 'Sports');


    cy.get('#closeLargeModal').click();
  });
});
