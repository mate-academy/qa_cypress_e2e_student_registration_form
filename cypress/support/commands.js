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

Cypress.Commands.add('assertFormValues', (formIndex, formData) => {
  cy.get(`tbody > :nth-child(${formIndex}) > :nth-child(2)`)
    .should('contain.text', formData);
});

Cypress.Commands.add('chooseRandomHobbies', (randomIndex, hobbies) => {
  cy.get('body').then(() => {
    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${Number(randomIndex) + 1})`)
      .click();
    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${Number(randomIndex) + 1})`)
      .invoke('text')
      .then((hobby) => {
        hobbies.push(hobby);
      });
  });
});
