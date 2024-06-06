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

const registerText = (key, value) => {
  if (key === 'subjectsContainer') {
    for (const text of value) {
      cy.get(`#${key}`).type(text + '{enter}');
    }

    return;
  };

  if (key !== 'state' && key !== 'city') {
    cy.get(`#${key}`).type(value);

    return;
  }

  cy.get(`#${key}`).type(value + '{enter}');
};

const registerOptions = (option) => {
  cy.contains('label', option).click();
};

const validateData = (textData) => {
  if (!Array.isArray(textData)) {
    cy.contains('td', textData).should('exist');

    return;
  }

  cy.contains('td', textData.join(', ')).should('exist');
};

Cypress.Commands.add('register', (textData, optionData) => {
  Object.entries(textData).forEach(([key, value]) => {
    registerText(key, value);
  });

  Object.entries(optionData).forEach(([key, value]) => {
    if (!Array.isArray(value)) {
      registerOptions(value);

      return;
    }

    value.forEach(registerOptions);
  });
});

Cypress.Commands.add('validate', (data) => {
  Object.values(data).forEach((value) => {
    validateData(value);
  });
});
