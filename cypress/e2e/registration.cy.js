/// <reference types='cypress' />

// eslint-disable-next-line no-unused-vars
const ff = require('faker/lib/locales/fi');
const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('should register new user with valid credentials', () => {
    // eslint-disable-next-line max-len
    const { email, firstName, lastName, randomNumber, address } = generateUser();

    cy.get('[placeholder="First Name"]')
      .type(firstName);
    cy.get('[placeholder="Last Name"]')
      .type(lastName);
    cy.get('[placeholder="name@example.com"]')
      .type(email);
    cy.get('[for="gender-radio-1"]')
      .click();
    cy.get('[placeholder="Mobile Number"]')
      .type(randomNumber);
    cy.get('.react-datepicker__input-container [id="dateOfBirthInput"]')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('May');
    cy.get('.react-datepicker__year-select')
      .select('1986');
    cy.get('.react-datepicker__day--014')
      .click();
    cy.get('[id="subjectsContainer"]')
      .type('Physics' + `{Enter}`);
    cy.get('[for="hobbies-checkbox-1"]')
      .click();
    cy.get('[placeholder="Current Address"]')
      .type(address);
    cy.get('[id="state"]')
      .click();
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('[id="city"]')
      .click();
    cy.get('#react-select-4-option-0')
      .click();
    cy.get('[id="submit"]')
      .click();
    cy.contains('.modal-content', 'Thanks for submitting the form');
    cy.get('.modal-body')
      .should('contain', firstName);
    cy.get('.modal-body')
      .should('contain', lastName);
    cy.get('.modal-body')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');
    cy.get('.modal-body')
      .should('contain', randomNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '14 May,1986');
    cy.contains('tr', 'Subjects')
      .should('contain', 'Physics');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports');
    cy.get('.modal-body')
      .should('contain', address);
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });
});
