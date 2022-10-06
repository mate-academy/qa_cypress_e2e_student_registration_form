/// <reference types='cypress' />

const { user } = require ('../e2e/newUser.cy');

describe('Name of the group', () => {
  before(() => {
    cy.visit('/')
  });

  it('fill empty data', () => {
    cy.get('[placeholder="First Name"]')
      .type(user.firstName);
    cy.get('[placeholder="Last Name"]')
      .type(user.secondName);
    cy.get('[id="userEmail"]')
      .type(user.email);
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
    .click();
    cy.get('#userNumber')
    .type(user.mobile);
    cy.get('#dateOfBirthInput')
    .click()
    .type('{selectall}')
    .type('01 Jan 2000')
    .type('{enter}');
    cy.get(`[id="subjectsInput"]`).type('English{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#currentAddress')
      .type(user.adress);
    cy.get(`[id="state"]`).type('NCR{enter}');
    cy.get(`[id="city"]`).type('Noida{enter}');
    cy.get(`[id="submit"]`).click({force:true});
  });
});
it('Checking the fields from the table', () => {
  cy.contains('tr', 'Student Name').should('contain.text', `${user.firstName} ${user.secondName}`);
  cy.contains('tr', 'Student Email').should('contain', user.email);
  cy.contains('tr', 'Gender').should('contain', 'Male');
  cy.contains('tr', 'Mobile').should('contain', user.mobile);
  cy.contains('tr', 'Date of Birth').should('contain', '01 Jan,2000');
  cy.contains('tr', 'Subjects').should('contain', user.subjects);
  cy.contains('tr', 'Address').should('contain', user.adress)
  cy.contains('tr', 'State and City').should('contain', 'NCR Noida');
  cy.get(`[id="closeLargeModal"]`).click();
});