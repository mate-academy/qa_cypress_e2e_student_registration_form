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

    cy.contains('tr', user.firstName)
      .should('exist');

    cy.get('table tbody tr')
      .should('contain', 'Student Name')
      .and('contain', user.firstName)
      .and('contain', user.lastName);

    cy.get('table tbody tr')
      .should('contain', 'Student Email')
      .and('contain', user.email);

    cy.get('table tbody tr')
      .should('contain', 'Gender')
      .and('contain', user.gender);

    cy.get('table tbody tr')
      .should('contain', 'Mobile')
      .and('contain', user.mobileNumber);

    cy.get('table tbody tr')
      .should('contain', 'Date of Birth')
      .and('contain', user.birth.day)
      .and('contain', user.birth.year);

    cy.get('table tbody tr')
      .should('be.visible', 'Subjects');

    cy.get('table tbody tr')
      .should('contain', 'Hobbies')
      .and('contain', user.hobbies);

    cy.get('table tbody tr')
      .should('contain', 'Address')
      .and('contain', user.address);

    cy.get('table tbody tr')
      .should('be.visible', 'State and City');
  });
});
