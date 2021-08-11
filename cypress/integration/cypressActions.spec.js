/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

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

describe('Create and validate new student', () => {

    before('Visit web-site', () => {
      cy.visit('/automation-practice-form');
    });

    it('Create new student', () => {
      cy.get('#firstName').type('Ian');
      cy.get('#lastName').type('Gillan');
      cy.get('#userEmail').type('deep@purple.com');
      cy.get('[for="gender-radio-1"]').click();
      cy.get('#userNumber').type('0101011968');
      cy.get('#dateOfBirthInput').type('{selectall}').type('19 August 1945{enter}');
      cy.get('#subjectsInput').type('Computer Science{enter}');
      cy.get('[for="hobbies-checkbox-3"]').click();
      cy.get('#currentAddress').type('London, Great Britain');
      cy.get('#state').type('NCR{enter}');
      cy.get('#city').type('Delhi{enter}');
      cy.get('#submit').click();
    });

    it('Check if credentials are correct', () => {
      cy.contains('tbody tr', 'Student Name').should('contain.text', 'Ian Gillan');
      cy.contains('tbody tr', 'Student Email').should('contain.text', 'deep@purple.com');
      cy.contains('tbody tr', 'Gender').should('contain.text', 'Male');
      cy.contains('tbody tr', 'Mobile').should('contain.text', '0101011968');
      cy.contains('tbody tr', 'Date of Birth').should('contain.text', '19 August,1945');
      cy.contains('tbody tr', 'Subjects').should('contain.text', 'Computer Science');
      cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Music');
      cy.contains('tbody tr', 'Address').should('contain.text', 'London, Great Britain');
      cy.contains('tbody tr', 'State and City').should('contain.text', 'NCR Delhi');
      });

  });
