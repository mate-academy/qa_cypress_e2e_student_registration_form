/// <reference types="cypress" />

describe('Pagination chacks', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });
});
