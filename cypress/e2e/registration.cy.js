/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to registration a new student', () => {
    cy.visit('/');
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type('{selectAll}' + user.birthDate +
    '{Enter}');
    cy.get('#subjectsContainer').type(user.vowel + '{downarrow}{Enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('{downarrow}{Enter}');
    cy.get('#city').type('{downarrow}{Enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName +
    ' ' + user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', user.birthDate);
    cy.contains('tr', 'Subjects').should('contain', 'Accounting');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain',
      'Uttar Pradesh Lucknow');
  });
});
