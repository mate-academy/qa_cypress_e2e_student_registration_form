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

Cypress.Commands.add('selectRandomChild', (parentId) => {
  cy.get(parentId).click();
  cy.get('.css-11unzgr').children().then((children) => {
    const length = children.length;
    const randomIndex = Math.floor(Math.random() * length);
    cy.get('.css-11unzgr').children().eq(randomIndex).click();
  });
});

Cypress.Commands.add('selectBirthDate', (birthDate) => {
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select(birthDate.month);
  cy.get('.react-datepicker__year-select').select(birthDate.year);

  const className = 'react-datepicker__day';
  const day = birthDate.day.padStart(3, '0');

  cy.get(`.${className}--${day}:not(.${className}--outside-month)`).click();
});
