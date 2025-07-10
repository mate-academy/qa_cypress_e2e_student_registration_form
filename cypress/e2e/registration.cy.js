/// <reference types='cypress' />
const { faker } = require('@faker-js/faker');

describe('Student Registration page', () => {
  const testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    mobileNumber: faker.string.numeric(10),
    address: faker.address.streetAddress(),
    yearOfBirth: faker.number.int({ min: 1975, max: 2007 }).toString(),
    monthOfBirth: faker.date.month(),
    dayOfBirth: null,
    gender: null,
    subject: null,
    hobby: null,
    state: null,
    city: null
  };

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('.text-center').should('contain.text', 'Practice Form');
  });

  it('Modal should contain correct data after filling in', () => {
    cy.get('#firstName').type(testData.firstName);
    cy.get('#lastName').type(testData.lastName);
    cy.get('#userEmail').type(testData.email);

    cy.clickRandomOption('label[for^="gender-radio-"]').as('gender');
    cy.get('#userNumber').type(testData.mobileNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(testData.yearOfBirth);
    cy.get('.react-datepicker__month-select').select(testData.monthOfBirth);
    cy.clickRandomOption('.react-datepicker__day:not' +
      '(.react-datepicker__day--outside-month)').as('dayOfBirth');

    cy.getRandomLetter().then((randomLetter) => {
      cy.get('.subjects-auto-complete__value-container').type(randomLetter);
      cy.clickRandomOption('[id^="react-select-2-option-"]').as('subject');
    });

    cy.clickRandomOption('label[for^="hobbies-checkbox-"]').as('hobby');
    cy.get('#currentAddress').type(testData.address);

    cy.get('#state').click();
    cy.clickRandomOption('[id^="react-select-3-option-"]').as('state');

    cy.get('#city').click();
    cy.clickRandomOption('[id^="react-select-4-option-"]').as('city');

    cy.get('@gender').then((gender) => { testData.gender = gender; });
    cy.get('@dayOfBirth').then((day) => {
      if (day.length < 2) {
        testData.dayOfBirth = '0' + day;
      } else {
        testData.dayOfBirth = day;
      }
    });
    cy.get('@subject').then((subject) => { testData.subject = subject; });
    cy.get('@hobby').then((hobby) => { testData.hobby = hobby; });
    cy.get('@state').then((state) => { testData.state = state; });
    cy.get('@city').then((city) => { testData.city = city; });

    cy.then(() => {
      cy.get('#submit').click();
      cy.get('#example-modal-sizes-title-lg')
        .should('contain.text', 'Thanks for submitting the form');

      cy.assertModalData('Student Name', `${testData.firstName} ${testData.lastName}`);
      cy.assertModalData('Student Email', testData.email);
      cy.assertModalData('Gender', testData.gender);
      cy.assertModalData('Mobile', testData.mobileNumber);
      cy.assertModalData('Date of Birth', `${testData.dayOfBirth} ${testData.monthOfBirth},${testData.yearOfBirth}`);
      cy.assertModalData('Subjects', testData.subject);
      cy.assertModalData('Hobbies', testData.hobby);
      cy.assertModalData('Address', testData.address);
      cy.assertModalData('State and City', `${testData.state} ${testData.city}`);
    });
  });
});
