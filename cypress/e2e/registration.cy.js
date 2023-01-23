/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('Student Registration page', () => {
  before(() => {
   cy.visit('/') 

  });

  it('it should allow a new user to register', () => {
    const {firstName, lastName, email, phoneNumber, adresss} = generateUser();

    cy.findByIdNumber('firstName')
      .type(firstName)

    cy.findByIdNumber('lastName')
      .type(lastName)

    cy.findByIdNumber('userEmail')
      .type(email)

    cy.get('#genterWrapper > .col-md-9 > :nth-child(3) > .custom-control-label')
      .click()

    cy.findByIdNumber('userNumber')
      .type(phoneNumber)

      cy.findByIdNumber('dateOfBirthInput')
        .click()

      cy.get('.react-datepicker__month-select').select('April');  
      
      cy.get('.react-datepicker__year-select').select('1988')
      cy.get('.react-datepicker__day--013').click();
    
      cy.get(".subjects-auto-complete__value-container")
        .click()
        .type('Computer Science')

      cy.get('#react-select-2-option-0').contains('Computer Science')
      .click()
      
      cy.get('.custom-control-label').contains('Sports').click()

      cy.get('#currentAddress')
        .type(adresss)

      cy.get(':nth-child(4) > .group-header > .header-wrapper').click()

      cy.findByIdNumber('state').click()
      cy.findByIdNumber('react-select-3-option-0').click()
     
      cy.findByIdNumber('city').click()
      cy.findByIdNumber('react-select-4-option-0')
      .click()
      
      cy.get('#submit').contains('button', 'Submit')
        .click()
      

      cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form')
        
  });
});
