/// <reference types='cypress' />

const { createRandomUser } = require('../support/createRandomUser');
const { getDateInAppFormat } = require('../support/getDateInAppFormat');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should allow user register and show user data after submit', () => {
    const {
      firstName,
      lastName,
      gender,
      email,
      phoneNumber,
      birthDay,
      hobbies,
      subjects,
      address,
      country,
      city
    } = createRandomUser();

    cy.getFieldById('firstName').type(firstName);
    cy.getFieldById('lastName').type(lastName);
    cy.getFieldById('userEmail').type(email);
    cy.getFieldByAttribute('for', `gender-radio-${gender.order}`).click();
    cy.getFieldById('userNumber').type(phoneNumber);
    // cy.getFieldById('dateOfBirthInput').type(birthDay);
    cy.getFieldById('subjectsInput').type(subjects);
    cy.contains('.subjects-auto-complete__menu', subjects).click();
    hobbies.forEach((hobby) => {
      cy.getFieldByAttribute('for', `hobbies-checkbox-${hobby.order}`).click();
    });
    cy.getFieldById('currentAddress').type(address, '{Enter}');
    // cy.getFieldById('react-select-3-input').type(country);
    // cy.getFieldById('react-select-3-input').type(city);
    cy.getFieldById('submit').click();

    cy.get('.modal-body').should('contain-text', `${firstName} ${lastName}`);
    cy.get('.modal-body').should('contain-text', email);
    cy.get('.modal-body').should('contain-text', gender.gender);
    cy.get('.modal-body').should('contain-text', subjects);
    cy.get('.modal-body').should('contain-text', getDateInAppFormat(birthDay));
    cy.get('.modal-body').should(
      'contain-text',
      `${hobbies
        .map((hobby) => hobby.hobby)
        .sort()
        .join(', ')}`
    );
    cy.get('.modal-body').should('contain-text', `${address}`);
    cy.get('.modal-body').should('contain-text', `${country} ${city}`);
  });
});
