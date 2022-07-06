/// <reference types='cypress' />
const { generateUser } = require('../support/generate')
const faker = require('faker');

describe('User should be able to', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('fill all fields with valid data', () => {
    
    cy.get('#firstName')
      .type('Name').as('nameuser');
    cy.get('#lastName').type('Surname').as('surnameuser');
    cy.get('#userEmail').type('testmail@mail.com');
    cy.get('#gender-radio-3').click( {force: true});
    cy.get('#userNumber').type('0631234567');
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('01 May 1999'+ '{enter}');
    cy.get('#subjectsInput').type('Hi' + '{enter}');
    cy.get('#hobbies-checkbox-2').click( {force: true});
    cy.get('#currentAddress').type('Ukraine');
    cy.get('#stateCity-wrapper').type('Uttar Pradesh' + '{enter}');
    cy.get('#city').type('Agra' + '{enter}')
    cy.get('#submit').click({force: true});

    cy.contains('tr', 'Student Name').should('contain.text', 'Name');
    cy.contains('tr', 'Student Email').should('contain.text', 'testmail@mail.com');
    cy.contains('tr', 'Gender').should('contain', 'Other');
    cy.contains('tr', 'Mobile').should('contain', '0631234567');
    cy.contains('tr', 'Date of Birth').should('contain.text', '01 May,1999');
    cy.contains('tr', 'Subjects').should('contain.text', 'Hindi');
    cy.contains('tr', 'Hobbies').should('contain.text', 'Reading');
    cy.contains('tr', 'Address').should('contain.text', 'Ukraine');
    cy.contains('tr', 'State and City').should('contain.text', 'Uttar Pradesh Agra');
  });

});


