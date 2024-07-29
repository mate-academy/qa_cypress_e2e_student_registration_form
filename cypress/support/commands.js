Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  return cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('pickDate', (data) => {
  return cy.get(`.react-datepicker__${data}`);
});
