/// <reference types='cypress' />
let user;

describe('Student Registration page', () => {
  before(() => {
    // eslint-disable-next-line arrow-parens
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });

  it('should allow to register a new student', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}31 Dec 1980{enter}');
    cy.get('#subjectsContainer').type('E{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type('Home sweet home...');
    cy.get('#state').type('E{downArrow}{enter}');
    cy.get('#city').type('E{downArrow}{enter}');
    // eslint-disable-next-line cypress/no-force
    cy.get('#submit').click({ force: true });

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Date of Birth').should('contain', '31 December,1980');
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Subjects').should('contain', 'Chemistry');
    cy.contains('tr', 'Hobbie').should('contain', user.hobbie);
    cy.contains('tr', 'Address').should('contain', 'Home sweet home...');
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Merrut');
  });
});
