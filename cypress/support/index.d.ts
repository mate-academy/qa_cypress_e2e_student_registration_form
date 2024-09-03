// eslint-ignore
/// <reference types="cypress" />

interface User {
  username: string
  password: string
}

declare namespace Cypress {
  interface Chainable<> {
    /**
     * Returns an element containing a placeholder with this value
     * @param placeholder String
     */
    getByPlaceholder(placeholder: string): Chainable<any>

    /**
     * Returns an element containing id with this value
     * @param placeholder String
     */
    getById(id: string): Chainable<any>

    /**
     * Returns an element containing id with this value
     * @param placeholder String
     */
    getInput(name: string, value?: string): Chainable<any>

    /**
     * Returns a button containing text matching the param
     * @param buttonText String
     */
    getButtonByText(buttonText: string): Chainable<any>

    /**
     * Clicks on the submit button, submitting the form
     * @param buttonText String
     */
    submitFormByButton(buttonText: string): Chainable<any>
  }
}
