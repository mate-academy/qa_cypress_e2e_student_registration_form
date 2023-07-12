/// <reference types='cypress' />

import {recurse} from "cypress-recurse";

describe('Student Registration page', () => {
  const firstName = 'Alf';
  const lastName = 'Shumway';
  const email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@mail.com'
  const tel = '123456789';
  const date = '15 Jan 1990';
  const date2 = '15 January,1990';

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should fill out the form', () => {
    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy.get('input[name="gender"]').check('Male', {force: true} );

    cy.get('#userNumber').type(tel);

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('January');
    cy.get('.react-datepicker__year-select').select('1990');
    cy.contains('.react-datepicker__day', '15')
        .not('.react-datepicker__day--outside-month')
        .click();
    cy.get('#dateOfBirthInput')
        .invoke('val')
        .should('eq', date);

    cy.get('#subjectsInput').click();

    cy.get('#subjectsInput').type('Computer S');

    cy.get('#subjectsInput').type('{downarrow}{downarrow}').type('{enter}');

    cy.get('.subjects-auto-complete__multi-value__label')
        .should('contain.text', 'Computer Science');

    cy.get('label[for="hobbies-checkbox-1"]').click();

    cy.get('#currentAddress').type('4370 Cambridge Place');

    cy.get('#state').click();
    cy.get('#state').type('NCR').type('{downarrow}');
    cy.get('#react-select-3-option-0').click();

    cy.get('#city').click();
    cy.get('#city').type('Delhi').type('{downarrow}');
    cy.get('#react-select-4-option-0').click();

    cy.get('#submit').click();

    cy.get('tbody').find('tr')
        .eq(0).should('contain', 'Alf Shumway')
        .next().should('contain', email)
        .next().should('contain', 'Male')
        .next().should('contain', tel)
        .next().should('contain', date2)
        .next().should('contain', 'Computer Science')
        .next().should('contain', 'Sports')
        .next()
        .next().should('contain', '4370 Cambridge Place')
        .next().should('contain', 'NCR Delhi');

    cy.get('#closeLargeModal').click();
  });
});
