/// <reference types='cypress' />

import generateUser from '../support/generateUser';

describe('Student Registration page', () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    year,
    month,
    subject,
    address
  } = generateUser();

  before(() => {
    cy.visit('/');
  });

  it('assert inputed data in modal window', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-1').click();
    cy.get('#userNumber').type(phone);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__day--021').click();
    cy.get('#subjectsInput').type(subject);
    cy.get('#subjectsInput').type('{enter}');
    cy.get('#hobbies-checkbox-2').click();
    cy.get('#hobbies-checkbox-3').click();
    cy.get('#currentAddress').type(address);
    cy.get('#state').click();
    cy.get('#react-select-3-option-1').click();
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
    cy.get('#submit').click();

    cy.get('.modal').should('be.visible');

    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', `${firstName} ${lastName}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', 'Male');
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', phone);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', `21 ${month},${year}`);
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain', subject);
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', 'Reading, Music');
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'Uttar Pradesh Agra');
  });
});
