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

Cypress.Commands.add('addOrEditWorker', () => {
  cy.get('#firstName').type('{selectall}' + 'John')
  cy.get('#lastName').type('{selectall}' + 'Smith')
  cy.get('#userEmail').type('{selectall}' + 'JohnSmyth@mail.com')
  cy.get('#age').type('{selectall}' + '30')
  cy.get('#salary').type('{selectall}' + '3000')
  cy.get('#department').type('{selectall}' + 'sales' + '{enter}')
});

Cypress.Commands.add('validateWorker', () => {
  cy.get('.rt-td').should('contain.text', 'John')
  cy.get('.rt-td').should('contain.text', 'Smith')
  cy.get('.rt-td').should('contain.text', 'JohnSmyth@mail.com')
  cy.get('.rt-td').should('contain.text', '30')
  cy.get('.rt-td').should('contain.text', '3000')
  cy.get('.rt-td').should('contain.text', 'sales')
})
