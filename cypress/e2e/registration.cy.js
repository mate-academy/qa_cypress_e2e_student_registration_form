/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });

  });
  it('should allow to register new user', () => {
    cy.viewport(550, 750);
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByType('radio').check(user.gender, { force: true });
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}'+ user.birthDate +'{enter}');
    cy.get('.subjects-auto-complete__value-container').type('ma{enter} ch{enter} his{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.adress);
    cy.get('#state').type('ut{enter}');
    cy.get('#city').type('me{enter}');
    cy.get('#submit').click();
    cy.assertMessage(1, user.firstName + ' ' +user.lastName);
    cy.assertMessage(2, user.email);
    cy.assertMessage(3, user.gender);
    cy.assertMessage(4, user.mobileNumber);
    cy.assertMessage(7, user.hobby);
    cy.assertMessage(9, user.adress);
  });
});