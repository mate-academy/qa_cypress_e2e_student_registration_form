/// <reference types='cypress' />

Cypress.Commands.add('checkValueInCheckbox', (value) => {
  cy.get(`input[type=checkbox][value=${value}]`).should('be.checked');
});

Cypress.Commands.add('findByDate', (category, value) => {
  if (category === 'day') {
    cy.get(`.react-datepicker__day--0${value}`)
      .not('.react-datepicker__day--outside-month')
      .should('be.visible')
      .click();
  } else {
    cy.get(`.react-datepicker__${category}-select`).select(value);
  }
});

Cypress.Commands.add('fillInput', (selector, value) => {
  cy.get(selector).should('be.visible').type(value);
  cy.shouldHaveValue(selector, value);
});

Cypress.Commands.add('selectRadioButton', (value) => {
  cy.contains('label', value).click();
});

Cypress.Commands.add('shouldHaveValue', (selector, value) => {
  cy.get(selector).should('have.value', value);
});

Cypress.Commands.add('uploadFile', (path, fileName) => {
  cy.get('input[type=file]').selectFile(path);
  cy.get('input[type=file]').then((input) => {
    expect(input[0].files[0].name).to.equal(fileName);
  });
});

Cypress.Commands.add('selectStateAndCity', (selector, value) => {
  cy.get(selector).click();
  cy.contains(value).click();
  cy.get(selector).should('contain.text', value);
});
