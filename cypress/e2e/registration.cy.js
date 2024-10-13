/// <reference types='cypress' />

import { faker } from '@faker-js/faker';

describe('Student Registration page', () => {
  const generateUser = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    const genders = ['Male', 'Female', 'Other'];
    const hobbies = ['Sports', 'Reading', 'Music'];
    const birthDay = Math.ceil(Math.random() * 27);
    const birthMonth = faker.date.month();
    const birthYear = Math.floor(2010 + Math.random() * 10).toString();

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      genderId: randomIndex + 1,
      gender: genders[randomIndex],
      phoneNumber: faker.phone.number('##########'),
      birth: {
        year: birthYear,
        month: birthMonth,
        day: birthDay
      },
      birthFormatted: `${birthDay} ${birthMonth},${birthYear}`,
      hobby: hobbies[randomIndex],
      address: faker.location.streetAddress(),
      state: 'NCR',
      city: 'Delhi'
    };
  };

  it('should register a new student', () => {
    const user = generateUser();

    cy.visit('');
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get(`label[for='gender-radio-${user.genderId}']`).click();
    cy.get('#userNumber').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(user.birth.year);
    cy.contains('.react-datepicker__day', user.birth.day).click();

    // eslint-disable-next-line max-len
    cy.get('.subjects-auto-complete__value-container').type('English{enter}Physics{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.address);
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#state').click().type('{downarrow}{enter}');
    // eslint-disable-next-line cypress/unsafe-to-chain-command
    cy.get('#city').click().type('{downarrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', `${user.firstName} ${user.lastName}`);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', user.birthFormatted);
    cy.contains('tr', 'Subjects').should('contain', 'English');
    cy.contains('tr', 'Subjects').should('contain', 'Physics');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', `${user.state} ${user.city}`);
  });
});
