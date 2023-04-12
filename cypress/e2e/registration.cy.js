/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('should fill all fields',() => {
    cy.findByPlaceholder('First Name').type(user.firstName);
    cy.findByPlaceholder('Last Name').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.findByRadio('radio').check(user.gender, { force: true});
    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}01 Dec 1990{enter}');
    cy.get('.subjects-auto-complete__value-container').type('ma{enter}');
    cy.contains('.custom-control-label', user.hobby).click();
    cy.findByPlaceholder('Current Address').type(user.address);
    cy.get('#state').type('{downArrow}{enter}');
    cy.get('#city').type('{downArrow}{enter}');
    cy.get('.btn.btn-primary').click();
    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-content').should('contain', user.firstName);
    cy.get('.modal-content').should('contain', user.lastName);
    cy.get('.modal-content').should('contain', user.email);
    cy.get('.modal-content').should('contain', user.gender);
    cy.get('.modal-content').should('contain', user.phoneNumber);
    cy.get('.modal-content').should('contain.text', '01 December,1990');
    cy.get('.modal-content').should('contain.text', 'Subjects');
    cy.get('.modal-content').should('contain', user.hobby);
    cy.get('.modal-content').should('contain', user.address);
    cy.get('.modal-content').should('contain.text', 'State and City');

  });
});

