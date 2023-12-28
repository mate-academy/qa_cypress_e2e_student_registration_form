/// <reference types='cypress' />

beforeEach(() => {
  cy.visit('/');
});

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to register a new student', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type(user.date)
      .type('{enter}');
    cy.get('#subjectsContainer').type(`a{downArrow}{enter}`);
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.findByPlaceholder('Current Address').type(user.currentAddress);
    cy.get('#state').type('S{downArrow}{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', user.date);
    cy.contains('tr', 'Subjects').should('contain', 'Accounting');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
    cy.contains('tr', 'Picture').should('contain', '');
    cy.contains('tr', 'Address').should('contain', user.currentAddress);
    cy.contains('tr', 'State and City').should('contain', 'Rajasthan Jaipur');
  });
});
