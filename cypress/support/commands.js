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
import { faker } from '@faker-js/faker';

function generateUser() {
  const randomNumber = Math.round(Math.random() * 1000);
  const username = `user${randomNumber}`;
  const lastname = `user${randomNumber}${randomNumber}`;
  const email = `${username}@mail.com`;
  const phone = Math.round(Math.random() * 10000000000);
  const address = faker.location.streetAddress();
  const gendersdate = ['Male', 'Female', 'Other'];
  const hobbiesdate = ['Sports', 'Reading', 'Music'];
  const subjectdate = ['Math', 'Science', 'History'];
  const gender = gendersdate[Math.floor(Math.random() * gendersdate.length)];
  const hobbies = hobbiesdate[Math.floor(Math.random() * hobbiesdate.length)];
  const subject = subjectdate[Math.floor(Math.random() * subjectdate.length)];
  // eslint-disable-next-line max-len
  return {
    email,
    username,
    phone,
    lastname,
    address,
    gender,
    hobbies,
    subject
  };
}

module.exports = { generateUser };
