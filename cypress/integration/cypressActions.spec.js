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

describe('Test', () => {
    before(function () {
        cy.visit('/automation-practice-form');
    });
    
    it('Validate inputed data', () => {
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Smith');
        cy.get('#userEmail').type('john_smith@mail.com');
        cy.get('[for="gender-radio-1"]').click();
        cy.get('#userNumber').type('3874245657');
        cy.get('#dateOfBirthInput').type('{selectall}').type('19 06 1989{enter}');
        cy.get('.subjects-auto-complete__control').type('c{downarrow}{enter}');
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('#currentAddress').type('Green 25');
        cy.get('.css-1wa3eu0-placeholder')
        .contains('Select State').type('har{enter}');
        cy.get('.css-1wa3eu0-placeholder')
        .contains('Select City').type('k{enter}');
        cy.get('#userForm').submit();
        cy.contains('tbody tr', 'Student Name').should('contain', 'John Smith');
        cy.contains('tbody tr', 'Student Email').should('contain', 'john_smith@mail.com');
        cy.contains('tbody tr', 'Gender').should('contain', 'Male');
        cy.contains('tbody tr', 'Mobile').should('contain', '3874245657');
        cy.contains('tbody tr', 'Date of Birth').should('contain', '19 June,2021');
        cy.contains('tbody tr', 'Subjects').should('contain', 'Chemistry');
        cy.contains('tbody tr', 'Hobbies').should('contain', 'Sports');
        cy.contains('tbody td', 'Picture').should('contain', '');
        cy.contains('tbody tr', 'Address').should('contain', 'Green 25');
        cy.contains('tbody tr', 'State and City').should('contain', 'Haryana Karnal');
    })
  })