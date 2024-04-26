/// <reference types='cypress' />

const { generateData } = require('../support/generateData');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
  });

  it('should return a modal window with confirmation of inputted data', () => {
    const {
      firstName,
      lastName,
      email,
      randomNumber,
      mobileNumber,
      dateOfBirth,
      adress
    } = generateData();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get(`#genterWrapper > .col-md-9 > :nth-child(${randomNumber}) > .custom-control-label`)
      .click();

    cy.get('#userNumber').type(mobileNumber);

    cy.get('#dateOfBirthInput').type('{selectAll}' + dateOfBirth + '{enter}');

    cy.get('.subjects-auto-complete__value-container')
      .type('ec{enter} eng{enter}');

    cy.get(`#hobbiesWrapper > .col-md-9 > :nth-child(${randomNumber}) > .custom-control-label`)
      .click();

    cy.get('#currentAddress').type(adress);

    cy.get(`#state > .css-yk16xz-control > .css-1wy0on6 >` +
      ` .css-tlfecz-indicatorContainer`).type('n{enter}');

    cy.get(`#city > .css-yk16xz-control > .css-1wy0on6 >` +
      ` .css-tlfecz-indicatorContainer`).type('d{enter}');

    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', `${firstName} ${lastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', email);

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', mobileNumber);

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'Economics, English');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', adress);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain.text', 'NCR Delhi');
  });
});
