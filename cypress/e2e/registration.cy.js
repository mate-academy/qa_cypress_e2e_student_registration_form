/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill the registration form and submit', () => {
    cy.get('#firstName').type('Sponge');
    cy.get('#lastName').type('Bob');
    cy.get('#userEmail').type('sponge.bob@bikinibottom.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__day--015').click();
    cy.get('.subjects-auto-complete__value-container').type('Maths{enter}');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type('123 Circle Street, Bikini Bottom City');
    cy.get('#state').click();
    cy.get('#state').type('NCR{enter}');
    cy.get('#city').click();
    cy.get('#city').type('Delhi{enter}');
    cy.get('#submit').click();
    cy.get('.modal-content').should('be.visible');
    cy.get('td').contains('Student Name')
      .next().should('contain', 'Sponge Bob');
    cy.get('td').contains('Student Email')
      .next().should('contain', 'sponge.bob@bikinibottom.com');
    cy.get('td').contains('Gender').next().should('contain', 'Male');
    cy.get('td').contains('Mobile').next().should('contain', '1234567890');
    cy.get('td').contains('Date of Birth')
      .next().should('contain', '15 May,1990');
    cy.get('td').contains('Subjects').next().should('contain', 'Maths');
    cy.get('td').contains('Hobbies')
      .next().should('contain', 'Sports, Reading');
    cy.get('td').contains('Address')
      .next().should('contain', '123 Circle Street, Bikini Bottom City');
    cy.get('td').contains('State and City')
      .next().should('contain', 'NCR Delhi');
  });
});
