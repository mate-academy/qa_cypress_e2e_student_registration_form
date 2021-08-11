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

describe('Add a new student',() => {
  before('Open website', () => {
    cy.visit('/automation-practice-form');
  });
  
  it('Submit form', () => {
    cy.get('#firstName').type(`Olena`);
    cy.get('#lastName').type(`Vdovychenko`);
    cy.get('#userEmail').type(`ena.noname@gmail.com`);
    cy.get('.custom-control-label').contains('Female').click();
    cy.get('#userNumber').type(`0122033456`);
    cy.get('#dateOfBirthInput').type(`{selectall}`).type('12 September 1997{enter}');
    cy.get('#subjectsContainer').type('Ma').contains('div', 'Maths').click({force: true});
    cy.get('.custom-control-label').contains('Sports').click();
    cy.get('.custom-control-label').contains('Reading').click();
    cy.get('.custom-control-label').contains('Music').click();
    cy.get('#currentAddress').type(`85 Sunny Street`);
    cy.get('#state').click().contains('Rajasthan').click();
    cy.get('#city').click().contains('div', 'Jaipur').click({force: true});

    cy.get('#submit').click();

    cy.contains('tbody tr', 'Student Name').should('contain.text', 'Olena Vdovychenko');
    cy.contains('tbody tr', 'Student Email').should('contain.text', 'ena.noname@gmail.com');
    cy.contains('tbody tr', 'Gender').should('contain.text', 'Female');
    cy.contains('tbody tr', 'Date of Birth').should('contain.text', '12 September,1997');
    cy.contains('tbody tr', 'Subjects').should('contain.text', 'Maths');
    cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Sports, Reading, Music');
    cy.contains('tbody tr', 'Address').should('contain.text', '85 Sunny Street');
    cy.contains('tbody tr', 'State and City').should('contain.text', 'Rajasthan Jaipur');
  });
});