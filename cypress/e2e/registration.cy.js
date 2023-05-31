/// <reference types='cypress' />

import { generateStudent } from '../support/generateStudent';

describe('Student Registration page', () => {
  const { firstName, lastName, email, mobile, address } = generateStudent();

  before(() => {
    cy.visit('/');
  });

  it('should be possible to register a new student', () => {
    cy.get('#firstName')
      .type(firstName);

    cy.get('#lastName')
      .type(lastName);

    cy.get('#userEmail')
      .type(email);

    cy.contains('label', 'Other')
      .click();

    cy.get('#userNumber')
      .type(mobile);

    cy.get('#dateOfBirthInput')
      .type(`{selectall} 10.01.2001 {enter}`)

    cy.get('.subjects-auto-complete__value-container')
      .type('Computer{enter} Math{enter}')

    cy.get('#hobbies-checkbox-2')
      .click({force: true});

    cy.get('#hobbies-checkbox-3')
      .click({force: true});

    cy.get('#currentAddress')
      .type(address);

    cy.get('#state > .css-yk16xz-control > .css-1hwfws3')
      .type('Utt{enter}');

    cy.get('#city > .css-yk16xz-control > .css-1hwfws3')
      .type('Luc{enter}{enter}');
  });

  it('should contain correct data after form submit', function() {
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', `${firstName} ${lastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', email);

    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', 'Other')

    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', mobile);

    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '01 October,2001');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'Computer Science, Math');

    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain.text', 'Reading, Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', address);

    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain.text', 'Uttar Pradesh Lucknow');
  });
});
