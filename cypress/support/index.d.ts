/// <reference types="cypress" />
interface Creds {
  username: string;
  password: string;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    getFieldById(id: string): Chainable<any>;
    getFieldByAttribute(name: string, value: string): Chainable<any>;
  }
}
