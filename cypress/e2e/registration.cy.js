import generateUser from '../support/generateNewUser';
/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    user = generateUser();
  });

  it('should fill the form and register a new user', () => {
    cy.fillForm(user);
    cy.get('#submit').click();

    cy.get('#modal-header')
      .should('contain.text', 'Thanks for submitting the form');
    cy.checkValuesInTable(user);
    cy.get('button[id="closeLargeModal"]')
      .should('contain.text', 'Close').click();
  });
});
