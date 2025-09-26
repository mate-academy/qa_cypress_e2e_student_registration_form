/* eslint-disable cypress/no-force */
/// <reference types='cypress' />

const {
  generateUser
} = require('../support/generate');

describe('Student Registration page', () => {
  it('should allow to submit form after filling required fields', () => {
    const {
      mobileNumber,
      firstName,
      lastName,
      email
    } = generateUser();

    cy.visit('/');

    cy.findByPlaceholder('First Name')
      .type(firstName);

    cy.findByPlaceholder('Last Name')
      .type(lastName);

    cy.findByPlaceholder('name@example.com')
      .type(email);

    cy.get('[for="gender-radio-3"]')
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(mobileNumber);

    cy.get(`[class="subjects-auto-complete__control css-yk16xz-control"]`)
      .type(`History{enter}`);

    cy.get('[id="hobbies-checkbox-1"]')
      .click({
        force: true
      });

    cy.get('#currentAddress')
      .type('Wiskitki 48', {
        force: true
      });

    cy.get('[id="state"]')
      .type('Haryana{enter}');

    cy.get('[id="city"]')
      .type('Karnal{enter}');

    cy.get('[class="btn btn-primary"]')
      .click({
        force: true
      });
  });
});
