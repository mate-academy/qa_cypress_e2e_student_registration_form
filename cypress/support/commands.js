Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('findByType', (type) => {
    cy.get(`[type="${type}"]`);
});

