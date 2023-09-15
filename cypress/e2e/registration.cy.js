/// <reference types='cypress' />

 const randomEmail = `user_${Math.floor(Math.random() * 1000000)}@mail.com`;


describe('Student Registration page', () => {
  before(() => {
    
    cy.visit('https://demoqa.com/automation-practice-form'); 
  });
  it('should fill in form fields and assert inputted data', () => {
    
    cy.get('#firstName').type('Mykhailo');
    cy.get('#lastName').type('Rozmaznin');
    cy.get('#userEmail').type(randomEmail);
    
    cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click();
    cy.get('#userNumber').type('0984641309');
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#currentAddress').type('Kyiv, Ushinskogo 29');


    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('2004');
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__day--021').click();


    cy.get('.subjects-auto-complete__value-container').type('Maths');
    cy.get('#react-select-2-option-0').click();
    
    cy.get('.css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer').click({ force: true });
    cy.get('#react-select-3-option-0').click({ force: true });     
    cy.get('#city>.css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer').click({ force: true });     
    cy.get('#react-select-4-option-0').click({ force: true });
  
   cy.get('button[type="submit"]').click({ force: true });
    
   
   it('should correct validation message', () => {
   
    cy.get('.modal').should('be.visible');
    cy.get('.modal').should('contain', 'Mykhailo Rozmaznin');
    cy.get('.modal').should('contain', randomEmail);
    cy.get('.modal').should('contain', '0984641309');
    cy.get('.modal').should('contain', 'Kyiv, Ushinskogo 29');
    cy.get('.modal').should('contain', 'April,2004');
  });
  });


});