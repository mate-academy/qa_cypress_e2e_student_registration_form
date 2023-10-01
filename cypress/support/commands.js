Cypress.Commands.add('getFieldById', (id) => {
  cy.get(`#${id}`);
});

Cypress.Commands.add('getFieldByAttribute', (name, value) => {
  cy.get(`[${name}="${value}"]`);
});
