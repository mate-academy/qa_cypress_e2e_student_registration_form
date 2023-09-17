/// <reference types='cypress' />
const faker = require('faker');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should succesfull register with valid data', () => {
    const email = faker.internet.email();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phoneNumber = faker.random
      .number({ min: 1000000000, max: 9999999999 }).toString();
    const currentAddress = faker.address.streetAddress();

    cy.viewport(1980, 1120);
    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('label[for="gender-radio-3"]').click();
    cy.get('[placeholder="Mobile Number"]').type(phoneNumber);
    cy.get('#subjectsContainer').type('English{enter}');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1970');
    cy.get('.react-datepicker__day').first().click();

    cy.get('#currentAddress').type(currentAddress);
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('#state').type('Raja{enter}');
    cy.get('#city').type('Jaipur{enter}');

    cy.get('#submit').click();

    // Tests //

    cy.get('.modal-content').should('exist');
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('exist');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
    cy.get('.modal-body').should('contain', phoneNumber);
    cy.get('.modal-body').should('contain', currentAddress);
  });
});
