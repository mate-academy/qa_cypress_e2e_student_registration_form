/// <reference types='cypress' />

import { generateUser } from '../support/generateUser';

describe('Student Registration page', () => {
  let user;

  it('should register student', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    user = generateUser();

    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('.custom-control-label').contains(user.gender).click();
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type(`{selectAll}${user.birthDate}{Enter}`);
    cy.get('.custom-control-label').contains(user.hobby).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('.css-1wa3eu0-placeholder').contains('Select State')
      .type('N{enter}');
    cy.get('#city').type('{enter}');
    cy.get('.subjects-auto-complete__value-container').type('P{Enter}');

    cy.get('#submit').click();

    cy.findByTrName('Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.findByTrName('Student Email').should('contain', user.email);
    cy.findByTrName('Gender').should('contain', user.gender);
    cy.findByTrName('Mobile').should('contain', user.phone);
    cy.findByTrName('Date of Birth')
      .should('contain', user.birthDate);
    cy.findByTrName('Subjects').should('contain', 'Physics');
    cy.findByTrName('Hobbies').should('contain', user.hobby);
    cy.findByTrName('Address').should('contain', user.address);
    cy.findByTrName('State and City')
      .should('contain', 'NCR');
  });
});
