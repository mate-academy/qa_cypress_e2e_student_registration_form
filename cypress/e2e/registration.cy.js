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
  cy.contains('#stateCity-wrapper', 'Select State').type('NCR{enter}');
  cy.contains('.css-2b097c-container', 'Select City').type('Delhi{enter}');
  cy.get('#submit').click();
  cy.get('td').should('contain.text', user.firstName);
  cy.get('td').should('contain.text', user.lastName);
  cy.get('td').should('contain.text', user.email);
  cy.get('td').should('contain.text', user.gender);
  cy.get('td').should('contain.text', user.phone);
  cy.get('td').should('contain.text', user.hobby);
  cy.get('td').should('contain.text', user.street);
  cy.get('td').should('contain.text', user.state);
  cy.get('td').should('contain.text', user.city);
  cy.get('td').should('contain.text', user.subject);


  });
});
