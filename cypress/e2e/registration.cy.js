/// <reference types='cypress' />

const { generateUser, generateIdOfInput } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('modal window should contain all the inputed data', () => {
    const user = generateUser();
    cy.get(generateIdOfInput('firstName'))
      .type(user.name);
    cy.get(generateIdOfInput('lastName'))
      .type(user.surname);
    cy.get(generateIdOfInput('userEmail'))
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.get(generateIdOfInput('userNumber'))
      .type(user.mobile);
    cy.get(generateIdOfInput('dateOfBirthInput'))
      .type(`{selectAll}${user.birthday}{enter}`);
    cy.contains('.custom-control-label', user.hobbies)
      .click();
    cy.get(generateIdOfInput('subjectsContainer'))
      .type(`${user.subjects}{enter}`);
    cy.get(generateIdOfInput('currentAddress'))
      .type(user.address);
    cy.get(generateIdOfInput('state'))
      .type('{downarrow}{enter}');
    cy.get(generateIdOfInput('city'))
      .type('{downarrow}{enter}');
    cy.get(generateIdOfInput('submit'))
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain', user.name)
      .should('contain', user.surname);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobile);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birthday.slice(-4))
      .and('contain', user.birthday.slice(1, 4));
    cy.contains('tr', 'Subjects')
      .should('contain', user.subjects);
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbies);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .should('contain', ' Lucknow');
  });
});
