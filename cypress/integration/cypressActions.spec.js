/// <reference types='cypress' />

const { generateUser } = require("../support/generate");

describe('QA_DEC21', () => {
  it('Validation of data in the fields', () => {
    const user = generateUser();
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.findByPlaceholder('First Name')
      .type(user.username);
    cy.findByPlaceholder('Last Name')
      .type(user.lastname);
    cy.findByPlaceholder('name@example.com')
      .type(user.email);
    cy.get('[for="gender-radio-1"]')
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.numberPhone);
    cy.get('#dateOfBirthInput')
      .type('{selectall}')
      .type('03 Apr 2012{enter}');
    cy.get('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
      .type('mat{enter}', { delay: 1000 });
    cy.get('[for="hobbies-checkbox-1"]')
      .click();
    cy.findByPlaceholder('Current Address')
      .type('Test 12/24');
    cy.get('#state > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-19bqh2r')
      .type('{enter}');
    cy.get('.css-1wa3eu0-placeholder')
      .type('{enter}');
    cy.get('#submit')
      .click();
    cy.contains('tr', 'Student Name').should('contain', user.username, user.lastname);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', 'Male');
    cy.contains('tr', 'Mobile').should('contain', user.numberPhone);
    cy.contains('tr', 'Date of Birth').should('contain', '03 April,2012');
    cy.contains('tr', 'Subjects').should('contain', 'Maths');
    cy.contains('tr', 'Hobbies').should('contain', 'Sports');
    cy.contains('tr', 'Address').should('contain', 'Test 12/24');
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');

  });
});
