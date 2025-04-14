/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-template-curly-in-string */
/// <reference types='cypress' />
describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('should allow user to submit the registration form', () => {
    cy.visit('/');

    cy.get('h5')
      .should('contain.text', 'Student Registration Form');

    cy.findByPlaceholder('First Name')
      .type(user.firstName);

    cy.findByPlaceholder('Last Name')
      .type(user.lastName);

    cy.findByPlaceholder('name@example.com')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();

    cy.findByPlaceholder('Mobile Number')
      .type(user.phone);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}21 Nov 2012{enter}');

    cy.get('#subjectsContainer')
      .type('A{downArrow}{enter}');

    cy.contains('.custom-control-label', user.hobbie)
      .click();

    cy.findByPlaceholder('Current Address')
      .type(user.address);

    cy.get('#state')
      .type('U{downArrow}{enter}');

    cy.get('#city')
      .type('L{downArrow}{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', '21 November,2012');
    cy.contains('tr', 'Subjects').should('contain', 'Accounting');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'Uttar Pradesh')
      .and('contain', 'Lucknow');
  });
});
