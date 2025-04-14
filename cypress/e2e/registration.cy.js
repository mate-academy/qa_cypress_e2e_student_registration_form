/// <reference types='cypress' />

const { faker } = require('@faker-js/faker');

describe('Student Registration page', () => {
  before(() => {});

  it('should register correctly', () => {
    cy.visit('/');

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const number = '1234567890';
    const address = faker.location.streetAddress();

    cy.get('input[placeholder="First Name"]').type(firstName);
    cy.get('input[placeholder="Last Name"]').type(lastName);
    cy.get('input[id="userEmail"]').type(email);
    cy.get('label[for="gender-radio-3"]').click();
    cy.get('input[placeholder="Mobile Number"]').type(number);
    cy.get('input[id="subjectsInput"]').type('Maths' + '{Enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('textarea[placeholder="Current Address"]').type(address);
    cy.get('div[id="state"]').type('{Enter}');
    cy.get('div[id="city"]').type('{Enter}');
    cy.get('button[id="submit"]').click();

    cy.get('div[class="modal-content"]');
  });
});
