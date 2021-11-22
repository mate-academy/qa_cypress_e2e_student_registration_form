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

let user;

describe('Basic', () => {

  before(function () {
    cy.task("newUser").then((object) => {
        user = object;
    });
  });

  it('Student Registration Form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.userEmail);
    cy.get('[for="gender-radio-3"]').click({force: true});
    cy.get('#userNumber').type(user.userNumber);
    cy.get('#dateOfBirthInput').type('{selectall}').type('20 April 1990{enter}');
    cy.get('#subjectsContainer').type('Biology{enter}');
    cy.get('#hobbies-checkbox-1').click({force: true});
    cy.get('#hobbies-checkbox-2').click({force: true});
    cy.get('#hobbies-checkbox-3').click({force: true});
    cy.get('[placeholder="Current Address"]').type(user.address);
    cy.get('.col-md-4.col-sm-12 div.css-2b097c-container').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city .css-yk16xz-control').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();
  })

  it('Validate inputed data in modal window in Student Registration Form', () => {
    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Email').should('contain', user.userEmail);
    cy.contains('tr', 'Gender').should('contain', 'Other');
    cy.contains('tr', 'Mobile').should('contain', user.userNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '20 April');
    cy.contains('tr', 'Subjects').should('contain', 'Biology');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports');
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'NCR');
  })
})

// Advanced level:
describe('Advanced', () => {

  before(function () {
    cy.task("newUser").then((object) => {
        user = object;
    });
  });

  it('Open page', () => {
    cy.visit('https://demoqa.com/webtables');
  })

  it('Add new worker', () => {
    cy.visit('https://demoqa.com/webtables');
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.userEmail);
    cy.get('#age').type(user.age);
    cy.get('#salary').type(user.salary);
    cy.get('#department').type('Biology{enter}');

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(user.firstName1);
    cy.get('#lastName').type(user.lastName1);
    cy.get('#userEmail').type(user.userEmail1);
    cy.get('#age').type(user.age1);
    cy.get('#salary').type(user.salary1);
    cy.get('#department').type('Algebra{enter}');

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(user.firstName2);
    cy.get('#lastName').type(user.lastName2);
    cy.get('#userEmail').type(user.userEmail2);
    cy.get('#age').type(user.age2);
    cy.get('#salary').type(user.salary2);
    cy.get('#department').type('Geometry{enter}');

    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type(user.firstName3);
    cy.get('#lastName').type(user.lastName3);
    cy.get('#userEmail').type(user.userEmail3);
    cy.get('#age').type(user.age3);
    cy.get('#salary').type(user.salary3);
    cy.get('#department').type('Chemistry{enter}');
  })

  it('Validate data in worker row after creating worker', () => {
    cy.contains('div.rt-td', user.firstName).should('contain', user.firstName);
    cy.contains('div.rt-td', user.lastName).should('contain', user.lastName);
    cy.contains('div.rt-td', user.userEmail).should('contain', user.userEmail);
    cy.contains('div.rt-td', user.age).should('contain', user.age);
    cy.contains('div.rt-td', user.salary).should('contain', user.salary);
    cy.contains('div.rt-td', 'Biology').should('contain', 'Biology');

    cy.contains('div.rt-td', user.firstName1).should('contain', user.firstName1);
    cy.contains('div.rt-td', user.lastName1).should('contain', user.lastName1);
    cy.contains('div.rt-td', user.userEmail1).should('contain', user.userEmail1);
    cy.contains('div.rt-td', user.age1).should('contain', user.age1);
    cy.contains('div.rt-td', user.salary1).should('contain', user.salary1);
    cy.contains('div.rt-td', 'Algebra').should('contain', 'Algebra');

    cy.contains('div.rt-td', user.firstName2).should('contain', user.firstName2);
    cy.contains('div.rt-td', user.lastName2).should('contain', user.lastName2);
    cy.contains('div.rt-td', user.userEmail2).should('contain', user.userEmail2);
    cy.contains('div.rt-td', user.age2).should('contain', user.age2);
    cy.contains('div.rt-td', user.salary2).should('contain', user.salary2);
    cy.contains('div.rt-td', 'Geometry').should('contain', 'Geometry');

    cy.contains('div.rt-td', user.firstName3).should('contain', user.firstName3);
    cy.contains('div.rt-td', user.lastName3).should('contain', user.lastName3);
    cy.contains('div.rt-td', user.userEmail3).should('contain', user.userEmail3);
    cy.contains('div.rt-td', user.age3).should('contain', user.age3);
    cy.contains('div.rt-td', user.salary3).should('contain', user.salary3);
    cy.contains('div.rt-td', 'Chemistry').should('contain', 'Chemistry');
  })

  it('Rows count selection', () => {
    cy.get('[aria-label="rows per page"]').select('5 rows').should('have.value', '5');
  })

  it('Pagination', () => {
    cy.get('[aria-label="jump to page"]').type('{selectall}').type('2{enter}');
  })

  it('Rows count selection', () => {
    cy.get('#searchBox').type('{selectall}').type(user.firstName1).type('{enter}');
    cy.get('#searchBox').type('{selectall}').type(user.lastName1).type('{enter}');
    cy.get('#searchBox').type('{selectall}').type(user.userEmail1).type('{enter}');
    cy.get('#searchBox').type('{selectall}').type(user.age1).type('{enter}');
    cy.get('#searchBox').type('{selectall}').type(user.salary1).type('{enter}');
    cy.get('#searchBox').type('{selectall}').type('Algebra{enter}');
  })

  it('Find worker in search field and edit it', () => {
    cy.get('#searchBox').type('{selectall}').type(user.firstName).type('{enter}');
    cy.get('[title="Edit"]').click();
    cy.contains('#registration-form-modal', 'Registration Form').should('exist');
    cy.get('#firstName').type('{selectall}').type(user.firstName1);
    cy.get('#submit').click();
  })

  it('Delete worker', () => {
    cy.get('#searchBox').type('{selectall}').type(user.lastName3).type('{enter}');
    cy.get('#delete-record-7').click();
    cy.contains('div.rt-td', user.lastName3).should('not.exist');
  })

  it('Delete worker', () => {
    cy.get('#searchBox').type('{selectall}').type('{backspace}');
    cy.get('#delete-record-1').click();
    cy.get('#delete-record-2').click();
    cy.get('#delete-record-3').click();
    cy.get('#delete-record-4').click();
    cy.get('#delete-record-5').click();
    cy.get('#delete-record-6').click();
  })

})