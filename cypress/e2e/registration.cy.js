/// <reference types="cypress" />

const { makeUser } = require('../support/fakedata');

describe('Student Registration page', () => {
  before(() => {
    cy.visit("/automation-practice-form")
  });

  it('The user is able to send the form with valid creds', () => {
    
    const user = makeUser();

    //To check that user is on the right page
    cy.url()
      .should("include", "/automation-practice-form")

    cy.get('[placeholder="First Name"]')
      .type(user.firstName)

    cy.get('[placeholder="Last Name"]')
      .type(user.lastName)
    
    cy.get('[placeholder="name@example.com"]')
      .type(user.email)

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click()

    cy.get('[placeholder="Mobile Number"]')
      .type(user.mobile)
    
    cy.get('#dateOfBirthInput')
      .click()
      
    cy.get('.react-datepicker__year-select')
      .select("2001")

    cy.get('.react-datepicker__month-select')
    .select("April")

    cy.get(':nth-child(5) > .react-datepicker__day--030')
      .click()

    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type('Math' + '{enter}' + 'Physic' + '{enter}');

    cy.get('[for="hobbies-checkbox-1"]')
      .click();

    cy.get('[placeholder="Current Address"]')
      .type(user.adress);
    
    cy.get('#state')
      .type('ha' + '{enter}');
    
    cy.get('#city')
      .type('pa' + '{enter}');
    
    cy.contains('#submit', 'Submit')
      .click({force: true});
    
    cy.contains('[class="modal-title h4"]', 'Thanks for submitting the form');
    
    cy.contains('tbody > tr > td', `${user.email}`);

  });
});
