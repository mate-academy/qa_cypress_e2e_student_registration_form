/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('- successful registration with valid credientals', () => {
    const randomName = faker.name.findName();
    const randomLastName = faker.name.findName();
    const randomEmail = faker.internet.email();
    const number = faker.random.number({ min: 1000000000, max: 9999999999 });
    const randomMonth = faker.date.month();
    const randomYear = faker.random.number({ min: 1900, max: 2100 }).toString();
    const randomAddress = faker.address.streetAddress();

    cy.get('#firstName').type(randomName);

    cy.get('#lastName').type(randomLastName);

    cy.get('#userEmail').type(randomEmail);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();

    cy.get('#userNumber').type(number);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(randomMonth);
    cy.get('.react-datepicker__year-select').select(randomYear);
    cy.contains('.react-datepicker__day', '15').click();

    cy.get('#subjectsInput').type('Math{enter}');

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();

    cy.get('#currentAddress').type(randomAddress);

    cy.get('#state').type('Uttar{enter}');
    cy.get('#city').type('Agra{enter}');

    cy.get('#submit').click();

    cy.get('.modal-content').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', randomEmail);
    cy.get('.modal-body').should('contain', 'Male');
    cy.get('.modal-body').should('contain', randomName);
    cy.get('.modal-body').should('contain', randomLastName);
    cy.get('.modal-body').should('contain', number);
    cy.get('.modal-body').should('contain', randomAddress);
    cy.get('.modal-body').should('contain', randomMonth);
    cy.get('.modal-body').should('contain', randomYear);
    cy.get('.modal-body').should('contain', 'Math');
    cy.get('.modal-body').should('contain', 'Sports');
    cy.get('.modal-body').should('contain', 'Uttar Pradesh Agra');
    cy.get('[id="closeLargeModal"]').click();
  });
});
