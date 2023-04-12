/// <reference types='cypress' />

const { generateUser } = require("../support/generate");
const { randomGender } = require("../support/gender");
const { randomHobby } = require("../support/hobby");
const { randomState } = require("../support/state");

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

it('should be valid page', () => {
    cy.url().should('equal', 'https://demoqa.com/automation-practice-form/');
    cy.get('h5').contains('Student Registration Form');
 });

it('should have First Name field', () => {
  cy.findByPlaceholder('First Name').should('exist').should('have.attr', 'required');
});

it('should have Last Name field', () => {
  cy.findByPlaceholder('Last Name').should('exist').should('have.attr', 'required');
});

it('should have Email field', () => {
  cy.findByPlaceholder('name@example.com').should('exist');
});

it('should have Mobile Number field', () => {
  cy.findByPlaceholder('Mobile Number').should('exist').should('have.attr', 'required');
});

it('should have Subject field', () => {
  cy.get('.subjects-auto-complete__value-container').should('exist');
});

it('should have Current Address field', () => {
  cy.findByPlaceholder('Current Address').should('exist');
});

it('should have Date picker', () => {
  cy.get('#dateOfBirthInput').should('exist');
});

it('should have Male radio button', () => {
  cy.get('#gender-radio-1').should('exist').should('have.attr', 'required');
});

it('should have Female radio button', () => {
  cy.get('#gender-radio-2').should('exist').should('have.attr', 'required');
});

it('should have Other radio button', () => {
  cy.get('#gender-radio-3').should('exist').should('have.attr', 'required');
});

it('should have Sports checkbox', () => {
  cy.get('#hobbies-checkbox-1').should('exist');
});

it('should have Reading checkbox', () => {
  cy.get('#hobbies-checkbox-2').should('exist');
});

it('should have Music checkbox', () => {
  cy.get('#hobbies-checkbox-3').should('exist');
});

it('should have State dropdown', () => {
  cy.get('#state').should('exist');
});

it('should have City dropdown', () => {
  cy.get('#city').should('exist');
});

  it('should allow to register a new student', () => {
    cy.viewport(800, 900)
    const {firstname, lastname, email, phone, birthDate, address} = generateUser()
    let gender = randomGender()
    let hobby = randomHobby()

    cy.findByPlaceholder('First Name')
    .type(firstname)

    cy.findByPlaceholder('Last Name')
    .type(lastname)

    cy.findByPlaceholder('name@example.com')
    .type(email)

    cy.findByType('radio').check(gender, {force:true})

    cy.findByPlaceholder('Mobile Number')
    .type(phone)

    cy.get('#dateOfBirthInput').type('{selectAll}10 Aug 1998{enter}');

    cy.get('.subjects-auto-complete__value-container').type('e{enter} a{enter}')

    cy.contains('.custom-control-label', hobby).click()

    cy.findByPlaceholder('Current Address')
    .type(address)

    cy.contains('Select State').type('Haryana{enter}');

    cy.contains('Select City').click({force:true}).type('Karnal{enter}');

    cy.focused().type('{enter}')

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    
    cy.get('.modal-body')
         .should('contain', `${firstname} ${lastname}`)
         .should('contain', email)
         .should('contain', gender)
         .should('contain', phone)
         .should('contain', '10 August,1998')
         .should('contain', hobby)
         .should('contain', address)
         .should('contain', 'Haryana Karnal')
  });
});
