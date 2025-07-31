/// <reference types='cypress' />

// 1. Fill all fields in forms except "picture".
// 1. Click on [Submit] button.
// 1. Assert inputed data in modal window.
describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should assert inputed data in modal window', () => {
    cy.getById('firstName').type('John');
    cy.getById('lastName').type('Doe');
    cy.getById('userEmail').type('johnDoe@gmail.com');

    cy.get('label[for="gender-radio-1"]').click();
    cy.getById('userNumber').type('1234567890');

    cy.getById('dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__day--025').click();

    cy.getById('subjectsInput').type('Math' + '{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.getById('currentAddress').type('123 Main St, Springfield');
    cy.getById('state').click();
    cy.get('.css-26l3qy-menu').contains('NCR').click();
    cy.getById('city').click();
    cy.get('.css-26l3qy-menu').contains('Delhi').click();
    cy.getById('submit').click();

    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
  });
});
