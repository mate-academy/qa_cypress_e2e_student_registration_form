/// <reference types="cypress" />


describe('Flash message of loging out', () => {

  it('Loging out should provide an flash message', () => {
    cy.visit('/login');

    cy.loginUser(user.username, user.password);

    cy.get('[href="/logout"]').
      click();
    
    cy.get('#flash').
      should('contain.text', 'You logged out of the secure area!');
  });
});

// cy.get('el', { timeout:4000 }).type('anything', { delay: 2000 })
// cy.wait(5000);