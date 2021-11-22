/// <reference types='cypress' />

// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form


describe('Basic Level Cypress HW3', () => {
  it('Visits app\'s  registration page', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    });
  it('Enters First Name', () => {  
    cy.get('[placeholder="First Name"]')
      .type('Oleh');
    });
  it('Enters Last Name', () => {  
    cy.get('[placeholder="Last Name"]')
      .type('Tsvietkov');
    });
  it('Enters Email', () => {  
    cy.get('[placeholder="name@example.com"]')
      .type('tsvietkov.oleh@gmail.com');
    });  
  it('Enters Phone Number', () => {  
    cy.get('[placeholder="Mobile Number"]')
      .type('0504690083');
    });
  it('Selects Gender', () => {  
    cy.get('[type="radio"]')
      .first()
      .check({force: true});
    });
  it('Enters DoB', () => {  
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('01 Jan 1971{enter}');
    });
  it('Enters Subject with autocomplete', () => {  
    cy.get('.subjects-auto-complete__value-container')
      .type('Ma{downArrow}{enter}');
    });
  it('Select Hobby - first in a list', () => {  
    cy.get('[type="checkbox"]')
      .first()  
      .check({force: true});
    });  
  it('Enters Current Addr', () => {  
    cy.get('#currentAddress, [placeholder="Current Address"]')
      .type('Kyiv, Ukraine, 02034');
    });
  it('Selects State from drop-down list', () => {  
    cy.get('.css-1wa3eu0-placeholder')
      .contains('Select State')
      .click();
    });
  it('ESelects City from drop-down list', () => {  
    cy.get('#react-select-3-option-0')
      .click();
    cy.get('#city > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
      .click();
    cy.get('#react-select-4-option-2')
      .contains('Noida')
      .click();
    }); 
  it('Clicks [Submit] bttn', () => {  
    cy.get('#submit')
      .contains('Submit')
      .click(); 
    });
});

describe('Basic Level Cypress HW3', () => {
  it('Verifies Student\'s Name', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .contains('Oleh Tsvietkov');
    });
  it('Verifies Student\'s Student Email', () => {
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .contains('tsvietkov.oleh@gmail.com');
    });
  it('Verifies Student\'s Gender', () => {
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .contains('Male');
    });
  it('Verifies Student\'s Mobile', () => {
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .contains('0504690083');
    });
  it('Verifies Student\'s Date of Birth', () => {
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .contains('01 January,1971');
    });  
  it('Verifies Student\'s Subjects', () => {
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .contains('Maths');
    });
  it('Verifies Student\'s Hobbies', () => {
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .contains('Sports');
    });
//   it('Verifies Student\'s Picture', () => {
//     cy.get('tbody > :nth-child(8) > :nth-child(2)')
//       .contains(' ');
//     });
  it('Verifies Student\'s Addr', () => {
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .contains('Kyiv, Ukraine, 02034');
    });
  it('Verifies Student\'s State and City', () => {
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .contains('NCR Noida');
    });
  it('Closes modal form with Student\'s data', () => {
    cy.get('.btn')
      .contains('Close')
      .click({force: true});
    });  
});
// 
// Advanced level:exit
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