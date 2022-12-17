/// <reference types='cypress' />

import { faker } from '@faker-js/faker';
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNumber = Math.random().toString().slice(2);
const street = faker.address.streetName();
const numberOfStreet = faker.address.streetAddress();

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
    cy.viewport(550, 750);
  });

  it('', () => {
    cy.get('[placeholder="First Name"]')
      .click()
      .type(firstName);
    cy.get('[placeholder="Last Name"]')
      .click()
      .type(lastName);
    cy.get('[placeholder="name@example.com"]')
      .click()
      .type(`${firstName}.${lastName}@gmail.com`);
    cy.get('[id="gender-radio-1"]')
      .click({ force: true });
    cy.get('[placeholder="Mobile Number"]')
      .click()
      .type(phoneNumber);
    cy.get('[id="dateOfBirthInput"]')
      .click()
      .type('{selectAll}')
      .type('16 Jan 1995')
      .type('{enter}');
    cy.get('[id="subjectsContainer"]')
      .type('Ch');
    cy.get('[id="react-select-2-option-0"]')
      .click();
    cy.get('[id="hobbies-checkbox-1"]')
      .click({ force: true });
    cy.get('[id="hobbies-checkbox-3"]')
      .click({ force: true });
    cy.get('[id="currentAddress"]')
      .type(`${street} ${numberOfStreet}`);
    cy.get('[id="state"]')
      .click();
    cy.get('[id="react-select-3-option-1"]')
      .click();
    cy.get('[id="react-select-4-input"]')
      .click({ force: true });
    cy.get('[id="react-select-4-option-1"]')
      .click({ force: true });
    cy.get('[id="submit"]')
      .click();
    cy.get('[id="example-modal-sizes-title-lg"]')
    .should('contain', 'Thanks for submitting the form');
  });
});
