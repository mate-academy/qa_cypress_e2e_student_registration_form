import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

describe('Student Registration page', () => {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomEmail = faker.internet.email();
  const randomPhoneNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  const randomAddress = faker.location.street();
  const reandomLorem = faker.lorem.words();

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('should sign up with valid creds', () => {
    cy.get('input[id="firstName"]').type(randomFirstName);
    cy.get('input[id="lastName"]').type(randomLastName);
    cy.get('input[id="userEmail"]').type(randomEmail);
    cy.get('[for="gender-radio-3"]').click();
    cy.get('input[id="userNumber"]').type(randomPhoneNumber);
    cy.get('#subjectsInput').type(reandomLorem);
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type(randomAddress);
    cy.get('[id="submit"]').click();

    cy.contains('.modal-content', 'Thanks for submitting the form');
    cy.contains(randomFirstName);
    cy.contains(randomLastName);
    cy.contains(randomEmail);
    cy.contains(randomPhoneNumber);
    cy.contains(randomAddress);
    cy.contains(reandomLorem);
  });
});
