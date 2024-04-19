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

Cypress.Commands.add('findByID', (ID) => {
  cy.get(`[ID="${ID}"]`);
});

Cypress.Commands.add('checkValuesInTable', (user) => {
  cy.get('tbody').should('contain.text', `${user.firstName} ${user.lastName}`);
  cy.get('tbody').should('contain.text', user.email);
  cy.get('tbody').should('contain.text', user.gender);
  cy.get('tbody').should('contain.text', user.phone);
  cy.get('tbody').should('contain.text', user.birthday);
  cy.get('tbody').should('contain.text', user.subjects);
  cy.get('tbody').should('contain.text', user.hobbie);
  cy.get('tbody').should('contain.text', user.address);
  cy.get('tbody').should('contain.text', 'Uttar Pradesh Lucknow');
});
