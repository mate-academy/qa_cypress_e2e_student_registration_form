/// <reference types='cypress' />

const { faker, generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should povide to register new student', () => {
    const { email, password, username, userLastName, mobileNumber } = generateUser();

    cy.get('#firstName').type(username);
    cy.get('#lastName').type(userLastName);
    cy.get('#userEmail').type(email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get('.subjects-auto-complete__value-container').type('IT')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click();
    cy.get('#currentAddress').type('Cracow');
    cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
  });
});
