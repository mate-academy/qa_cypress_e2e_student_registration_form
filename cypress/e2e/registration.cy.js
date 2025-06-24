/// <reference types='cypress' />

import { generateUser } from '../support/generateUser';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('registers a student with valid data', () => {
    const user = generateUser();

    cy.register(user);
    cy.validateUserData(user);
  });
});
