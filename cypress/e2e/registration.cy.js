/// <reference types='cypress' />
const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1540, 1280)
    cy.visit('/')
  });

  it('Should fill all fields in the forms ', () => {
    const { email, password, username } = generateUser();

    cy.get('#firstName')
      .type(username);
    cy.get('#lastName')
      .type('Shevchenko');
    cy.get('#userEmail')
      .type(email);

    cy.get('[for="gender-radio-2"]').click()

    cy.get('#userNumber')
      .type('5554556')

    cy.get('#dateOfBirthInput')
      .type('{selectAll}')
      .type('12 Feb 1990')

    cy.get('#subjectsContainer > div')
      .type('Maths')
    cy.get('#react-select-2-option-0')
      .click()
    cy.get('#subjectsContainer > div')
      .type('Ph')
    cy.get('#react-select-2-option-0')
      .click()
    cy.get('#subjectsContainer > div')
      .type('Ec')
    cy.get('#react-select-2-option-0')
      .click()

    cy.get('[for="hobbies-checkbox-1"]')
      .click()
    cy.get('[for="hobbies-checkbox-2"]')
      .click()
    cy.get('[for="hobbies-checkbox-3"]')
      .click()

    cy.get('#currentAddress')
      .type('Ukraine, Kyiv')

    cy.get('#state > div > div.css-1hwfws3')
      .click()
    cy.get('#react-select-3-option-2')
      .click()

    cy.get('#city > div > div.css-1wy0on6 > div')
      .click()
    cy.get('[id="react-select-4-option-1"]')
      .click()

    cy.get('#submit')
      .click()
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form')

  });
});
