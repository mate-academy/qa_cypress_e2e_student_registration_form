/// <reference types='cypress' />
const { generateUser} = require('../support/generate');
const user = generateUser();
const successMessage = 'Thanks for submitting the form';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should provide an opportunity to fill out the form ', () => {
    cy.findById('firstName').type(user.firstName);
    cy.findById('lastName').type(user.lastName);
    cy.findById('userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findById('userNumber').type(user.mobile);
    cy.findById('dateOfBirthInput').type(`{selectAll}${user.birth.day} ${user.birth.month} ${user.birth.year}{enter}`);
    cy.findById('subjectsContainer').type(`${user.subjectRandom}{enter}`);
    cy.contains('.custom-control-label', user.hobby).click({force: true});
    cy.findById('currentAddress').type(user.address);
    cy.findById('state').type(`${user.state}{enter}`);
    cy.findById('city').type(`${user.city}{enter}`);
    cy.findById('submit').click();
    cy.findById('example-modal-sizes-title-lg').contains(successMessage).should('be.visible');
  });
});
