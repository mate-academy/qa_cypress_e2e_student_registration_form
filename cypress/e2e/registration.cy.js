/// <reference types='cypress' />

describe('Student Registration page', () => {
  beforeEach('', () => {
    cy.viewport(550, 750) // viewport to 550px x 750px because the page does not scroll
    cy.visit('https://demoqa.com/automation-practice-form');
  }); 

  it('should be possible to register', () => {
    cy.get('#firstName')
      .type('name')

      cy.get('#lastName')
      .type('last_name')

      cy.get('#userEmail')
      .type('name@mail.com')

      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click()

      cy.get('#userNumber')
      .type('1234567890')

      cy.get('#dateOfBirthInput')
        .click()
      cy.get('.react-datepicker__year-select').select('2000')
      cy.get('.react-datepicker__month-select').select('January')
      cy.get('[aria-label="Choose Saturday, January 1st, 2000"]').click()

      cy.get('#subjectsInput').type('English{enter}');
      
      cy.get('label[for="hobbies-checkbox-1"]').click()
      cy.get('label[for="hobbies-checkbox-2"]').click()

      cy.get('[id="currentAddress"]')
        .type('Vietnam')

      cy.get('#state').click().type('NCR{enter}');
      cy.get('#city').click().type('Delhi{enter}');

      cy.contains('button', 'Submit').click()

      cy.get('#example-modal-sizes-title-lg')
        .should('contain.text', 'Thanks for submitting the form')

        cy.get('.modal-content')
        .should('contain',`name last_name`)
        .should('contain', 'name@mail.com')
        .should('contain', '1234567890')
        .should('contain', 'English')
        .should('contain', 'Vietnam');
  });
});
