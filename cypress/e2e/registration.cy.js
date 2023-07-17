/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit("/")
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    })

  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName)
    cy.findByPlaceholder('Last Name')
      .type(user.lastName)
    cy.get('#userEmail')
      .type(user.email)

    cy.contains('.custom-control-label', user.gender)
    .click()
    cy.findByPlaceholder('Mobile Number')
    .type(user.mobileNumber)
    cy.get('#dateOfBirthInput')
    .type(`{selectall}15 Nov 1999{enter}`);
    cy.get('.subjects-auto-complete__value-container')
    .type('en{enter}' + 'ma{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby)
    .click();
    cy.findByPlaceholder('Current Address')
    .type(user.address);
    cy.get('#state')
    .type('{downarrow}{enter}');
    cy.get('#city')
    .type('{downarrow}{enter}');
    cy.get('#submit')
    .click();

    cy.get('.modal-content')
    .should('contain.text', 'Thanks for submitting the form');
    cy.contains('tr', 'Student Name')
    .should('contain', user.firstName)
    .and('contain', user.lastName);
    cy.contains('tr', 'Student Email')
    .should('contain', user.email);
    cy.contains('tr', 'Gender')
    .should('contain', user.gender);
    cy.contains('tr', 'Mobile')
    .should('contain', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
    .should('contain', '15 November,1999');
    cy.contains('tr', 'Subjects')
    .should('contain', 'English, Maths, Physics');
    cy.contains('tr', 'Hobbies')
    .should('contain', user.hobby);
    cy.contains('tr', 'Picture')
    .should('contain.text', '');
    cy.contains('tr', 'Address')
    .should('contain', user.address);
    cy.contains('tr', 'State and City')
    .should('contain', 'Uttar Pradesh Lucknow');
  });
});
