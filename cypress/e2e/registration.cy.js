/// <reference types='cypress' />

const { createRandomUser } = require("../support/generate");

describe('Student Registration page', () => {
  before(() => {
    cy.visit('');
   
  });

  it('should check inputed data in modal window', () => {
    
    const { firstname, lastname, email, phone, gender, month, year, hobby, address  } = createRandomUser();
    
    cy.findByPlaceholder('First Name')
      .type(firstname);
    cy.findByPlaceholder('Last Name')
      .type(lastname);
    cy.findByPlaceholder('name@example.com')
      .type(email);
    cy.contains('.custom-control-label', gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(phone );
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select').select(month);
    cy.pickDate('year-select').select(`${year}`);
    cy.pickDate('day').contains('8').click();
    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}');
    cy.contains('.custom-checkbox', hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(address);
    cy.get('#state')
      .type('{downArrow}{enter}');
      cy.get('#city')
      .type('{downArrow}{downArrow}{enter}');
    cy.contains('.btn', 'Submit')
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain.text', `${firstname} ${lastname}`);
    cy.contains('tr', 'Student Email')
      .should('contain.text', `${email}`);
    cy.contains('tr', 'Gender')
      .should('contain.text', `${gender}`);
    cy.contains('tr', 'Mobile')
      .should('contain.text', `${phone}`);
    cy.contains('tr', 'Date of Birth')
      .should('contain.text', `${year}`);
    cy.contains('tr', 'Address')
      .should('contain.text', `${address}`);
  });
});
