/// <reference types='cypress' />
const  { generateRandomString, 
         generateRandomEmail,
         generateRandomPhoneNumber,
         generateRandomAddress,
         getRandomGender,
         getRandomHobby 
        } = require('../support/generate');

describe('Student Registration page', () => {
  let student;
  const birthDate = '28 February,1982';

  before(() => {
    student = {
      firstName: generateRandomString(),
      lastName: generateRandomString(),
      email: generateRandomEmail(),
      mobileNumber: generateRandomPhoneNumber(),
      address: generateRandomAddress(),
      gender: getRandomGender(),
      hobby: getRandomHobby()
    };

    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide an ability to register new student', () => {
    cy.get('#firstName')
      .type(student.firstName);
    cy.get('#lastName')
      .type(student.lastName);
    cy.get('#userEmail')
      .type(student.email);
    cy.contains('.custom-control-label', student.gender)
      .click();
    cy.get('#userNumber')
      .type(student.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + birthDate + '{enter}');
    cy.get('#subjectsContainer')
      .type('E{enter}');
    cy.contains('.custom-control-label', student.hobby)
      .click();
    cy.get('#currentAddress')
      .type(student.address);
    cy.get('#state')
      .type('{enter}');
    cy.get('#city')
      .type('{enter}');
    cy.get('#submit')
      .click();

    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form')
      .should('be.visible');
    cy.get('.table-responsive')
      .should('be.visible');
    cy.contains('.modal-body', student.firstName + ' ' + student.lastName)
      .should('be.visible');
    cy.contains('.modal-body', student.email)
      .should('be.visible');
    cy.contains('.modal-body', student.gender)
      .should('be.visible');
    cy.contains('.modal-body', student.mobileNumber)
      .should('be.visible');
    cy.contains('.modal-body', birthDate)
      .should('be.visible');
    cy.contains('.modal-body', 'English')
      .should('be.visible');
    cy.contains('.modal-body', student.hobby)
      .should('be.visible');
    cy.contains('.modal-body', student.address)
      .should('be.visible');
    cy.contains('.modal-body', 'NCR' + ' ' + 'Delhi')
      .should('exist');
  });
});
