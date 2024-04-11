/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('Should provide an ability to register a new user', () => {
    const subject = 'Biology';

    cy.get('#firstName').type(user.firstName);

    cy.get('#lastName').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.get('.custom-control-label').contains(user.gender).click();

    cy.get('#userNumber').type(user.mobileNumber);

    cy.get('#dateOfBirthInput').type(`{selectAll}${user.birthday}{enter}`);

    cy.get('.subjects-auto-complete__value-container')
      .type(`${subject}{enter}`);

    cy.contains('.custom-control-label', user.hobby).click();

    cy.get('#currentAddress').type(user.address);

    cy.get('.css-1wa3eu0-placeholder').contains('Select State')
      .type('{enter}');

    cy.get('#city').type('{enter}');

    cy.get('#submit').click();

    // checks for matching values in the table
    cy.get('tbody').should('contain.text', `${user.firstName} ${user.lastName}`);
    cy.get('tbody').should('contain.text', user.email);
    cy.get('tbody').should('contain.text', user.gender);
    cy.get('tbody').should('contain.text', user.mobileNumber);
    cy.get('tbody').should('contain.text', user.birthday);
    cy.get('tbody').should('contain.text', subject);
    cy.get('tbody').should('contain.text', user.hobby);
    cy.get('tbody').should('contain.text', user.address);
    cy.get('tbody').should('contain.text', 'NCR Delhi');
  });
});
