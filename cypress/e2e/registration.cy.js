/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1120);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register new student ', () => {
    const name = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();

    cy.get('[placeholder="First Name"]').type(name);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-3"]').click();
    cy.get('[placeholder="Mobile Number"]').type('0123456789');
    cy.get('[for="hobbies-checkbox-3"]').click();
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('[placeholder="Current Address"]').type(address);
    cy.get('#state').type('Har{enter}');
    cy.get('#city').type('Kar{enter}');
    cy.get('#submit').click();
    cy.get('.modal-header')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', name + ' ' + lastName);
    cy.get('.modal-body').should('contain', 'Other');
    cy.get('.modal-body').should('contain', '0123456789');
    cy.get('.modal-body').should('contain', 'Music, Reading');
    cy.get('.modal-body').should('contain', address);
    cy.get('.modal-body').should('contain', 'Haryana Karnal');
  });
});
