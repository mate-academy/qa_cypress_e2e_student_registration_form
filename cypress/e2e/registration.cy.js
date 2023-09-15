/// <reference types='cypress' />
const { faker } = require('@faker-js/faker');

const username = faker.internet.userName();
const lastname = faker.internet.userName();
const email = faker.internet.email();
const number = faker.phone.number('##########');
const subject = faker.word.words();
const address = faker.word.words();

describe('Student Registration page', () => {

  it('successful registration with valid credentials', () => {
    cy.viewport(1920, 1200);
    cy.visit('/')

    cy.get('#firstName').type(username);
    cy.get('#lastName').type(lastname);
    cy.get('#userEmail').type(email);

    cy.get('[for="gender-radio-3"]').click();
    cy.get('#userNumber').type(number);

    cy.get('#dateOfBirthInput').type('{selectAll}11 Sep 2000{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('m{enter}');
    cy.get('[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type(address);

    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');
    cy.get('#submit').click();

    cy.get('.modal-body').should('exist');
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name').should('contain', username);
    cy.contains('tr', 'Student Name').should('contain', lastname);
    cy.contains('tr', 'Student Email').should('contain', email);
    cy.contains('tr', 'Gender').should('contain', 'Other');
    cy.contains('tr', 'Mobile').should('contain', number);
    cy.contains('tr', 'Date of Birth').should('contain', '11 September,2000');
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain', 'Reading');
    cy.contains('tr', 'Address').should('contain', address);
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh');
    cy.contains('tr', 'State and City').should('contain', 'Lucknow');
  });
});
