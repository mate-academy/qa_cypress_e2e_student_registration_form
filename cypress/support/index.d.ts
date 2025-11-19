/// <reference types="cypress" />
interface User {
  email: string;
  password: string;
  username: string;
  lastName: string;
}

declare namespace Cypress {
  interface Chainable<Subject = any> {
    findByPlaceholder(placeholder: string): Chainable<Subject>;
    assertPageUrl(url: string): Chainable<Subject>;
    registerNewUser(): Chainable<User>;
    findByTestId(value: string): Chainable<Subject>;
    checkAuthorization(username: string): Chainable<Subject>;
    login(user: User): Chainable<Subject>;
  }
}
