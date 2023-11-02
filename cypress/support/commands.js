// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('userInfo', () => {
    const firstName = 'Tanjiro';
    const lastName = 'Kamado';
    const email = 'tanjirokamado213@gmail.com';
    const phoneNumber = '0997548712';
    const subject = 'English';
    const adress = 'Japan, Kutomori';

    return { firstName, lastName, email, phoneNumber, subject, adress };
});
