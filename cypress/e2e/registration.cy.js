/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all required fields and submit the form', () => {
    // Filling required fields
    cy.get('#firstName').type('Harry');
    cy.get('#lastName').type('Potter');
    cy.get('#userEmail').type('HarryPotter@gmail.com');
    cy.get('input[name="gender"][value="Male"]').click({ force: true });
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('input[type="checkbox"][value="2"]').click({ force: true });
    cy.get('#currentAddress').type('567 London Ave, Derry, Maine');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    // Checking the entered data
    cy.contains('td', 'Student Name').next().should('contain', 'Harry Potter');
    cy.contains('td', 'Student Email')
      .next().should('contain', 'HarryPotter@gmail.com');
    cy.contains('td', 'Gender').next().should('contain', 'Male');
    cy.contains('td', 'Mobile').next().should('contain', '1234567890');
    cy.contains('td', 'Date of Birth')
      .next().should('contain', '15 January,1990');
    cy.contains('td', 'Subjects').next().should('contain', 'Maths');
    cy.contains('td', 'Hobbies').next().should('contain', 'Reading');
    cy.contains('td', 'Address')
      .next().should('contain', '567 London Ave, Derry, Maine');
    cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi');
  });
});
