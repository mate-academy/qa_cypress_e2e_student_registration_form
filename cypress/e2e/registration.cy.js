/* eslint-disable cypress/unsafe-to-chain-command */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should register a user', () => {
    cy.findByPlaceholder('First Name')
      .type('TestFirstName');

    cy.findByPlaceholder('Last Name')
      .type('TestLastName');

    cy.findByPlaceholder('name@example.com')
      .type('test@test.test');

    cy.get('[for="gender-radio-1"]')
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type('0942541254');

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.findByPlaceholder('Current Address')
      .type('Kyiv region Sviatoshyn');

    cy.get('#state')
      .click();

    cy.contains('Haryana')
      .click();

    cy.get('#city')
      .click();

    cy.get('#react-select-4-option-0')
      .click();

    cy.get('#subjectsContainer')
      .type('Maths');

    cy.contains('#react-select-2-option-0', 'Maths')
      .click();

    cy.get('#dateOfBirthInput')
      .click();

    cy.contains('select', 'September')
      .select('March');

    cy.contains('select', '2024')
      .select('2021');

    cy.contains('.react-datepicker__day--009', '9')
      .click();

    cy.get('#submit')
      .click();

    cy.checkData();
  });
});
