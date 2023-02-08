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
const faker = require('faker');

function generateUser() {
    const randomIndex = Math.floor(Math.random() * 3);
    const genders = ['Male', 'Female', 'Other'];
    const hobbies = ['Sports', 'Reading', 'Music'];

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const gender = genders[randomIndex];
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber('##########');
    const hobby = hobbies[randomIndex];
    const address = faker.address.streetAddress();

  return { firstName, lastName, email, phone, address, gender, hobby };
} 

module.exports = { generateUser };
