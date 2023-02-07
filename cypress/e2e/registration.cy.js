/// <reference types='cypress' />
const { generateUser } = require('../support/generate')
describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register a new student', () => {
    const { firstName, lastName, email, phoneNumber, gender, hobby, address } = generateUser()
    cy.findByPlaceholder('First Name')
      .type(firstName);
    cy.findByPlaceholder('Last Name')
      .type(lastName);
    cy.findByPlaceholder('name@example.com')
      .type(email);
    cy.contains('.custom-control-label', gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .type(' {selectAll}15 Sep 2005 {enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('eng{enter}');
    cy.contains('.custom-control-label', hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(address);
    cy.get('#state')
      .type('Har{enter}');
    cy.get('#city')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click();
    cy.contains('tr', 'Student Name')
    .should('contain', `${firstName} ${lastName}`);
    cy.contains('tr', 'Student Email')
    .should('contain', email);
    cy.contains('tr', 'Gender')
    .should('contain', gender);
    cy.contains('tr', 'Mobile')
    .should('contain', phoneNumber);
    cy.contains('tr', 'Date of Birth')
    .should('contain', '15 September,2005');
    cy.contains('tr', 'Subjects')
    .should('contain', 'English');
    cy.contains('tr', 'Hobbies')
    .should('contain', hobby);
    cy.contains('tr', 'Address')
    .should('contain', address);
    cy.contains('tr', 'State and City')
    .should('contain', 'Haryana Panipat');
  });
});
