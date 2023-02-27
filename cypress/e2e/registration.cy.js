/// <reference types='cypress' />

const faker = require('@faker-js/faker');
const { generateUser } = require('./generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });

  it('should provide an ability to sign up', () => {
    const { firstName, lastName, email, gender, mobile, currentAddress} = generateUser();
    console.log(gender);
    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    if(gender === 'male') {
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1)')
        .click();
    } else {
      cy.get('#genterWrapper > .col-md-9 > :nth-child(2)')
        .click();
    };

    cy.get('#userNumber')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .click();

    cy.get('.react-datepicker__day--022')
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .click()
      .type('Arts{enter}');
      

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)')
      .click();
    
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)')
      .click();

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)')
      .click();

    cy.get('#currentAddress')
      .type(currentAddress);

    cy.get('#state > .css-yk16xz-control')
      .click();
     
    cy.get('#react-select-3-option-3')
      .click({force: true});

    cy.get('#city > .css-yk16xz-control')
      .click();

    cy.get('#react-select-4-option-1')
      .click({force: true});
    
    cy.get('#submit')
      .click({force: true});

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

  });
});
