/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill all fields in forms except "picture".', () => {
    const {
      firstName,
      lastName,
      email,
      mobile,
      subjects,
      address
    } = generateUser();

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type(mobile);
    cy.get('#subjectsContainer').type(subjects);
    cy.get('label[for="hobbies-checkbox-2"]').click();
    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-1').click();
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg')
      .contains('Thanks for submitting the form');
  });
});
