/// <reference types="cypress" />

import { generateUserData } from '../support/generate';

describe('Student Registration page', () => {
  let user;
  let displayedDay;

  before(() => {
    // Generate user data
    user = generateUserData();
    displayedDay = parseInt(user.birth.day, 10);

    // Visit the form page
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields except "picture"', () => {
    cy.get('input[placeholder="First Name"]')
      .type(user.firstName);

    cy.get('input[placeholder="Last Name"]')
      .type(user.lastName);

    cy.get('#userEmail')
      .type(user.email);

    cy.contains('label', user.gender)
      .click();

    cy.get('input[placeholder="Mobile Number"]')
      .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__year-select')
      .select(`${user.birth.year}`);

    cy.get('.react-datepicker__month-select')
      .select(`${user.birth.month}`);

    cy.get(`.react-datepicker__day--${user.birth.day}`)
      .first()
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type(`${user.subject}{enter}`);

    cy.contains('.custom-control-label', user.hobby)
      .click();

    cy.get('#currentAddress')
      .type(user.address);

    cy.contains('Select State')
      .click();
    cy.get('#state')
      .type('NCR{enter}');

    cy.contains('Select City')
      .click();
    cy.get('#city')
      .type('Delhi{enter}');

    cy.get('#submit')
      .click();

    // Assert data in modal
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', `${displayedDay} ${user.birth.month},${user.birth.year}`);

    cy.contains('tr', 'Subjects')
      .should('contain', user.subject);

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });
});
