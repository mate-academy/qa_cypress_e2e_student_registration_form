/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should register new user', () => {
    cy.visit('/automation-practice-form');
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    cy.get('body form').should('have.id', 'userForm');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('#genterWrapper', user.gender, { matchCase: false }).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}' + user.birthday + '{enter}');
    cy.get('#subjectsInput').type('art{enter} eng{enter}');
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.get('#hobbiesWrapper').contains('Reading').click();
    cy.findByPlaceholder('Current Address', 'textarea').type(user.Address);
    cy.get('#react-select-4-input').should('be.disabled');
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('#stateCity-wrapper').contains('Select City').type('De{enter}');
    cy.get('button').contains('Submit').click();
    cy.get('td').should('contain.text', user.firstName);
    cy.get('td').should('contain.text', user.lastName);
    cy.get('td').should('contain.text', user.email);
    cy.get('td').should('contain.text', Number(user.phoneNumber));
    cy.get('td').should('contain.text', 'Arts');
    cy.get('td').should('contain.text', 'English');
    cy.get('td').should('contain.text', 'Music');
    cy.get('td').should('contain.text', 'Reading');
    cy.get('td').should('contain.text', user.Address);
    cy.get('td').should('contain.text', 'NCR');
    cy.get('td').should('contain.text', 'Delhi');
  });
});
