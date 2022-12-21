/// <reference types='cypress' />
const { generateUser } = require('../support/generate');
const { firstName, lastName, email, mobile } = generateUser();

describe('Student Registration page', () => {
  before(() => {
    cy.viewport(700, 760);
    cy.visit('automation-practice-form');
  });

  it('shoud register the new User', () => {
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#userEmail').type(email);
    cy.get('#gender-radio-2').click({force: true});
    cy.get('#userNumber').type(mobile);
    cy.get('#dateOfBirthInput').type('{selectAll}' + '30 Dec 1993')
      .click();
    cy.get('.subjects-auto-complete__value-container').click({force: true})
      .type('m' + '{enter}');
    cy.get('#hobbies-checkbox-1').click({force: true});
    cy.get('#currentAddress').click({force: true})
      .type('Adress');
    cy.get('#state').click({force: true})
      .type('n' + '{enter}');
    cy.get('#city').click({force: true})
      .type('d' + '{enter}');
    cy.contains('#submit', 'Submit')
      .click({force: true});
    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form');
    cy.get('td').should('contain', `${firstName} ${lastName}`);
    cy.get('td').should('contain', `${email}`);
    cy.get('td').should('contain', `Female`);
    cy.get('td').should('contain', `${mobile}`);
    cy.get('td').should('contain', '30 December,1993');
    cy.get('td').should('contain', 'Math');
    cy.get('td').should('contain', 'Sports');
    cy.get('td').should('contain', 'Adress');
    cy.get('td').should('contain', 'NCR Delhi');
    
  });
});
