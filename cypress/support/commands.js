Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('pickDate', (data) => {
  cy.get(`.react-datepicker__${data}`);
});
