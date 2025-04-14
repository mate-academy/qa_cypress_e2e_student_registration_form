/// <reference types='cypress' />
// const { ExitStatus } = require("typescript");
let user;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('Should sign up a new user', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.get(`label[for="gender-radio-${user.genderId}"]`).click();

    cy.get('#userNumber').type(user.phoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select(user.birth.month);
    cy.get('.react-datepicker__year-select').select(user.birth.year);
    cy.get('.react-datepicker__day').contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__input').type('en{enter}');

    cy.contains('.custom-control-label', user.hobby).click({ multiple: true });

    cy.findByPlaceholder('Current Address').type(user.address);

    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('exist');
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.day, user.birth.month, user.birth.year);
    cy.contains('tr', 'Subjects').should('contain', 'En');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
