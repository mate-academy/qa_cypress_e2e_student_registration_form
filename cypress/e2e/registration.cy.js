/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import RegistrationPage from '../pageObjects/pageObjects.js';
const registrationPage = new RegistrationPage();
const testData = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  gender: 'Male',
  mobileNumber: faker.number.int({ min: 1000000000, max: 9999999999 }),
  dateOfBirth: {
    day: '011',
    month: 'February',
    year: '1999'
  },
  subject: 'English',
  hobbie: 'Reading',
  adress: faker.location.streetAddress(true),
  state: 'NCR',
  city: 'Noida'
};

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should register a new student', () => {
    const {
      firstName, lastName, email, gender, mobileNumber, dateOfBirth,
      subject, hobbie, adress, state, city
    } = testData;
    registrationPage.fillFirstNameField(firstName);
    registrationPage.fillLastNameField(lastName);
    registrationPage.fillEmailField(email);
    registrationPage.chooseGender(gender);
    registrationPage.fillMobileField(mobileNumber);
    registrationPage.fillBirthDateField(dateOfBirth);
    registrationPage.fillSubjectsField(subject);
    registrationPage.chooseHobbie(hobbie);
    registrationPage.fillAdressField(adress);
    registrationPage.selectState(state);
    registrationPage.selectCity(city);
    registrationPage.submitForm();
    registrationPage.assertSubmitWindow();
    registrationPage.assertWindowData(testData);
  });
});
