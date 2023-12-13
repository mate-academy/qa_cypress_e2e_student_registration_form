/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register new student', () => {
    cy.visit('/automation-practice-form');

    // Verify registration form
    cy.get('.main-header').contains('Practice Form').should('exist');
    cy.get('body form').should('have.id', 'userForm');

    // Fill student data
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get('#genterWrapper')
      .contains(user.gender, { matchCase: false })
      .click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type(
      '{selectall}' + user.birthDate + '{enter}'
    );
    cy.get('#subjectsInput').type('en{enter}');
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.get('#hobbiesWrapper').contains('Sports').click();
    cy.findByPlaceholder('Current Address', 'textarea').type(user.address);
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('D{enter}');
    cy.get('button').contains('Submit').click();

    // Check provided data
    cy.get('.modal-header')
      .contains('Thanks for submitting the form')
      .should('exist');
    cy.get('.modal-body')
      .contains('td', 'Student Name')
      .next()
      .should('contain', `${user.firstName} ${user.lastName}`);
    cy.get('.modal-body')
      .contains('td', 'Student Email')
      .next()
      .should('contain', user.email);
    cy.get('.modal-body')
      .contains('td', 'Gender')
      .next()
      .contains(user.gender, { matchCase: false })
      .should('exist');
    cy.get('.modal-body')
      .contains('td', 'Mobile')
      .next()
      .should('contain', user.phone);
    cy.get('.modal-body')
      .contains('td', 'Date of Birth')
      .next()
      .should('contain', `${user.day} ${user.month},${user.year}`);
    cy.get('.modal-body')
      .contains('td', 'Subjects')
      .next()
      .should('contain', `English`);
    cy.get('.modal-body')
      .contains('td', 'Hobbies')
      .next()
      .should('contain', `Music, Sports`);
    cy.get('.modal-body')
      .contains('td', 'Address')
      .next()
      .should('contain', `${user.address}`);
    cy.get('.modal-body')
      .contains('td', 'State and City')
      .next()
      .should('contain', `NCR Delhi`);
  });
});
