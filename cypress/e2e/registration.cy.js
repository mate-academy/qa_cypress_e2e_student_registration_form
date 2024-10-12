/// <reference types='cypress' />

const { generateUser } = require('../support/generateUser');

describe('Student Registration page', () => {
  let user;

  before(() => {
    user = generateUser();
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register a new student', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.get(`label[for="gender-radio-${user.gender === 'Male' ? '1' : '2'}"]`).click();
    cy.get('#userNumber').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('month-select').select(user.birth.month);
    cy.pickDate('year-select').select(user.birth.year);
    cy.pickDate('day').contains(user.birth.day).click();
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains(`.custom-control-label`, user.hobby).click({ multiple: true });
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('{downarrow}{enter}');
    cy.get('#city').type('{downarrow}{enter}');
    cy.get('#submit').click();
    const fullName = `${user.firstName} ${user.lastName}`;
    cy.contains('tr', 'Student Name').should('contain', fullName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phoneNumber);
    const formattedBirthDate = `${user.birth.day} ${user.birth.month},${user.birth.year}`;
    cy.contains('tr', 'Date of Birth').should('contain', formattedBirthDate);
    cy.contains('tr', 'Subjects').should('contain', 'English, Physics');
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    const stateAndCity = 'Uttar Pradesh Lucknow';
    cy.contains('tr', 'State and City').should('contain', stateAndCity);
  });
});
