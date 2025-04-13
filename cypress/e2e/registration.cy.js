/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const user = generateUser();

  it('should provide an ability to register a user', () => {
    cy.get('#firstName').type(user.firstName);

    cy.get('#lastName').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.contains('.custom-control-label', user.gender).click();

    cy.get('#userNumber').type(user.phoneNumber);

    cy.get('#dateOfBirthInput').type('{selectall}');

    cy.get('#dateOfBirthInput').type(`${user.birthDate}{enter}`);

    cy.get('.subjects-auto-complete__input')
      .type('e{enter}');

    cy.contains('.custom-control-label', user.hobby).click();

    cy.get('#currentAddress').type(user.address);

    cy.get('.css-1wa3eu0-placeholder').contains('Select State')
      .type('{enter}');

    cy.get('#city').type('{enter}');

    cy.get('#submit').click();

    cy.assertData('Student Name', user.fullName);
    cy.assertData('Student Email', user.email);
    cy.assertData('Gender', user.gender);
    cy.assertData('Mobile', user.phoneNumber);
    cy.assertData('Date of Birth', user.birthDate);
    cy.assertData('Subjects', 'English');
    cy.assertData('Hobbies', user.hobby);
    cy.assertData('Address', user.address);
    cy.assertData('State and City', 'NCR Delhi');
  });
});
