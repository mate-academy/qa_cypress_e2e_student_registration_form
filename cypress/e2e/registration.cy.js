/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should fill out all fields with random data and submit', () => {
    cy.get('#firstName').type('Bob');
    cy.get('#lastName').type('Miller');
    cy.get('#userEmail').type('bob.miller@gmail.com');
    cy.get('#gender-radio-1').check();
    cy.get('#userNumber').type('0678900000');
    cy.get('#dateOfBirthInput').type('1989-12-12');
    cy.get('.subjects-auto-complete__value-container').type('Math{enter}');
    cy.get('#hobbies-checkbox-1').check();
    cy.get('#currentAddress').type('10 Khreshatik St');
    cy.get('#state').type('NCR{enter}');
    cy.get('#city').type('Delhi{enter}');

    cy.get('#submit').click();

    cy.get('.table-responsive').should('contain', 'Bob');
    cy.get('.table-responsive').should('contain', 'Miller');
    cy.get('.table-responsive').should('contain', 'bob.miller@gmail.com');
    cy.get('.table-responsive').should('contain', 'Male');
    cy.get('.table-responsive').should('contain', '0678900000');
    cy.get('.table-responsive').should('contain', '12 December,1989');
    cy.get('.table-responsive').should('contain', 'Maths');
    cy.get('.table-responsive').should('contain', 'Sports');
    cy.get('.table-responsive').should('contain', '10 Khreshatik St');
    cy.get('.table-responsive').should('contain', 'NCR Delhi');
  });
});
