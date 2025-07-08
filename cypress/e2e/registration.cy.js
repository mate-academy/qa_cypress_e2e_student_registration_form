/// <reference types='cypress' />

describe('Student Registration page', () => {
  it('should submit student registration form', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName')
      .type('Vava');

    cy.get('#lastName')
      .type('Muffin');

    cy.get('#userEmail')
      .type('vavamuffin1995@muffin.com');

    cy.get('label[for="gender-radio-1"]')
      .click();

    cy.get('#userNumber')
      .type('1234567890');

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__year-select')
      .select('1995');

    cy.get('.react-datepicker__month-select')
      .select('May');

    cy.get('.react-datepicker__day--015')
      .not('.react-datepicker__day--outside-month')
      .click();

    cy.get('#subjectsInput').type('Math{enter}');

    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#currentAddress')
      .should('be.visible')
      .type('Melbourne 1913-454 Avenue');

    cy.get('#state')
      .click();
    cy.get('#react-select-3-input')
      .type('Haryana{enter}');

    cy.get('#city')
      .click();
    cy.get('#react-select-4-input')
      .type('Panipat{enter}');

    cy.get('#submit')
      .click();

    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');
  });
});
