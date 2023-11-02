/// <reference types='cypress' />
const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should successfuly register student', () => {
    const {
      email,
      firstName,
      lastName,
      gender,
      randomNumber,
      month,
      year,
      day,
      subject,
      hobby,
      currentAddress
    } = generateUser();
    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.contains('.custom-radio', gender)
      .click();
    cy.get('#userNumber')
      .type(randomNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.get('.react-datepicker__month-select')
      .select(month);
    cy.get('.react-datepicker__year-select')
      .select(`${year}`);
    cy.get('.react-datepicker__day')
      .contains(day)
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type(`${subject}{enter}`);
    cy.contains('.custom-control-label', hobby)
      .click();
    cy.get('#currentAddress')
      .type(currentAddress);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .should('contain', lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', gender);
    cy.contains('tr', 'Mobile')
      .should('contain', randomNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', day)
      .should('contain', month)
      .should('contain', year);
    cy.contains('tr', 'Subjects')
      .should('contain', subject);
    cy.contains('tr', 'Hobbies')
      .should('contain', hobby);
    cy.contains('tr', 'Address')
      .should('contain', currentAddress);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .should('contain', 'Lucknow');
  });
});
