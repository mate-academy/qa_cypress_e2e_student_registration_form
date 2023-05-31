/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser
    });
  });

  it('should allow filling in student registration form', () => {
    cy.get('#firstName').type(`${user.firstName}`);
    cy.get('#lastName').type(`${user.lastName}`);
    cy.get('#userEmail').type(`${user.email}`);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(`${user.mobile}`);
    cy.get('#dateOfBirthInput').click();
    cy.pickDate('year-select').select(`${user.birthdate.year}`);
    cy.pickDate('month-select').select(`${user.birthdate.month}`);
    cy.pickDate('day').contains(`${user.birthdate.day}`).click();
    cy.get('.subjects-auto-complete__value-container').type(user.subject + '{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(`${user.address}`);
    cy.contains('Select State').type('NCR{enter}');
    cy.contains('Select City').type('Gurgaon{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name').should('contain', user.firstName).and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobile);
    cy.contains('tr', 'Date of Birth').should('contain', user.birthdate.day).and('contain', user.birthdate.year);
    cy.contains('tr', 'Subjects').should('contain', user.subject);
    cy.contains('tr', 'Hobbies').should('contain', user.hobby);
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'NCR Gurgaon');

  });
});
