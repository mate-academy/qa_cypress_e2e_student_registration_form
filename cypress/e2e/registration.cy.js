/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should return submitted form', () => {
    cy.get('#firstName')
      .type('firstName');
    cy.get('#lastName')
      .type('lastName');
    cy.get('#userEmail')
      .type('firstName@mail.com');
    cy.get('.custom-control-label').contains('Male')
      .click();
    cy.get('#userNumber')
      .type('1234567890');
    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}');
    cy.get('.custom-control-label').contains('Sports')
      .click();
    cy.get('#currentAddress')
      .type('currentAdress');
    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .click();
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .click();
    cy.get('#react-select-4-option-0')
      .click();
    cy.get('#submit')
      .click();

    cy.get('.table-responsive')
      .contains('firstName lastName');
    cy.get('.table-responsive')
      .contains('firstName@mail.com');
    cy.get('.table-responsive')
      .contains('Male');
    cy.get('.table-responsive')
      .contains('1234567890');
    cy.get('.table-responsive')
      .contains('23 April,2024');
    cy.get('.table-responsive')
      .contains('English');
    cy.get('.table-responsive')
      .contains('Sports');
    cy.get('.table-responsive')
      .contains('currentAdress');
    cy.get('.table-responsive')
      .contains('NCR Delhi');
  });
});
