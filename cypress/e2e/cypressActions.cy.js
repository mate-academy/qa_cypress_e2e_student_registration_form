/// <reference types='cypress' />

describe('User should be able', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('to register with valid data', () => {
    cy.viewport(1280, 1280)
    cy.get('[id="firstName"]').type('Eron');
    cy.get('[id="lastName"]').type('Dondon');
    cy.get('[id="userEmail"]').type('erondondon@qa.team');
    cy.get('[id="gender-radio-1"]').click({ force: true });
    cy.get('[id="userNumber"]').type(1234567890);
    cy.get('[id="dateOfBirthInput"]').type('{selectAll}').type('15 Jun 1997{enter}');
    cy.get('[id="subjectsInput"]').type('phys{enter}');
    cy.get('[id="hobbies-checkbox-2"]').click({ force: true });
    cy.get('[id="currentAddress"]').type('Smth street');
    cy.get('[id="state"]').click();
    cy.contains('Haryana').click();
    cy.get('[id="city"]').click();
    cy.contains('Panipat').click();
    cy.get('[id="submit"]').click();

    cy.contains('tr', 'Student Name').should('contain', `Eron Dondon`);
    cy.contains('tr', 'Student Email').should('contain', 'erondondon@qa.team');
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', 1234567890);
    cy.contains('tr', 'Date of Birth').should('contain', '15 June,1997');
    cy.contains('tr', 'Subjects').should('contain', 'Physics');
    cy.contains('tr', 'Hobbies').should('contain', 'Reading');
    cy.contains('tr', 'Address').should('contain', 'Smth street');
    cy.contains('tr', 'State and City').should('contain', `Haryana Panipat`);
  });
});
