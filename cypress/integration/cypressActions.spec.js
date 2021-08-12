/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('Basic - Register and validate new student', () => {
  before('Visit web-site', () => {
    cy.visit('/automation-practice-form');
  });
  
  it('Register new student', () => {
    cy.get('#firstName').type('Bill');
    cy.get('#lastName').type('Gates');
    cy.get('#userEmail').type('bg@ms.com');
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0123456789');
    cy.get('#dateOfBirthInput').type('{selectall}').type('28 October 1955{enter}');
    cy.get('#subjectsInput').type('Computer Science{enter}');
    cy.get('[for="hobbies-checkbox-2"]').click({force: true});
    cy.get('#currentAddress').type('Seattle WA USA');
    cy.get('#state').type('Rajasthan{enter}');
    cy.get('#city').type('Jaipur{enter}');
    cy.get('#submit').click();
  });

  it('Validate registration', () => {
    cy.contains('tbody tr', 'Student Name').should('contain.text', 'Bill Gates');
    cy.contains('tbody tr', 'Student Email').should('contain.text', 'bg@ms.com');
    cy.contains('tbody tr', 'Gender').should('contain.text', 'Male');
    cy.contains('tbody tr', 'Mobile').should('contain.text', '0123456789');
    cy.contains('tbody tr', 'Date of Birth').should('contain.text', '28 October,1955');
    cy.contains('tbody tr', 'Subjects').should('contain.text', 'Computer Science');
    cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Reading');
    cy.contains('tbody tr', 'Address').should('contain.text', 'Seattle WA USA');
    cy.contains('tbody tr', 'State and City').should('contain.text', 'Rajasthan Jaipur');
    });

});

// Advanced level:
// Check next test cases:
// 1. Pagination 
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables