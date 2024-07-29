/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

describe('Student Registration page', () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.string.numeric(10); // 10-digit number
  const birthDate = faker.date.birthdate({ min: 18, max: 65, mode: 'age' });
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.toLocaleString('en-US', { month: 'long' });
  const birthDay = String(birthDate.getDate()).padStart(2, '0');
  const address = faker.location.streetAddress();

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('fills and submits the form with random data', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('input[name="gender"][value="Male"]').click({ force: true });
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(birthYear.toString());
    cy.get('.react-datepicker__month-select').select(birthMonth);
    cy.get(`.react-datepicker__day--0${birthDay}`).click();
    cy.get('#subjectsInput').type('Chemistry{enter}');
    cy.get('input[type="checkbox"][value="1"]').click({ force: true });
    cy.get('#currentAddress').type(address, { force: true });
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.contains('td', 'Student Name').next().should('contain', `${firstName} ${lastName}`);
    cy.contains('td', 'Student Email').next().should('contain', email);
    cy.contains('td', 'Gender').next().should('contain', 'Male');
    cy.contains('td', 'Mobile').next().should('contain', phoneNumber);
    cy.contains('td', 'Date of Birth')
      .next().should('contain', `${birthDay} ${birthMonth},${birthYear}`);
    cy.contains('td', 'Subjects').next().should('contain', 'Chemistry');
    cy.contains('td', 'Hobbies').next().should('contain', 'Sports');
    cy.contains('td', 'Address').next().should('contain', address);
    cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi');
  });
});
