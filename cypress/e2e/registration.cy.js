/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should provide an ability to field registration form', () => {
    cy.get('[placeholder="First Name"]')
      .type('Yuliia');
    cy.get('[placeholder="Last Name"]')
      .type('Osadcha');
    cy.get('[placeholder="name@example.com"]')
      .type('yuliia@example.com');
    cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click();
    cy.get('[placeholder="Mobile Number"]')
      .type('8063445566');  
    cy.get('#dateOfBirthInput')
      .type('{selectall}' + '31 July 1986');
    cy.get('.subjects-auto-complete__value-container')
      .click({force: true})
      .type('History');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)') 
      .click({force: true} )
      .click();
    cy.get('[placeholder="Current Address"]')
      .type('Ukraine');  
    cy.get('#state') 
      .click()
      .type('NCR {enter}');  
    cy.get('#city') 
      .click()
      .type('Noida {enter}');
    cy.get('#submit')  
      .click();
    cy.get('#example-modal-sizes-title-lg') 
      .contains('Thanks for submitting the form');
    cy.contains('tr', 'Student Name')  
      .should('contain', 'Yuliia Osadcha');
    cy.contains('tr', 'Student Email')  
      .should('contain', 'yuliia@example.com');
    cy.contains('tr', 'Gender')  
      .should('contain', 'Femal');  
    cy.contains('tr', 'Mobile')  
      .should('contain', '8063445566'); 
    cy.contains('tr', 'Date of Birth')  
      .should('contain', '31 July,1986'); 
    cy.contains('tr', 'Subject')  
      .should('contain', 'History');    
    cy.contains('tr', 'Hobbies')  
      .should('contain', 'Reading');   
    cy.contains('tr', 'Address')  
      .should('contain', 'Ukraine'); 
    cy.contains('tr', 'State and City')  
      .should('contain', 'NCR Noida');   
    cy.get('#closeLargeModal')  
      .click()

  });
});
