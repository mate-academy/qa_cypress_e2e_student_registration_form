/// <reference types='cypress' />
import { faker } from '@faker-js/faker';

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(1200, 1200)
    cy.visit('https://demoqa.com/automation-practice-form')
  });
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email(firstName, lastName);
  const phoneNumber = Math.random().toString().slice(2, 12)

  it('Should check the registration flow by filling all the fields', () => {

    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-3').click({ force: true });
    cy.get('#userNumber').type(`${phoneNumber}`);
    cy.get('#dateOfBirthInput').type('{selectAll}' + '17 Feb 1995').click();
    cy.get('.subjects-auto-complete__value-container').click({ force: true }).type('e' + '{enter}');
    cy.get('#hobbies-checkbox-1').click({ force: true });
    cy.get('#hobbies-checkbox-3').click({ force: true });
    cy.get('#currentAddress').type('1750 Finch Avenue');
    cy.get('#state').click({ force: true }).type('u' + '{enter}');
    cy.get('#city').click({ force: true }).type('a' + '{enter}');
    cy.get('#submit').click();
    cy.get('.modal-header').should('exist');
    cy.get('.modal-header').should('contain', 'Thanks for submitting the form');
    cy.get('.modal-body').should('exist');
    cy.get('.modal-body').should('contain', `${firstName}`);
    cy.get('.modal-body').should('contain', `${lastName}`);
    cy.get('.modal-body').should('contain', `${email}`);
    cy.get('.modal-body').should('contain', 'Other');
    cy.get('.modal-body').should('contain', `${phoneNumber}`);
    cy.get('.modal-body').should('contain', '17 February,1995');
    cy.get('.modal-body').should('contain', 'English');
    cy.get('.modal-body').should('contain', 'Sports').and('contain', 'Music');
    cy.get('.modal-body').should('contain', '1750 Finch Avenue');
    cy.get('.modal-body').should('contain', 'Uttar Pradesh' + ' Agra');
    cy.get('#closeLargeModal').should('exist')
    cy.get('#closeLargeModal').should('contain', 'Close')
  });
});

