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

Cypress.Commands.add('setGender', () => {
  cy.contains('label', 'Other').click();
});

Cypress.Commands.add('setDate', () => {
  cy.get('#dateOfBirthInput').click();
  cy.get(':nth-child(1) > .react-datepicker__day--002').click();
});

Cypress.Commands.add('setHobbies', () => {
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
});

Cypress.Commands.add('setState', () => {
  cy.get('#state > .css-yk16xz-control').click();
  cy.get('#react-select-3-option-0').click();
});

Cypress.Commands.add('setCity', () => {
  cy.get('#city > .css-yk16xz-control').click();
  cy.get('#react-select-4-option-0').click();
});

Cypress.Commands.add('assertInputedData', () => {
  cy.get('#example-modal-sizes-title-lg')
    .should('contain.text', 'Thanks for submitting the form');
});
