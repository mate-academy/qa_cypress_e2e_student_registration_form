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

Cypress.Commands.add('fillRegistrationForm', (userData) => {
  const {
    firstName,
    lastName,
    email,
    genderId,
    mobile,
    dateOfBirth,
    subjects,
    hobbiesId,
    currentAddress,
    state,
    city
  } = userData;

  cy.get('#firstName').type(firstName);
  cy.get('#lastName').type(lastName);
  cy.get('#userEmail').type(email);
  cy.get(`label[for="gender-radio-${genderId}"]`).click();
  cy.get('#userNumber').type(mobile);
  cy.get('#dateOfBirthInput').type(`{selectAll}` + dateOfBirth + `{esc}`);
  cy.get('#subjectsInput').type(subjects + `{enter}`);
  cy.get(`[for='hobbies-checkbox-${hobbiesId}']`).click();
  cy.get('#currentAddress').type(currentAddress);
  cy.get('#state').type(state + `{enter}`);
  cy.get('#city').type(city + `{enter}`);
});

Cypress.Commands.add('submitRegistrationForm', () => {
  cy.get('#submit').click();
});

Cypress.Commands.add('verifyUserData', (userData) => {
  const {
    firstName,
    lastName,
    email,
    genderId,
    mobile,
    dateOfBirth,
    subjects,
    hobbiesId,
    currentAddress,
    state,
    city,
    genderIdMapping
  } = userData;
  cy.get('.modal-dialog').within(() => {
    cy.get('table').should('contain.text', firstName)
      .should('contain.text', lastName)
      .should('contain.text', email)
      .should('contain.text', genderIdMapping[genderId])
      .should('contain.text', mobile)
      .should('contain.text', dateOfBirth)
      .should('contain.text', subjects)
      .should('contain.text', hobbiesId)
      .should('contain.text', currentAddress)
      .should('contain.text', state)
      .should('contain.text', city);
  });
});
