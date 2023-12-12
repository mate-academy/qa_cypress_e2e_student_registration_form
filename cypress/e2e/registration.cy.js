/// <reference types='cypress' />
import faker from 'faker';

// cypress/support/commands.js
Cypress.Commands.add('generateUser', () => {
  const userEmail = faker.internet.email();
  const userNumber = faker.random.number().toString();
  const subjects = 'Chemistry';
  const currentAddress = faker.address.streetAddress();

  return {
    userEmail,
    userNumber,
    subjects,
    currentAddress
  };
});

describe('Student Registration page', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1800, 1200);
    // Visit the page before each test
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill the form without the "picture" field', () => {
    // Enter data into the form
    cy.generateUser().then((randomUserData) => {
      const {
        userEmail,
        userNumber,
        subjects,
        currentAddress
      } = randomUserData;

      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

      cy.get('#firstName').type(firstName);
      cy.get('#lastName').type(lastName);
      cy.get('#userEmail').type(userEmail);
      cy.get('[for="gender-radio-1"]').click(); // Select gender as "Male"
      cy.get('#userNumber').type(userNumber);
      cy.get('#dateOfBirthInput').type('{selectall}06 Dec 2000{enter}');

      // Type the full name of the subject
      cy.get('#subjectsInput').type(subjects);

      // Select "Chemistry" from the dropdown
      cy.get('#subjectsInput').type('{downarrow}{enter}');

      // Select hobbies
      cy.get('label[for="hobbies-checkbox-1"]').click();
      // Skip the "picture" field as Cypress does not handle file uploads easily

      // Enter current address
      cy.get('#currentAddress').type(currentAddress);

      // Scroll into view and select the state
      cy.get('#state').type('{downarrow}{enter}');

      cy.get('#city').type('{downarrow}{enter}');

      // Click the "Submit" button
      cy.get('#submit').click();

      // Assert inputted data in the modal
      cy.get('.modal-body').should('be.visible');

      // Check if the data is displayed correctly in the modal
      cy.get('.modal-body').should('contain.text', firstName);
      cy.get('.modal-body').should('contain.text', lastName);
      cy.get('.modal-body').should('contain.text', userEmail);
      cy.get('.modal-body').should('contain.text', userNumber);
      cy.get('.modal-body').should('contain.text', `Subjects${subjects}`);
      cy.get('.modal-body').should('contain.text', currentAddress);
    });
  });
});
