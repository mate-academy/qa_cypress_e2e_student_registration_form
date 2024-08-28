/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  const { faker } = require('@faker-js/faker');
  const randomName = faker.person.firstName();
  const randomEmail = faker.internet.email();
  const randomLastName = faker.person.lastName();
  const randomPhoneNumber = faker.string.numeric(10);
  const randomDateOfBirth = '19 Sep 1985';
  const randomAddress = faker.location.streetAddress({ useFullAddress: true });

  it('should put input data in the modal window', () => {
    cy.get('#dateOfBirthInput').type(randomDateOfBirth);
    cy.get('[placeholder="First Name"]').type(randomName);
    cy.get('.subjects-auto-complete__value-container').type('Chemistry');
    cy.get('.subjects-auto-complete__value-container').type('{enter}');
    cy.get('#lastName').type(randomLastName);
    cy.get('#userEmail').type(randomEmail);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#userNumber').type(randomPhoneNumber);

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#currentAddress').type(randomAddress);
    cy.get('#stateCity-wrapper > :nth-child(2)').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#stateCity-wrapper > :nth-child(3)').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should(
      'contain',
      'Thanks for submitting the form'
    );
  });
});
