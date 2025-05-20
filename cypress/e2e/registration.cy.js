/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should work with correct data', () => {
    cy.get('#firstName').type('Mykola');
    cy.get('#lastName').type('Stesiuk');
    cy.get('#userEmail').type('mikalaj.krutak@gmail.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('573221288');
    cy.get('#dateOfBirthInput').click();
    cy.get(':nth-child(1) > .react-datepicker__day--029').click();
    cy.get(
      '#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label'
    ).click();
    cy.get('.subjects-auto-complete__value-container').click();
    cy.get('.subjects-auto-complete__value-container').type('English');
    cy.get('#currentAddress').type('hello cypress');
    cy.get('#stateCity-wrapper > :nth-child(2)').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();

    cy.get('.modal-header').should('exist');
  });
});
