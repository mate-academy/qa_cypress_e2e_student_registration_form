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
      .type('User')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)')
      .should('contain', 'User');
    cy.get('#searchBox')
      .clear()
      .type('Userovich')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(2)')
      .should('contain', 'Userovich');
    cy.get('#searchBox')
      .clear()
      .type('40')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]')
      .should('contain', '40')
    cy.get('#searchBox')
      .clear()
      .type('mail@mail.com')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(4)')
      .should('contain', 'mail@mail.com')
    cy.get('#searchBox')
      .clear()
      .type('5000')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(5)')
      .should('contain', '5000')
    cy.get('#searchBox')
      .clear()
      .type('Department')
      .click();
    cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(6)')
      .should('contain', 'Department')
    cy.get('#searchBox')
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
  
  Cypress.Commands.add('addUser', () => {
    cy.get('#addNewRecordButton')
      .click();
    cy.get('#firstName')
      .type('User');
    cy.get('#lastName')
      .type('Userovich');
    cy.get('#userEmail')
      .type('mail@mail.com');
    cy.get('#age')
      .type('40');
    cy.get('#salary')
      .type('5000');
    cy.get('#department')
      .type('Department');
    cy.get('#submit')
      .should('contain','Submit')
      .click();
  });
  Cypress.Commands.add('deleteUser4', () => {
    cy.get('#delete-record-4 > svg > path')
        .click();
  });
  Cypress.Commands.add('deleteAllUsers', () => {
    cy.get('#delete-record-3 > svg > path')
        .click();
    cy.get('#delete-record-2 > svg > path')
        .click();
    cy.get('#delete-record-1 > svg > path')
        .click();
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })