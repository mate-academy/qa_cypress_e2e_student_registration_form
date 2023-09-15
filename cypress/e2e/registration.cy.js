/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('allow successful registration', () => {
    cy.viewport(1920, 1080);
    const firstName = 'Name';
    const lastName = 'Lastname';
    const email = 'test@test.com';

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type('1234567890');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type('Ukraine');
    cy.get('#state > div > div.css-1hwfws3').type('NCR{enter}');
    cy.get('#city > div > div.css-1hwfws3').type('Delhi{enter}');
    cy.get('#submit').click();
    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
  });
});
