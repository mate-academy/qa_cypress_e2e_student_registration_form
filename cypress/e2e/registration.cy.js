/// <reference types='cypress' />

const { generateUser } = require("../support/generate");
const { randomGender } = require("../support/gender");
const { randomHobby } = require("../support/hobby");
const { randomState } = require("../support/state");

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/')
  });

  it('should allow to register a new student', () => {
    cy.viewport(800, 900)
    const {firstname, lastname, email, phone, birthDate, address} = generateUser()
    let gender = randomGender()
    let hobby = randomHobby()
    let state = randomState()

    cy.findByPlaceholder('First Name')
    .type(firstname)

    cy.findByPlaceholder('Last Name')
    .type(lastname)

    cy.findByPlaceholder('name@example.com')
    .type(email)

    cy.findByType('radio').check(gender, {force:true})

    cy.findByPlaceholder('Mobile Number')
    .type(phone)

    cy.get('#dateOfBirthInput').type(birthDate+'{enter}')

    cy.get('.subjects-auto-complete__value-container').type('e{enter} a{enter}')

    cy.contains('.custom-control-label', hobby).click()

    cy.findByPlaceholder('Current Address')
    .type(address)

    cy.contains('Select State').click({force:true})
    cy.contains(state).click()

    cy.contains('Select City').click({force:true}).type('a{enter}')
    cy.contains('Select City').click({force:true}).type('{enter}')
    
    
  });
});
