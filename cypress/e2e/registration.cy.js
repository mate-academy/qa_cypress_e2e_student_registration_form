/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const email = faker.internet.email();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  it('should register new user with valid credentials"', () => {
    cy.viewport(1920, 1080);

    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for=gender-radio-3]').click();
    cy.get('[placeholder="Mobile Number"]').type('1234567890');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('0');
    cy.get('.react-datepicker__year-select').select('2005');
    cy.get('.react-datepicker__day.react-datepicker__day--025').click();

    cy.get('.subjects-auto-complete__value-container').type('com{enter}');
    cy.get('.custom-checkbox [for="hobbies-checkbox-3"]').click();
    cy.get('[placeholder="Current Address"]').type('Example street');
    cy.get('#state').type('Hary{enter}');
    cy.get('#city').type('Ka{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-body').should('exist');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
  });
});
