/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {

    fillForm(userData: Object): Chainable<any>
    verifyUserData(userData: Object): Chainable<any>
  }
}
