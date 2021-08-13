/// <reference types="cypress" />
describe ('basic level', () => {

  before('open site', () => {
      cy.visit('https://demoqa.com/automation-practice-form');
  })
  it('Register', () => {
      cy.get('#firstName').type('Lilian');
      cy.get('#lastName').type('Voinich');
      cy.get('#userEmail').type('lilian@run.com');
      cy.get('[for="gender-radio-3"]').click();
      cy.get('#userNumber').type('0101010101');
      cy.get('#dateOfBirthInput').type('{selectall}').type('08 August 1958{enter}');
      cy.get('#subjectsWrapper').type('QA{enter}');
      cy.get('[for="hobbies-checkbox-3"]').click({force: true});
      cy.get('#currentAddress').type('Earth');
      cy.get('#state').type('Rajasthan{enter}');
      cy.get('#city').type('Jaipur{enter}');
      cy.get('#submit').click();
    });

  it('Validated registration', () => {
      cy.contains('tbody tr', 'Student Name').should('contain.text', 'Lilian Voinich');
      cy.contains('tbody tr', 'Student Email').should('contain.text', 'lilian@run.com');
      cy.contains('tbody tr', 'Gender').should('contain.text', 'Other');
      cy.contains('tbody tr', 'Mobile').should('contain.text', '0101010101');
      cy.contains('tbody tr', 'Date of Birth').should('contain.text', '08 August,1958');
      cy.contains('tbody tr', 'Subjects').should('contain.text', 'QA');
      cy.contains('tbody tr', 'Hobbies').should('contain.text', 'Music');
      cy.contains('tbody tr', 'Address').should('contain.text', 'Earth');
      cy.contains('tbody tr', 'State and City').should('contain.text', 'Rajasthan Jaipur');
      });
});