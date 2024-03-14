/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
    Cypress.on('uncaught:exception', (err, runnable) => {
    
      return false;
    });
  });
 
  const firstName = 'Petro';
  const lastName = 'Klimenko';
  const userEmail = 'petya@guss.go';
  const gender = 'Male';
  const mobileNumber = '7772298752';
  const birthDate = '01 Mar 1988';
  const address = 'Baker str. 23, London';
  const hobby = 'Sports';

  it('should register a new student', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(userEmail);
    cy.contains('.custom-control-label', gender).click();
    cy.get('#userNumber').type(mobileNumber);
    cy.get('#dateOfBirthInput').type(`{selectALL} ${birthDate} {enter}`);
    cy.get('#subjectsContainer').type(`a{Enter}`);
    cy.contains('.custom-control-label', hobby).click();
    cy.get('#currentAddress').type(address);
    cy.get('#state').type('{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').type('{enter}');
    /* checking the modal window with user creds */
    cy.contains('tr', 'Student Name').should('contain.text', firstName 
    + ' ' + lastName);
    cy.contains('tr', 'Student Email').should('contain.text', userEmail);
    cy.contains('tr', 'Gender').should('contain.text', gender);
    cy.contains('tr', 'Mobile').should('contain.text', mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain.text', '01 March,1988');
    cy.contains('tr', 'Address').should('contain.text', address);
    cy.contains('tr', 'Hobbies').should('contain.text', hobby);
    cy.contains('tr', 'State and City').should('contain.text', 'NCR Delhi');
  });
});
