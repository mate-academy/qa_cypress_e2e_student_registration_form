/// <reference types="cypress" />

describe('User is able to input data in all of the fields', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });


  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('Data inputting', () => {
    cy.get('#firstName')
      .type('Donald');

    cy.get('#lastName')
      .type('Mc Ronald');

    cy.get('#userEmail')
      .type('aReqlMail@gmail.com');

    cy.get('[for="gender-radio-1"]')
      .click();

    cy.get('#userNumber')
      .type('1234567890');

    cy.get('[class$="i css-1hwfws3"]')
      .type('Eng{enter}');

    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('20 May 1995 {enter}');
    
    cy.get('#hobbies-checkbox-1')
      .click({ force:true });
    cy.get('#hobbies-checkbox-2')
      .click({ force:true });
    cy.get('#hobbies-checkbox-3')
      .click({ force:true });

    cy.get('[id="currentAddress"]')
      .type('The Real Street 47');

    cy.get('[id="state"]')
      .click()
      .type('NCR{enter}');

    cy.get('[id="city"]')
      .click()
      .type('del{enter}');

    cy.get('[id="userForm"]')
      .submit();
  });

  it('should validate the inputed data', () => {
    cy.login();

    cy.contains('tr', 'Student Name')
      .should('contain', 'Donald Mc Ronald');

    cy.contains('tr', 'Student Email')
      .should('contain', 'aReqlMail@gmail.com');
    
    cy.contains('tr', 'Gender')
      .should('contain', 'Male');

    cy.contains('tr', 'Mobile')
      .should('contain', '1234567890');

    cy.contains('tr', 'Date of Birth')
      .should('contain', '20 May,1995');

    cy.contains('tr', 'Subjects')
      .should('contain', 'English');

    cy.contains('tr', 'Hobbies')
      .should('contain', 'Sports, Reading, Music');
    
    cy.contains('tr', 'Picture')
      .should('contain', '');
    
    cy.contains('tr', 'Address')
      .should('contain', 'The Real Street 47');
      
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });
});
