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
Cypress.Commands.add("findById", (name) => {
  cy.get(`#${name}`);
});

Cypress.Commands.add("findByTag", (name) => {
  cy.contains("tr", `${name}`);
});

Cypress.Commands.add("selectMonth", (month) => {
  cy.get(".react-datepicker__month-select").select(month);
});

Cypress.Commands.add("selectYear", (year) => {
  cy.get(".react-datepicker__year-select").select(year);
});

Cypress.Commands.add("selectDay", (day) => {
  cy.get(".react-datepicker__day")
    .not(".react-datepicker__day--outside-month")
    .contains(day)
    .click();
});