/// <reference types='cypress' />

describe ('basic level', () => {

    before('open site', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    })
    it('Register', () => {
        cy.get('#firstName').type('Lola');
        cy.get('#lastName').type('Run');
        cy.get('#userEmail').type('lola@run.com');
        cy.get('[for="gender-radio-3"]').click();
        cy.get('#userNumber').type('0000000000');
        cy.get('#dateOfBirthInput').type('{selectall}').type('02 April 1993{enter}');
        cy.get('#subjectsWrapper').type('Computer Science{enter}');
        cy.get('[for="hobbies-checkbox-3"]').click({force: true});
        cy.get('#currentAddress').type('Just run');
        cy.get('#state').type('Rajasthan{enter}');
        cy.get('#city').type('Jaipur{enter}');
        cy.get('#submit').click();
      });

    it('Validated registration', () => {
        cy.contains('tbody tr', 'Student Name').should('contain.text', 'Lola Run');
        cy.contains('tbody tr', 'Student Email').should('contain.text', 'lola@run.com');
        cy.contains('tbody tr', 'Gender').should('contain.text', 'Other');
        cy.contains('tbody tr', 'Mobile').should('contain.text', '0000000000');
        cy.contains('tbody tr', 'Date of Birth').should('contain.text', '02 April,1993');
        cy.contains('tbody tr', 'Subjects').should('contain.text', 'Computer Science');
        cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Music');
        cy.contains('tbody tr', 'Address').should('contain.text', 'Just run');
        cy.contains('tbody tr', 'State and City').should('contain.text', 'Rajasthan Jaipur');
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

