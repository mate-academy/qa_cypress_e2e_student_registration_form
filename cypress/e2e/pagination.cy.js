/// <reference types="cypress" />

describe('Pagination chacks', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

  it('Should check the pagiantion', () => {
    cy.visit('/webtables');

    cy.get('.-center')
      .should('exist');

    cy.get('.-pageJump > input')
      .should('exist');

    cy.get('[type="number"]')
      .invoke('val')
      .should('equal', '1');

    cy.get('.-totalPages')
      .should('exist');

    cy.get('div[class="-previous"] button')
      .should('be.visible');

    cy.get('div[class="-next"] button')
      .should('be.visible');
  });
});