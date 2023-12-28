/// <reference types='cypress' />
let user;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to register', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}01 Dec 1980{enter}');
    cy.get('#subjectsContainer').type('E{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('S{downArrow}{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);
    cy.contains('tr', 'Date of Birth')
      .should('contain', '01 December,1980');
    cy.contains('tr', 'Address')
      .should('contain', user.address);
  });
});
