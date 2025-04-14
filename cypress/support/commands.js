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

Cypress.Commands.add('getByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('getById', (id) => {
  cy.get(`#${id}`);
});

Cypress.Commands.add('getInput', (name, value) => {
  if (value === undefined) {
    return cy.get(`input[name="${name}"]`);
  } else {
    return cy.get(`input[name="${name}"][value="${value}"]`);
  }
});

Cypress.Commands.add('getButtonByText', (buttonText) => {
  return cy.contains('.btn', buttonText);
});

Cypress.Commands.add('submitFormByButton', (buttonText) => {
  cy.contains('button[type="submit"]', buttonText).click();
});
