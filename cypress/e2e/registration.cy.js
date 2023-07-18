/// <reference types='cypress' />
let user;

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/automation-practice-form');
    cy.task('generateUser').then((u) => { user = u; });
  });

  it('', () => {
    cy.get('#firstName')
      .type(user.firstName);

    cy.get('#lastName')
      .type(user.lastName);

    cy.get('#userEmail')
      .type(user.email);

    cy.contains('.custom-control', user.gender)
      .click();

    cy.get('#userNumber')
      .type(user.mobileNumber);

    cy.get('#dateOfBirthInput')
      .click();

    cy.pickDate('month-select')
      .select(user.birth.month);

    cy.pickDate('year-select')
      .select(`${user.birth.year}`);

    cy.pickDate('day')
      .contains(user.birth.day).click();

    cy.get('.subjects-auto-complete__value-container')
      .type('art{enter}' + 'his{enter}');

    cy.contains('.custom-control-label', user.hobbies)
      .click();

    cy.get('#currentAddress')
      .type(user.address);

    cy.get('#state')
      .type('{downarrow}{enter}');

    cy.get('#city')
      .type('{downarrow}{enter}');

    cy.get('#submit')
      .click();

    cy.contains('tr td', 'Student Name')
      .first()
      .should('have.text', 'Student Name')
      .next()
      .should('contain', user.firstName, user.lastName);

    cy.contains('tr td', 'Student Email')
      .first()
      .should('have.text', 'Student Email')
      .next()
      .should('contain', user.email);

    cy.contains('tr td', 'Gender')
      .first()
      .should('have.text', 'Gender')
      .next()
      .should('contain', user.gender);

    cy.contains('tr td', 'Mobile')
      .first()
      .should('have.text', 'Mobile')
      .next()
      .should('contain', user.mobileNumber);

    cy.contains('tr td', 'Date of Birth')
      .first()
      .should('have.text', 'Date of Birth')
      .next()
      .should('contain', user.birth.day, user.birth.year);

    cy.contains('tr td', 'Subjects')
      .should('have.text', 'Subjects');

    cy.contains('tr td', 'Hobbies')
      .first()
      .should('have.text', 'Hobbies')
      .next()
      .should('contain', user.hobbies);

    cy.contains('tr td', 'Address')
      .first()
      .should('have.text', 'Address')
      .next()
      .should('contain', user.address);

    cy.contains('tr td', 'State and City')
      .should('have.text', 'State and City');
  });
});
