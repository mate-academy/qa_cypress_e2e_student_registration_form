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
/* eslint-disable cypress/unsafe-to-chain-command */

Cypress.Commands.add('fillForm', (student) => {
  cy.get('#firstName').type(student.firstName);
  cy.get('#lastName').type(student.lastName);
  cy.get('#userEmail').type(student.email);
  cy.get(`input[name="gender"][value="${student.gender}"]`).check({ force: true });
  cy.get('#userNumber').type(student.mobile);

  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select(student.birthMonth);
  cy.get('.react-datepicker__year-select').select(student.birthYear);
  cy.get(`.react-datepicker__day--0${student.birthDay}`).click();

  cy.get('#subjectsInput').type(`${student.subject}{enter}`);

  student.hobbies.forEach((hobby) => {
    cy.contains('.custom-control-label', hobby).click();
  });

  cy.get('#currentAddress').type(student.address);

  cy.get('#state').click().contains(student.state).click();
  cy.get('#city').click().contains(student.city).click();
});

Cypress.Commands.add('assertSubmittedData', (student) => {
  cy.get('#example-modal-sizes-title-lg')
    .should('contain.text', 'Thanks for submitting the form');

  cy.get('td').contains('Student Name')
    .next().should('contain.text', `${student.firstName} ${student.lastName}`);

  cy.get('td').contains('Student Email')
    .next().should('contain.text', student.email);

  cy.get('td').contains('Gender')
    .next().should('contain.text', student.gender);

  cy.get('td').contains('Mobile')
    .next().should('contain.text', student.mobile);

  cy.get('td').contains('Date of Birth')
    .next().should('contain.text', `${student.birthDay} ${student.birthMonth},${student.birthYear}`);

  cy.get('td').contains('Subjects')
    .next().should('contain.text', student.subject);

  cy.get('td').contains('Hobbies')
    .next().should('contain.text', student.hobbies.join(', '));

  cy.get('td').contains('Address')
    .next().should('contain.text', student.address);

  cy.get('td').contains('State and City')
    .next().should('contain.text', `${student.state} ${student.city}`);
});
