/// <reference types='cypress' />
describe('', () => {

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

  before('', () => {
    cy.visit ('https://demoqa.com/automation-practice-form');
  });
  it('should fill in the user registration form', () => {
    cy.get('#firstName').type('James');
    cy.get('#lastName').type('Jones');
    cy.get('#userEmail').type('Jimmi5@gmail.com');
    cy.get('#gender-radio-1').click({force:true});
    cy.get('#userNumber').type('9715690943');
    cy.get('#dateOfBirthInput').type('{selectall}').type('3 March 1861{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Eng{downArrow}{enter}');
    cy.get('#hobbies-checkbox-2').click({force:true});
    cy.get('#currentAddress').type('Baker Street 23, 17/2');
    cy.get('#state').type('Haryana{downArrow}{enter}');
    cy.get('#stateCity-wrapper > :nth-child(3)').type('k{downArrow}{enter}');
    cy.get('#submit').click({force:true});
  });

    it('should display user registration form', () => {
    cy.get('.modal-header').contains('Thanks for submitting the form').should('exist');
    cy.contains('tbody tr', 'Student Name').should('contain', 'James Jones');
    cy.contains('tbody tr', 'Student Email').should('contain','Jimmi5@gmail.com');
    cy.contains('tbody tr', 'Gender').should('contain', 'Male');
    cy.contains('tbody tr', 'Mobile').should('contain', '9715690943');
    cy.contains('tbody tr', 'Date of Birth').should('contain', '3 March,1861');
    cy.contains('tbody tr', 'Subjects').should('contain', 'English');
    cy.contains('tbody tr', 'Hobbies').should('contain', 'Reading');
    cy.contains('tbody tr', 'Address').should('contain', 'Baker Street 23, 17/2');
    cy.contains('tbody tr', 'State and City').should('contain', 'Haryana Karnal');
  

  });
});


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