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

describe('Fill fields', () => {
    before('', () => {
            cy.visit('/');
        });
    it('fill all fields', () => {
        cy.get('#firstName').type('Eric');
        cy.get('#lastName').type('Cartman');
        cy.get('#userEmail').type('e.cartman@sp.com');
        cy.get('[for=gender-radio-1]').click();
        cy.get('#userNumber').type('0123456789');
        cy.get('#dateOfBirthInput').type('{selectall}').type('01 Dec 1999{enter}');
        cy.get('.subjects-auto-complete__input').type('e{enter}').type('co{enter}');
        cy.get('[for=hobbies-checkbox-3]').click();
        cy.get('#currentAddress').type('Some Text about South Park');
        cy.get('.css-1wa3eu0-placeholder').contains('Select State').type('u{enter}');
        cy.get('.css-1wa3eu0-placeholder').contains('Select City').type('a{enter}');
        cy.get('#submit').click();
        cy.get('tbody td').contains('Eric').should('exist');
        cy.get('tbody td').contains('Cartman').should('exist');
        cy.get('tbody td').contains('e.cartman@sp.com').should('exist');
        cy.get('tbody td').contains('Male').should('exist').click();
        cy.get('tbody td').contains('0123456789').should('exist');
        cy.get('tbody td').contains('01 December,1999').should('exist');
        cy.get('tbody td').contains('English, Computer Science').should('exist');
        cy.get('tbody td').contains('Music').should('exist');
        cy.get('tbody td').contains('Some Text about South Park').should('exist');
        cy.get('tbody td').contains('Uttar Pradesh Agra').should('exist');
    });
}); 