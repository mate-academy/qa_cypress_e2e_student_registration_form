/// <reference types="cypress" />


describe('Login with invalid creadentials', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should not log in user with wrong username', () => {

    cy.loginUser('XtomsmithX', user.password)

    cy.get('#flash').
      should('contain.text', 'Your username is invalid!');
  });

  it('Should not log in user with wrong password', () => {
    
    cy.loginUser(user.username, '123SuperSecretPassword!');

    cy.get('#flash').
      should('contain.text', 'Your password is invalid!');
  });
});