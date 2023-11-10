/// <reference types='cypress' />
import { generateUser } from '../support/generateUser';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form/');
  });

  it(`should submit the Student Registration
  form successfully`, () => {
    const {
      firstName,
      lastName,
      email,
      mobile,
      address
    } = generateUser();

    cy.getByPlaceholder('First Name')
      .type(firstName);

    cy.getByPlaceholder('Last Name')
      .type(lastName);

    cy.getByPlaceholder('name@example.com')
      .type(email);

    cy.get('[for="gender-radio-1"]')
      .click();

    cy.getByPlaceholder('Mobile Number')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__month-select')
      .select('December');

    cy.get('.react-datepicker__year-select')
      .select('2002');

    cy.get('.react-datepicker__day--025')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type('Physics' + `{Enter}`);

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.getByPlaceholder('Current Address')
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
      .should('contain', mobile);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '25 December,2002');

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
