/* eslint-disable cypress/no-force */
/// <reference types='cypress' />
const {
  generateUser
} = require('../support/generate');

describe('Student Registration page', () => {
  it('should allow to submit form after filling required', () => {
    const {
      mobileNumber,
      firstName,
      lastName,
      email,
      birthDate
    } = generateUser();

    cy.visit('/');

    cy.findByPlaceholder('First Name')
      .type(firstName);

    cy.findByPlaceholder('First Name')
      .should('have.value', firstName);

    cy.findByPlaceholder('Last Name')
      .type(lastName);

    cy.findByPlaceholder('Last Name')
      .should('have.value', lastName);

    cy.findByPlaceholder('name@example.com')
      .type(email);

    cy.findByPlaceholder('name@example.com')
      .should('have.value', email);

    cy.get('[for="gender-radio-3"]')
      .click();

    cy.get('[id="gender-radio-3"]')
      .should('be.checked');

    cy.findByPlaceholder('Mobile Number')
      .type(mobileNumber);

    cy.findByPlaceholder('Mobile Number')
      .should('have.value', mobileNumber);

    cy.get('[id="dateOfBirthInput"]')
      .click();

    cy.get('[class="react-datepicker__year-select"]')
      .select(birthDate.year);

    cy.get('[class="react-datepicker__month-select"]')
      .select(birthDate.month);

    cy.get(`.react-datepicker__day--0${birthDate.day}`)
      .not('.react-datepicker__day--outside-month')
      .click();

    cy.get('[id="dateOfBirthInput"]')
      .should('have.value', `${birthDate.day} ${(birthDate.month).slice(0, 3)} ${birthDate.year}`);

    cy.get('#subjectsContainer input')
      .type('History{enter}');

    cy.get('#subjectsContainer .subjects-auto-complete__multi-value__label')
      .should('have.text', 'History');

    cy.get('[id="hobbies-checkbox-1"]')
      .click({
        force: true
      });

    cy.get('[id="hobbies-checkbox-1"]')
      .should('be.checked');

    cy.get('#currentAddress')
      .type('Wiskitki 48', {
        force: true
      });

    cy.get('#currentAddress')
      .should('have.value', 'Wiskitki 48');

    cy.get('[class=" css-yk16xz-control"]').click();

    cy.contains('div', 'Haryana').click();

    cy.get('[id="state"]')
      .should('contain.text', 'Haryana');

    cy.get('#city').click();

    cy.contains('div', 'Karnal').click();

    cy.get('#city').should('contain.text', 'Karnal');

    cy.get('#uploadPicture').should('have.value', '');

    cy.get('[class="btn btn-primary"]')
      .click({
        force: true
      });
  });
});
