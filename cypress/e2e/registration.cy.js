/// <reference types='cypress' />

const { generateUser } = require("../support/generate.js")

describe('Student Registration page', () => {
  const { firstName, lastName, email, gender, phoneNumber, birthDate, subject, hobbie, address } = generateUser();
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should be able to register with valid data', () => {
    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.contains('.custom-control-label', gender)
      .click();
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select')
      .select(birthDate.month);
    cy.pickDate('year-select')
      .select(`${birthDate.year}`);
    cy.pickDate('day')
      .contains(birthDate.day)
      .click();
    cy.get('.subjects-auto-complete__value-container')
      .type( subject + '{Enter}' + 'Phy{Enter}');
    cy.contains('.custom-control-label', hobbie)
      .click();
    cy.contains('.custom-control-label', 'Music')
      .click();
    cy.get('#currentAddress')
      .type(address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.contains('#submit', 'Submit')
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .and('contain', lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', email);
    cy.contains('tr', 'Gender')
      .should('contain', gender);
    cy.contains('tr', 'Mobile')
      .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', birthDate.month)
      .and('contain', `${birthDate.year}`)
      .and('contain', birthDate.day);
    cy.contains('tr', 'Subjects')
      .should('contain', subject)
      .and('contain', 'Physics');
    cy.contains('tr', 'Hobbies')
      .should('contain', hobbie)
      .and('contain', 'Music');
    cy.contains('tr', 'Address')
      .should('contain', address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
