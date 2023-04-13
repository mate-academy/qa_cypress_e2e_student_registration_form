/// <reference types='cypress' />

describe('Student Registration page', () => {

  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then( generatedUser => {
      user = generatedUser;
    });
  });

  it('should allow to register a new user', () => {
    cy.viewport(550, 750);
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}'+user.birthDate+'{enter}');
    cy.get('.subjects-auto-complete__value-container').type('en{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.adress);
    cy.get('#state').type('ra{enter}');
    cy.get('#city').type('lu{enter}');
    cy.get('#submit').click();
    cy.contains('#example-modal-sizes-title-lg', 'Thanks for submitting the form').should('exist');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', `${user.firstName} ${user.lastName}`);
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', user.gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', user.mobileNumber);
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', user.hobby);
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', user.adress);
  });
});
