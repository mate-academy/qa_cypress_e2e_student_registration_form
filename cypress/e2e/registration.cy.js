/// <reference types='cypress' />

describe('Automation Practice Form', () => {
  it('should fill all fields except picture and submit the form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('Math{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
    cy.get('#currentAddress').type('123 Main St, Springfield');
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();
    cy.get('.modal-content').within(() => {
      cy.get('td').contains('John Doe').should('exist');
      cy.get('td').contains('john.doe@example.com').should('exist');
      cy.get('td').contains('Male').should('exist');
      cy.get('td').contains('1234567890').should('exist');
      cy.get('td').contains('15 April,1990').should('exist');
      cy.get('td').contains('Math').should('exist');
      cy.get('td').contains('Sports, Reading').should('exist');
      cy.get('td').contains('123 Main St, Springfield').should('exist');
      cy.get('td').contains('NCR Delhi').should('exist');
    });
  });
});
