/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register new user with valid credentials', () => {
    cy.viewport(1920, 1080);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const userEmail = faker.internet.email();
    const phoneNumber = faker.random
      .number({ min: 1000000000, max: 9999999999 }).toString();
    const subject = 'Math';

    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(userEmail);
    cy.get('[for="gender-radio-2"]').click();
    cy.get('[placeholder="Mobile Number"]').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();

    const birthDate = '1990-9-15';

    const [year, month] = birthDate.split('-');

    cy.get('.react-datepicker__year-select').select(year);

    cy.get('.react-datepicker__month-select').select(month);

    cy.get('.react-datepicker__day--015').click();

    cy.get('[id="subjectsContainer"]').type(subject);
    cy.get('[id="subjectsContainer"]').click();
    cy.get('.custom-checkbox [for="hobbies-checkbox-2"]').click();

    cy.get('#state').type('Hary{enter}');
    cy.get('#city').type('Kar{enter}');

    cy.get('#submit').click();
    cy.get('.modal-header').should('exist');
    cy.get('.modal-header')
      .should('contain', 'Thanks for submitting the form');

    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', userEmail);
    cy.get('.modal-body').should('contain', phoneNumber);

    cy.get('[id="closeLargeModal"]').click();
  });
});
