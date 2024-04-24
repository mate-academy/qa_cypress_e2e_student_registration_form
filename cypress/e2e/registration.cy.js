/// <reference types='cypress' />

const fi = require("faker/lib/locales/fi");
const { generateUser } = require("../support/generateUser");

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form')
  });

  it('should register new user with valid credentials', () => {
    const {email, username, password, firstName, lastName, randomNumber} = generateUser()

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#userEmail').type(email)
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
    cy.get('#userNumber').type(randomNumber)
    cy.get('.subjects-auto-complete__value-container').type('Art{enter}')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#currentAddress').type('tut ya jivu')
    cy.get('#state').type('Hary{enter}');
    cy.get('#city').type('Ka{enter}')
    cy.get('#submit').click()
    // Tests //

    cy.get('.modal-content').should('exist');
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('exist');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', randomNumber);
    cy.get('.modal-body').should('exist');
  });
}); 
