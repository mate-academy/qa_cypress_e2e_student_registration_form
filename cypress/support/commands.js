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
  cy.get('#dateOfBirthInput').type(`{selectAll}${dateOfBirth}{esc}`);
  cy.get('#subjectsInput').type(`${subjects}{enter}`);
  cy.get(`[for='hobbies-checkbox-${hobbiesId}']`).click();
  cy.get('#currentAddress').type(currentAddress);
  cy.get('#state').type(`${state}{enter}`);
  cy.get('#city').type(`${city}{enter}`);
});

Cypress.Commands.add('submitRegistrationForm', () => {
  cy.get('#submit').click();
});

Cypress.Commands.add('verifyUserData', (userData) => {
  const {
    firstName,
    lastName,
    email,
    genderName,
    mobile,
    dateOfBirth,
    subjects,
    hobbyName,
    currentAddress,
    state,
    city
  } = userData;

  cy.get('.modal-dialog').within(() => {
    cy.get('table').should('contain.text', firstName)
      .should('contain.text', lastName)
      .should('contain.text', email)
      .should('contain.text', genderName)
      .should('contain.text', mobile)
      .should('contain.text', dateOfBirth)
      .should('contain.text', subjects)
      .should('contain.text', hobbyName)
      .should('contain.text', currentAddress)
      .should('contain.text', state)
      .should('contain.text', city);
  });
});
