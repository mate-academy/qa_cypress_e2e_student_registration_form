/// <reference types="cypress" />

interface Location {
  address: string;
  state: string;
  city: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  subjects: string[];
  hobbies: boolean[];
  location: Location;
}

declare namespace Cypress {
  interface Chainable<Subject> {
    register(
      user: User & { location: Pick<Location, 'address'> }
    ): Chainable<any>;
    validateUserData(user: User): Chainable<any>;
    checkRowValue(rowName: string, value: string): Chainable<any>;
  }
}
