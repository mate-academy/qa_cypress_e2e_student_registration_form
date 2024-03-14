/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  
  before(() => {
    cy.task('generateUser')
      .then(generateUser => {
    user = generateUser
    })
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register a new student', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}01 Jan 1988{enter}');
    cy.get('#subjectsContainer').type('Hindi{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type('Promyslova street{enter}');
    cy.get('#state').type('{enter}');
    cy.get('#city').type('{enter}');
    cy.get('#submit').click();
   //modal window
    cy.get('.modal-header').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody').should('contain.text', user.firstName);
    cy.get('tbody').should('contain.text', user.lastName);
    cy.get('tbody').should('contain.text', user.email);
    cy.get('tbody').should('contain.text', user.gender);
    cy.get('tbody').should('contain.text', user.mobileNumber);
    cy.get('tbody').should('contain.text', '01 January,1988');
    cy.get('tbody').should('contain.text', 'Hindi');
    cy.get('tbody').should('contain.text', user.hobby);
    cy.get('tbody').should('contain.text', 'Promyslova street');
    cy.get('#closeLargeModal').click();
     
      
  });
});
