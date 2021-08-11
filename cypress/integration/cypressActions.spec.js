/// <reference types='cypress' />

describe('', () => {
  before('', () => {
  cy.visit ('https://demoqa.com/automation-practice-form');
  });


it('Basic level', ()=> {
  cy.get('#firstName').type('hanna');
  cy.get('#lastName').type('smirnova');
  cy.get('#userEmail').type('hannayours@gmail.com');
  cy.get('.custom-control-label').contains('Female').click(); 
  cy.get('#userNumber').type('4587475877');
  cy.get('#dateOfBirthInput').type(`{selectall}`).type('4 march 1956{enter}');
  cy.get('#subjectsContainer').type('His').contains('div', 'History').click({force: true});
  cy.get('.custom-control-label').contains('Reading').click();
  cy.get('#currentAddress').type('Ukraine, Kyiv');
  cy.get('#stateCity-wrapper').click().contains('Haryana').click();
  cy.get('#city').click().contains('div', 'Karnal').click({force: true}); 
  cy.get('#submit').click();
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