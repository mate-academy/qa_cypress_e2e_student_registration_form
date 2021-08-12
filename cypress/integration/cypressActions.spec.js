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


describe('Filling in the form',() => {
    before('Opening site', () => {
      cy.visit('/automation-practice-form');
    });
    
    it('Practice Form', () => {
        cy.get('#firstName').type(`Lina`);
        cy.get('#lastName').type(`Dagaieva`);
        cy.get('#userEmail').type(`_linka_@ukr.net`);
        cy.get('.custom-control-label').contains('Female').click();
        cy.get('#userNumber').type(`1234567890`);
        cy.get('#dateOfBirthInput').type(`{selectall}`).type('30 May 1996{enter}');
        cy.get('#subjectsContainer').type('En').contains('div', 'English').click({force: true});
        cy.get('.custom-control-label').contains('Sports').click();
        cy.get('.custom-control-label').contains('Reading').click();
        cy.get('.custom-control-label').contains('Music').click();
        cy.get('#currentAddress').type(`Ukraine, Kyiv`);
        cy.get('#state').click().contains('Haryana').click();
        cy.get('#city').click().contains('div', 'Karnal').click({force: true});
    
        cy.get('#submit').click();
    
        cy.contains('tbody tr', 'Student Name').should('contain.text', 'Lina Dagaieva');
        cy.contains('tbody tr', 'Student Email').should('contain.text', '_linka_@ukr.net');
        cy.contains('tbody tr', 'Gender').should('contain.text', 'Female');
        cy.contains('tbody tr', 'Date of Birth').should('contain.text', '30 May,1996');
        cy.contains('tbody tr', 'Subjects').should('contain.text', 'English');
        cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Sports, Reading, Music');
        cy.contains('tbody tr', 'Address').should('contain.text', 'Ukraine, Kyiv');
        cy.contains('tbody tr', 'State and City').should('contain.text', 'Haryana Karnal');
  });
});
