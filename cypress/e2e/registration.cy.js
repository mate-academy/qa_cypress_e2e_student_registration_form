/// <reference types='cypress' />

const faker = require('faker');
const randomName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomPhoneNumber =
faker.datatype.number({ min: 1000000000, max: 9999999999 }).toString();
const randomAddress = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`;
const randomEmail = `user_${Math.floor(Math.random() * 1000000)}@mail.com`;

describe('Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Student is able to register by filling in all required fields', () => {
    cy.get('#firstName').type(randomName);
    cy.get('#lastName').type(randomLastName);
    cy.get('#userEmail').type(randomEmail);

    cy.get('#genterWrapper > .col-md-9 > :nth-child(2)').click();
    cy.get('#userNumber').type(randomPhoneNumber);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('August');
    cy.get('.react-datepicker__year-select').select('1999');
    cy.get('.react-datepicker__day--021').click();

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();
    cy.get('#currentAddress').type(randomAddress);

    cy.get('.css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer')
      .click({ force: true });
    cy.get('#react-select-3-option-0').click({ force: true });
    cy.get('#city>.css-yk16xz-control>.css-1wy0on6>.css-tlfecz-indicatorContainer')
      .click({ force: true });
    cy.get('#react-select-4-option-0').click({ force: true });

    cy.get('#submit').click({ force: true });

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', randomName, randomLastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', randomEmail);
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', 'Female');
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', randomPhoneNumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', '21 August,1999');
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', 'Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', randomAddress);
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'NCR Delhi');
  });
});
