/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should fill the form', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('oBb3l@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890'); // вибір 15 числа
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click(); // перевірка чи вибрано checkbox #hobbies-checkbox-1').check();
    cy.get('#currentAddress').type('123 Main St');
    cy.get('#state').click();

    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();

    cy.get('.modal-content').should('contain', 'John Doe');
    cy.get('.modal-content').should('contain', 'oBb3l@example.com');
    cy.get('.modal-content').should('contain', '1234567890');
    cy.get('.modal-content').should('contain', '25 July,2025');
    cy.get('.modal-content').should('contain', 'Maths');
    cy.get('.modal-content').should('contain', 'Sports');
    cy.get('.modal-content').should('contain', '123 Main St');
    cy.get('.modal-content').should('contain', 'NCR Gurgaon');
  });
});
