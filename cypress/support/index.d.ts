type User = {
  firstName: string;
  lastName: string;
  userEmail: string;
  userSex: string;
  userNumber: string;
  dateOfBirth: string;
  subject: string;
  hobbies: string[];
  address: string;
  state: string;
  city: string;
};

declare namespace Cypress {
  interface Chainable {
    fillForm(user: User): Chainable<any>;
    checkUser(user: User): Chainable<any>;
  }
}
