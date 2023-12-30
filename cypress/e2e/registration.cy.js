/// <reference types='cypress' />

const { person } = require('../support/newPerson.js');

describe('Student Registration page', () => {
  const newPerson = person();

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('correct input and display of student data', () => {
    cy.get('#firstName').type(newPerson.firstName);
    cy.get('#lastName').type(newPerson.lastName);
    cy.get('#userEmail').type(newPerson.email);
    cy.contains('.custom-control-label', newPerson.normalizeSex).click();
    cy.get('#userNumber').type(newPerson.number);
    cy.get('#dateOfBirthInput').click();
    cy.get('#dateOfBirthInput').type(`{selectAll} ${newPerson.dataBirth} {enter}`);
    cy.get('#subjectsContainer').type(`C{enter}`);
    cy.contains('.custom-control-label', newPerson.hobbies).click();
    cy.get('#currentAddress').type(newPerson.address);
    cy.get('#state').type(`N {enter}`);
    cy.get('#city').type(`D {enter}`);
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', newPerson.firstName)
      .and('contain', newPerson.lastName);
    cy.contains('tr', 'Student Email').should('contain', newPerson.email);
    cy.contains('tr', 'Gender').should('contain', newPerson.normalizeSex);
    cy.contains('tr', 'Mobile').should('contain', newPerson.number);
    cy.contains('tr', 'Date of Birth').should('contain', newPerson.checkBirth);
    cy.contains('tr', 'Subjects').should('contain', 'Physics');
    cy.contains('tr', 'Hobbies').should('contain', newPerson.hobbies);
    cy.contains('tr', 'Address').should('contain', newPerson.address);
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});
