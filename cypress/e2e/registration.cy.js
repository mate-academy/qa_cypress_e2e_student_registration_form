/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser')
      .then(generateUser => {
        user = generateUser;
      });
  });

  it('Fills all fields in the form and submits', () => {

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
      .click();
    cy.pickDate('year-select')
      .select(`${user.dateOfBirth.year}`);
    cy.pickDate('month-select')
      .select(user.dateOfBirth.month);
    cy.pickDate('day')
      .contains(user.dateOfBirth.day)
      .click();
    cy.get('.subjects-auto-complete__control')
      .type(user.subject +'{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.get('#currentAddress')
      .type(user.currentAdress);
    cy.get('#state')
      .type('{downArrow}{enter}');
    cy.get('#city')
      .type('{downArrow}{enter}');
    cy.get('#submit')
      .click({force: true});

    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email);
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.dateOfBirth.day)
      .and('contain', user.dateOfBirth.month)
      .and('contain', user.dateOfBirth.year);
    cy.contains('tr', 'Subjects')
      .should('contain', user.subject);
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.currentAdress);
    cy.contains('tr', 'State and City')
      .should('not.be.empty');
  });
});
