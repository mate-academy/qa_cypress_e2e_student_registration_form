/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('Redistration testing.', () => {
    
    it('User data', () =>{
        cy.visit('/automation-practice-form');
        cy.get('#firstName').type('tomsmith');
        cy.get('#lastName').type('SuperSecret');
        cy.get('#userEmail').type('tom@mail.com');
        cy.get('#gender-radio-1').click({ force: true });
        cy.get('#userNumber').type('0800500000');
        cy.get('#dateOfBirthInput').type('{selectall}')
        .type('07 Oct 1953{enter}');
        cy.get('#subjectsWrapper').type('qwerty')
        cy.get('#hobbies-checkbox-2').click({ force: true });
        cy.get('#hobbies-checkbox-3').click({ force: true });
        cy.get('#currentAddress').type('Enclave Oil Rig');
        cy.get('#state').type('NCR{enter}');
        cy.get('#city').type('Arroyo{enter}');
        cy.get('#submit').click({force: true});
    });
    it('Check valid user data', () =>{
        cy.get('#example-modal-sizes-title-lg')
        .should('contain', 'Thanks for submitting the form');
        cy.contains('tr', 'Student Name').should('contain.text', 'tomsmith SuperSecret');
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