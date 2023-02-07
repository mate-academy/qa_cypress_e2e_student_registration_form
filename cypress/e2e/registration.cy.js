/// <reference types='cypress' />

const { firstName } = require('faker/lib/name');
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {

  before(() => {
    cy.visit('/')
  });

  it('Successful Registration', () => {
    const { firstName, lastName, email, number, address, gender, random, hobby } = generateUser();

    cy.findByPlaceholder('First Name')
    .type(firstName)

    cy.findByPlaceholder('Last Name')
    .type(lastName)

    cy.findByPlaceholder('name@example.com')
    .type(email)

    cy.contains('.custom-control-label', gender[random])
    .click()

    cy.findByPlaceholder('Mobile Number')
    .type(number)

    cy.get('#dateOfBirthInput')
    .type('{selectAll} 15 Jan 2012{enter}')

    cy.get('.subjects-auto-complete__value-container')
    .type('Ma{enter}')

    cy.contains('#hobbiesWrapper', hobby[random])
    .click()

    cy.findByPlaceholder('Current Address').type(address)

    cy.get('#state')
    .type('{downArrow}{enter}')

    cy.get('#city')
    .type('{downArrow}{enter}')

    cy.get('#submit').
    click()

    cy.contains('tr','Student Name')
    .should('contain', firstName)

    cy.contains('tr','Student Email')
    .should('contain', email)

    cy.contains('tr','Gender')
    .should('contain', gender[random])

    cy.contains('tr','Mobile')
    .should('contain', number)

    cy.contains('tr','Subjects')
    .should('contain', 'Maths')

    cy.contains('tr','Hobbies')
    .should('contain', hobby[random])

    cy.contains('tr','Address')
    .should('contain', address)

    cy.contains('tr','State and City')
    .should('contain', 'Uttar Pradesh Lucknow')

 
  });
});
