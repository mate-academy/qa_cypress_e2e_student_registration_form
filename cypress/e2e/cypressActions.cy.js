/// <reference types='cypress' />
const { generateUser } = require('../support/generateUser');

describe('Name of the group', () => {
  
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should fill all fields in forms except "picture"', () => {
    const { firstName, lastName, email, mobile, adress } = generateUser(); 
      cy.fillAllFIelds(firstName, lastName, email, mobile, adress);

      cy.contains('Thanks for submitting the form')
        .should('be.visible');

      cy.contains('tr', 'Student Name')
        .should('contain', firstName, lastName);

      cy.contains('tr', 'Student Email')
        .should('contain', email);

      cy.contains('tr', 'Gender')
        .should('contain', 'Other');

      cy.contains('tr', 'Mobile')
        .should('contain', '0701234567');

      cy.contains('tr', 'Date of Birth')
        .should('contain', '16 October,1995');
    
      cy.contains('tr', 'Subjects')
        .should('contain', 'Math');

      cy.contains('tr', 'Hobbies')
        .should('contain', 'Reading');

      cy.contains('tr', 'Address')
        .should('contain', adress);

      cy.contains('tr', 'State and City')
        .should('contain', 'Haryana Karnal');
  });
});
