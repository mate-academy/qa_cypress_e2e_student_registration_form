/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new student', () => {
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.get('#userNumber')
      .type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select')
      .select(user.birthDate.month);
    cy.pickDate('year-select')
      .select(`${user.birthDate.year}`);
    cy.pickDate('day')
      .contains(user.birthDate.day).click();
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.get('#currentAddress')
      .type(user.address);
    cy.get('#state')
      .type(`{downarrow}{enter}`);
    cy.get('#city')
      .type(`{downarrow}{enter}`);
    cy.get('#submit')
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName);
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birthDate.day)
      .should('contain', user.birthDate.month)
      .should('contain', user.birthDate.year);
    cy.contains('tr', 'Subjects')
      .should('contain', 'English');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh')
      .should('contain', 'Lucknow');
  });
});
