/// <reference types='cypress' />

const { GeneratedIdentifierFlags } = require("typescript");
let user;

describe('Student Registration page', () => {
  before(() => {
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.task('generateUser').then(generateUser => {
    user = generateUser;
    });

  });

  it('should register user with all needed credentials', () => {
  cy.findByPlaceholder('First Name').type(user.firstName);
  cy.findByPlaceholder('Last Name').type(user.lastName);
  cy.findByPlaceholder('name@example.com').type(user.email);
  cy.contains('.custom-control-label', user.gender).click();
  cy.findByPlaceholder('Mobile Number').type(user.phone);
  cy.get('#dateOfBirthInput').type('{selectAll}15 Jul 1990{enter}');
  cy.get('#subjectsContainer').type('A{enter}');
  cy.contains('.custom-control-label', user.hobby).click();
  cy.get('#currentAddress').click().type(user.street);
  cy.get('#state > .css-yk16xz-control > .css-1hwfws3').type('N{enter}');
  cy.get('#city > .css-yk16xz-control > .css-1hwfws3').type('M{enter}');
  cy.get('td').should('contain.text', user.firstName);
  cy.get('td').should('contain.text', user.lastName);
  cy.get('td').should('contain.text', user.email);
  cy.get('td').should('contain.text', user.gender);
  cy.get('td').should('contain.text', user.phone);
  cy.get('td').should('contain.text', user.street);


  });
});
