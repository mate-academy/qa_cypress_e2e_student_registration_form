/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

function generateUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    numberPhone: faker.phone.number('##########'),
    address: faker.address.streetAddress(),
  };
}

describe('Student Registration page', () => {
  let user;

  before(() => {
    user = generateUser();
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should register a new student', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(user.numberPhone);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('2007');
    cy.get('.react-datepicker__day').contains('5').click();
    cy.get('.subjects-auto-complete__value-container').type(`en{enter}`);
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type(`{downarrow}{enter}`);
    cy.get('#city').type(`{downarrow}{enter}`);

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', user.numberPhone);
    cy.contains('tr', 'Date of Birth').should('contain', '05 February,2007');
    cy.contains('tr', 'Subjects').should('contain', 'English');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports');
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
