/// <reference types="cypress" />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then(newUser => { 
      user = newUser });
    
    })

      it('Fills in the form and submits it', () => {
        cy.findByPlaceholder('First Name').type(user.firstName)
        cy.findByPlaceholder('Last Name').type(user.lastName)
        cy.findByPlaceholder('name@example.com').type(user.email)
        cy.findByPlaceholder('Mobile Number').type(user.mobileNumber)
        cy.findByType('radio').check(user.gender, {force:true})

        cy.get('#dateOfBirthInput')
        .type('{selectAll}'+ user.birth.year+user.birth.month+user.birth.day+'{enter}')
        cy.get('.subjects-auto-complete__value-container').type('m{enter}')

        cy.get('#hobbiesWrapper > .col-md-9').type(user.hobby)
        cy.findByPlaceholder('Current Address').type(user.address)
        cy.contains('Select State').type('N{enter}')
        cy.contains('Select City').type('A{enter}')
        
        cy.get('#submit').click();
    
        
        cy.get('.modal-content')
          .should('contain', user.firstName)
          .and('contain', user.lastName)
          .and('contain', user.email)
          .and('contain', user.mobileNumber)
          .and('contain', user.gender)
          .and('contain', user.birth.year, user.birth.month, user.birth.day)
          .and('contain', user.address)

        cy.get('tbody > :nth-child(6) > :nth-child(2)').should('not.be.empty')
        cy.get('tbody > :nth-child(7) > :nth-child(2)').should('not.not.be.empty')
        cy.get('tbody > :nth-child(10) > :nth-child(2)').should('not.be.empty')
      })
    });
