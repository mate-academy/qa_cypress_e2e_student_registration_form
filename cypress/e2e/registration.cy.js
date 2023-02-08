/// <reference types='cypress' />
const { faker } = require('@faker-js/faker');

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('should register a new user', () => {
    //Fill all fields in forms except 'picture'
    cy.get('input#firstName')
      .type(user.firstName);

    cy.get('input#lastName')
      .type(user.lastName);

    cy.get('input#userEmail')
      .type(user.userEmail);

    cy.get(`input#gender-radio-${user.randomDigitsFrom1to3}`)
      .click({force: true});

    cy.get('#userNumber')
      .type(user.phone);

    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${user.dateOfBirth}{enter}`);

    cy.get('#subjectsInput')
      .type('en{enter}ma{enter}');

    cy.get(`input#hobbies-checkbox-${user.randomDigitsFrom1to3}`)
      .click({force: true});

    cy.get('textarea#currentAddress')
      .type(user.currentAddress);

    cy.get('div#state')
      .type('{enter}');

    cy.get('div#city')
      .type('{enter}');

    cy.get('button[type="submit"]')
      .click();

    //Assert inputed data in modal window
    cy.get('.modal-header div.h4')
      .should('contain.text', 'Thanks for submitting the form');

    cy.get('.modal-body table tr:nth-child(1) td:last-child')
      .should('contain.text', `${user.firstName} ${user.lastName}`);

    cy.get('.modal-body table tr:nth-child(2) td:last-child')
      .should('contain.text', `${user.userEmail}`);

    //assert gender
    cy.get('.modal-body table tr:nth-child(3) td:last-child')
      .should('contain.text', `${user.gender[user.randomDigitsFrom1to3 - 1]}`);

    cy.get('.modal-body table tr:nth-child(4) td:last-child')
      .should('contain.text', `${user.phone}`);

    //assert day and month
    cy.get('.modal-body table tr:nth-child(5) td:last-child')
      .should('contain.text', `${user.dateOfBirth}`.slice(0, 6));

    //assert year
    cy.get('.modal-body table tr:nth-child(5) td:last-child')
      .should('contain.text', `${user.dateOfBirth}`.slice(7, 11));

    //assert subjects
    cy.get('.modal-body table tr:nth-child(6) td:last-child')
      .should('contain.text', `English, Math`);

    //assert hobbies
    cy.get('.modal-body table tr:nth-child(7) td:last-child')
      .should('contain.text', `${user.hobbies[user.randomDigitsFrom1to3 - 1]}`);

    //here should be assert for the picture

    //assert address
    cy.get('.modal-body table tr:nth-child(9) td:last-child')
      .should('contain.text', `${user.currentAddress}`);

    //assert state and city
    cy.get('.modal-body table tr:nth-child(10) td:last-child')
      .should('contain.text', `NCR Delhi`);
  });
});