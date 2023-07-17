/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);

    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectall}26 May 2019{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(user.address);

    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', user.firstName).should('be.visible', user.firstName);

    cy.contains('tr', user.lastName).should('be.visible', user.lastName);

    cy.contains('tr', user.email).should('be.visible', user.email);

    cy.contains('tr', user.gender).should('be.visible', user.gender);

    cy.contains('tr', user.mobileNumber)
      .should('be.visible', user.mobileNumber);

    cy.contains('tr', user.hobby).should('be.visible', user.hobby);

    cy.contains('tr', user.address).should('be.visible', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
