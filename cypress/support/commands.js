/// <reference types='cypress' />

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

Cypress.Commands.add('fillForm', (userData) => {
  const {
    gender,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    subjects,
    hobbies,
    address,
    stateAndCity
  } = userData;

  cy.get('#firstName').type(firstName);

  cy.get('#lastName').type(lastName);

  cy.get('#userEmail').type(email);

  let radioButtonId = 'gender-radio-';

  if (gender === 'Male') {
    radioButtonId += 1;
  } else if (gender === 'Female') {
    radioButtonId += 2;
  } else {
    radioButtonId += 3;
  }

  cy.get(`[for=${radioButtonId}]`).click();

  cy.get('#userNumber').type(phoneNumber);

  cy.get('#dateOfBirthInput').type(`{selectAll}` + birthDate + `{esc}`);

  cy.get('#subjectsInput').type(subjects + `{enter}`);

  let hobbieCheckbox = 'hobbies-checkbox-';

  if (hobbies === 'Sports') {
    hobbieCheckbox += 1;
  } else if (hobbies === 'Reading') {
    hobbieCheckbox += 2;
  } else if (hobbies === 'Music') {
    hobbieCheckbox += 3;
  }

  cy.get(`[for=${hobbieCheckbox}]`).click();

  cy.get('#currentAddress').type(address);

  const statesLength = stateAndCity.length;
  const randomState = Math.floor(Math.random() * statesLength);

  const cityLength = stateAndCity[randomState].cities.length;
  const randomCity = Math.floor(Math.random() * cityLength);

  const state = stateAndCity[randomState].state;
  const city = stateAndCity[randomState].cities[randomCity];

  cy.get('#state').type(state + `{enter}`);
  cy.get('#city').type(city + `{enter}`);

  cy.wrap({ state, city });
});

Cypress.Commands.add('verifyUserData', (userData, state, city) => {
  const {
    gender,
    firstName,
    lastName,
    email,
    phoneNumber,
    birthDate,
    subjects,
    hobbies,
    address
  } = userData;

  cy.get('.modal-dialog').within(() => {
    cy.get('table').should('contain.text', firstName)
      .should('contain.text', lastName)
      .should('contain.text', email)
      .should('contain.text', gender)
      .should('contain.text', phoneNumber)
      .should('contain.text', birthDate)
      .should('contain.text', subjects)
      .should('contain.text', hobbies)
      .should('contain.text', address)
      .should('contain.text', state)
      .should('contain.text', city);
  });
});
