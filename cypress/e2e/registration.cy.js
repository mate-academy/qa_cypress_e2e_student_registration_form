/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should provide an ability to register', () => {
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.mobileNumber);
    cy.get('#dateOfBirthInput').type('{selectAll}24 Sep 1983{enter}');
    cy.get('#subjectsContainer').type(`C{enter}`);
    cy.contains('.custom-control-label', user.hobby).click();
    cy.get('#currentAddress').type(user.address);
    cy.get('#state').type(`N {enter}`);
    cy.get('#city').type(`D {enter}`);
    cy.get('#submit').click();

    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name').should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth').should('contain', '24 September,1983');
    cy.contains('tr', 'Subjects').should('contain', 'Physics');
    cy.contains('tr', 'Address').should('contain', user.address);
    cy.contains('tr', 'State and City').should('contain', 'NCR Delhi');
  });
});
