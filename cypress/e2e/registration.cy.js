/// <reference types='cypress' />

describe('Student Registration page', () => {
  it('should register users', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').click()
      .type('Olesia');
    cy.get('#lastName').click()
      .type('Semen');
    cy.get('#userEmail').click()
      .type('semenolesa01@gmail.com');
    cy.get('[for="gender-radio-2"]').click();
    cy.get('#userNumber').click()
      .type('0986261453');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select')
      .select('July');
    cy.get('.react-datepicker__year-select')
      .select('2000');
    cy.get(':nth-child(2) > .react-datepicker__day--006').click();
    cy.get('#subjectsInput')
      .type('Maths').type('{enter}');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click();
    cy.get('#currentAddress')
      .type('Lviv');
    cy.get('#state').click({ force: true });
    cy.get('#react-select-3-input')
      .type('Uttar Pradesh ', { force: true })
      .type('{enter}');
    cy.get('#city').click({ force: true });
    cy.get('#react-select-4-input').type('Lucknow', { force: true })
      .type('{enter}', { force: true });
    cy.get('body').click();
    cy.get('#submit').click({ force: true });
    cy.get('.modal-header')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', 'Olesia Semen')
      .should('contain', 'semenolesa01@gmail.com')
      .should('contain', 'Female')
      .should('contain', '0986261453')
      .should('contain', '06 July,2000')
      .should('contain', 'Maths')
      .should('contain', 'Reading')
      .should('contain', 'Lviv')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
