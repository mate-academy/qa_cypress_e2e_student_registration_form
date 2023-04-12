/// <reference types='cypress' />

const { generateUserData } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1980, 1020);
  });

  it('Submitting the registration form with all filled in fields except the picture', () => {
    const { 
      firstname, lastname, email, genderNumber, gender, phoneNumber, birthDate, subject, address 
    } = generateUserData();
    cy.get('#firstName').type(firstname);
    cy.get('#lastName').type(lastname);
    cy.get('#userEmail').type(email);
    cy.get(`#gender-radio-${genderNumber}`).check( {force: true} );
    cy.get('#userNumber').type(phoneNumber);
    cy.get('#dateOfBirthInput').type(`{selectall}${birthDate}{enter}`);
    cy.get('#subjectsContainer').type(`${subject}{enter}`);
    cy.get(`#hobbies-checkbox-${Math.ceil(Math.random() * 3)}`).check( {force: true} );
    cy.get('#currentAddress').type(address);
    cy.get('#state').click().get(`#react-select-3-option-${Math.floor(Math.random() * 4)}`).click( {force: true} );
    cy.get('#city').click().get(`#react-select-4-option-${Math.floor(Math.random() * 2)}`).click( {force: true} );
    cy.get('#submit').click();
  
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${firstname} ${lastname}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', phoneNumber);
    // cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', `${birthDate.toLocaleDateString('en-US', {day: '2-digit', month: 'long', year: 'numeric'})}`);
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', subject);
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('be.empty');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', address);
  });
});
