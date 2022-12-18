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
Cypress.Commands.add('findByPlaceholder', (placeholder)=> {
    cy.get(`[placeholder = "${placeholder}"]`)
});

Cypress.Commands.add('submittingFormContainsInBody', (name)=> {
    cy.get('.modal-body')
    .should('contain', `${name}`)
});

Cypress.Commands.add('submittingFormContainsInHeader', (name)=> {
    cy.get('.modal-header')
    .should('contain',  `${name}`)
});

Cypress.Commands.add('submittingFormContainsInFooter', (name)=> {
    cy.get('.modal-footer')
    .should('contain', `${name}`)
});

Cypress.Commands.add('submittingFormExists', () => {
    cy.get('.modal-content')
    .should('exist')
});