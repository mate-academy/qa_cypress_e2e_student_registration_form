/// <reference types='cypress' />

describe('Student Registration page', () => {
  const firstName = 'Alan';
  const lastName = 'Turing';
  const userEmail = 'AlanTuring@genius.com';
  const userNumber = '1234567890';
  const currentAddress = 'Cemetery';
  const day = '15 June,1995';

  before(() => {
    cy.visit('/');
  });

  it('should submit the form', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(userNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__month-select').select('June');
    cy.get(
      '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
    ).click();
    cy.get('#subjectsInput').type('Math{enter}');
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get('#state').parent().click();
    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains('NCR')
      .click();

    cy.get('#city').should('not.have.attr', 'disabled');
    cy.get('#city').parent().click();
    cy.get('.css-26l3qy-menu')
      .should('be.visible')
      .contains('Delhi')
      .click();
    cy.get('#currentAddress').type(currentAddress);
    cy.contains('#submit', 'Submit').click();

    cy.get('tbody').contains(firstName);
    cy.get('tbody').contains(lastName);
    cy.get('tbody').contains(userEmail);
    cy.get('tbody').contains('Male');
    cy.get('tbody').contains(userNumber);
    cy.get('tbody').contains(day);
    cy.get('tbody').contains('Math');
    cy.get('tbody').contains('Reading, Music');
    cy.get('tbody').contains('NCR Delhi');
    cy.get('tbody').contains(currentAddress);
  });
});
