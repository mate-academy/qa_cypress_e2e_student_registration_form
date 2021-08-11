/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('tables', () => {
    it('fill all fields', () => {
        cy.visit('/automation-practice-form');
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

        cy.visit('/webtables');
        cy.get('select').select('5').should('have.value', '5');
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Maria');
        cy.get('#lastName').type('Marinovskaya');
        cy.get('#userEmail').type('maria@mail.com');
        cy.get('#age').type('19');
        cy.get('#salary').type('11000');
        cy.get('#department').type('Taxi');
        cy.get('#submit').click();

        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('David');
        cy.get('#lastName').type('Davidov');
        cy.get('#userEmail').type('david@mail.com');
        cy.get('#age').type(29);
        cy.get('#salary').type(17000);
        cy.get('#department').type('Cafe');
        cy.get('#submit').click();

        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Jhon');
        cy.get('#lastName').type('Jhonov');
        cy.get('#userEmail').type('jhon@mail.com');
        cy.get('#age').type(34);
        cy.get('#salary').type(21000);
        cy.get('#department').type('IT');
        cy.get('#submit').click();

        cy.wait(2000);
        cy.get('.-btn').contains('Next').should('exist').click();
        cy.get('.-btn').contains('Previous').should('exist').click();

        cy.get('#delete-record-1').click();
        cy.get('#searchBox').type('David');
        cy.get('#edit-record-5').click();
        cy.get('#salary').type('{selectall}').type('99999{enter}');
    });
});
