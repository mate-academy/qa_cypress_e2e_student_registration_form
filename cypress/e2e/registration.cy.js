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

    cy.get('.modal-body').should('contain', 'Bob');
    cy.get('.modal-body').should('contain', 'Miller');
    cy.get('.modal-body').should('contain', 'bob.miller@gmail.com');
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', '0678900000');
    cy.get('.modal-body').should('contain', '12 December,1989');
    cy.get('.modal-body').should('contain', '10 Khreshatik St');
  });
});
