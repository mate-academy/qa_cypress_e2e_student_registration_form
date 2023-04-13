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
    cy.viewport(1980, 1020)
    cy.findByPlaceholder('First Name').type(user.firstName);

    cy.findByPlaceholder('Last Name').type(user.lastName);

    cy.get('#userEmail').type(user.email);

    cy.findByRadio('radio').check(user.gender, { force: true});

    cy.findByPlaceholder('Mobile Number').type(user.phoneNumber);

    cy.get('#dateOfBirthInput').type('{selectAll}13 Jun 2001{enter}');

    cy.get('.subjects-auto-complete__value-container').type('En{enter}');

    cy.contains('.custom-control-label', user.hobby).click();

    cy.findByPlaceholder('Current Address').type(user.address);

    cy.get('#state').type('{downArrow}{enter}');

    cy.get('#city').type('{downArrow}{enter}');

    cy.get('.btn.btn-primary').click();

    cy.get('#example-modal-sizes-title-lg').should('contain.text', 'Thanks for submitting the form');
    cy.get('.modal-content')
      .should('contain', user.firstName)
      .should('contain', user.lastName)
      .should('contain', user.email)
      .should('contain', user.gender)
      .should('contain', user.phoneNumber)
      .should('contain.text', '13 June,2001')
      .should('contain.text', 'Subjects')
      .should('contain', user.hobby)
      .should('contain', user.address)
      .should('contain.text', 'State and City')
  });
});
