/// <reference types='cypress' />

const { generateUserData } = require('../e2e/generateUserData');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it(`should submit the form without selecting the picture`, () => {
    const userData = generateUserData();

    cy.fillForm(userData);

    cy.contains('button', 'Submit').click();

    cy.get('.modal-dialog')
      .should('contain.text', 'Thanks for submitting the form');
  });

  it('should contain the modal window with inputed data ' +
    'after submitting the form', () => {
    const userData = generateUserData();

    cy.fillForm(userData).then(({ state, city }) => {
      cy.contains('button', 'Submit').click();

      cy.verifyUserData(userData, state, city);
    });
  });
});
