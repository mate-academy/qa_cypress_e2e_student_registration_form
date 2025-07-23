/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    clickRandomRadio(selector: string): Chainable<any>;
    clickRandomMenu(selector: string): Chainable<any>;
    clickRandomCheckBoxes(selector: string): Chainable<any>;
    assertModalData(dataRowName: string, expecteddata: string): Chainable<any>;
  }
}
