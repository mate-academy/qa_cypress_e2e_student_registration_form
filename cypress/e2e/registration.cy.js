/// <reference types='cypress' />

const { contains } = require("cypress/types/jquery");

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('Fillin the form', () => {
    cy.viewport(750, 600);
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get('[type="radio"]').check(user.gender, {force: true});
    cy.findByPlaceholder('Mobile Number').type(user.mobile);
    cy.get('#dateOfBirthInput').type('{selectAll}' + user.calendar + '{enter}');
    cy.get('.subjects-auto-complete__value-container').type('Bi'+ '{enter}' + 'Ma' + '{enter}' + 'Ph' + '{enter}');
    cy.get('[type="checkbox"]').check({force: true});
    cy.findByPlaceholder('Current Address').type(user.adress);
    cy.get('#state').click().type('Utt{enter}');
    cy.get('#city').click().type('Merr{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
  });
});
