/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('fills all fields in the form except picture and asserts the inputed data', () => {
    // Filling the form fields
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('#userEmail').type('johndoe@test.com')
    cy.get('label[for="gender-radio-1"]').click()
    cy.get('#userNumber').type('1234567890')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select('June')
    cy.get('.react-datepicker__year-select').select('1990')
    cy.get('.react-datepicker__day--015').click()
    cy.get('#subjectsInput').type('Maths').type('{enter}')
    cy.get('label[for="hobbies-checkbox-1"]').click()
    cy.get('#currentAddress').type('123, Main Street')
    cy.get('#state > .css-yk16xz-control').click()
    .get('#react-select-3-option-1').click();

  cy.get('#city > .css-yk16xz-control').click()
    .get('#react-select-4-option-1').click();


    // Clicking on Submit button
    cy.get('#submit').click({ force: true })

    // Asserting the inputed data in modal window
    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
    cy.get('.table-responsive').contains('John Doe')
    cy.get('.table-responsive').contains('johndoe@test.com')
    cy.get('.table-responsive').contains('Male')
    cy.get('.table-responsive').contains('1234567890')
    cy.get('.table-responsive').contains('15 June,1990')
    cy.get('.table-responsive').contains('Maths')
    cy.get('.table-responsive').contains('Sports')
    cy.get('.table-responsive').contains('123, Main Street')
    cy.get('.table-responsive').contains('Uttar Pradesh Lucknow')
  });
});
