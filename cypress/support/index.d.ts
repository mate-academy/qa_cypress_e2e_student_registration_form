/// <reference types='cypress' />

declare namespace Cypress {
  interface Chainable<Subject> {
    fillInInput(id: string, value: string): Chainable<any>,
    checkTableValue(label: string, value: string): Chainable<any>,
  }
}
