/// <reference types='cypress' />

const generateUser = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should fill in the registration form and submits it', () => {
    const user = generateUser();

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('#genterWrapper').find('label').contains(user.sex).click();
    cy.get('#userNumber').type(user.phone);
    cy.selectBirthDate(user.birthDate);
    user.subjects.forEach((el) => {
      cy.get('#subjectsInput').type(el);
      cy.get('.subjects-auto-complete__menu-list')
        .find('.subjects-auto-complete__option')
        .contains(el)
        .click();
    });
    user.hobbies.forEach((el) => {
      cy.get('#hobbiesWrapper').find('label').contains(el).click();
    });
    cy.get('#currentAddress').type(user.address);
    cy.selectRandomChild('#state');
    cy.selectRandomChild('#city');

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('.table-responsive').should('contain', `${user.firstName} ${user.lastName}`);
    cy.get('.table-responsive').should('contain', user.email);
    cy.get('.table-responsive').should('contain', user.sex);
    cy.get('.table-responsive').should('contain', user.phone);
  });
});
