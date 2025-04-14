/// <reference types='cypress' />
const { generateRegistrationInput } =
require('../support/generateRegistrationInput');

describe('Student Registration page', () => {
  beforeEach(() => {
  });

  it('should reg new user', () => {
    const {
      firstName,
      lastName,
      email,
      number,
      address,
      subject
    } = generateRegistrationInput();

    cy.visit('/');

    cy.get('h1').should('contain.text', 'Practice Form');

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get('#userNumber').type(number);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();

    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__day--022').click();

    cy.get('.subjects-auto-complete__value-container').type(subject);

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();

    cy.get('#currentAddress').type(address);

    cy.get('.css-yk16xz-control > .css-1wy0on6' +
    '> .css-tlfecz-indicatorContainer').click();

    cy.get('#react-select-3-option-0').click();

    cy.get('#city > .css-yk16xz-control > .css-1wy0on6' +
    '> .css-tlfecz-indicatorContainer').click();

    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-header').should('contain.text', 'Thanks for submitting' +
    ' the form');
  });
});
