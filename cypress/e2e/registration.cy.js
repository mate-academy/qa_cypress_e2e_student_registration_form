/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('shoud allow to create a new account', () => {
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.genders)
      .click();
    cy.get('#userNumber')
      .type(user.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectall} 22 Dec 2010{enter}');
    cy.get('#subjectsContainer')
      .type('com{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.get('#currentAddress')
      .type(user.streetAddress);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('.modal-content')
      .should('contain.text', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.genders);
    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '22 December,2010');
    cy.contains('tr', 'Subjects')
      .should('contain', 'Computer Science');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Picture')
      .should('contain.text', '');
    cy.contains('tr', 'Address')
      .should('contain', user.streetAddress);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
