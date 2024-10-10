/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => cy.visit('https://demoqa.com/automation-practice-form'));

  it('Assert inputed data in modal window', () => {
    cy.get('#firstName').type('Anton');
    cy.get('#lastName').type('Zhygan');
    cy.get('#userEmail').type('anton@gmail.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0967348869');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('1998');
    cy.get('.react-datepicker__day--025').click();
    cy.get('.subjects-auto-complete__value-container').type('English');
    cy.get('#react-select-2-option-0').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type('Bohdanivska,10');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    cy.contains('tr', 'Student Name')
      .should('contain', 'Anton Zhygan');
    cy.contains('tr', 'Student Email').should('contain', 'anton@gmail.com');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', '0967348869');
    cy.contains('tr', 'Subject').should('contain', 'English');
    cy.contains('tr', 'Date of Birth')
      .should('contain', '25 January,1998');
    cy.contains('tr', 'Hobbies').should('contain', 'Reading');
    cy.contains('tr', 'Address').should('contain', 'Bohdanivska,10');
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');
  });
});
