/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

describe('Homework_3', () => {
    before('', () => {
      cy.visit('/automation-practice-form');
    });
  
    it('#1, 2# 3# tasks', () => {
        cy.get('#firstName').type('John').should('have.value', 'John');
        cy.get('#lastName').type('Smith').should('have.value', 'Smith');
        cy.get('#userEmail').type('john.smith@gmail.com').should('have.value', 'john.smith@gmail.com');

        cy.contains('Male').click();

        cy.get('#userNumber').type('1234567890').should('have.value', '1234567890');
        cy.get('#dateOfBirthInput').type('{selectall} 01 Jan 2001 {enter}').should('have.value', '01 Jan 2001');
        cy.get('#subjectsContainer').type('Physi{downarrow}{enter}');

        cy.get('#hobbiesWrapper').contains('Music').click();

        cy.get('#currentAddress').type('prosp. Nezhalezhnosti 18').should('have.value', 'prosp. Nezhalezhnosti 18');

        cy.get('#state').type('Haryana{enter}').should('contain', 'Haryana');
        cy.contains('Select City').type('K{enter}');

        cy.get('#submit').click();

        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('exist');


    // validate

    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', 'John Smith');
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', 'john.smith@gmail.com');
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', '1234567890');
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '01 January,2001');
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', 'Physics');
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', 'Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', 'prosp. Nezhalezhnosti 18');
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', 'Haryana Karnal');
    
    cy.get('#closeLargeModal').click();
    });

});