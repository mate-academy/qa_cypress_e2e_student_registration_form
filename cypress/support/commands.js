Cypress.Commands.add('findByPlaceholder', (placeholder) => {
    cy.get(`[placeholder="${placeholder}"]`);
});

Cypress.Commands.add('findByType', (type) => {
    cy.get(`[type="${type}"]`);
});

Cypress.Commands.add('assertMessage', (numb, message) => {
    cy.get(`tbody > :nth-child(${numb}) > :nth-child(2)`)
      .should('contain.text', `${message}`); 
});
