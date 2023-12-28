/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow to register a new student', () => {
    cy.visit('automation-practice-form');
    cy.get('h5')
      .should('contain.text', 'Student Registration Form');
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail-wrapper')
      .type(user.email);
    cy.contains('.custom-control-label', user.genders)
      .click();
    cy.get('#userNumber')
      .type(user.randomNumber);
    cy.get('#dateOfBirthInput')
      .type('{selectAll} 20 Dec 2000 {Enter}');
    cy.get('.subjects-auto-complete__input')
      .type('A{downArrow}{enter}');
    cy.contains('.custom-control-label', user.hobbie)
      .click();
    cy.get('#currentAddress')
      .type(user.randomAdress);
    cy.get('#state')
      .type('{downArrow}{enter}');
    cy.get('#city')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click();
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.genders);
    cy.contains('tr', 'Mobile')
      .should('contain', user.randomNumber);
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobbie);
    cy.contains('tr', 'Address')
      .should('contain', user.randomAdress);
  });
});
