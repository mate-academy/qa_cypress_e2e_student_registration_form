/* eslint-disable cypress/no-force */
/// <reference types="cypress" />

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill form and verify submitted data', () => {
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');

    cy.get('input[name="gender"][value="Male"]').check({ force: true });

    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__day--024').click();

    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('#subjectsInput').type('Physics{enter}');

    cy.get('#hobbies-checkbox-1').check({ force: true });
    cy.get('#hobbies-checkbox-3').check({ force: true });

    cy.get('#currentAddress').type('123 Cypress Street');

    cy.get('#state').click();
    cy.get('#state input').type('NCR{enter}');
    cy.get('#city').click();
    cy.get('#city input').type('Delhi{enter}');

    cy.get('#submit').click({ force: true });

    cy.get('.modal-content').should('be.visible');

    cy.get('td')
      .contains('Student Name')
      .next()
      .should('have.text', 'John Doe');
    cy.get('td')
      .contains('Student Email')
      .next()
      .should('have.text', 'john.doe@example.com');
    cy.get('td').contains('Gender').next().should('have.text', 'Male');
    cy.get('td').contains('Mobile').next().should('have.text', '1234567890');
    cy.get('td')
      .contains('Date of Birth')
      .next()
      .should('have.text', '24 August,1990');
    cy.get('td')
      .contains('Subjects')
      .next()
      .should('have.text', 'Maths, Physics');
    cy.get('td')
      .contains('Hobbies')
      .next()
      .should('have.text', 'Sports, Music');
    cy.get('td').contains('Picture').next().should('have.text', '');
    cy.get('td')
      .contains('Address')
      .next()
      .should('have.text', '123 Cypress Street');
    cy.get('td')
      .contains('State and City')
      .next()
      .should('have.text', 'NCR Delhi');
  });
});
