/// <reference types='cypress' />

describe('automation-practice-form', () => {
  before(() => {
    cy.visit('/automation-practice-form')
  });

  it('sould fill form', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Smith');
    cy.get('#userEmail').type('JohnSmith@mail.com');
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0677777777');
    
    cy.get('#dateOfBirthInput')
      .type('{selectall}' + '02 Sep 1992' + '{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('english' + '{downarrow}' + '{enter}');

    cy.get('#hobbies-checkbox-2').check({"force": true});
    cy.get('#currentAddress').type('Baker str. 10');

    cy.get('#react-select-3-input')
      .focus()
      .type('u' + '{downarrow}' + '{enter}');

    cy.get('#react-select-4-input')
      .focus()
      .type('a' + '{downarrow}' + '{enter}');

    cy.get('#submit').click({ force: true });
  });

  it('sould check name', () => {
    cy.contains('td', 'John Smith').should('exist');
  });

  it('sould check email', () => {
    cy.contains('td', 'JohnSmith@mail.com').should('exist');
  });

  it('sould check gender', () => {
    cy.contains('td', 'Male').should('exist');
  });
  
  it('sould check mobile', () => {
    cy.contains('td', '0677777777').should('exist');
  });

  it('sould check date of birth', () => {
    cy.contains('td', '02 September,1992').should('exist');
  });

  it('sould check subject', () => {
    cy.contains('td', 'English').should('exist');
  });

  it('sould check hobbies', () => {
    cy.contains('td', 'Reading').should('exist');
  });

  it('sould check address', () => {
    cy.contains('td', 'Baker str. 10').should('exist');
  });

  it('sould check state and city', () => {
    cy.contains('td', 'Uttar Pradesh Agra').should('exist');
  });
});
