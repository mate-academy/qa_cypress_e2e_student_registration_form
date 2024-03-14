/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
    cy.visit('/automation-practice-form');
  });

  it('', () => {
    cy.get('h1')
      .should('contain.text', 'Practice Form');

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}01 Sep 2005{enter}');
    cy.get('#subjectsContainer').type('Social{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type('test address, 4');
    cy.get('#state').type('Har{enter}');
    cy.get('#city').type('Kar{enter}');
    cy.get('#submit').click();

    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody').should('contain.text', user.firstName);
    cy.get('tbody').should('contain.text', user.lastName);
    cy.get('tbody').should('contain.text', user.email);
    cy.get('tbody').should('contain.text', user.gender);
    cy.get('tbody').should('contain.text', user.mobileNumber);
    cy.get('tbody').should('contain.text', '01 September,2005');
    cy.get('tbody').should('contain.text', 'Social Studies');
    cy.get('tbody').should('contain.text', user.hobby);
    cy.get('tbody').should('contain.text', 'test address, 4');
    cy.get('tbody').should('contain.text', 'Haryana Karnal');
  });
});
