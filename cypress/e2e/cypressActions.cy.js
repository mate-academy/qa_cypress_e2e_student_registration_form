/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Successful registration', () => {
  const { firstName, lastName, email, mobileNumber, dateOfBirth, currentAddress } = generateUser();
  
  it('Fill all fields with valid data', () => {
    cy.visit('/automation-practice-form');

    cy.wait(5000);
        
    cy.inputByAttribute('id', 'firstName')
      .type(firstName);

    cy.inputByAttribute('id', 'lastName')
      .type(lastName);
    
    cy.inputByAttribute('id', 'userEmail')
      .type(email);
    
    cy.inputByAttribute('type', 'radio')
      .check('Female', { force: true });
    
    cy.inputByAttribute('id', 'userNumber')
      .type(mobileNumber);
    
    cy.inputByAttribute('id', 'dateOfBirthInput')
      .type('{selectall}')
      .type(dateOfBirth)
      .type('{enter}')

    cy.inputByAttribute('id', 'subjectsInput')
      .type('Maths')
      .type('{enter}')
      .type('Biology')
      .type('{enter}');
  
    cy.inputByAttribute('type', 'checkbox')
      .check('1', { force: true });
    
    cy.inputByAttribute('type', 'checkbox')
      .check('3', { force: true });

    cy.inputByAttribute('id', 'currentAddress')
      .type(currentAddress);  
    
    cy.inputByAttribute('id', 'state')
      .type('Ha{enter}');
  
    cy.inputByAttribute('id', 'city')
      .type('Ka{enter}');
  
    cy.inputByAttribute('id', 'submit')
      .click();
    
    cy.inputByAttribute('class', 'modal-body')
      .contains(firstName)
      .contains(lastName)
    
    cy.inputByAttribute('class', 'modal-body').contains(email);

    cy.inputByAttribute('class', 'modal-body').contains(mobileNumber);

    cy.inputByAttribute('class', 'modal-body').contains(currentAddress);
  });  
});


