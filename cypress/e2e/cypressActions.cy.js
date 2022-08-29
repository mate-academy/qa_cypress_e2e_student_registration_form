/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Name of the group', () => {
  before(() => {
    cy.visit('/')
  });

  it('Fill all fields in "Practice Form"', () => {
    const user = generateUser();
    cy.viewport(1400, 1000);
    
    cy.findByPlaceholder('First Name').type(user.username);
    cy.findByPlaceholder('Last Name').type(user.userlastname);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get('#gender-radio-1').click({force: true});
    cy.findByPlaceholder('Mobile Number').type(user.numberofphone);
    cy.get('#dateOfBirthInput').type('{selectAll}').type('08 Feb 1987');
    cy.get('#hobbies-checkbox-1').click({force: true});
    cy.get('#dateOfBirth-label').click();
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
    cy.findByPlaceholder('Current Address').type('47 W 13th St, New York, NY 10011, USA');
    cy.get('#state').type('NCR{enter}');
    cy.get('#city').type('Delhi{enter}');
    cy.get('.btn.btn-primary').click();

    cy.contains('Thanks for submitting the form').should('be.visible');
    cy.contains(user.username).should('be.visible');
    cy.contains(user.userlastname).should('be.visible');
    cy.contains(user.email).should('be.visible');
    cy.get('.table-responsive').should('contain.text', 'Male');
    cy.contains(user.numberofphone).should('be.visible');
    cy.contains('08 February,1987').should('be.visible');
    cy.contains('Maths').should('be.visible');
    cy.contains('Sports').should('be.visible');
    cy.contains('47 W 13th St, New York, NY 10011, USA').should('be.visible');
    cy.contains('NCR Delhi').should('be.visible');
  });
});
