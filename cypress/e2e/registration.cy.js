/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to log up with valid data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.get('#firstName').type(user.firstName);
    cy.get('#lastName').type(user.lastName);
    cy.get('#userEmail').type(user.email);
    cy.contains('.custom-control-label', user.gender).click();
    cy.get('#userNumber').type(user.phone);
    cy.get('#dateOfBirthInput').type(`{selectAll} ${user.date} {enter}`);
    cy.get('#subjectsContainer').type(`C{enter}`);
    cy.contains('.custom-control-label', user.hobbie).click();
    cy.get('#currentAddress').type(user.text);
    cy.get('#state').type(`${user.state} {enter}`);
    cy.get('#city').type(`A {enter}`);
    cy.get('#submit').click();

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email').should('contain', user.email);
    cy.contains('tr', 'Gender').should('contain', user.gender);
    cy.contains('tr', 'Mobile').should('contain', user.phone);
    cy.contains('tr', 'Date of Birth').should('contain', '10 September,2000');
    cy.contains('tr', 'Subjects').should('contain', 'Physics');
    cy.contains('tr', 'Hobbies').should('contain', user.hobbie);
    cy.contains('tr', 'Address').should('contain', user.text);
    cy.contains('tr', 'State and City').should('contain', user.state);
  });
});
