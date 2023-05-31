/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    });
  

  it('should register a new student', () => {
    const user = generateUser();

    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    
    cy.get('#userEmail')
      .type(user.email);

    cy.get(`[value=${user.genders}]`)
      .click({force: true});
    
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectAll}31 May 2000' + '{enter}');
      
    cy.get('.subjects-auto-complete__value-container')
      .type(user.subjects + '{enter}'); 

    cy.contains('.custom-control-label', user.hobbies)
      .click();

    cy.get('#currentAddress')
      .type('Current Adress');
    
    cy.contains('Select State')
      .type('Haryana' + '{enter}');

    cy.contains('Select City')
      .type('Karnal' + '{enter}');
    
    cy.get('#submit')
      .click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    
    cy.contains('tr', 'Gender')
      .should('contain', user.genders);

    cy.contains('tr', 'Mobile')
      .should('contain', user.mobileNumber);

    cy.contains('tr', 'Date of Birth')
      .should('contain', '31 May,2000');

    cy.contains('tr', 'Subjects')
      .should('contain', user.subjects);

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbies);

    cy.contains('tr', 'Address')
      .should('contain', 'Current Adress');

    cy.contains('tr', 'State and City')
      .should('contain', 'Haryana Karnal');
  });
});
