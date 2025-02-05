/// <reference types='cypress' />

import { generateUser } from '../support/generateUser';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it(
    'should fill and submit the form' +
      ' then validate input data in the modal',
    () => {
      const user = generateUser();
      const getGender = user.gender === 'Female' ? 2 : 3;

      cy.findById('firstName').type(user.firstName);
      cy.findById('lastName').type(user.lastName);
      cy.findById('userEmail').type(user.email);
      cy.get(
        `label[for="gender-radio-${user.gender === 'Male' ? 1 : getGender}"]`
      ).click();
      cy.findById('userNumber').type(user.mobileNumber);
      cy.findById('dateOfBirthInput').type(
        '{selectall}' + user.dateOfBirth + '{enter}'
      );

      for (const subject of user.subjects) {
        cy.findById('subjectsInput').type(subject + '{enter}');
      }
      user.hobbies.forEach((hobby, i) => {
        cy.get(`label[for="hobbies-checkbox-${i + 1}"]`).click();
      });
      cy.findById('currentAddress').type(user.address);
      cy.findById('react-select-3-input').focus();
      cy.findById('react-select-3-input').type(user.state);
      cy.findById('react-select-3-input').type('{enter}');

      cy.findById('react-select-4-input').focus();
      cy.findById('react-select-4-input').type(user.city);
      cy.findById('react-select-4-input').type('{enter}');

      cy.get('#submit').click();

      cy.get('.modal-content').within(() => {
        cy.contains('td', 'Student Name')
          .next()
          .should('have.text', `${user.firstName} ${user.lastName}`);
        cy.contains('td', 'Student Email')
          .next()
          .should('have.text', user.email);
        cy.contains('td', 'Gender').next().should('have.text', user.gender);
        cy.contains('td', 'Mobile')
          .next()
          .should('have.text', user.mobileNumber);
        cy.contains('td', 'Date of Birth')
          .next()
          .invoke('text')
          .then((text) => {
            expect(text.replace(',', ' ')).to.equal(user.dateOfBirth);
          });
        cy.contains('td', 'Subjects')
          .next()
          .should('have.text', user.subjects.join(', '));
        cy.contains('td', 'Hobbies')
          .next()
          .should('have.text', user.hobbies.join(', '));
        cy.contains('td', 'Address').next().should('have.text', user.address);
        cy.contains('td', 'State and City')
          .next()
          .should('have.text', `${user.state} ${user.city}`);
      });
    }
  );
});
