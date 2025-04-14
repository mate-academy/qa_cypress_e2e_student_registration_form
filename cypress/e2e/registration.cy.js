/// <reference types='cypress' />

const { createRandomUser } = require('../../Userdata');

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should allow to register a new user', () => {
    const newUser = createRandomUser();
    cy.get('#firstName').type(newUser.firstName);
    cy.get('#lastName').type(newUser.lastName);
    cy.get('#userEmail').type(newUser.email);
    cy.contains('.custom-radio', newUser.gender).click();
    cy.get('#userNumber').type(newUser.phone);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}' + newUser.birth + '{enter}');
    cy.get('#subjectsContainer ').type('ma{enter}');
    cy.contains('.custom-checkbox', newUser.hobbies).click();
    cy.get('#currentAddress').type(newUser.address);
    cy.get('#state').type('N{enter}');
    cy.get('#react-select-4-input').should('be.enabled');
    cy.get('.css-1wa3eu0-placeholder').type(newUser.city + '{enter}');
    cy.get('#submit').click();

    // Assertions
    cy.get('.table').should('contain.text', `${newUser.firstName} ${newUser.lastName}`);
    cy.get('.table').should('contain.text', newUser.email);
    cy.get('.table').should('contain.text', newUser.gender);
    cy.get('.table').should('contain.text', newUser.phone);
    cy.get('.table').should('contain.text', 'Maths');
    cy.get('.table').should('contain.text', newUser.hobbies);
    cy.get('.table').should('contain.text', newUser.address);
    cy.get('.table').should('contain.text', `${newUser.state} ${newUser.city}`);
  });
});
