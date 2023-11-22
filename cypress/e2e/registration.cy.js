/* eslint-disable cypress/no-force */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should fill out all fields with random data and submit', () => {
    cy.get('#firstName').type('Bob');
    cy.get('#lastName').type('Miller');
    cy.get('#userEmail').type('bob.miller@gmail.com');
    cy.get('#gender-radio-1').check({ force: true });
    cy.get('#userNumber').type('0678900000');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1991');
    cy.get('.react-datepicker__month-select').select('December');
    cy.get('.react-datepicker__day--012').click();

    cy.get('[id="subjectsContainer"]').type(`Math{enter}`);
    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#currentAddress').type('10 Khreshatik St');
    cy.get('#state').click({ force: true });
    cy.get('#react-select-3-input').type('NCR{enter}', { force: true });
    cy.get('#city').click({ force: true });
    cy.get('#react-select-4-input').type('Delhi{enter}', { force: true });

    cy.get('#submit').click({ force: true });

    cy.get('.modal-body').should('contain', 'Bob');
    cy.get('.modal-body').should('contain', 'Miller');
    cy.get('.modal-body').should('contain', 'bob.miller@gmail.com');
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', '0678900000');
    cy.get('.modal-body').should('contain', '12 December,1991');
    cy.get('.modal-body').should('contain', '10 Khreshatik St');
  });
});
