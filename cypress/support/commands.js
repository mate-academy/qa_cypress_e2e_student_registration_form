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
/// <reference types='cypress' />
Cypress.Commands.add('openRegisterPage', () => {
  cy.visit('/');
  cy.get('[href="/forms"]').click();
  cy.get('[href="/automation-practice-form"]').click();
});

Cypress.Commands.add('findById', (id) => {
  return cy.get(`#${id}`);
});

Cypress.Commands.add('selectDate', (day, monthIndex, year) => {
  cy.get('#dateOfBirthInput').click();

  cy.get('.react-datepicker__year-select')
    .should('be.visible')
    .select(year);

  cy.get('.react-datepicker__month-select')
    .should('be.visible')
    .select(monthIndex);

  cy.get('.react-datepicker__day')
    .not('.react-datepicker__day--outside-month')
    .contains(new RegExp(`^${day}$`))
    .click();
});

Cypress.Commands.add('assertRow', (label, expected) => {
  cy.get('.modal-content table')
    .contains('td', label)
    .parent('tr')
    .within(() => {
      cy.get('td').eq(1).should('have.text', expected);
    });
});
