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

Cypress.Commands.add('newUser', () => {
    const { generateUser } = require('../support/generate')
    const { firstN, lastN, mail, ageU, salaryU, departUer  } = generateUser();
      cy.get('#addNewRecordButton').click();
      cy.get('#firstName').type(firstN);
      cy.get('#lastName').type(lastN);
      cy.get('#userEmail').type(mail);
      cy.get('#age').type(ageU);
      cy.get('#salary').type(salaryU);
      cy.get('#department').type(departUer);
      cy.get('#submit').click();
})
