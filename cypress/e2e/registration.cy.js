/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration Form', () => {
  before(() => {
    cy.viewport(1100, 1100);
    cy.visit('/')
  });
  
  it('filling in the form with valid creds', () => {
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      address, 
      gender, 
      birthMonth, 
      birthYear, 
      birthDay, 
      hobby
     } = generateUser();

    cy.findByPlaceholder('First Name')
      .type(firstName);
    cy.findByPlaceholder('Last Name')
      .type(lastName);
    cy.findByPlaceholder('name@example.com')
      .type(email);

    cy.contains('.custom-control-label', gender)
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(phone);

    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select')
      .select(birthMonth);
    cy.pickDate('year-select')
      .select(`${birthYear}`);
    cy.pickDate('day').contains(`${birthDay}`)
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type('English{enter}' + 'Ma{enter}');

    cy.contains('.custom-control-label', hobby)
      .click();

    cy.findByPlaceholder('Current Address')
      .type(address);
    cy.get('#state')
      .type('{downArrow}{enter}');
    cy.get('#city')
      .type('{downArrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', `${firstName}`)
      .and('contain', `${lastName}`);

   cy.contains('tr', 'Student Email')
      .should('contain', `${email}`);

   cy.contains('tr', 'Gender')
      .should('contain', `${gender}`);

   cy.contains('tr', 'Mobile')
      .should('contain', `${phone}`);

   cy.contains('tr', 'Date of Birth')
      .should('contain', `${birthDay} ` + `${birthMonth},` + `${birthYear}`);

   cy.contains('tr', 'Hobbies')
      .should('contain', `${hobby}`);

   cy.contains('tr', 'Address')
      .should('contain', `${address}`);

   cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');

    cy.contains('tr', 'Subjects')
    .should('contain', 'English', 'Math');
  });
});