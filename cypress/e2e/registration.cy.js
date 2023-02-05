/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display entered data', () => {
    const { firstname, lastname, email, phone, address } = generateUser();

    cy.get('#firstName')
      .type(firstname);
    
    cy.get('#lastName')
      .type(lastname);
    
    cy.get('#userEmail')
      .type(email);
    
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
      .click();
    
    cy.get('#userNumber')
      .type(phone);
    
    cy.get('#currentAddress')
      .type(address);
    
    cy.get('#submit')
      .click({ force: true })
    
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', `${firstname} ${lastname}`);
    
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', `${email}`);
    
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', `Male`);
    
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', `${phone}`);
    
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', `${address}`);
  });
});

