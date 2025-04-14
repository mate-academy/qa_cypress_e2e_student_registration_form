/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should allow the registration of new student', () => {
    cy.get('#firstName')
      .type(user.firstName);
    cy.get('#lastName')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.get('#userNumber')
      .type(user.phoneNumber);
    cy.get('#dateOfBirthInput')
      .type(`{selectAll}${user.birthDate}{enter}`);
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'ci{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.get('#currentAddress')
      .type(user.address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain', 'Thanks for submitting the form');
    cy.contains('tr', 'Label')
      .should('contain', 'Values');
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .should('contain', user.lastName);
    cy.contains('tr', 'Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);
    cy.contains('tr', 'Subjects')
      .should('contain', 'English, Computer Science');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
  });
});
