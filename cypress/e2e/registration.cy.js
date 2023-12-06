/// <reference types='cypress' />

const { generateUser, generatePhone } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('Student should register on the page', () => {
    const user = generateUser();
    cy.get('form').get('#firstName').type(user.firstName);
    cy.get('form').get('#lastName').type(user.lastName);
    cy.get('form').get('#userEmail').type(user.userEmail);
    const digit = generatePhone();
    cy.get('form').get('#userNumber').type(digit.number);
    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('Arts{enter}');

    // Select Gender
    cy.get('input[type="radio"]')
      .get('.custom-control-label').contains('Male').click();

    // Select Hobbies
    cy.get('input[type="checkbox"]')
      .get('.custom-control-label').contains('Sports').click();
    cy.get('input[type="checkbox"]')
      .get('.custom-control-label').contains('Music').click();

    // Set DateOfBirthday
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('2024');
    cy.get('.react-datepicker__day--015').click();

    // Current Address
    cy.get('#currentAddress').type(user.userAddress);
    cy.get('#stateCity-wrapper').contains('Select State').type('ncr{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Delhi{enter}');

    // CLick Button & assert
    cy.get('#submit').contains('Submit').click();
    cy.get('.modal-header')
      .should('have.text', 'Thanks for submitting the form');

    // Assert Name
    cy.get('.modal-body').contains('Student Name').next()
      .should('have.text', `${user.firstName} ${user.lastName}`);

    // Assert Email
    cy.get('.modal-body').contains('Student Email').next()
      .should('have.text', `${user.userEmail}`);

    // Assert Gender
    cy.get('.modal-body').contains('Gender').next()
      .should('have.text', 'Male');

    // Assert Mobile
    cy.get('.modal-body').contains('Mobile').next()
      .should('have.text', `${digit.number}`);

    // Assert Date
    cy.get('.modal-body').contains('Date of Birth').next()
      .should('have.text', '15 April,2024');

    // Assert Subjects
    cy.get('.modal-body').contains('Subjects').next()
      .should('have.text', 'English, Arts');

    // Assert Hobbies
    cy.get('.modal-body').contains('Hobbies').next()
      .should('have.text', 'Sports, Music');

    // Assert Address
    cy.get('.modal-body').contains('Address').next()
      .should('have.text', `${user.userAddress}`);

    // Assert State & City
    cy.get('.modal-body').contains('State and City').next()
      .should('have.text', 'NCR Delhi');

    // Close Modal Window
    cy.get('#closeLargeModal').click();
  });
});
