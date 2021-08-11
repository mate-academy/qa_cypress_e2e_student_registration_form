/// <reference types='cypress' />

describe('', () => {
beforeEach(function () {
   cy.visit('https://demoqa.com/automation-practice-form');
});

it('Basic level', () => {
    cy.get('#firstName').type('Nick');
    cy.get('#lastName').type('Gane');
    cy.get('#userEmail').type('nick.jane@mail.com');
    cy.get('[for=gender-radio-3]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('{selectall}').type('25 May 1989{enter}');
    cy.get('.subjects-auto-complete__value-container').type('{selectall}').type('E{enter}');
    cy.get('[for=hobbies-checkbox-3]').click();
    cy.get('#currentAddress').type('{selectall}').type('London 25');
    cy.get('.css-1wa3eu0-placeholder').contains('Select State').type('N{enter}');
    cy.get('.css-1wa3eu0-placeholder').contains('Select City').type('G{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('exist');
    cy.contains('tbody tr', 'Student Name').should('contain', 'Nick Gane');
    cy.contains('tbody tr', 'Student Name').should('contain', 'Nick Gane');
    cy.contains('tbody tr', 'Student Email').should('contain', 'nick.jane@mail.com');
    cy.contains('tbody tr', 'Gender').should('contain', 'Other');
    cy.contains('tbody tr', 'Mobile').should('contain', '1234567890');
    cy.contains('tbody tr', 'Date of Birth').should('contain', '25 May,1989');
    cy.contains('tbody tr', 'Hobbies').should('contain', 'Music');
    cy.contains('tbody tr', 'Address').should('contain', 'London 25');
    cy.contains('tbody tr', 'State and City').should('contain', 'NCR Gurgaon');
});
});
