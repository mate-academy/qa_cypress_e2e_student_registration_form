/// <reference types='cypress' />
const username = 'Yurii';
const lastName = 'Honoskov';
const email = 'honyy.qa@gmail.com';
const subjects = 'QA';
const userNumber = 1234567890;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register new user with valid credentials', () => {
    cy.viewport(1920, 1080);
    cy.get('[placeholder="First Name"]').type(username);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[placeholder="Mobile Number"]').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1989');
    cy.get('.react-datepicker__day--023').click();
    cy.get('.subjects-auto-complete__value-container').type(subjects);

    cy.get('.custom-checkbox [for="hobbies-checkbox-3"]').click();

    cy.get('#state').type('Raja{enter}');
    cy.get('#city').type('Jaipur{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', 'Rajasthan Jaipur');
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', userNumber);
    cy.get('.modal-body').should('contain', username);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', 'Music');
    cy.get('.modal-body').should('contain', '23 September,1989');
  });
});
