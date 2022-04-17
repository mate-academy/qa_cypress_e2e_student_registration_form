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

Cypress.Commands.add('validUser', () => { 
  cy.contains('.rt-td', 'Kierra')
  .should('contain', 'Kierra');
  cy.contains('.rt-td', 'Gentry')
  .should('contain', 'Gentry');
  cy.contains('.rt-td', '29')
  .should('contain', '29');
  cy.contains('.rt-td', 'kierra@example.com')
  .should('contain', 'kierra@example.com');
  cy.get(':nth-child(3) > .rt-tr > :nth-child(5)')
  .should('contain', '2000');
  cy.contains('.rt-td', 'Legal')
  .should('contain', 'Legal');
});

Cypress.Commands.add('searchAllColumn', () => {
  cy.get('#searchBox')
  .type('Marya')
  .click()
  .clear();
  cy.get('#searchBox')
  .type('Liddl')
  .click()
  .clear();
  cy.get('#searchBox')
  .type('34')
  .click()
  .clear();
  cy.get('#searchBox')
  .type('Liddl@gmail.com')
  .click()
  .clear();
  cy.get('#searchBox')
  .type('1500')
  .click()
  .clear();
  cy.get('#searchBox')
  .type('QA')
  .click()
  .clear();
});

Cypress.Commands.add('deleteAllUsers', () => {
  cy.get('#delete-record-3')
    .click();
  cy.get('#delete-record-2')
  .click();
  cy.get('#delete-record-1')
    .click();
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
