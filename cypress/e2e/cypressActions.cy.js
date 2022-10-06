/// <reference types='cypress' />
import { generateUser } from '../support/generate';

describe('Practice Form', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('The user can log in by entering the correct data', () => {
    const { firstName, lastName, email, mobile, dateOfBirth, hobbies, hobby, adress, password, gender } = generateUser();
    cy.findByPlaceholder('First Name').type(firstName)

    cy.findByPlaceholder('Last Name').type(lastName)

    cy.findByPlaceholder('name@example.com').type(email)

    cy.get(`[value= "${gender}"]`).click({force: true});

    cy.findByPlaceholder('Mobile Number').type(mobile)

    cy.get('#dateOfBirthInput').type('{selectall}').type(dateOfBirth + '{enter}');

    cy.get('.subjects-auto-complete__value-container').type('Math' + '{enter}')

    cy.get(`[value= "${hobbies}"]`).click({force: true})

    cy.findByPlaceholder('Current Address').type(adress)

    cy.get('#state').type('NCR' + '{enter}')

    cy.get('#city').type('Noida' + '{enter}')

    cy.get('[id="submit"]').click({force: true})
  });

  it('The user can log in by entering the correct data', () => {
    
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
  
  })
});