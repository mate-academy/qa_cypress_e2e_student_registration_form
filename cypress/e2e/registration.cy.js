/// <reference types='cypress' />

  Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false;
  });

describe('Student Registration Form', () => {

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    })
  });

  it('should fill the form and assert modal data', () => {
    
    cy.findByPlaceholderText('First Name').type(user.firstName);
    cy.findByPlaceholderText('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    
    
    cy.get(`label[for="gender-radio-${user.genderId}"]`).click(); 
    
    
    cy.get('#userNumber').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(user.birth.year);
    cy.get('.react-datepicker__month-select').select(user.birth.month);
    cy.get(`[aria-label="${user.birth.day}"]`).click();
    cy.get(`label[for="hobbies-checkbox-${user.hobby}"]`).click();
    cy.get('#currentAddress').type(user.address);
    
   
    cy.get('#submit').click();
    
   

    cy.get('.modal-body').should('contain', user.firstName);
    cy.get('.modal-body').should('contain', user.lastName);
    cy.get('.modal-body').should('contain', user.email);
    cy.get('.modal-body').should('contain', user.phoneNumber);
    cy.get('.modal-body').should('contain', user.birth.day);
    cy.get('.modal-body').should('contain', user.birth.month);
    cy.get('.modal-body').should('contain', user.birth.year);
    cy.get('.modal-body').should('contain', user.hobby);
    cy.get('.modal-body').should('contain', user.address);
    
    
    cy.get('#closeLargeModal').click();
  });
});
