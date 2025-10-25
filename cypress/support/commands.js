/// <reference types='cypress' />

Cypress.Commands.add('fillInInput', (id, value) => {
  cy.get(id).type(value);
});

Cypress.Commands.add('checkTableValue', (label, value) => {
  cy.contains('td', label).next().should('contain.text', value);
});
