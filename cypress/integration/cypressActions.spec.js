// <reference types='cypress' />

//const { contains } = require("cypress/types/jquery");

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
describe('Fill and check', () => {
    it('Fill and check entered data', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#firstName')
        .type('Piter');
        cy.get('#lastName')
        .type('Penn');
        cy.get('#userEmail')
        .type('PiterP@gmail.com');
        cy.get('#gender-radio-3')
        .click({force: true});
        cy.get('#userNumber')
        .type('123456789');
        cy.get('#dateOfBirthInput')
        .type('{selectall}').type('01 May 2001{enter}');
        cy.get('.subjects-auto-complete__value-container').type('Short about Piter');
        cy.get('#hobbies-checkbox-1')
        .click({force:true});
        cy.get('#hobbies-checkbox-2')
        .click({force:true});
        cy.get('#hobbies-checkbox-3')
        .click({force:true});
        cy.get('#currentAddress')
        .type('The island where fairies live');
        cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
        .type('NCR{enter}');
        cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
        .type('Nolda{enter}');
        cy.get('#submit')
        .click({force:true});
        cy.contains('tr', 'Student Name')
        .should('contain', 'Piter Penn');
        cy.contains('tr', 'Student Email')
        .should('contain', 'PiterP@gmail.com');
        cy.contains('tr', 'Gender')
        .should('contain', 'Other');
        cy.contains('tr', 'Mobile')
        .should('contain', '123456789');
        cy.contains('tr', 'Date of Birth')
        .should('contain', '01 May');
        cy.contains('tr', 'Hobbies')
        .should('contain', 'Sports, Reading, Music');
        cy.contains('tr', 'Address')
        .should('contain', 'The island');

    })
})