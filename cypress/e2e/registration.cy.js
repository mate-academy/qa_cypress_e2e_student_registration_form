/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');
  });

  it('should fill the form and verify submitted data', () => {
    cy.get('#firstName').type('Anna');
    cy.get('#lastName').type('Kowalska');
    cy.get('#userEmail').type('anna.kowalska@example.com');
    cy.get('label[for="gender-radio-2"]').click(); 
    cy.get('#userNumber').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)')
    .click();

    cy.get('#subjectsInput').type('English{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-2"]').click();

    cy.get('#currentAddress').type('ul. Przykładowa 123, Warszawa');

    cy.get('#react-select-3-input').type('NCR{enter}');
    cy.get('#react-select-4-input').type('Delhi{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('Anna Kowalska');
    cy.get('td').contains('anna.kowalska@example.com');
    cy.get('td').contains('Female');
    cy.get('td').contains('1234567890');
    cy.get('td').contains('15 May,1995');
    cy.get('td').contains('English');
    cy.get('td').contains('Sports, Reading');
    cy.get('td').contains('ul. Przykładowa 123, Warszawa');
    cy.get('td').contains('NCR Delhi');

    cy.get('#closeLargeModal').click();
  });
});
