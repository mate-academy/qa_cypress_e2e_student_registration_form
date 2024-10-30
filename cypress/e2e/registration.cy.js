/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');
describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should send the form with filled fields and check modal', () => {
    const {
      userName,
      email,
      mobile,
      currentAddress,
      state,
      city
    } = generateUser();

    cy.findById('firstName').type(userName);
    cy.findById('lastName').type(userName);
    cy.findById('userEmail').type(email);
    cy.findById('userNumber').type(mobile);
    cy.findById('currentAddress').type(currentAddress);
    cy.findById('state').type(state);
    cy.findById('city').type(city);
    cy.get(`input[value='Female']`).check();
    cy.get(`input[value='Female']`).should('be.checked');
    cy.get(`input[id='hobbies-checkbox-1']`).check();
    cy.get(`input[id='hobbies-checkbox-1']`).should('be.checked');

    cy.get(`button[id='submit']`).click();

    cy.get('.modal-dialog').contains(userName);
    cy.get('.modal-dialog').contains(email);
    cy.get('.modal-dialog').contains(mobile);
    cy.get('.modal-dialog').contains(currentAddress);
    cy.get('.modal-dialog').contains(state);
    cy.get('.modal-dialog').contains(city);
    cy.get('.modal-dialog').contains('Female');
    cy.get('.modal-dialog').contains('Sports');
  });
});
