
/// <reference types="cypress" />
const { generateUser } = require('../support/generateUser');

Cypress.Commands.add('findByPlaceholder', (placeholder) => {
  cy.get(`[placeholder=${placeholder}]`);
});
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  originalFn(url);
});
Cypress.Commands.add('assertPageUrl', (url) => {
  // cy.hash().should("eq", "#" + url);
  cy.url().should('eq', Cypress.config().baseUrl + url);
});

Cypress.Commands.add('registerNewUser', () => {
  const { userName, email, password } = generateUser();
  cy.request('POST', Cypress.config().baseUrl + '/users', {
    user: {
      username: userName,
      email,
      password
    }
  }).then((response) => ({ ...response.body.user, password }));
});
Cypress.Commands.add('findByTestId', (value) => {
  cy.get(`[data-cy=${value}]`);
});
// Usage:
// cy.registerNewUser().then(({ userName, email, password }) => {
//   // use userName, email, password
// });

Cypress.Commands.add('checkAuthorization', (username) => {
  cy.findByTestId('header-username').should('contain.text', username);
});

Cypress.Commands.add('login', (user) => {
  cy.request('POST', 'users/login', {
    user
  }).then((response) => {
    cy.setCookie('drash_sess', response.body.user.token);
  });
});
