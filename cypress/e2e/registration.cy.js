/* eslint-disable max-len */
/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register an account with all fields filled except the "picture" field', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.get(`#gender-radio-2`).click({ force: true });

    cy.findByPlaceholder('Mobile Number').type(user.phone);
    cy.get('#dateOfBirthInput').click();
    cy.chooseDate('month-select').select(user.birth.month);
    cy.chooseDate('year-select').select(`${user.birth.year}`);
    cy.chooseDate('day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('Ph{enter}' + 'a{downarrow}{enter}');
    cy.get('#hobbies-checkbox-3').click({ force: true });

    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('Ut{enter}');
    cy.get('#city').type('{downarrow}{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', 'Female');
    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);
    cy.contains('tr', 'Date of Birth')
      .should('contain', `${user.birth.day} ${user.birth.month},${user.birth.year}`);
    cy.contains('tr', 'Subjects')
      .should('contain', 'Physics, Accounting');
    cy.contains('tr', 'Hobbies')
      .should('contain', 'Music');
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
