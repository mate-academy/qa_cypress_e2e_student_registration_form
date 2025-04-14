interface BirthDate {
  day: string,
  month: string,
  year: string,
}

declare namespace Cypress {
  interface Chainable<Subject> {
    selectRandomChild(parentId: string): Chainable<any>,
    selectBirthDate(birthDate: BirthDate): Chainable<any>
  }
}