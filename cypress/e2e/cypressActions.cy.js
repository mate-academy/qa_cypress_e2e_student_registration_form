/// <reference types='cypress' />

describe('Student Registration Form', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Creating new account', () => {
    cy.get('[id = "firstName"]')
      .type('Zeus');

    cy.get('[id = "lastName"]')
      .type('the Great');

    cy.get('[id = "userEmail"]')
      .type('god@qa.team');

    cy.get('[type="radio"]')
      .check("Male",{force: true});

    cy.get('[Placeholder = "Mobile Number"]')
      .type('1234567890');

    cy.get('[id = dateOfBirthInput]')
      .click();

    cy.get('.react-datepicker__month-select')
      .select('June');

    cy.get('.react-datepicker__year-select')
      .select('1990');

    cy.get('.react-datepicker__day--015')
      .click();

      cy.get('.subjects-auto-complete__value-container')
      .type("econom");

    cy.get('#react-select-2-option-0')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type("computer");

    cy.get('#react-select-2-option-0')
      .click();

      cy.get('.subjects-auto-complete__value-container')
      .type("english");

    cy.get('#react-select-2-option-0')
      .click();

    cy.get('[type="checkbox"]')
      .check({force: true});

    cy.get('[Placeholder = "Current Address"]')
      .type('Moon');

    cy.get('.css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder')
      .click();

    cy.get('#react-select-3-option-2')
      .click();

    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .click();

    cy.get('#react-select-4-option-1')
      .click({force: true});
      
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click({force: true})
      .type('{enter}');
  });
     
  it('Validation', () => {
    cy.get('.modal-header')
      .should('contain','Thanks for submitting the form');

    cy.contains('tr','Student Name')
      .should('contain', 'Zeus the Great');

    cy.contains('tr','Student Email')
      .should('contain', 'god@qa.team');

    cy.contains('tr','Gender')
      .should('contain', 'Male');

    cy.contains('tr','Mobile')
      .should('contain', '1234567890');

    cy.contains('tr','Date of Birth')
      .should('contain', "15 June,1990");

    cy.contains('tr','Subjects')
      .should('contain', 'Economics, Computer Science, English');

    cy.contains('tr','Hobbies')
      .should('contain', 'Sports, Reading, Music');

    cy.contains('tr','Picture')

    cy.contains('tr','Address')
      .should('contain', 'Moon');

    cy.contains('tr','State and City')
      .should('contain', 'Haryana')
      .and('contain', 'Panipat' )
  });
});