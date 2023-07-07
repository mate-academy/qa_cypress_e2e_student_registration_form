/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should provide an ability to registration', () => {
    const {
      email,
      username,
      lastName,
      gender,
      mobileNumber,
      hobby,
      address,
      
    } = generateUser();
  
    cy.findByPlaceholder("First Name")
      .type(username);

    cy.findByPlaceholder('Last Name')
      .type(lastName);
    
    cy.findByPlaceholder('name@example.com')
      .type(email);
    
    cy.contains('.custom-control-label', gender)
      .click();
    
    cy.findByPlaceholder('Mobile Number')
      .type(mobileNumber);
  
    cy.get('#dateOfBirthInput')
      .type('{selectall}14 Jan 2000{enter}');

   cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    
    
    cy.contains('.custom-control-label', hobby)
      .click();
    
    cy.findByPlaceholder('Current Address')
      .type(address);
    
    cy.get('#state')
        .click();
    
    cy.get('#state')
      .type('{downarrow}{enter}');
    
    cy.get('#city')
    .click();
    
    cy.get('#city')
      .type('{downarrow}{enter}');
    
    cy.contains('#submit', 'Submit')
      .click();
    
    cy.contains('tr', 'Student Name')
      .should('contain', username)
      .and('contain', lastName);
    
    cy.contains('tr', 'Student Email')
      .should('contain', email);
    
    cy.contains('tr', 'Gender')
      .should('contain', gender);
    
    cy.contains('tr', 'Mobile')
      .should('contain', mobileNumber);
    
    cy.contains('tr', 'Date of Birth')
      .should('contain', '14')
      .and('contain', 'January')
      .and('contain', '2000');
    
    cy.contains('tr', 'Subject')
      .should('contain', 'English');
    
    cy.contains('tr', 'Hobbies')
      .should('contain', hobby);
    
    cy.contains('tr', 'Address')
      .should('contain', address);
    
    cy.contains('tr', 'State and City')
      .should('contain', 'NCR')
      .and('contain', 'Delhi')
    
  });

  });
