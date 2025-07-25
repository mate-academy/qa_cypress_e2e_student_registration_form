/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const phoneNumber = Math.random().toString().slice(2, 12);
  const address = faker.location.streetAddress();

  it('should fill all fields in forms except "picture"', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);

    cy.setGender();

    cy.get('#userNumber').type(phoneNumber);

    cy.setDate();

    cy.setSubjects();

    cy.setHobbies();

    cy.get('#currentAddress').type(address);

    cy.setState();

    cy.setCity();

    cy.get('#submit').click();

    cy.assertInputedData();
  });
});
