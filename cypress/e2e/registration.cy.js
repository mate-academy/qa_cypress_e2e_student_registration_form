/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should provide an ability to register', () => {
    // Verify if page opens
    cy.visit('/automation-practice-form');
    cy.get('.main-header').contains('Practice Form').should('be.visible');
    // Fill the form
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('#genterWrapper', user.gender, { matchCase: false }).click();
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + user.birthDate + '{enter}');
    cy.get('#subjectsInput').type('sc{enter}');
    cy.get('#hobbiesWrapper').contains('Reading').click();
    cy.get('#hobbiesWrapper').contains('Sport').click();
    cy.get('#hobbiesWrapper').contains('Music').click();
    cy.findByPlaceholder('Current Address').type('A{enter}');
    cy.get('#stateCity-wrapper').contains('Select State').type('N{enter}');
    cy.get('#stateCity-wrapper').contains('Select City').type('De{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('exist');
  });
});
