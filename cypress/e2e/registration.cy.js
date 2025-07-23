// @ts-nocheck
/// <reference types='cypress' />
import dateParser from '../support/dateParser';
import genPerson from '../support/genPerson';

describe('Student Registration page', () => {
  const person = genPerson();

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form', () => {
    cy.get('#firstName').type(person.firstName);
    cy.get('#lastName').type(person.lastName);
    cy.get('#userEmail').type(person.email);
    cy.get('#userNumber').type(person.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectall}');
    cy.get('#dateOfBirthInput').type(person.dob);
    cy.get('#dateOfBirthInput').type('{enter}');
    cy.get('.subjects-auto-complete__value-container').type('a');
    cy.clickRandomMenu('[id^="react-select-2-option-"]').then((value) => {
      person.subject = value;
    });

    cy.clickRandomRadio('input[name="gender"]').then((value) => {
      person.gender = value;
    });

    cy.clickRandomCheckBoxes('input[type="checkbox"]').then((value) => {
      person.hobby = value;
    });

    cy.get('#currentAddress').type(person.address);

    cy.contains('div', 'Select State').click();
    cy.clickRandomMenu('[id^="react-select-3-option-"]').then((value) => {
      person.state = value;
    });
    cy.contains('div', 'Select City').click();
    cy.clickRandomMenu('[id^="react-select-4-option-"]').then((value) => {
      person.city = value;
    });

    cy.then(() => {
      Cypress.log({
        name: 'Person Data',
        message: JSON.stringify(person, null, 2)
      });
      cy.get('#submit').click();
      cy.then(() => {
        cy.assertModalData(
          'Student Name',
          `${person.firstName} ${person.lastName}`
        );
        cy.assertModalData('Student Email', person.email);
        cy.assertModalData('Mobile', person.mobileNumber);
        cy.assertModalData('Date of Birth', dateParser(person.dob));
        cy.assertModalData('Subjects', person.subject);
        cy.assertModalData('Gender', person.gender);
        cy.assertModalData('Hobbies', person.hobby);
        cy.assertModalData('Address', person.address);
        cy.assertModalData('State and City', `${person.state} ${person.city}`);
      });
    });
  });
});
