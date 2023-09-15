/// <reference types='cypress' />

describe('Student Registration page', () => {
  const username = 'ianOchka';
  const lastName = 'Kozak';
  const email = 'ianOchka@gmail.com';
  const subjects = 'QA';
  const userNumber = 1234567890;
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should log in user with valid creds', () => {
    cy.viewport(1920, 1080);
    cy.get('#firstName').type(username);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type(userNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2005');
    cy.get('.react-datepicker__day--017').click();
    cy.get('.subjects-auto-complete__value-container').type(subjects);
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#state').type('Haryana{enter}');
    cy.get('#city').type('Karnal{enter}');
    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', 'Haryana Karnal');
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', userNumber);
    cy.get('.modal-body').should('contain', username);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', username);
    cy.get('.modal-body').should('contain', 'Sports');
    cy.get('.modal-body').should('contain', '17 September,2005');
  });
});
