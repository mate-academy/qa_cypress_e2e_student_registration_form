/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  before(() => {

    cy.viewport(1100, 1100);
    cy.visit('/')
  });

  
  it('should register the user with valid credentials', () => {
    const { username, email, phone,address } = generateUser();

    cy.findByPlaceholder('First Name').type(username);

    cy.findByPlaceholder('Last Name').type(username);

    cy.findByPlaceholder('name@example.com').type(email);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()

    cy.findByPlaceholder('Mobile Number').type(phone);

    cy.get('#dateOfBirthInput').type('{selectAll}22 Feb 1996 {enter}');

    cy.get('.subjects-auto-complete__value-container').type('English{enter}');

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();

    cy.get('[placeholder="Current Address"]').type(address);

    cy.get('#state').type('Uttar{Enter}');

    cy.get('#city').type('{DownArrow}{Enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
    .should('contain', ``);

   cy.contains('tr', 'Student Email')
     .should('contain', `${email}`);

   cy.contains('tr', 'Gender')
     .should('contain', `Male`);

   cy.contains('tr', 'Mobile')
     .should('contain', `${phone}`);

   cy.contains('tr', 'Date of Birth')
     .should('contain', `22 February,1996`);

   cy.contains('tr', 'Hobbies')
     .should('contain', `Sports`);

   cy.contains('tr', 'Address')
     .should('contain', `${address}`);

   cy.contains('tr', 'State and City')
     .should('contain', 'Uttar Pradesh Lucknow');

    cy.contains('tr', 'Subjects')
    .should('contain', 'English');
  });
});