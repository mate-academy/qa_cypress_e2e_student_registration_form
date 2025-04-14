/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('', () => {
    cy.get('#firstName').type('Kobe');
    cy.get('#lastName').type('Jordan');
    cy.get('#userEmail').type('kobeJord12@gmail.com');
    cy.get('.custom-control-label').contains('Male').click();
    cy.get('#userNumber').type('1234512345');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('1');
    cy.get('.react-datepicker__year-select').select('2006');
    cy.get(':nth-child(2) > .react-datepicker__day--007').click();
    cy.get('.subjects-auto-complete__value-container').type('Comp{enter}');
    cy.get('.custom-control-label').contains('Sports').click();
    cy.get('#currentAddress').type('Grove Str. 42');
    cy.get('#state').type('Hary{enter}');
    cy.get('#city').type('Pani{enter}');
    cy.get('#submit').click();
    cy.get('.table-responsive').should('contain', 'Kobe Jordan');
    cy.get('.table-responsive').should('contain', 'kobeJord12@gmail.com');
    cy.get('.table-responsive').should('contain', 'Male');
    cy.get('.table-responsive').should('contain', '1234512345');
    cy.get('.table-responsive').should('contain', '07 February,2006');
    cy.get('.table-responsive').should('contain', 'Computer Science');
    cy.get('.table-responsive').should('contain', 'Sports');
    cy.get('.table-responsive').should('contain', 'Grove Str. 42');
    cy.get('.table-responsive').should('contain', 'Haryana Panipat');
  });
});
