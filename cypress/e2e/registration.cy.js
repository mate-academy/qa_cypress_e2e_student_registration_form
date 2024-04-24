/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to register a new user', () => {
    cy.visit('/');
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}13 Aug 1997{enter}');
    cy.get('#subjectsContainer').type(user.subject + '{enter}');
    cy.contains('.custom-control', user.hobbie).click();
    cy.findByPlaceholder('Current Address').type(user.adress);
    cy.get('#state').type('U{downArrow}{enter}');
    cy.get('#city').type('L{downArrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', '13 August,1997');
    cy.contains('tr', 'Subjects').should('contain', user.subject);
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
    cy.contains('tr', 'Address').should('contain', user.adress);
    cy.contains('tr', 'Subjects').should('contain', user.subject);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
