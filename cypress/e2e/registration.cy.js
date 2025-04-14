/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/register?_k=0id1ly');
  });

  it('should register user', () => {
    const randomNumber = Math.random().toString().slice(2, 6);
    const userName = `test_users_${randomNumber}`;
    const email = `test_${randomNumber}@example.com`;
    const password = 'password1234';

    cy.get('h1').should('contain.text', 'Sign Up');
    cy.findByPlaceholder('Username').type(userName);
    cy.findByPlaceholder('Email').type(email);
    cy.findByPlaceholder('Password').type(password);
    cy.get('.btn').click();
  });
});
