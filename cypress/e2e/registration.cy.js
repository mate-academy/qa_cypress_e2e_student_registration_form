/// <reference types='cypress' />
import { generateUser } from '../support/generate';
describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });
  const { email, firstName, lastName, address } = generateUser();
  it('should enter vaild data to register', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#firstName').type(firstName);

    cy.get('#lastName').type(lastName);

    cy.get('#userEmail').type(email);

    cy
      .get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
      .click();

    cy.get('#userNumber').type(1234567891);

    cy.get('.subjects-auto-complete__value-container').type('Eng');

    cy.get('#react-select-2-option-0').click();

    cy.get('#state').click();

    cy.get('#react-select-3-option-0').click();

    cy.get('#city').click();

    cy.get('#react-select-4-option-0').click();

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click();

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2)').click();

    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3)').click();

    cy.get('#currentAddress').type(address);

    cy.get('#submit').click();

    cy
      .get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', `${firstName} ${lastName}`);

    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', email);

    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Male');

    cy
      .get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', '1234567891');

    cy
      .get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', '09 October,2024');

    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain', 'English');

    cy
      .get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', 'Sports, Reading, Music');

    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', address);

    cy
      .get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'NCR Delhi');
  });
});
