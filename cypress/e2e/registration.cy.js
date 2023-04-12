/// <reference types='cypress' />

// const { generateUser } = require("../support/generate");

// describe('Student Registration page', () => {
//     before(() => {
//      cy.visit('/');
//     //  cy.task('generate user').then(generateUser => {
//     //   user = generateUser;
//     const {email, firstName, lastName} = generateUser()
//      });
//     });

//   it('should allow to register a new student', () => {
//   cy.findByPlaceholder('First Name').type(user.firstName);
//   cy.findByPlaceholder('Last Name').type(user.lastName);
//   it('should allow to register', () => {
//   cy.get('#userEmail').type(user.email);
//   });
// });
const { Faker } = require('@faker-js/faker');
describe('Student Registration page', () => {
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    gender: 'Male',
    mobileNumber: '5551234567',
    birthDate: '01 January,1990',
    subjects: ['Math', 'Science'],
    hobbies: ['Reading', 'Sports'],
    address: '123 Main St, Anytown, USA',
    state: 'NCR',
    city: 'Delhi'
  }

  it('should register a new student', () => {
    cy.visit('/')
    cy.get('#firstName').type(userData.firstName);
    cy.get('#lastName').type(userData.lastName);
    cy.get('#userEmail').type(userData.email);
    cy.get('#gender-radio-1').siblings('label').click();
    cy.get('#userNumber').type(userData.mobileNumber)
    cy.get('#dateOfBirthInput').click()
    cy.get('#dateOfBirthInput').type('{selectAll}01 Jan 1990{enter}');
      
    cy.get('.subjects-auto-complete__value-container').type('m{enter} sci{enter}');

    cy.findByType('checkbox').check('1', { force: true });
    cy.findByType('checkbox').check('3', { force: true });

    cy.get('#currentAddress').type(userData.address);
    cy.get('#state').click().type('NCR{enter}');
    cy.get('#city').click().type('Delhi{enter}');
    cy.focused().type('{enter}');

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-body')
    cy.get('.modal-body')
    .should('contain', 'John', 'Doe')
    .should('contain', 'johndoe@example.com')
    .should('contain', 'Male')
    .should('contain', '5551234567')
    .should('contain', '01 January,1990')
    .should('contain', 'Maths')
    .should('contain', 'Science')
    .should('contain', '123 Main St, Anytown, USA')
    .should('contain', 'NCR Delhi')
})
})