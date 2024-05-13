/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('shoud register a new student', () => {
    cy.get('#firstName').type('TestDataFirst');
    cy.get('#lastName').type('TestDataLast');
    cy.get('#userEmail').type('Test@email.com');

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click();

    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('3');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month').contains('4').click();

    cy.get('.subjects-auto-complete__value-container').type(
      'En{downarrow}{enter}' + 'En{enter}'
    );

    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress').type('Test Addres');

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();
  });
});
