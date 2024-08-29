/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  const name = Math.random().toString();
  const email = 'newemail@gmail.com';
  const adress = 'Cracow. Pawia 101';
  const number = '8777888666';
  it('should fill all fields in forms except \'picture\'', () => {
    cy.get('.practice-form-wrapper').within(() => {
      cy.get('#firstName').type(name);
      cy.get('#lastName').type(name);
      cy.get('#userEmail').type(email);
      cy.get('#genterWrapper > .col-md-9').click();
      cy.get('#userNumber').type(number);
      cy.get('#currentAddress').type(adress);
      cy.get('#stateCity-wrapper > :nth-child(2)');
      cy.get('#stateCity-wrapper > :nth-child(2)');
      cy.get('#submit').click();
    });

    cy.get('#adplus-anchor').then(($item) => {
      $item.remove();
    });
    cy.get('#closeLargeModal').click();
  });
});
