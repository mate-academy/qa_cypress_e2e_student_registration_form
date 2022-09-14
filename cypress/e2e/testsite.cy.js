/// <reference types='cypress' />

const { generateUser } = require('../support/generate');

describe('Name of the group', () => {
  before(() => {
    cy.visit('/')
  });

  it('sign up', () => {
    const user = generateUser();
    cy.viewport(1400, 1000);
    
    cy.get('#signin2').click();
    cy.wait(500);
    cy.get('#sign-username', {timeout: 10000}).type(user.username);
    cy.get('#sign-password').type(user.password);
    cy.contains('.btn.btn-secondary, .btn.btn-primary', 'Sign up').click();
    //cy.get('#nameofuser').should('contain.text', user.username);
    //cy.contains('#nameofuser', 'user.username').should('be.visible');
    
    cy.wait(500);
    
    it('alert', () => {
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Sign up successful.`)
      });
    });

    cy.get('#login2').click();
    cy.wait(500);
    cy.get('#loginusername', {timeout: 10000}).type(user.username);
    cy.get('#loginpassword').type(user.password);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    //cy.contains('#nameofuser', 'Welcome quzehuhiju').should('contain', user.username);
    cy.contains('#nameofuser', user.username).should('be.visible');

    cy.wait(500);
    cy.contains('.hrefch', 'Samsung galaxy s6', {timeout: 1000}).click();

    cy.wait(500);
    cy.get('.btn.btn-success.btn-lg', {timeout: 1000}).click();
    
    cy.get('#cartur').click();
    cy.wait(500);
    cy.url().should('equal', 'https://www.demoblaze.com/cart.html');
    cy.get('#tbodyid').should('contain.text', 'Samsung galaxy s6');
  
  });
});
