/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields in register forms', () => {
    cy.get('#firstName').type('Carmelo');
    cy.get('#lastName').type('Anthony');
    cy.get('#userEmail').type('carmeloAnt663@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('0542094939');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('July');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--012').click();
    cy.get('.subjects-auto-complete__value-container').type('Arts{Enter}');
    // eslint-disable-next-line max-len
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click();
    cy.get('#currentAddress').type('Springfield, Wall Ave, 74');
    cy.get('#state').click();
    cy.contains('.css-1n7v3ny-option', 'NCR').click();
    cy.get('#city').click();
    cy.contains('.css-1n7v3ny-option', 'Delhi').click();
    cy.get('#submit').click();
    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');
  });
});
