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

Cypress.Commands.add('getById', (id) => {
  cy.get(`#${id}`);
});

Cypress.Commands.add('fillForm', ({
  firstName,
  lastName,
  userEmail,
  userNumber,
  address,
  state,
  city,
  gender,
  subjects,
  hobbies
}) => {
  cy.getById('firstName').type(firstName);
  cy.getById('lastName').type(lastName);
  cy.getById('userEmail').type(userEmail);
  cy.contains('label', gender).click();
  cy.getById('userNumber').type(userNumber);

  subjects.forEach((subject) => {
    cy.getById('subjectsInput').type(subject + `{Enter}`);
  });

  hobbies.forEach((hobby) => {
    cy.contains('label', hobby).click();
  });

  cy.getById('currentAddress').type(address);

  cy.getById('state').click();
  cy.contains('div', state).click();

  cy.getById('city').click();
  cy.contains('div', city).click();
});
