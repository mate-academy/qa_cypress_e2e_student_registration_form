/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;

  before(() => {
    cy.visit('/');
    cy.task('generateUser').then((generateUser) => {
      user = generateUser;
    });
  });

  it('should register a new student', () => {
    cy.findByPlaceholder('First Name')
      .type(user.firstName);
    cy.findByPlaceholder('Last Name')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.findByPlaceholder('Mobile Number')
      .type(user.mobileNumber);
    cy.get('#dateOfBirthInput')
      .type(`{selectall}11 Jan 2000{enter}`);
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'che{enter}' + 'bio{enter}');
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
    cy.contains('tr', 'Student Name')
      .should('contain.text', user.firstName)
      .and('contain.text', user.lastName);
    cy.contains('tr', 'Student Email')
      .should('contain.text', user.email);
    cy.contains('tr', 'Gender')
      .should('contain.text', user.gender);
    cy.contains('tr', 'Mobile')
      .should('contain.text', user.mobileNumber);
    cy.contains('tr', 'Date of Birth')
      .should('contain.text', '11 January,2000');
    cy.contains('tr', 'Subject')
      .should('contain.text', 'English, Chemistry, Biology');
    cy.contains('tr', 'Hobbies')
      .should('contain.text', user.hobby);
    cy.contains('tr', 'Picture')
      .should('contain.text', '');
    cy.contains('tr', 'Address')
      .should('contain.text', user.address);
    cy.contains('tr', 'State and City')
      .should('contain.text', 'Uttar Pradesh Lucknow');
  });
});
