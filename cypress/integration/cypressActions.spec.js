/// <reference types='cypress' />

describe('',() => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('Successful login', () => {
       cy.get('#firstName').type('Alexandra');
       cy.get('#lastName').type('Bozhan');
       cy.get('#userEmail').type('oleksandrabozhan@gmail.com');
       cy.get('[for="gender-radio-2"]').type('{selectall}');
       cy.get('#userNumber').type('0680826223');
       cy.get('#dateOfBirthInput').type('{selectall}').type('05 April 1997{enter}');
       cy.get('#subjectsWrapper').type('QA');
       cy.get('.custom-control-label').contains('Reading').click();
       cy.get('#currentAddress-wrapper').type('Earth'); 
       cy.get('#state').click().contains('Rajasthan').click();
       cy.get('#city').click().contains('div', 'Jaipur').click({force: true});

       cy.get('#submit').click();
    
       cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');

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