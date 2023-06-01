/// <reference types='cypress' />

const { add } = require('lodash');
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Fill all fields in forms except "picture"', () => {
    const { firstName, lastName, email, phoneNumber, dateOfBirth, address, subject, gender } = generateUser();
    cy.get('#firstName')
      .type(firstName);
    cy.get('#lastName')
      .type(lastName);
    cy.get('#userEmail')
      .type(email);
    cy.get(`#gender-radio-${gender}`)
      .check({ force: true });
    cy.get('#userNumber')
      .type(phoneNumber);
    cy.get('#dateOfBirthInput')
      .type(dateOfBirth);
    cy.get('.css-1hwfws3')
      .type(subject)
    cy.get(`#hobbies-checkbox-${Math.ceil(Math.random() * 3)}`)
      .check({ force: true });
    cy.get('#currentAddress')
      .type(address);
    cy.get('#state').click()
      .get(`#react-select-3-option-${Math.floor(Math.random() * 4)}`)
      .click({ force: true });
    cy.get('#city').click().get(`#react-select-4-option-${Math.floor(Math.random() * 2)}`)
      .click({ force: true });
    cy.get('#currentAddress')
      .type(address);
    cy.get('#submit')
      .should('exist')
      .click();

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${firstName} ${lastName}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', phoneNumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', dateOfBirth);
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', subject);
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('be.empty');
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', address);

  });

});
