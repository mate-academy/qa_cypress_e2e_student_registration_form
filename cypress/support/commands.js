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
const faker = require('@faker-js/faker');

const genders = ['Male', 'Female', 'Other'];
const hobbies = ['Sports', 'Reading', 'Music'];
const subjects = ['Math', 'Science', 'History'];

function generateUser() {
  const randomNumber = Math.round(Math.random() * 1000);
  const username = `user${randomNumber}`;
  const lastname = `user${randomNumber}${randomNumber}`;
  const email = `${username}@mail.com`;
  const phone = faker.phone.phoneNumber(); // Ensure to use faker for valid phone numbers
  const randomIndexGender = Math.floor(Math.random() * genders.length);
  const randomIndexHobby = Math.floor(Math.random() * hobbies.length);
  const randomIndexSubject = Math.floor(Math.random() * subjects.length);
  return {
    email,
    username,
    phone,
    lastname,
    gender: genders[randomIndexGender],
    hobby: hobbies[randomIndexHobby],
    subject: subjects[randomIndexSubject]
  };
}

module.exports = { generateUser };
