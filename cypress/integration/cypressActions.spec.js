/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form
describe('', () => {
    beforeEach(function () {
       cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Basic level', () => {
        cy.get('#firstName').type('Lily');
        cy.get('#lastName').type('Pool');
        cy.get('#userEmail').type('lilypool@gmail.com');
        cy.get('[for=gender-radio-2]').click();
        cy.get('#userNumber').type('0453214567');
        cy.get('#dateOfBirthInput').type('{selectall}').type('12 April 1991{enter}');
        cy.get('.subjects-auto-complete__value-container').type('{selectall}').type('Ar{enter}');
        cy.get('[for=hobbies-checkbox-3]').click();
        cy.get('#currentAddress').type('{selectall}').type('Adress 5');
        cy.get('.css-1wa3eu0-placeholder').contains('Select State').type('Ha{enter}');
        cy.get('.css-1wa3eu0-placeholder').contains('Select City').type('P{enter}');
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('exist');
        cy.contains('tbody tr', 'Student Name').should('contain', 'Lily Pool');
        cy.contains('tbody tr', 'Student Email').should('contain', 'lilypool@gmail.com');
        cy.contains('tbody tr', 'Gender').should('contain', 'Female');
        cy.contains('tbody tr', 'Mobile').should('contain', '0453214567');
        cy.contains('tbody tr', 'Date of Birth').should('contain', '12 April,1991');
        cy.contains('tbody tr', 'Subject').should('contain', 'Arts');
        cy.contains('tbody tr', 'Hobbies').should('contain', 'Music');
        cy.contains('tbody tr', 'Address').should('contain', 'Adress 5');
        cy.contains('tbody tr', 'State and City').should('contain', 'Haryana Panipat');
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
