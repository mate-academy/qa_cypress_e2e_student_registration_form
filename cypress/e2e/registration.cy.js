/// <reference types='cypress' />
import faker from 'faker';

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit('/');
  });

  it('Should register a new student with valid data', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();
    const phoneNumber = faker.random
      .number({ min: 1000000000, max: 9999999999 });

    cy.get('[placeholder="First Name"]').type(firstName);
    cy.get('[placeholder="Last Name"]').type(lastName);
    cy.get('[placeholder="name@example.com"]').type(email);
    cy.get('[for="gender-radio-1"]').click();
    cy.get('[placeholder="Mobile Number"]').type(phoneNumber);
    cy.get('.react-datepicker__input-container [id="dateOfBirthInput"]')
      .click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('1986');
    cy.get(':nth-child(4) > .react-datepicker__day--026').click();
    cy.get('[id="subjectsContainer"]').type('Maths' + `{Enter}`);
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('[placeholder="Current Address"]').type(address);
    cy.get('[id="state"]').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('[id="city"]').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('[id="submit"]').click();
    cy.contains('.modal-content', 'Thanks for submitting the form');
    cy.get('.modal-body').should('contain', firstName);
    cy.get('.modal-body').should('contain', lastName);
    cy.get('.modal-body').should('contain', email);
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.get('.modal-body').should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '26 April,1986');
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports');
    cy.get('.modal-body').should('contain', address);
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});
