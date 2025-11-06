/// <reference types='cypress' />

/* 1. Fill all fields in forms except "picture".
1. Click on [Submit] button.
1. Assert inputed data in modal window. */

describe('Student Registration page', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  const user = {
    firstName: 'Ivan',
    lastName: 'Franko',
    email: 'James.Jones@gmail.com',
    mobile: '1234567890',
    subjects: 'math'
  };

  it('default user flow should work correctly with proper input', () => {
    cy.get('h5')
      .should('contain', 'Student Registration Form');

    cy.get('input#firstName').should('be.visible').type(user.firstName);
    cy.get('input#lastName').should('be.visible').type(user.lastName);
    cy.get('input#userEmail').should('be.visible').type(user.email);
    cy.get('input#userNumber').should('be.visible').type(user.mobile);
    cy.get('input#subjectsInput').click();
    cy.get('input#subjectsInput').should('be.focused')
      .type(user.subjects);
    cy.contains('label', 'Male').click();
    cy.get('button#submit').click();

    cy.get('div#example-modal-sizes-title-lg').should('be.visible');

    cy.contains('td', 'Student Name').next('td').should('contain', `${user.firstName} ${user.lastName}`);
    cy.contains('td', 'Student Email').next('td').should('contain', `${user.email}`);
    cy.contains('td', 'Mobile').next('td').should('contain', `${user.mobile}`);
  });
});
