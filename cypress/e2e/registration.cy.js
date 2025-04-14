/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('/');
  });

  it('should allow to submit the form', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type(`{selectAll}20 Sep 2012{enter}`);
    cy.get('#subjectsContainer').type('E{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type('N{enter}');
    cy.get('#city').type('N{enter}');
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);

    cy.contains('tr', 'Student Email')
      .should('contain', user.email);

    cy.contains('tr', 'Gender')
      .should('contain', user.gender);

    cy.contains('tr', 'Mobile')
      .should('contain', user.phone);

    cy.contains('tr', 'Date of Birth')
      .should('contain.text', '20 September,2012');

    cy.contains('tr', 'Subjects')
      .should('contain', 'Chemistry');

    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbie);

    cy.contains('tr', 'Address')
      .should('contain', user.address);

    cy.contains('tr', 'State and City')
      .should('contain', 'NCR ')
      .and('contain', 'Gurgaon');
  });
});
