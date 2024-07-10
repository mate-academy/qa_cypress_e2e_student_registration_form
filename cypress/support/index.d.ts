/// <reference types="cypress" />

type User = {
  name: string;
  surname: string;
  email: string;
  sex: string;
  tel: string;
  birthday: string;
  subject: string;
  hobbies: string[];
  address: string;
  state: string;
  city: string;
};

declare namespace Cypress {
  interface Chainable<Subject> {
    fillForm(user: User): Chainable<any>;
  }
}
