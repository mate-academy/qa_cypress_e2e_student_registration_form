/// <reference types="cypress" />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should submit the registration form and verify the entered data', () => {
    cy.get('#firstName').type('Kok');
    cy.get('#lastName').type('Han');
    cy.get('#userEmail').type('kokhan@example.com');

    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0123456789');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('0');
    cy.contains('.react-datepicker__day--001', /^1$/).click();

    cy.get('#subjectsInput').type('Maths');
    cy.get('.subjects-auto-complete__option').contains('Maths').click();

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('#currentAddress').type('Penang, Malaysia');

    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();

    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-title')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');

    cy.get('.table-responsive').should('contain', 'Kok Han');
    cy.get('.table-responsive').should('contain', 'kokhan@example.com');
    cy.get('.table-responsive').should('contain', 'Male');
    cy.get('.table-responsive').should('contain', '0123456789');
    cy.get('.table-responsive').should('contain', 'Maths');
    cy.get('.table-responsive').should('contain', 'Sports');
    cy.get('.table-responsive').should('contain', 'Reading');
    cy.get('.table-responsive').should('contain', 'Penang, Malaysia');
    cy.get('.table-responsive').should('contain', 'NCR');
    cy.get('.table-responsive').should('contain', 'Delhi');
  });
});
