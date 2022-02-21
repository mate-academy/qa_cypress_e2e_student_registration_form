/// <reference types='cypress' />

describe('Validate inputed data in modal window', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('the modal window contains data used at entering', () => {
    cy.get('#firstName')
    .type('Chastity');
    cy.get('#lastName')
    .type('Kim');
    cy.get('#userEmail')
    .type('karema@mailinator.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
    .click();
    cy.get('#userNumber')
    .type('3809111110');
    cy.get('#dateOfBirthInput')
    .type('{selectall}').type('12 Dec 1991{enter}');
    cy.get('.subjects-auto-complete__value-container')
    .type('Maths{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
   .click();
   cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
   .click();
   cy.get('#currentAddress')
    .type ('hello');
   cy.get('#stateCity-wrapper > :nth-child(2)')
    .type('Haryana{enter}');
    cy.get('#stateCity-wrapper > :nth-child(3)')
    .type('Karnal{enter}');
    cy.contains('.btn', 'Submit')
    .click();
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
   .should('contain.text', 'Chastity Kim');
   cy.get('tbody > :nth-child(2) > :nth-child(2)')
   .should('contain.text','karema@mailinator.com');
   cy.get('tbody > :nth-child(3) > :nth-child(2)')
   .should('contain.text','Male');
   cy.get('tbody > :nth-child(4) > :nth-child(2)')
   .should('contain.text','3809111110');
   cy.get('tbody > :nth-child(5) > :nth-child(2)')
   .should('contain.text','12 December,1991');
   cy.get('tbody > :nth-child(6) > :nth-child(2)')
   .should('contain.text','Maths');
   cy.get('tbody > :nth-child(7) > :nth-child(2)')
   .should('contain.text','Sports, Music');
   cy.get('tbody > :nth-child(9) > :nth-child(2)')
   .should('contain.text','hello');
   cy.get('tbody > :nth-child(10) > :nth-child(2)')
   .should('contain.text','Haryana Karnal');
  });
});