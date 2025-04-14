/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.visit('/');
  });
  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });
  it('should success register user', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.contains('.custom-control-label', user.genders).click();
    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}11 Dec 2000{enter}');
    cy.get('#subjectsContainer').type('N{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbies).click();
    cy.findByPlaceholder('Current Address').type('blablabla');
    cy.get('#state').type('NC{downArrow}{enter}');
    cy.get('#city').type('D{downArrow}{enter}');
    cy.get('#submit').click();
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.genders);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);
    cy.contains('tr', 'Date of Birth')
      .should('contain.text', '11 December,2000');
    cy.contains('tr', 'Subject')
      .should('contain.text', 'English');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbies);
    cy.contains('tr', 'Address')
      .should('contain.text', 'blablabla');
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Noida');
  });
});
