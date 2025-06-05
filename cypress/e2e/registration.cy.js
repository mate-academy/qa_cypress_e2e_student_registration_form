/// <reference types='cypress' />

describe('Student Registration page', () => {
  // eslint-disable-next-line n/handle-callback-err
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('fills out the form and verifies the confirmation modal', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0987654321');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('March');
    // eslint-disable-next-line max-len
    cy.get('.react-datepicker__day--020:not(.react-datepicker__day--outside-month)').click();
    cy.get('#subjectsInput').type('English{enter}');
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type('123 Cypress Street');

    cy.get('#state').click();
    cy.contains('.css-26l3qy-menu div', 'Uttar Pradesh').click();

    cy.get('#city').click();
    cy.contains('.css-26l3qy-menu div', 'Lucknow').click();

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg', { timeout: 10000 })
      .should('contain', 'Thanks for submitting the form');

    cy.contains('td', 'John Doe');
    cy.contains('td', 'john.doe@example.com');
    cy.contains('td', 'Male');
    cy.contains('td', '0987654321');
    cy.contains('td', '20 March,1990');
    cy.contains('td', 'English');
    cy.contains('td', 'Reading');
    cy.contains('td', '123 Cypress Street');
    cy.contains('td', 'Uttar Pradesh Lucknow');
  });
});
