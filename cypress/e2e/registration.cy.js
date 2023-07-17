/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.url().should('include', 'automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    })
  });

  it('should successfully register user', () => {
    cy.get('[placeholder="First Name"]').
      click();
    cy.get('[placeholder="First Name"]').
      type(user.firstName);

    cy.get('[placeholder="Last Name"]').
      click();
    cy.get('[placeholder="Last Name"]').
      type(user.lastName);

    cy.get('[placeholder="name@example.com"]').
      click();
    cy.get('[placeholder="name@example.com"]').
      type(user.email);

    cy.contains('.custom-radio', user.gender).
      click();

    cy.get('[placeholder="Mobile Number"]').
      type(user.mobileNumber);

    cy.get('#dateOfBirthInput').
      type('{selectall}23 Feb 2003{enter}');

    cy.get('.subjects-auto-complete__value-container').
      type("en{enter}co{enter}");

    cy.contains('.custom-checkbox', user.hobby).
      click();

    cy.get('[placeholder="Current Address"]').
      type(user.address);

    cy.get('#state').
      type('{downArrow}{downArrow}{enter}');

    cy.get('#city').
      type('{downArrow}{enter}');

    cy.get('#submit').
      click();

    cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form');

    cy.contains('tr', user.firstName).should('be.visible');
    cy.contains('tr', user.lastName).should('be.visible');
    cy.contains('tr', user.email).should('be.visible');
    cy.contains('tr', user.gender).should('be.visible');
    cy.contains('tr', user.mobileNumber).should('be.visible');
    cy.contains('tr', '23 February,2003').should('be.visible');
    cy.contains('tr', 'English, Computer Science').should('be.visible');
    cy.contains('tr', user.hobby).should('be.visible');
    cy.contains('tr', user.address).should('be.visible');
    cy.contains('tr', 'Haryana Panipat').should('be.visible');
  });
});
