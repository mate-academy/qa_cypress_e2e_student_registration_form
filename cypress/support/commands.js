Cypress.Commands.add('findByPlaceholder', (placrholder) => {
    cy.get('[placeholder="${placeholder}"]');
});
Cypress.Commands.add('findByType', (type) => {
    cy.get('[type=${type}"]');
});