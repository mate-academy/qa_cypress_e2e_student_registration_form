/// <reference types='cypress' />

describe('Student Registration page', () => {

  let user; 

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('should be able to registrate a new user', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    cy.get('#userNumber').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}'+user.birthDate+'{enter}');
    cy.get('.subjects-auto-complete__value-container').type('d{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.adress);
    cy.get('#state').type('a{enter}');
    cy.get('#city').type('a{enter}');
    cy.get('#submit').click();
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');

  });
});
