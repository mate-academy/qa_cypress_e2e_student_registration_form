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

const { convertShortMonthToFull } = require('./generate');

Cypress.Commands.add('getAndTypeText', (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add('chechTableDataBySelector', (selector) => {
  cy.get(selector).then(function($value) {
    const selectedValue = $value.text();
    cy.get('td').should('contain.text', selectedValue);
  });
});

Cypress.Commands.add('chechTableDataByValue', (value) => {
  cy.get('td').should('contain.text', value);
});

Cypress.Commands.add('chechBirthDate', () => {
  cy.get('#dateOfBirthInput').then(function($value) {
    const fullMonth = $value.val().split(' ');
    const month = convertShortMonthToFull(fullMonth[1]);
    fullMonth[1] = ` ${month},`;
    cy.get('td').should('contain.text', fullMonth.join(''));
  });
});
