/// <reference types='cypress' />
import { generateuser } from "../support/generateuser";

describe('Student Registration page', () => {
  beforeEach('', () => {
    cy.viewport(550, 750)
    cy.visit('https://demoqa.com/automation-practice-form');
  }); 

  it('should be possible to register', () => {
    const{ firstname, lastname, email, address, phone } = generateuser();

    cy.get('#firstName')
      .type(firstname)

      cy.get('#lastName')
      .type(lastname)

      cy.get('#userEmail')
      .type(email)

      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click()

      cy.get('#userNumber')
      .type(phone)

      cy.get('#dateOfBirthInput')
        .click()
      cy.get('.react-datepicker__year-select').select('2000')
      cy.get('.react-datepicker__month-select').select('January')
      cy.get('[aria-label="Choose Saturday, January 1st, 2000"]').click()

      cy.get('#subjectsInput').type('English{enter}');
      
      cy.get('label[for="hobbies-checkbox-1"]').click()
      cy.get('label[for="hobbies-checkbox-2"]').click()

      cy.get('[id="currentAddress"]')
        .type(address)

      cy.get('#state').click().type('NCR{enter}');
      cy.get('#city').click().type('Delhi{enter}');

      cy.contains('button', 'Submit').click()

      cy.get('#example-modal-sizes-title-lg')
        .should('contain.text', 'Thanks for submitting the form')

        cy.get('.modal-content')
        .should('contain', `${firstname} ${lastname}`)
        .should('contain', email)
        .should('contain', phone)
        .should('contain', 'English')
        .should('contain', address)
  });

  it('should throw an error if not all required fields filled', () => {
    const{ firstname } = generateuser();

    cy.get('#firstName')
      .type(firstname)

    cy.contains('button', 'Submit').click()

    cy.get('#lastName')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')

    cy.get('#userNumber')
      .should('have.css', 'border-color', 'rgb(220, 53, 69)')
  });

  it('should be possible to choose several subjects and only one gender', () => {
    const{ firstname, lastname, email, phone } = generateuser();

    cy.get('#firstName')
      .type(firstname)

      cy.get('#lastName')
      .type(lastname)

      cy.get('#userEmail')
      .type(email)

      cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
      .click()

      cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click()

      cy.get('#userNumber')
      .type(phone)

      cy.get('#subjectsInput').type('English{enter}');
      cy.get('#subjectsInput').type('Physics{enter}');
      cy.get('#subjectsInput').type('Chemistry{enter}');

      cy.contains('button', 'Submit').click()

      cy.get('.modal-content')
        .should('contain', 'English')
        .should('contain', 'Physics')
        .should('contain', 'Chemistry')

        .should('contain', 'Male')
        .should('not.visible', 'Female')
  });
});
