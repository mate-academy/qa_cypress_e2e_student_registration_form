const faker = require('faker');

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

Cypress.Commands.add('generateRandomData', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const mobileNumber = faker.phone.phoneNumber('##########');
  const dateOfBirth = '02 November,1990';
  const subject = 'Math';
  const currentAddress = faker.address.streetAddress();
  const state = 'NCR';
  const city = 'Delhi';
  const genderOptions = ['Male', 'Female', 'Other'];
  const randomGender = genderOptions[Math
    .floor(Math.random() * genderOptions.length)];
  const hobbiesOptions = ['Sports', 'Reading', 'Music'];
  const randomHobbies = faker.random.arrayElement(hobbiesOptions);

  return {
    firstName,
    lastName,
    email,
    mobileNumber,
    dateOfBirth,
    subject,
    currentAddress,
    state,
    city,
    gender: randomGender,
    hobby: randomHobbies
  };
});
