/// <reference types='cypress' />

describe ('basic level', () => {

    before('open site', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    })

    it('Login form', () => {
        cy.get('#firstName').type('murk@');
        cy.get('#lastName').type('kurv@');
        cy.get('#userEmail').type('kurv@murka.to');
        cy.get('[for="gender-radio-3"]').type('{selectall}');
        cy.get('#userNumber').type('0000000000');
        cy.get('#dateOfBirthInput').type('{selectall}').type('02 April 1993{enter}');
        cy.get('#subjectsWrapper').type('blabla');
        cy.get('[for="hobbies-checkbox-3"]').contains('Music').click();
        cy.get('#currentAddress').type('Come together');
        cy.get('#state').click().contains('Rajasthan').click();
        cy.get('#city').click().contains('div', 'Jaipur').click({force: true});
        cy.get('#submit').click(); 
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
    });
});


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

