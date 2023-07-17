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
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain.text', user.firstName)
      .and('contain.text', user.lastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain.text', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain.text', user.gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain.text', user.mobileNumber);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain.text', '11 January,2000');
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain.text', 'English, Chemistry, Biology');
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain.text', user.hobby);
    cy.get('tbody > :nth-child(8) > :nth-child(2)')
      .should('contain.text', '');
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain.text', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain.text', 'Uttar Pradesh Lucknow');
  });
});
