/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should fill all fields in forms except "picture', () => {
    const {
      firstName,
      lastName,
      email,
      gender,
      phoneNumber,
      hobby,
      address
    } = generateUser();
      cy.findByPlaceholder('First Name').type(firstName);
      cy.findByPlaceholder('Last Name').type(lastName);
      cy.findByPlaceholder('name@example.com').type(email);
      cy.contains('.custom-control-label', gender).click();
      cy.findByPlaceholder('Mobile Number').type(phoneNumber);
      cy.get('#dateOfBirthInput').type('{selectAll}20 Feb 2020{enter}');
      cy.get('.subjects-auto-complete__value-container').type('Ma{enter}');
      cy.contains('.custom-control-label', hobby).click();
      cy.findByPlaceholder('Current Address').type(address);
      cy.get('#state').type('{downArrow}{enter}');
      cy.get('#city').type('{downArrow}{enter}');
      cy.contains('.btn', 'Submit').click();

      cy.contains('tr', 'Student Name')
        .should('contain', firstName)
        .and('contain', lastName);
      cy.contains('tr', 'Student Email').should('contain', email);
      cy.contains('tr', 'Gender').should('contain', gender);
      cy.contains('tr', 'Mobile').should('contain', phoneNumber);
      cy.contains('tr', 'Date of Birth').should('contain', '20 February,2020');
      cy.contains('tr', 'Subjects').should('contain', 'Maths');
      cy.contains('tr', 'Hobbies').should('contain', hobby);
      cy.contains('tr', 'Address').should('contain', address);
      cy.contains('tr', 'State and City')
        .should('contain', 'Uttar Pradesh Lucknow');
      cy.contains('.btn', 'Close').click();
  });
});
