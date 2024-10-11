/// <reference types='cypress' />
Cypress.on('uncaught:exception', () => { return false; });

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generatedUser) => {
      user = generatedUser;
    });
  });

  it('should regitrer a new student', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get(`label[for="gender-radio-${user.genderId}"]`).click();
    cy.get('#userNumber').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(user.birth.year);
    cy.pickDate('day').contains(user.birth.day).click();
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');

    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName);
    cy.contains('tr', 'Student Name').should('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth').should('contain', user.birth.month);
    cy.contains('tr', 'Date of Birth').should('contain', user.birth.year);
    cy.contains('tr', 'Date of Birth').should('contain', user.birth.day);

    const genderMap = {
      1: 'Male',
      2: 'Female',
      3: 'Other'
    };

    cy.contains('tr', 'Gender').should('contain', genderMap[user.genderId]);
    cy.contains('tr', 'Subjects').should('contain', 'English', 'Physics');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
