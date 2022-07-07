/// <reference types='cypress' />
const { generateUser } = require("../support/generate");

describe('On Student Registration Form user should be able', () => {
  before(() => {
    cy.visit('/')
  });

  it('to create a new account and validate data in modal window', () => {
    const {email, firstName, lastName, mobile, dateOfBirth, adress, hobbies, hobby, gender} = generateUser();
   
    cy.findByPlaceholder('First Name').type(firstName) 

    cy.findByPlaceholder('Last Name').type(lastName)

    cy.get('#userEmail').type(email)

    cy.get(`[value= "${gender}"]`).click({force: true});

    cy.findByPlaceholder('Mobile Number')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .type('{selectall}')
      .type(dateOfBirth + '{enter}');

    cy.get(`[value= "${hobbies}"]`)
      .click({force: true});

    cy.findByPlaceholder('Current Address')
      .type(adress);

    cy.get('#state')
      .type('NCR' + '{enter}');

    cy.get('#city')
      .type('Delhi' + '{enter}');

    cy.get('#subjectsContainer')
      .type('Commerce'  + '{enter}')

    cy.get('#submit')
      .click();

    cy.contains('tr', 'Student Name')
      .should('contain', `${firstName} ${lastName}`);

    cy.contains('tr', 'Student Email')
      .should('contain', email);

    cy.contains('tr', 'Gender')
      .should('contain', gender);

    cy.contains('tr', 'Mobile')
      .should('contain', mobile);

    cy.contains('tr', 'Date of Birth')
      .should('contain', `${dateOfBirth.getDate()} ${dateOfBirth.toLocaleDateString('en-us', {
          month: 'long'})},${dateOfBirth.getFullYear()}`)
     
    cy.contains('tr', 'Subjects')
      .should('contain', 'Commerce');

    cy.contains('tr', 'Hobbies')
      .should('contain', hobby);

    cy.contains('tr', 'Address')
      .should('contain', adress);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR Delhi');

  });
});

