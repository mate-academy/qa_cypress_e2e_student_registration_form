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
Cypress.Commands.add('clickRandomOption', (selectorExample) => {
  return cy.get(selectorExample).then(($options) => {
    const count = $options.length;
    if (count > 0) {
      const randomIndex = Math.floor(Math.random() * count);
      const $selected = $options[randomIndex];
      cy.wrap($selected).click();
      // Wrap the value for Cypress chainability
      return cy.wrap(Cypress.$($selected).text());
    }
    // If no options found, wrap undefined
    return cy.wrap(undefined);
  });
});

Cypress.Commands.add('getRandomLetter', () => {
  const alphabet = 'abcdefghijlmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * alphabet.length);
  return alphabet[randomIndex];
});

Cypress.Commands.add('assertModalData', (dataRowName, expecteddata) => {
  cy.get('td').contains(dataRowName).parent().find('td')
    .eq(1).should('have.text', expecteddata);
});
