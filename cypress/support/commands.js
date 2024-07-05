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
  // enter firstname:
  cy.get('#firstName').type(userData.firstName);

  // enter lastname:
  cy.get('#lastName').type(userData.lastName);

  // enter email:
  cy.get('#userEmail').type(userData.email);

  // select gender:
  const userGender = userData.gender;
  let radioButtonId = 'gender-radio-';

  if (userGender === 'Male') {
    radioButtonId += 1;
  } else if (userGender === 'Female') {
    radioButtonId += 2;
  } else {
    radioButtonId += 3;
  }

  cy.get(`[for=${radioButtonId}]`).click();

  // enter phone number:
  const number = userData.phoneNumber;

  cy.get('#userNumber').type(number);

  // enter birth date:
  const userBirth = userData.birthDate;

  cy.get('#dateOfBirthInput').type(`{selectAll}` + userBirth + `{esc}`);

  // select subject:
  const userSubject = userData.subjects;

  cy.get('#subjectsInput').type(userSubject + `{enter}`);

  // seelct hobbie:
  const userHobbie = userData.hobbies;

  let hobbieCheckbox = 'hobbies-checkbox-';

  if (userHobbie === 'Sports') {
    hobbieCheckbox += 1;
  } else if (userHobbie === 'Reading') {
    hobbieCheckbox += 2;
  } else if (userHobbie === 'Music') {
    hobbieCheckbox += 3;
  }

  cy.get(`[for=${hobbieCheckbox}]`).click();

  // enter address:
  const userAdress = userData.address;

  cy.get('#currentAddress').type(userAdress);

  // select state and city:
  const statesData = userData.stateAndCity;

  const statesLength = statesData.length;
  const randomState = Math.floor(Math.random() * statesLength);

  const cityLength = statesData[randomState].cities.length;
  const randomCity = Math.floor(Math.random() * cityLength);

  const state = statesData[randomState].state;
  const city = statesData[randomState].cities[randomCity];

  cy.get('#state').type(state + `{enter}`);
  cy.get('#city').type(city + `{enter}`);

  cy.wrap({ state, city });
});

Cypress.Commands.add('verifyUserData', (userData, state, city) => {
  cy.get('.modal-dialog').within(() => {
    cy.get('table').should('contain.text', userData.firstName)
      .should('contain.text', userData.lastName)
      .should('contain.text', userData.email)
      .should('contain.text', userData.gender)
      .should('contain.text', userData.phoneNumber)
      .should('contain.text', userData.birthDate)
      .should('contain.text', userData.subjects)
      .should('contain.text', userData.hobbies)
      .should('contain.text', userData.address)
      .should('contain.text', state)
      .should('contain.text', city);
  });
});
