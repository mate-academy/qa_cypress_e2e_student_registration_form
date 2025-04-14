import { faker } from '@faker-js/faker';

/// <reference types='cypress' />

describe('Student Registration page', () => {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomEmail = faker.internet.email();
  const randomPhoneNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  const randomAddress = faker.location.street();
  const randomLorem = faker.lorem.words();

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('should sign up with valid creds', () => {
    cy.get('input[id="firstName"]')
      .type(randomFirstName);
    cy.get('input[id="lastName"]')
      .type(randomLastName);
    cy.get('input[id="userEmail"]')
      .type(randomEmail);
    cy.get('[for="gender-radio-3"]')
      .click();
    cy.get('input[id="userNumber"]')
      .type(randomPhoneNumber);
    cy.get('.react-datepicker__input-container [id="dateOfBirthInput"]')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('October');
    cy.get('.react-datepicker__year-select')
      .select('2000');
    cy.get('.react-datepicker__day--014')
      .click();
    cy.get('#subjectsInput')
      .type(randomLorem);
    cy.get('[for="hobbies-checkbox-2"]')
      .click();
    cy.get('#currentAddress')
      .type(randomAddress);
    cy.get('[id="state"]')
      .click();
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('[id="city"]')
      .click();
    cy.get('#react-select-4-option-0')
      .click();
    cy.get('[id="submit"]')
      .click();

    cy.contains('.modal-content', 'Thanks for submitting the form')
      .should('be.visible');
    cy.contains('.modal-content', 'Student Name')
      .should('be.visible');
    cy.contains('.modal-content', 'Student Email')
      .should('be.visible');
    cy.contains('.modal-content', 'Gender')
      .should('be.visible');
    cy.contains('.modal-content', 'Mobile')
      .should('be.visible');
    cy.contains('.modal-content', 'Date of Birth')
      .should('be.visible');
    cy.contains('.modal-content', 'Subjects')
      .should('be.visible');
    cy.contains('.modal-content', 'Hobbies')
      .should('be.visible');
    cy.contains('.modal-content', 'Picture')
      .should('be.visible');
    cy.contains('.modal-content', 'Address')
      .should('be.visible');
    cy.contains('.modal-content', 'State and City')
      .should('be.visible');

    cy.contains(randomFirstName)
      .should('be.visible');
    cy.contains(randomLastName)
      .should('be.visible');
    cy.contains(randomEmail)
      .should('be.visible');
    cy.contains(randomPhoneNumber)
      .should('be.visible');
    cy.contains('14 October,2000')
      .should('be.visible');
    cy.contains(randomAddress)
      .should('be.visible');
    cy.contains(randomLorem)
      .should('be.visible');
    cy.contains('NCR Delhi')
      .should('be.visible');
  });
});
