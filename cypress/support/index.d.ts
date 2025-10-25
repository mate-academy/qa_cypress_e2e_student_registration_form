/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        assertFormValues(formIndex: number, formData: string): Chainable<any>
        chooseRandomHobbies(randomIndex: string, hobbies: string[]): Chainable<any>
}
}