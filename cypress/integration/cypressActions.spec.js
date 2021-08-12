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


// BASIC LEVEL //
let regForm;

describe('Should ', () => {
  before('able to visit student registration page', () => {        
    cy.task("newUser").then((object) => {
      regForm = object;
  });

    cy.visit('/automation-practice-form');
  });

  it('be able to fill all fields in forms except "picture" and register an account if [Submit] clicked', () => {
    cy.get('#firstName').type(regForm.name);
    cy.get('#lastName').type(regForm.lastName);
    cy.get('#userEmail').type(regForm.email);

    cy.get('[value="Male"]').check({force: true});
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('{selectAll}').type('3 January 1993{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Eng{downArrow}{enter}');
    cy.get('#hobbies-checkbox-1').check({force:true});

    cy.get('#currentAddress').type(regForm.address);
    cy.contains('[class=" css-1wa3eu0-placeholder"]', 'Select State').type('NCR{enter}');
    cy.contains('[class=" css-1wa3eu0-placeholder"]', 'Select City').type('Delhi{enter}');

    cy.get('#submit').click();
  });

  
  it('display appropriate registration data after clicking [Submit]', () => {
    cy.get('.modal-title').contains('Thanks for submitting the form').should('exist');

    cy.contains('.table.table-dark', 'Student Name').should('contain', regForm.name, regForm.lastName);
    cy.contains('.table.table-dark', 'Student Email').should('contain', regForm.email);
    cy.contains('.table.table-dark', 'Gender').should('contain', 'Male');

    cy.contains('.table.table-dark', 'Mobile').should('contain', '1234567890');
    cy.contains('.table.table-dark', 'Date of Birth').should('contain', '3 January,1993');

    cy.contains('.table.table-dark', 'Subjects').should('contain', 'English');
    cy.contains('.table.table-dark', 'Hobbies').should('contain', 'Sports');

    cy.contains('.table.table-dark', 'Address').should('contain', regForm.address);
    cy.contains('.table.table-dark', 'State and City').should('contain', 'NCR Delhi');
  });
});
