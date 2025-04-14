/// <reference types="cypress" />

describe('', () => {
    before('', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('', () => {
        cy.get('#firstName').type('Bohdan');
        cy.get('#lastName').type('Makarov');
        cy.get('#userEmail').type('test123@gmail.com');
        cy.get('#gender-radio-1').click({force: true});
        cy.get('#userNumber').type('0501328412');
        cy.get('#dateOfBirthInput').type('{selectall}').type('27 Jul 2000{enter}');
        cy.get('.subjects-auto-complete__value-container').type('English{enter}');
        cy.get('#hobbies-checkbox-3').click({force: true});
        cy.get('#currentAddress').type('Pushkina street');
        cy.get('#state').type('NCR{enter}');
        cy.get('#city').type('Delhi{enter}');
        cy.get('#submit').click();
    });

    it('', () => {
        cy.contains('tbody tr', 'Student Name').should('contain', 'Bohdan Makarov');
        cy.contains('tbody tr', 'Student Email').should('contain', 'test123@gmail.com');
        cy.contains('tbody tr', 'Gender').should('contain', 'Male');
        cy.contains('tbody tr', 'Mobile').should('contain', '0501328412');
        cy.contains('tbody tr', 'Date of Birth').should('contain', '27 July,2000');
        cy.contains('tbody tr', 'Subjects').should('contain', 'English');
        cy.contains('tbody tr', 'Hobbies').should('contain', 'Music');
        cy.contains('tbody tr', 'Address').should('contain', 'Pushkina street');
        cy.contains('tbody tr', 'State and City').should('contain', 'NCR Delhi');
    });
});