/// <reference types='cypress' />

const { generateStudent } = require('../support/generateStudent');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide an ability to register with valid credentials', () => {
    const newStudent = generateStudent();

    cy.get('h1').contains('Practice Form').should('be.visible');
    cy.get('#firstName').type(newStudent.firstName);
    cy.get('#lastName').type(newStudent.lastName);
    cy.get('#userEmail').type(newStudent.email);
    cy.contains('.custom-radio', newStudent.gender).click();
    cy.get('#userNumber').type(newStudent.mobilePhone);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + newStudent.dateOfBirth + '{enter}');
    cy.get('#subjectsInput').type(newStudent.subject + '{enter}');
    cy.contains('.custom-checkbox', newStudent.hobby).click();
    cy.get('#currentAddress').type(newStudent.currentAddress);
    cy.get('.css-1wa3eu0-placeholder').contains('Select State')
      .type(newStudent.state + '{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('.css-1wa3eu0-placeholder').type(newStudent.city + '{enter}');
    cy.get('#submit').click();
    cy.get('.table').should('contain.text', `${newStudent.firstName} ${newStudent.lastName}`);
    cy.get('.table').should('contain.text', newStudent.email);
    cy.get('.table').should('contain.text', newStudent.gender);
    cy.get('.table').should('contain.text', newStudent.mobilePhone);
    cy.get('.table').should('contain.text', newStudent.dateOfBirth);
    cy.get('.table').should('contain.text', newStudent.subject);
    cy.get('.table').should('contain.text', newStudent.hobby);
    cy.get('.table').should('contain.text', newStudent.currentAddress);
    cy.get('.table').should('contain.text', `${newStudent.state} ${newStudent.city}`);
  });
});
