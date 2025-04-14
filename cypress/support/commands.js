/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable max-len */

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

  const genderMap = {
    Male: 1,
    Female: 2,
    Other: 3
  };
  const genderId = genderMap[gender];

  cy.get(`label[for="gender-radio-${genderId}"]`).click();

  cy.get('#userNumber').type(phoneNumber);
  cy.get('#dateOfBirthInput').type(`{selectAll}${birthDate}{esc}`);
  cy.get('#subjectsInput').type(`${subjects}{enter}`);

  const hobbiesMap = {
    Sports: 1,
    Reading: 2,
    Music: 3
  };
  const hobbieCheckbox = hobbiesMap[hobbies];

  cy.get(`label[for="hobbies-checkbox-${hobbieCheckbox}"]`).click();

  cy.get('#currentAddress').type(address);

  const randomState = Math.floor(Math.random() * stateAndCity.length);
  const randomCity = Math.floor(Math.random() * stateAndCity[randomState].cities.length);

  const state = stateAndCity[randomState].state;
  const city = stateAndCity[randomState].cities[randomCity];

  cy.get('#state').type(`${state}{enter}`);
  cy.get('#city').type(`${city}{enter}`);

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
