/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generatedUser => {
      user = generatedUser;
    });
  });

  it('should allow to register a new student',() => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.findByPlaceholder('name@example.com')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll}27 Mar 1996{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('Comp{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.findByPlaceholder('Current Address')
      .type(user.address);
    cy.get('#state')
      .type('{downArrow}{enter}');
    cy.get('#city')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('.modal-body')
      .should('contain', user.firstName)
      .should('contain', user.lastName)
      .should('contain', user.gender)
      .should('contain', user.phoneNumber)
      .should('contain', '27 March,1996')
      .should('contain', 'Computer Science')
      .should('contain', user.hobby)
      .should('contain', user.address)
      .should('contain', "Uttar Pradesh")
      .should('contain', "Lucknow");
      ;
  });
});

