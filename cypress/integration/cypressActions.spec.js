/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('', () => {
    before(''   , () => {
        cy.visit('https://demoqa.com/automation-practice-form')
    });

    it('Filling all fields in forms except "picture"Clicking on [Submit] button', () => {
        cy.get('#firstName').type('Topsy');
        cy.get('#lastName').type('Kretts');
        cy.get('#userEmail').type('topsykretts13@gmail.com');

        cy.get('[for="gender-radio-1"]').click();
        cy.get('#userNumber').type('1313131313');
        cy.get('#dateOfBirthInput').type('{selectall}13 Aug 2000{enter}');
        cy.get('#subjectsContainer').type('art{downArrow}{enter}');
        cy.get('[for="hobbies-checkbox-3"]').click();

        cy.get('#currentAddress').type('USA');
        cy.get('#state').type('ut{downArrow}{enter}');
        cy.get('#city').type('ag{downArrow}{enter}')
    });

    it('Clicking on [Submit] button', () => {
        cy.get('#submit').click();
    });

    it('Validating inputed data in modal window', () => {
        cy.contains('tbody tr', 'Student Name').should('contain.text', 'Topsy Kretts');
        cy.contains('tbody tr', 'Student Email').should('contain.text', 'topsykretts13@gmail.com');
        cy.contains('tbody tr', 'Gender').should('contain.text', 'Male');
        cy.contains('tbody tr', 'Mobile').should('contain.text', '1313131313');
        cy.contains('tbody tr', 'Date of Birth').should('contain.text', '13 August,2000');
        cy.contains('tbody tr', 'Subjects').should('contain.text', 'Arts');
        cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Music');
        cy.contains('tbody tr', 'Address').should('contain.text', 'USA');
        cy.contains('tbody tr', 'State and City').should('contain.text', 'Uttar Pradesh Agra');
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