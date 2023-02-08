Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('pickDate', (date) => {
  cy.get(`.react-datepicker__${date}`);
})