/// <reference types='cypress' />


describe('Fill all fields', () => {
    it('Go to lofin page', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Create new student', () => {
        cy.get('#firstName').type('Chandler');
        cy.get('#lastName').type('Bing');
        cy.get('#userEmail').type('chandlerbing@gmail.com');
        cy.get('[for="gender-radio-1"]').click();
        cy.get('#userNumber').type('22477');
        cy.get('#dateOfBirthInput').type('{selectall}').type('17 August 1981 {enter}');
        cy.get('.subjects-auto-complete__value-container').type('English{enter}');
        cy.get('[for="hobbies-checkbox-1"]').click();
        cy.get('#currentAddress').type('New York, US');
        cy.get('.css-1wa3eu0-placeholder').contains('Select State').type('N{enter}');
        cy.get('.css-1wa3eu0-placeholder').contains('Select City').type('G{enter}');
        cy.get('#submit').click();
        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('exist');
        
        cy.contains('tbody tr', 'Student Name').should('contain', 'Chandler Bing');
        cy.contains('tbody tr', 'Student Email').should('contain', 'chandlerbing@gmail.com');
        cy.contains('tbody tr', 'Gender').should('contain', 'Male');
        cy.contains('tbody tr', 'Mobile').should('contain', '22477');
        cy.contains('tbody tr', 'Date of Birth').should('contain', '17 August,1981');
        cy.contains('tbody tr', 'Subject').should('contain', 'English');
        cy.contains('tbody tr', 'Hobbies').should('contain', 'Sports');
        cy.contains('tbody tr', 'Address').should('contain', 'New York, US');
        cy.contains('tbody tr', 'State and City').should('contain', 'NCR Gurgaon');
   
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