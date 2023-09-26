
/// <reference types='cypress' />

describe('Student Registration page', () => {
  const username = 'durynda3';
  const lastName = 'shtrich';
  const email = 'dovbodob@gmail.com';
  const subjects = 'QA';
  const userNumber = 7895403498;

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
    cy.get('.react-datepicker__year-select').select('1999');
    cy.get('.react-datepicker__day--022').click();
    cy.get('.subjects-auto-complete__value-container').type(subjects);
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#state').type('Har{enter}');
    cy.get('#city').type('Kar{enter}');
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
    cy.get('.modal-body').should('contain', '22 September,1999');
  });
});
