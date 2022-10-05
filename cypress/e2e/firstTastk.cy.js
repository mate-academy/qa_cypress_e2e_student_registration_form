/// <reference types="cypress" />

describe('User is able to input data in all of the fields', () => {

  it('Data inputting', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  })

    cy.visit('/');

    cy.get('#firstName')
      .type('Donald');

    cy.get('#lastName')
      .type('Mc Ronald');

    cy.get('#userEmail')
      .type('aReqlMail@gmail.com');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click('topRight');

    cy.get('#userNumber')
      .type('1234567890');

    cy.get('[class$="i css-1hwfws3"]')
      .type('Eng{enter}');

    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('20 May 1995 {enter}');
    
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click('left');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click();
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click();

    cy.get('[id="currentAddress"]')
      .type('The Real Street 47');

    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .type('NCR{enter}');
  
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .type('del{enter}');

    cy.get('[id="userForm"]')
      .submit();
  });

  it('should validate the inputed data', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('include.text', 'Donald Mc Ronald');

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('include.text', 'aReqlMail@gmail.com');
    
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('include.text', 'Male');

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('include.text', '1234567890');

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('include.text', '20 May,1995');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('include.text', 'English');

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('include.text', 'Sports, Reading, Music');
    
    cy.get('tbody > :nth-child(8) > :nth-child(2)')
      .should('be.empty');
    
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('include.text', 'The Real Street 47');
      
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('include.text', 'NCR Delhi');
  });
});
