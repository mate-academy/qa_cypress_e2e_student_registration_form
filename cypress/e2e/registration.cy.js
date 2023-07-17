/// <reference types='cypress' />

describe('Student Registration page', () => {
  let user;
  before(() => {
    cy.visit('');
    cy.task('generateUser').then((generateUser) => { user = generateUser; });
  });
  it('Registration with all fields except adding picture', () => {
    cy.get('[placeholder="First Name"]')
      .type(user.firstName);
    cy.get('[placeholder="Last Name"]')
      .type(user.lastName);
    cy.get('#userEmail')
      .type(user.email);
    cy.contains('.custom-control-label', user.gender)
      .click();
    cy.get('[placeholder="Mobile Number"]')
      .type(user.mobile);
    cy.get('#dateOfBirthInput')
      .type('{selectall}23 October{enter}');
    cy.get('.subjects-auto-complete__value-container')
      .type('en{enter}' + 'phy{enter}');
    cy.contains('.custom-control-label', user.hobby)
      .click();
    cy.get('[placeholder="Current Address"]')
      .type(user.address);
    cy.get('#state')
      .type('{downarrow}{enter}');
    cy.get('#city')
      .type('{downarrow}{enter}');
    cy.get('#submit')
      .click();
    cy.get('#example-modal-sizes-title-lg')
      .should('contain.text', 'Thanks for submitting the form');
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', user.firstName);
    cy.get('tbody > :nth-child(1) > :nth-child(2)')
      .should('contain', user.lastName);
    cy.get('tbody > :nth-child(2) > :nth-child(2)')
      .should('contain', user.email);
    cy.get('tbody > :nth-child(3) > :nth-child(2)')
      .should('contain', user.gender);
    cy.get('tbody > :nth-child(4) > :nth-child(2)')
      .should('contain', user.mobile);
    cy.get('tbody > :nth-child(5) > :nth-child(2)')
      .should('contain', '23 October,2001');
    cy.get('tbody > :nth-child(6) > :nth-child(2)')
      .should('contain', 'English, Physics');
    cy.get('tbody > :nth-child(7) > :nth-child(2)')
      .should('contain', user.hobby);
    cy.get('tbody > :nth-child(9) > :nth-child(2)')
      .should('contain', user.address);
    cy.get('tbody > :nth-child(10) > :nth-child(2)')
      .should('contain', 'Uttar Pradesh Lucknow');
  });
});
