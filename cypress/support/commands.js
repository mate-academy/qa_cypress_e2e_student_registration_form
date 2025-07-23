/* eslint-disable cypress/no-force */
// @ts-nocheck
/// <reference types='cypress' />

Cypress.Commands.add('clickRandomRadio', (selector) => {
  return cy
    .get(selector)
    .its('length')
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return cy.get(selector).eq(randomIndex).check({ force: true });
    })
    .invoke('val');
});

Cypress.Commands.add('clickRandomMenu', (selector) => {
  return cy
    .get(selector)
    .its('length')
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);

      return cy.get(selector).eq(randomIndex).click({ force: true });
    })
    .invoke('text');
});

Cypress.Commands.add('clickRandomCheckBoxes', (selector) => {
  return cy
    .get(selector)
    .its('length')
    .then((count) => {
      const randomIndex = Math.floor(Math.random() * count);
      return cy.get(selector).eq(randomIndex).check({ force: true });
    })
    .parent()
    .invoke('text');
});

Cypress.Commands.add('assertModalData', (dataRowName, expecteddata) => {
  cy.get('td')
    .contains(dataRowName)
    .parent()
    .find('td')
    .eq(1)
    .should('have.text', expecteddata);
});
