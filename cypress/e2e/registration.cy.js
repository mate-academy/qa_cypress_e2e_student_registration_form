/// <reference types='cypress' />

const { generateCredentials } = require("../support/generateCreadentials");

describe('Student Registration page', () => {
  const {
    firstName,
    lastName,
    email,
    gender,
    phoneNumber,
    subject,
    hobby,
    address
  } = generateCredentials();

  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should allow to register a new student', () => {
    cy.viewport(1080, 1280)
  
    cy.get('#firstName')
      .type(firstName)
    
    cy.get('#lastName')
      .type(lastName)

    cy.get('#userEmail')
      .type(email)

    cy.contains('.custom-control-label', gender)
      .click()

    cy.get('[placeholder="Mobile Number"]')
      .type(phoneNumber)

    cy.get('#dateOfBirthInput')
      .click()

    cy.get('#dateOfBirthInput')
      .type('{selectAll}14 Apr 1994{enter}')

    cy.get('.subjects-auto-complete__value-container')
      .type(subject + '{enter}')

    cy.contains('.custom-control-label', hobby)
      .click({ force: true })

    cy.get('#currentAddress')
      .type(address)

    cy.contains('Select State')
      .type('{downArrow}{enter}')

    cy.contains('Select City')
      .type('{downArrow}{enter}')

    cy.get('#submit')
      .click()

    cy.contains('tr', 'Student Name')
      .should('contain', firstName)
      .and('contain', lastName)

    cy.contains('tr', 'Student Email')
      .should('contain', email)

    cy.contains('tr', 'Gender')
      .should('contain', gender)

    cy.contains('tr', 'Mobile')
      .should('contain', phoneNumber)

    cy.contains('tr', 'Date of Birth')
      .should('contain', '14 April,1994')
    
    cy.contains('tr', 'Subjects')
      .should('contain', subject)

    cy.contains('tr', 'Hobbies')
      .should('contain', hobby)

    cy.contains('tr', 'Address')
      .should('contain', address)

    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow')
  });
});
