/// <reference types='cypress' />
const { generateUser } = require('../support/helpers');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(2100, 1080);
    cy.visit('/');
  });

  it('should register a new user with valid values', () => {
    const {
      firstName,
      lastName,
      userEmail,
      phoneNumber,
      userAddress
    } = generateUser();

    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(userEmail);
    cy.get('[for="gender-radio-2"]')
      .click();
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select('August');
    cy.get('.react-datepicker__year-select')
      .select('1999');
    cy.get('.react-datepicker__day--022')
      .click();
    cy.get('#subjectsContainer')
      .type('Maths{Enter}');
    cy.get('[for="hobbies-checkbox-1"]')
      .click();
    cy.get('#currentAddress')
      .type(userAddress);
    cy.get('#state')
      .type('Uttar{Enter}');
    cy.get('#city')
      .type('Merrut{Enter}');
    cy.get('#submit')
      .click();

    cy.contains('.modal-content', 'Thanks for submitting the form');
    cy.get('.modal-body')
      .should('contain', firstName);
    cy.get('.modal-body')
      .should('contain', lastName);
    cy.get('.modal-body')
      .should('contain', userEmail);
    cy.contains('tr', 'Gender')
      .should('contain', 'Female');
    cy.get('.modal-body')
      .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '22 August,1999');
    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports');
    cy.get('.modal-body')
      .should('contain', userAddress);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Merrut');
  });
});
