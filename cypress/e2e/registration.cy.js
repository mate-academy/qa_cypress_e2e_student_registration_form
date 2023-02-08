/// <reference types='cypress' />

const { generateUser } = require('../support/commands');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should register a new student', () => {
    const {firstName , lastName, email, phone, address, gender, hobby } = generateUser();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.contains('#genterWrapper', gender)
      .click();

    cy.get('#userNumber').type(phone);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}01 Feb 2000{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('En{enter}' + 'Ec{enter}' + 'Comme{enter}');

    cy.contains('#hobbiesWrapper', hobby)
      .click();

    cy.get('#currentAddress').type(address);

    cy.get('#state').type('{downArrow}{enter}');

    cy.get('#city').type('{downArrow}{enter}');

    cy.get('#submit').click();

    cy.contains('.modal-header', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', `${firstName} ${lastName}`);

    cy.contains('tr', 'Student Email')
      .should('contain', `${email}`);

    cy.contains('tr', 'Gender')
      .should('contain', `${gender}`);

    cy.contains('tr', 'Mobile')
      .should('contain', `${phone}`);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '01 February,2000');

    cy.contains('tr', 'Subjects')
      .should('contain', `English, Economics, Commerce`);

    cy.contains('tr', 'Hobbies')
      .should('contain', `${hobby}`);    

    cy.contains('tr', 'Address')
      .should('contain', `${address}`);

    cy.contains('tr', 'State and City')
      .should('contain', `Uttar Pradesh Lucknow`);
  });
});
