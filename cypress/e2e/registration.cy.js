/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('/automation-practice-form');
  });

  it('testing registration page', () => {
    const
      {
        firstName, lastName, emailAddress,
        gender, mobilePhone, birthDate, subjects,
        currentAddress
      } = generateUser();
    cy.get('h1')
      .should('contain.text', 'Practice Form');
    cy.get('[placeholder="First Name"]')
      .type(firstName);
    cy.get('[placeholder="Last Name"]')
      .type(lastName);
    cy.get('[placeholder="name@example.com"]')
      .type(emailAddress);
    cy.contains('.custom-control-label', gender)
      .click();
    cy.get('[placeholder="Mobile Number"]')
      .type(mobilePhone);
    cy.get('[class="subjects-auto-complete__input"]')
      .type(subjects + '{enter}');
    cy.get('#dateOfBirthInput')
      .type(`{selectall}${birthDate}{enter}`);
    cy.contains('.custom-control-label', 'Sports')
      .click();
    cy.get('[placeholder="Current Address"]')
      .type(currentAddress);
    cy.get('.css-1wa3eu0-placeholder').contains('Select State')
      .type('NCR' + '{enter}');
    cy.get('.css-1wa3eu0-placeholder').contains('Select City')
      .type('Noida' + '{enter}');
    cy.get('[type="submit"]')
      .click();

    cy.contains('td', firstName)
      .should('contain.text', firstName);
    cy.contains('td', emailAddress)
      .should('contain.text', emailAddress);
    cy.get(`input[name="gender"][value=${gender}]`)
      .should('be.checked');
    cy.contains('td', mobilePhone)
      .should('contain.text', mobilePhone);
    cy.get('#dateOfBirthInput')
      .should('have.value', birthDate);
    cy.contains('td', subjects)
      .should('contain.text', subjects);
    cy.get(`input[type="checkbox"][value=1]`)
      .should('be.checked');
    cy.contains('td', currentAddress)
      .should('contain.text', currentAddress);
    cy.contains('tr', 'State and City')
      .should('contain.text', 'NCR Noida');
  });
});
