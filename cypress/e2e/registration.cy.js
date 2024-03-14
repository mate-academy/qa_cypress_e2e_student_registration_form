/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  const stateCity = 'Haryana Karnal';
  const subject = 'Social Studies';
  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
    cy.visit('/automation-practice-form');
  });

  it('should provide an opportunity to register a new user', () => {
    cy.get('h1')
      .should('contain.text', 'Practice Form');

    cy.get('#firstName').type(user.firstName);

    cy.get('#lastName').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.contains('.custom-control-label', user.gender).click();

    cy.get('#userNumber').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').type('{selectall}');

    cy.get('#dateOfBirthInput').type(`${user.birthDate}{enter}`);

    cy.get('#subjectsContainer').type('Social{enter}');

    cy.contains('.custom-control-label', user.hobby).click();

    cy.get('#currentAddress').type(user.address);

    cy.get('#state').type('Har{enter}');

    cy.get('#city').type('Kar{enter}');

    cy.get('#submit').click();

    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody').should('contain.text', user.firstName);
    cy.get('tbody').should('contain.text', user.lastName);
    cy.get('tbody').should('contain.text', user.email);
    cy.get('tbody').should('contain.text', user.gender);
    cy.get('tbody').should('contain.text', user.mobileNumber);
    cy.get('tbody').should('contain.text', user.birthDate);
    cy.get('tbody').should('contain.text', subject);
    cy.get('tbody').should('contain.text', user.hobby);
    cy.get('tbody').should('contain.text', user.address);
    cy.get('tbody').should('contain.text', stateCity);
  });
});
