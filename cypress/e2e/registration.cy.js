/// <reference types='cypress' />

const { randomText } = require("../support/randomText");
let user

describe('Student Registration page', () => {
  before(() => {
    cy.task('generateUser').then(generateUser => {
       user = generateUser;
    });

  });

  it('should allow to register a new student', () => {
    const {text} = randomText();
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}01 Jan 2001{enter}');
    cy.get('.subjects-auto-complete__input').type('B{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type(text);
    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#stateCity-wrapper').type('{downArrow}{enter}');
    cy.get('#submit').click();
    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);   
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', '01 January,2001');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);

  });
});
