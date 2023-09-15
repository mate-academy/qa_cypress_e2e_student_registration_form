/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide an ability to register with valid creds', () => {
    cy.get('#firstName').type('Alex');
    cy.get('#lastName').type('Show');
    cy.get('#userEmail').type('as001@mail.qa');
    cy.get('[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('0123456789');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2000');
    cy.get('.react-datepicker__month-select').select('November');
    cy.get('[aria-label="Choose Monday, November 27th, 2000"]').click();
    cy.get('.subjects-auto-complete__input').type('a{enter}');
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type('Zhytomyr');
    cy.get('#state').type('n{enter}');
    cy.get('#city').type('d{enter}');
    cy.get('#submit').click();

    cy.get('.modal-body').should('contain', 'Alex Show');
    cy.get('.modal-body').should('contain', 'as001@mail.qa');
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', '0123456789');
    cy.get('.modal-body').should('contain', '27 November,2000');
    cy.get('.modal-body').should('contain', 'Maths');
    cy.get('.modal-body').should('contain', 'Reading');
    cy.get('.modal-body').should('contain', 'Zhytomyr');
    cy.get('.modal-body').should('contain', 'NCR Delhi');
  });
});
