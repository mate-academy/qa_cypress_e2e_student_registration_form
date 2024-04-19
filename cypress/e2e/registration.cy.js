import registerNewUser from '../support/newUser';
/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    user = registerNewUser();
  });

  it('should allow to fill out and submit the form', () => {
    cy.visit('/automation-practice-form');

    cy.findByID('firstName').type(user.firstName);
    cy.findByID('lastName').type(user.lastName);
    cy.findByID('userEmail').type(user.email);
    cy.contains('.custom-control', user.gender).click();
    cy.findByID('userNumber').type(user.phone);
    cy.findByID('dateOfBirthInput').type(`{selectAll}${user.birthday}{enter}`);
    cy.get('#subjectsContainer').type(user.subjects + '{enter}');
    cy.contains('.custom-control', user.hobbie).click();
    cy.findByID('currentAddress').type(user.address);
    cy.get('#state').type('U{downArrow}{enter}');
    cy.get('#city').type('L{downArrow}{enter}');

    cy.findByID('submit').click();

    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');

    cy.checkValuesInTable(user);

    cy.get('#closeLargeModal').should('contain.text', 'Close').click();
  });
});
