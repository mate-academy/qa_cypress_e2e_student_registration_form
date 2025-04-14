/// <reference types="cypress" />
const { generateStudent } = require('../support/generateStudent');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should provide an ability to register with valid credentials', () => {
    const student = generateStudent();

    cy.get('#firstName').type(student.firstName);
    cy.get('#lastName').type(student.lastName);
    cy.get('#userEmail').type(student.email);
    cy.contains('.custom-control-label', student.gender).click();
    cy.get('#userNumber').type(student.number);
    cy.get('#dateOfBirthInput').type(`{selectAll}${student.birthdate}{enter}`);
    cy.get('#subjectsContainer').type(`${student.subject}{enter}`);
    cy.contains('.custom-control-label', student.hobbie).click();
    cy.get('#currentAddress').type(student.address);
    cy.get('#state').type(`${student.state}{enter}`);
    cy.get('#city').type(`${student.city}{enter}`);
    cy.get('#submit').click();

    cy.get('.table').should('contain.text', `${student.firstName} ${student.lastName}`);
    cy.get('.table').should('contain.text', student.email);
    cy.get('.table').should('contain.text', student.gender);
    cy.get('.table').should('contain.text', student.number);
    cy.get('.table').should('contain.text', student.birthdate);
    cy.get('.table').should('contain.text', student.subject);
    cy.get('.table').should('contain.text', student.hobbie);
    cy.get('.table').should('contain.text', student.address);
    cy.get('.table').should('contain.text', `${student.state} ${student.city}`);
  });
});
