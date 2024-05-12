/// <reference types='cypress' />

const registerNewUser = require('../support/generateNewUser');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('Should fill in all fields and submit the form', () => {
    const {
      firstName,
      lastName,
      email,
      gender,
      mobile,
      dateOfBirth,
      subjects,
      hobbie,
      address,
      state,
      city
    } = registerNewUser();

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.contains('.custom-control', gender).click();

    cy.get('#userNumber').type(mobile);

    cy.get('#dateOfBirthInput').type(`{selectAll}${dateOfBirth}{enter}`);

    cy.get('#subjectsContainer').type(subjects + '{enter}');

    cy.contains('.custom-control', hobbie).click();

    cy.get('#currentAddress').type(address);

    cy.get('#state').type(`${state}{enter}`);

    cy.get('#city').type(`${city}{enter}`);

    cy.get('#submit').click();

    cy.get('.modal-header')
      .should('contain.text', 'Thanks for submitting the form');

    cy.get('tbody').should('contain.text', `${firstName} ${lastName}`);

    cy.get('tbody').should('contain.text', email);

    cy.get('tbody').should('contain.text', mobile);

    cy.get('tbody').should('contain.text', gender);

    cy.get('tbody').should('contain.text', dateOfBirth);

    cy.get('tbody').should('contain.text', subjects);

    cy.get('tbody').should('contain.text', hobbie);

    cy.get('tbody').should('contain.text', address);

    cy.get('tbody').should('contain.text', `${state} ${city}`);
  });
});
