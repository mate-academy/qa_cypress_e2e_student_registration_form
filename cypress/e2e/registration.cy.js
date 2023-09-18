/// <reference types='cypress' />
import * as data from './registrationUtils';

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit('');
  });

  it('should register the user', () => {
    data.setFirstName(data.firstName);
    data.setLastName(data.lastName);
    data.setEmail(data.email);
    data.setGender(data.gender);
    data.setMobile(data.mobileNumber);
    data.setBirth(data.year, data.month, data.day);
    data.setSubject(data.subjects);
    data.setHobbie(data.hobbie);
    data.setAddress(data.currentAddress);
    data.setRandomStateCity();
    data.clickSubmit();

    data.validateName(data.firstName, data.lastName);
    data.validateEmail(data.email);
    data.validateGender(data.gender);
    data.validateMobile(data.mobileNumber);
    data.validateBirth(data.day, data.month, data.year);
    data.validateSubjects(data.subjects);
    data.validateHobbies(data.hobbie);
    data.validateAddress(data.currentAddress);
    data.validateStateCity(data.randomState, data.randomCity);
  });
});
