/// <reference types='cypress' />

describe('Name of the group', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('User can log in with valid data', () => {
    cy.get('[id="firstName"]')
      .type('Nikolai');
    cy.get('[id="lastName"]')
      .type('Kapitanets');
    cy.get('[id="userEmail"]')
      .type('kapitanets@qa.team');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click();
    cy.get('[id="userNumber"]')
      .type('0938560235');
    cy.get('[id="dateOfBirthInput"]')
      .type('{selectAll}')
      .type('03 Nov 1995')
      .type('{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('Eng')
    cy.contains('.subjects-auto-complete__menu', 'English')
      .click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
      .click();
    cy.get('[id="currentAddress"]')
      .type('test data for check text area');
    cy.get('#state')
      .type('NCR'+'{enter}');
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
    .type('Delphi'+'{enter}');
  });
});
