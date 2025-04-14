/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill all fields in form and Assert inputed data in modal window', () => {
    cy.get('#firstName').type('firstName');
    cy.get('#lastName').type('lastName');
    cy.get('#userEmail').type('userEmail@gmail.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('5555555555');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month')
      .find('.react-datepicker__day--001:not(' +
    '.react-datepicker__day--outside-month)')
      .first()
      .click();

    cy.get('.subjects-auto-complete__input').type('Maths{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type('currentAddress');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg')
      .should('have.text', 'Thanks for submitting the form');
    cy.contains('firstName lastName');
    cy.contains('userEmail@gmail.com');
    cy.contains('Male');
    cy.contains('5555555555');
    cy.contains('01 May,2000');
    cy.contains('Maths');
    cy.contains('Sports');
    cy.contains('currentAddress');
  });
});
