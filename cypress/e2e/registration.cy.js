/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((genereteUser) => {
      user = genereteUser;
    });
  });

  it('Should register new user', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type(`{selectall}23 Feb 1991{Enter}`);
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(user.address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit').click();
    cy.contains('tr', user.firstName).should('be.visible');
    cy.contains('tr', user.email).should('be.visible');
    cy.contains('tr', user.gender).should('be.visible');
    cy.contains('tr', user.mobileNumber).should('be.visible');
    cy.contains('tr', user.birth).should('be.visible');
    cy.contains('tr', user.hobby).should('be.visible');
    cy.contains('tr', user.address).should('be.visible');
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
