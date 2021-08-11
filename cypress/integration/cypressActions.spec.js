/// <reference types="cypress" />

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

describe('',() => {
  before('', () => {
    cy.visit('/automation-practice-form');
  });
  
  it('', () => {
    cy.get('#firstName').type(`Olena`);
    cy.get('#lastName').type(`Vdovychenko`);
    cy.get('#userEmail').type(`ena.noname@gmail.com`);
    cy.get('.custom-control.custom-radio.custom-control-inline').contains('Female').click();
    cy.get('#userNumber').type(`0122033456`);
    cy.get('#dateOfBirthInput').type(`{selectall}`).type('12 September 1997{enter}');
    cy.get('#subjectsContainer').type(`QA`);
    cy.get('.custom-control-label').contains('Sports').click();
    cy.get('.custom-control-label').contains('Reading').click();
    cy.get('.custom-control-label').contains('Music').click();
    cy.get('#currentAddress').type(`85 Sunny Street`);
    cy.get('#state').click().contains('Rajasthan').click();
    cy.get('#city').click().contains('div', 'Jaipur').click({force: true});

    cy.get('#submit').click();

    cy.contains('tbody tr', 'Student Name').should('contain.text', 'Olena Vdovychenko');
  });
});