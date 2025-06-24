/// <reference types='cypress' />

import { getFormattedHobbies } from './getHobbies';
import { getFormattedDate } from './getFormattedDate';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  'register',
  ({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    subjects,
    hobbies,
    location
  }) => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);
    cy.get('#userNumber').type(phoneNumber);

    cy.get('#dateOfBirthInput').type('{selectAll}' + dateOfBirth);
    cy.get(
      `label[for="gender-radio-${
        ['Male', 'Female', 'Other'].indexOf(gender) + 1
      }"]`
    ).click();

    cy.get('#subjectsInput').type(
      subjects.reduce((input, subject) => input + `${subject}{Enter}`, '')
    );

    for (let i = 0; i < 3; i++) {
      if (hobbies[i]) {
        cy.get(`label[for="hobbies-checkbox-${i + 1}"]`).click();
      }
    }

    cy.get('#currentAddress').type(location.address);

    cy.get('#state').click();
    cy.get('[class$="-menu"] [class$="-option"]').then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);

      location.state = $options[randomIndex].textContent;

      cy.wrap($options[randomIndex]).click();
    });

    cy.get('#city').click();
    cy.get('[class$="-menu"] [class$="-option"]').then(($options) => {
      const randomIndex = Math.floor(Math.random() * $options.length);

      location.city = $options[randomIndex].textContent;

      cy.wrap($options[randomIndex]).click();
    });

    cy.get('#submit').click();
  }
);

Cypress.Commands.add(
  'validateUserData',
  ({
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    subjects,
    hobbies,
    location
  }) => {
    cy.checkRowValue('Student Name', `${firstName} ${lastName}`);
    cy.checkRowValue('Student Email', email);
    cy.checkRowValue('Gender', gender);
    cy.checkRowValue('Mobile', phoneNumber);
    cy.checkRowValue('Date of Birth', getFormattedDate(dateOfBirth));
    cy.checkRowValue('Subjects', subjects.join(', '));
    cy.checkRowValue('Hobbies', getFormattedHobbies(hobbies));
    cy.checkRowValue('Address', location.address);
    cy.checkRowValue('State and City', `${location.state} ${location.city}`);
  }
);

Cypress.Commands.add('checkRowValue', (rowName, value) => {
  cy.contains('td', rowName).next().should('have.text', value);
});
