/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('asserts that user can register', () => {
    cy.get('#firstName')
      .type('Tester');
    cy.get('#lastName')
      .type('Surname');
    cy.get('#userEmail')
      .type('tester1234@wp.pl');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click();
    cy.get('#userNumber')
      .type('234567890');
    cy.get('#dateOfBirthInput')
      .type('20.09.1980');
    cy.get('#hobbiesWrapper > :nth-child(1)')
      .click();
    cy.get('#currentAddress')
      .type('34-570 City, Street No');
    cy.get('select[#stateCity-wrapper]')
      .select('NCR');
    cy.get('#submit')
      .click();
    cy.get('.modal-body')
      .should('contain', 'table');
  });
});
