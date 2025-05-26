/// <reference types='cypress' />
const { generateUserData } = require('../support/generateUserData');

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    user = generateUserData();
    cy.visit('/');
  });

  it('should fill and submit the full user form', () => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.findByPlaceholder('First Name').should('have.value', user.firstName);
    cy.findByPlaceholder('Last Name').should('have.value', user.lastName);

    cy.findByPlaceholder('name@example.com').type(user.email);
    cy.findByPlaceholder('name@example.com').should('have.value', user.email);

    cy.contains('label', user.gender).click();
    cy.get(`input[name="gender"][value="${user.gender}"]`).should('be.checked');

    cy.findByPlaceholder('Mobile Number').type(user.mobile);
    cy.findByPlaceholder('Mobile Number').should('have.value', user.mobile);

    cy.get('#dateOfBirthInput').type('{selectall}' + user.dateOfBirth +
      '{enter}');

    cy.get('#subjectsInput').type(user.subject);
    cy.get('.subjects-auto-complete__menu').contains(user.subject)
      .click();
    cy.get('.subjects-auto-complete__multi-value__label')
      .should('contain.text', user.subject);

    const hobbyIndex = {
      Sports: '1',
      Reading: '2',
      Music: '3'
    };
    cy.contains('label', user.hobby).click();
    cy.get(`#hobbies-checkbox-${hobbyIndex[user.hobby]}`).should('be.checked');

    cy.get('#currentAddress').should('be.visible')
      .type('123 Main Street, Springfield, USA');

    cy.get('#state').click();
    cy.get('.css-26l3qy-menu').contains(user.state).click();
    cy.get('#city').click();
    cy.get('.css-26l3qy-menu').contains(user.city).click();
    cy.get('#state').should('contain.text', user.state);
    cy.get('#city').should('contain.text', user.city);

    cy.get('#submit').click();
    cy.contains('Thanks for submitting the form').should('be.visible');
  });
});
