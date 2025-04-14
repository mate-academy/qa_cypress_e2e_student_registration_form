/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  beforeEach(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
    
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
      .type(user.phoneNumber);
      
    cy.get('#dateOfBirthInput')
      .click();
    cy.pickDate('month-select')
      .select(user.birth.month);
    cy.pickDate('year-select')
      .select(`${user.birth.year}`);
    cy.pickDate('day')
      .contains(`${user.birth.day}`)
      .click();

    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'in{enter}')
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
    cy.contains('tr', 'Student Name')
      .should('contain', user.firstName)
      .should('contain', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain', user.email)
    cy.contains('tr', 'Gender')
      .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain', user.phoneNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain', user.birth.day)
      .should('contain', user.birth.month)
      .should('contain', user.birth.year);
    cy.contains('tr', 'Subject')
      .should('contain', 'English, Hindi');
    cy.contains('tr', 'Hobbies')
      .should('contain', user.hobby);
    cy.contains('tr', 'Address')
      .should('contain', user.address);
    cy.contains('tr', 'State and City')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
