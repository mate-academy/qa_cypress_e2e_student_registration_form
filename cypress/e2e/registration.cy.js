/// <reference types='cypress' />
// const { use } = require('chai');
const { generateRandomUserData } = require('../support/test_data');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should allow to register new user', () => {
    const userData = generateRandomUserData();

    cy.get('#firstName')
      .type(userData.firstName);

    cy.get('#lastName')
      .type(userData.lastName);

    cy.get('#userEmail')
      .type(userData.email);

    cy.contains('.custom-control-label', userData.gender)
      .click();

    cy.get('#userNumber')
      .type(userData.phoneNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__year-select')
      .select(`${userData.randomYear}`);

    cy.get('.react-datepicker__month-select')
      .select(`${userData.randomMonth}`);

    cy.contains('.react-datepicker__day', userData.randomDay)
      .click();
    // .subjects-auto-complete__value-container

    cy.get('#subjectsContainer ')
      .type('ma{enter}' + 'co{enter}');

    cy.contains('.custom-control-label', userData.hobbies)
      .click();

    cy.get('#currentAddress')
      .type(userData.userAddress);

    cy.get('#state > .css-yk16xz-control')
      .type('n{enter}');

    cy.get('#stateCity-wrapper > :nth-child(3)')
      .type('g{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', userData.firstName);

    cy.contains('tr', 'Student Name')
      .should('contain', userData.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', userData.email);

    cy.contains('tr', 'Gender')
      .should('contain', userData.gender);

    cy.contains('tr', 'Subjects')
      .should('contain', 'Maths');

    cy.contains('tr', 'Subjects')
      .should('contain', 'Computer Science');

    cy.contains('tr', 'Hobbies')
      .should('contain', userData.hobbies);

    cy.contains('tr', 'Address')
      .should('contain', userData.userAddress);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR');

    cy.contains('tr', 'State and City')
      .should('contain', 'Gurgaon');
  });
});
