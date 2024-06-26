/// <reference types='cypress' />
import { generateData } from '../support/generateData.js';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('');
  });

  it('fills all required fields', () => {
    const {
      name,
      lastName,
      email,
      genders,
      mobileNumber,
      randomDate,
      hobbies,
      address,
      randomIndex
    } = generateData();

    cy.get('h1')
      .should('contain.text', 'Practice Form');

    cy.get('#firstName')
      .type(name);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.get(`label[for="${genders[randomIndex]}"]`)
      .click();

    cy.get('#userNumber')
      .type(mobileNumber);

    cy.get('#dateOfBirthInput')
      .type('{selectall}' + randomDate);

    cy.get('body').click('topRight');

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ph{enter}');

    cy.get(`label[for="${hobbies[randomIndex]}"]`)
      .click();

    cy.get('#currentAddress')
      .type(address);

    cy.get('#state')
      .type('{downArrow}{enter}');

    cy.get('#city')
      .type('{downArrow}{enter}');

    cy.get('#submit')
      .click();

    cy.get('#closeLargeModal')
      .click();
  });
});
