/// <reference types="cypress" />

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
  'fillForm',
  ({
    name,
    surname,
    email,
    sex,
    tel,
    birthday,
    subject,
    hobbies,
    address,
    state,
    city
  }) => {
    cy.get('#firstName').type(name);
    cy.get('#lastName').type(surname);
    cy.get('#userEmail').type(email);
    cy.get(`label[for="gender-radio-${sex}"]`).click();
    cy.get('#userNumber').type(tel);
    cy.get('#dateOfBirthInput').type(`{selectAll}${birthday}{enter}`);
    cy.get('#subjectsInput').type(subject);
    hobbies.forEach((hobbie) => {
      cy.get(`label[for="hobbies-checkbox-${hobbie}"]`).click();
    });
    cy.get('#currentAddress').type(address);
    cy.contains('div', 'Select State').type(`${state}{enter}`);
    cy.contains('div', 'Select City').type(`${city}{enter}`);
  }
);
