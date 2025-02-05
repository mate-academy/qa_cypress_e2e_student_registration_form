/// <reference types='cypress' />

const { generateUserData } = require('../support/generateUserData');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register user with valid data', () => {
    const userData = generateUserData();
    cy.fillRegistrationForm(userData);
    cy.submitRegistrationForm();
    cy.verifyUserData(userData);
  });
});
