/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('should allow to register a new student', () => {
    cy.viewport(550, 750);

    cy.findByPlaceholder('First Name').type(user.firstName).should('have.value', user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName).should('have.value', user.lastName);
    cy.get('#userEmail').type(user.email).should('have.value', user.email);
    cy.findByType('radio').check(user.gender, { force: true }).should('be.checked');
    cy.findByPlaceholder('Mobile Number').type(user.mobileNumber).should('have.value', user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}' + user.birthDate + '{enter}').should('be.visible');
    cy.get('.subjects-auto-complete__value-container').type('Com{enter} ph{enter}').should('be.visible');
    cy.contains('.custom-control-label', user.hobby).click().should('exist');
    cy.findByPlaceholder('Current Address').type(user.address).should('exist');
    cy.get('#state').click().type('Ha{enter}').should('exist');
    cy.get('#city').click().type('Ka').should('exist');
    cy.focused().type('{enter}').should('exist');
    cy.get('#submit').click({ force: true }).should('exist');
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');

  });
});
