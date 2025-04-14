/// <reference types="Cypress" />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register a new student', () => {
    // Verification of the registration form
    cy.visit('/automation-practice-form');
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    cy.get('body form').should('have.id', 'userForm');
    // Filling in students data
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    // cy.get("#genterWrapper").contains("Male").click();
    cy.get('#genterWrapper')
      .contains(user.gender, { matchCase: false })
      .click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type(
      '{selectAll}' + user.dateOfBirth + '{enter}');
    cy.get('#subjectsInput').type('en{enter} ma{enter} ch{enter}');
    cy.get('#hobbiesWrapper').contains('Reading').click();
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.get('#hobbiesWrapper').contains('Sports').click();
    cy.findByPlaceholder('Current Address', 'textarea').type(user.address);
    cy.get('#stateCity-wrapper').contains('Select State').type('Ha{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('Pa{enter}');
    cy.get('.btn').contains('Submit').click();
    // Veryfying the pop-up window's data
    cy.get('.modal-body').contains('Student Name').parent()
      .should('contain', `${user.firstName} ${user.lastName}`);
    cy.get('.modal-body').contains('Student Email').parent()
      .should('contain', user.email);
    cy.get('.modal-body').contains('Gender').parent()
      .contains(user.gender, { matchCase: false }).should('be.visible');
    cy.get('.modal-body').contains('Mobile').parent()
      .should('contain', user.phoneNumber);
    cy.get('.modal-body')
      .contains('td', 'Date of Birth');
    cy.get('.modal-body').contains('Date of Birth').parent()
      .should('contain', user.fullDateOfBirth);
    cy.get('.modal-body').contains('Subjects').parent()
      .should('contain', 'English, Maths, Chemistry');
    cy.get('.modal-body').contains('Hobbies').parent()
      .should('contain', 'Reading, Music, Sports');
    cy.get('.modal-body').contains('Address').parent()
      .should('contain', user.address);
    cy.get('.modal-body').contains('State and City').parent()
      .should('contain', 'Haryana Panipat');
  });
});
