/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {

      findByPlaceholder(): Chainable<any>

      findByPlaceholder(title: string): Chainable<any>
    }
  }